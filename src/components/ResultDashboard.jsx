import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { calculateScores, getRecommendations, getNarrative } from '../utils/recommendationEngine';
import { Trophy, Star, BookOpen, GraduationCap, Briefcase, RefreshCw, Printer, UserCircle2, BrainCircuit } from 'lucide-react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip as RechartsTooltip } from 'recharts';
import html2pdf from 'html2pdf.js';

export default function ResultDashboard({ userData, testResults, selectedMode, onClose, autoDownload, initialAnalysis }) {
  const navigate = useNavigate();
  const [analysis, setAnalysis] = useState(initialAnalysis || null);
  const [isExporting, setIsExporting] = useState(false);

  useEffect(() => {
    if (initialAnalysis) {
      setAnalysis(initialAnalysis);
      return;
    }

    if (!userData || !testResults) {
      if (onClose) onClose();
      else navigate('/');
      return;
    }
    
    try {
      // Process the raw answers
      const scores = calculateScores(testResults);
      const recs = getRecommendations(scores, userData, selectedMode);
      setAnalysis({ scores, recs });
    } catch (error) {
      console.error("Error calculating scores:", error);
      if (onClose) onClose();
      else navigate('/');
    }
  }, [userData, testResults, navigate, selectedMode, onClose, initialAnalysis]);

  const handleDownloadPDF = async () => {
    setIsExporting(true);
    
    // Ambil elemen root
    const element = document.getElementById('pdf-content');
    if (!element) {
      setIsExporting(false);
      return;
    }

    // Tambahkan class khusus export
    element.classList.add('pdf-export-mode');

    // Tunggu komponen mekar sempurna (ukuran SVG absolut, dll)
    await new Promise(resolve => setTimeout(resolve, 500));

    // Buka dialog print bawaan browser (Save as PDF)
    // Mesin native browser 100% sempurna membaca page-break-inside: avoid
    window.print();

    // Restore state
    element.classList.remove('pdf-export-mode');
    setIsExporting(false);
  };

  useEffect(() => {
    if (autoDownload && analysis) {
      const timer = setTimeout(() => {
        handleDownloadPDF();
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [autoDownload, analysis]);

  if (!analysis) return null;

  const { recs } = analysis;

  // Expert Radar Chart Component
  const renderRadarChart = (data, title, icon, color, expertName, expertRole, isFirst = false) => {
    if (!data || data.length === 0) return null;
    
    // Cari nilai maksimum untuk skala dinamis (minimal 10)
    const maxVal = Math.max(...data.map(d => d[1]), 10);
    
    // Format data for Recharts Radar (Combine subject and score for axis labels)
    const chartData = data.map(([label, score]) => ({
      subject: `${label} (${score})`,
      score: score,
      fullMark: maxVal
    }));
    
    // Ambil hasil teratas (index 0) untuk narasi
    const topCategory = data[0][0];
    const narrativeText = getNarrative(title, topCategory);
    // Cek apakah siswa SMP
    const isSMP = userData?.level === 'smp';
    
    return (
      <React.Fragment>
        <div className="glass-card" style={{ padding: '2rem', display: 'block', marginBottom: '2rem' }}>
          <div style={{ display: 'block', width: '100%' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
              {icon} {title}
            </h3>
          
          {/* Radar Chart Section */}
          <div className="radar-chart-container" style={{ width: '100%', height: '525px', marginBottom: '2rem' }}>
            {isExporting ? (
              <RadarChart width={736} height={525} cx="50%" cy="50%" outerRadius="80%" data={chartData}>
                <PolarGrid stroke="rgba(0,0,0,0.1)" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#000000', fontSize: 13, fontWeight: 'bold' }} />
                <PolarRadiusAxis angle={30} domain={[0, maxVal]} tick={false} axisLine={false} />
                <Radar name="Skor" dataKey="score" stroke={color} strokeWidth={2} fill={color} fillOpacity={0.4} />
              </RadarChart>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
                  <PolarGrid stroke="var(--grid-line-color)" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: 'var(--text-primary)', fontSize: 13, fontWeight: 'bold' }} />
                  <PolarRadiusAxis angle={30} domain={[0, maxVal]} tick={false} axisLine={false} />
                  <RechartsTooltip 
                    contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', border: `1px solid ${color}`, borderRadius: '8px', color: 'white' }}
                    itemStyle={{ color: color, fontWeight: 'bold' }}
                  />
                  <Radar name="Skor" dataKey="score" stroke={color} strokeWidth={2} fill={color} fillOpacity={0.4} />
                </RadarChart>
              </ResponsiveContainer>
            )}
        </div>
        </div>

        {/* Rincian Analisis Per Indikator */}
        <div style={{ marginTop: '2rem' }}>
          <h4 style={{ color: 'var(--text-primary)', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', pageBreakAfter: 'avoid', breakAfter: 'avoid' }}>
            Rincian Analisis per Indikator
          </h4>
          
          {data.map(([category, score], index) => {
            const catNarrative = getNarrative(title, category);
            if (!catNarrative) return null;
            
            const isTop = index === 0;
            return (
              <div key={category} className={isTop ? "indicator-card-top" : "indicator-card-sub"} style={{ display: 'block', width: '100%', marginBottom: '2rem', padding: '1.5rem', background: isExporting ? 'transparent' : (isTop ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.15)'), borderLeft: `4px solid ${isTop ? color : 'var(--border-light)'}`, borderRadius: '0 8px 8px 0', pageBreakInside: isTop ? 'auto' : 'avoid', breakInside: isTop ? 'auto' : 'avoid' }}>
                
                <div style={{ display: 'block', width: '100%', pageBreakInside: 'avoid', breakInside: 'avoid' }}>
                {/* Expert Profile Header (Hanya untuk Peringkat 1) */}
                {isTop && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px dashed rgba(255,255,255,0.1)' }}>
                    <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: `2px solid ${color}` }}>
                      <UserCircle2 size={30} color={color} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Berdasarkan Konsep/Teori</div>
                      <div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>Prof. {expertName}</div>
                      <div style={{ fontSize: '0.85rem', color: color }}>{expertRole}</div>
                    </div>
                  </div>
                )}

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <h4 style={{ margin: 0, fontSize: '1.2rem', color: isTop ? color : 'var(--text-primary)' }}>
                    {index + 1}. {category}
                  </h4>
                  <span style={{ background: isTop ? color : 'var(--border-light)', color: isTop ? 'white' : 'var(--text-primary)', padding: '4px 12px', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 'bold' }}>
                    Skor: {score}
                  </span>
                </div>
                </div>

                <div style={{ fontStyle: 'italic', marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
                  {isTop 
                    ? `Berdasarkan konsep teori ${expertName}, potensi Anda yang paling mendominasi saat ini adalah ${category}.`
                    : `Analisis untuk aspek ${category} Anda:`
                  }
                </div>
                
                <div style={{ display: 'block', width: '100%', marginBottom: '1.5rem' }}>
                  <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '8px' }}>Karakteristik:</strong>
                  <ul style={{ paddingLeft: '1.2rem', margin: 0, lineHeight: '1.6', fontSize: '0.95rem' }}>
                    {catNarrative.karakteristik.map((item, i) => (
                      <li key={i} style={{ marginBottom: '4px', color: 'var(--text-secondary)' }}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div style={{ display: 'block', width: '100%', marginBottom: isTop && (catNarrative.rekomendasiJurusan || catNarrative.rekomendasiJurusanSMK) ? '1.5rem' : '0' }}>
                  <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '8px' }}>Saran Pengembangan Diri:</strong>
                  <ul style={{ paddingLeft: '1.2rem', margin: 0, lineHeight: '1.6', fontSize: '0.95rem' }}>
                    {catNarrative.saranPengembangan.map((item, i) => (
                      <li key={i} style={{ marginBottom: '4px', color: 'var(--text-secondary)' }}>{item}</li>
                    ))}
                  </ul>
                </div>

                {isTop && (catNarrative.rekomendasiJurusan || catNarrative.rekomendasiJurusanSMK) && (
                  <div style={{ display: 'block', width: '100%' }}>
                  <div className="grid-responsive-2" style={{ marginTop: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '1rem', borderTop: '1px dashed rgba(255,255,255,0.1)', paddingTop: '1.5rem' }}>
                    <div style={{ flex: '1 1 45%' }}>
                      {isSMP && catNarrative.rekomendasiJurusanSMK && (
                        <div style={{ marginBottom: '1.5rem' }}>
                          <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '12px' }}>Rekomendasi SMA / SMK:</strong>
                          <ul style={{ paddingLeft: '1.2rem', margin: 0, lineHeight: '1.6', fontSize: '0.85rem' }}>
                            {catNarrative.rekomendasiJurusanSMK.map((jurusan, i) => (
                              <li key={i} style={{ marginBottom: '6px', color: 'var(--text-secondary)' }}>{jurusan}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {catNarrative.rekomendasiJurusan && (
                        <div>
                          <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '12px' }}>Proyeksi Jurusan Kuliah:</strong>
                          <ul style={{ paddingLeft: '1.2rem', margin: 0, lineHeight: '1.6', fontSize: '0.85rem' }}>
                            {catNarrative.rekomendasiJurusan.map((jurusan, i) => (
                              <li key={i} style={{ marginBottom: '6px', color: 'var(--text-secondary)' }}>{jurusan}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                    <div style={{ flex: '1 1 45%' }}>
                      {isSMP && catNarrative.rekomendasiProfesiSMK && (
                        <div style={{ marginBottom: '1.5rem' }}>
                          <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '12px' }}>Prospek Karir Lulusan SMK:</strong>
                          <ul style={{ paddingLeft: '1.2rem', margin: 0, lineHeight: '1.6', fontSize: '0.85rem' }}>
                            {catNarrative.rekomendasiProfesiSMK.map((profesi, i) => (
                              <li key={i} style={{ marginBottom: '6px', color: 'var(--text-secondary)' }}>{profesi}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {catNarrative.rekomendasiProfesi && (
                        <div>
                          <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '12px' }}>Prospek Karir Tingkat Lanjut:</strong>
                          <ul style={{ paddingLeft: '1.2rem', margin: 0, lineHeight: '1.6', fontSize: '0.85rem' }}>
                            {catNarrative.rekomendasiProfesi.map((profesi, i) => (
                              <li key={i} style={{ marginBottom: '6px', color: 'var(--text-secondary)' }}>{profesi}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                  </div>
                )}

                {isTop && catNarrative.trenPekerjaan && (
                  <div style={{ display: 'inline-block', width: '100%', marginTop: '1.5rem', padding: '1rem', background: isExporting ? 'transparent' : 'rgba(245, 158, 11, 0.1)', border: '1px solid var(--accent)', borderRadius: '8px' }}>
                    <strong style={{ color: 'var(--accent)', display: 'block', marginBottom: '8px' }}>Insight Dunia Kerja Saat Ini:</strong>
                    <p style={{ margin: 0, lineHeight: '1.6', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      {catNarrative.trenPekerjaan}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      </React.Fragment>
    );
  };

  return (
    <div className="container" style={{ padding: '3rem 1.5rem', position: 'relative' }}>
      
      {/* Top Action Buttons (Hidden when printing) */}
      <div className="no-print flex-responsive" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', gap: '1rem' }}>
        <button className="btn btn-secondary btn-responsive-full" onClick={() => navigate('/')} style={{ padding: '0.6rem 1rem', fontSize: '0.9rem' }}>
          <RefreshCw size={16} /> Kembali ke Beranda
        </button>
        <button className="btn btn-primary btn-responsive-full" onClick={handleDownloadPDF} style={{ padding: '0.6rem 1rem', fontSize: '0.9rem' }}>
          <Printer size={16} /> Unduh PDF
        </button>
      </div>

      <div id="pdf-content" style={{ padding: '20px', background: isExporting ? '#ffffff' : 'var(--bg-color)' }}>
      {/* Kop Surat / Letterhead (Visible on screen and print) */}
      <div className="flex-responsive" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '4px double var(--border-light)', paddingBottom: '1.5rem', marginBottom: '3rem', gap: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }}>
            <img src="/logo.jpg" alt="EduTalent Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <h2 style={{ margin: 0, fontSize: '1.8rem', color: 'var(--text-primary)', fontWeight: 'bold' }}>EduTalent Assessment</h2>
            <p style={{ margin: '5px 0 0 0', color: 'var(--secondary)', fontSize: '0.9rem', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase' }}>Navigasi Potensi & Karir Masa Depan</p>
          </div>
        </div>
        
        {/* Placeholder Logo Sekolah */}
        <div style={{ textAlign: 'right', display: 'flex', alignItems: 'center', gap: '20px', justifyContent: 'center' }}>
          <div style={{ textAlign: 'right' }}>
            <h2 style={{ margin: 0, fontSize: '1.5rem', color: 'var(--text-primary)' }}>NAMA SEKOLAH ANDA</h2>
            <p style={{ margin: '5px 0 0 0', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Jl. Pendidikan No. 1, Kota Anda</p>
            <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Telp: (021) 1234567 | www.sekolahanda.sch.id</p>
          </div>
          <div style={{ width: '80px', height: '80px', borderRadius: '15px', border: '2px dashed var(--border-glass)', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.05)', color: 'var(--text-muted)', fontSize: '0.7rem', textAlign: 'center', padding: '5px' }}>
            (Logo<br/>Sekolah)
          </div>
        </div>
      </div>

      {/* Header Profile */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div className="pdf-clean-icon" style={{ display: 'inline-flex', padding: '1rem', background: isExporting ? 'transparent' : 'rgba(79, 70, 229, 0.1)', borderRadius: '50%', marginBottom: '1rem', border: '1px solid var(--primary)' }}>
          <Trophy size={48} color="var(--primary)" />
        </div>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
          Laporan Analisis <span className="gradient-text">{userData.name}</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
          Usia: {userData.age} Tahun | Jenjang: {userData.level.toUpperCase()}
        </p>
      </div>

      {/* Highlights */}
      <div className="highlights-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3rem' }}>
        {(selectedMode === 'comprehensive' || selectedMode === 'multiple_intelligence') && (
          <div style={{ display: 'inline-block', flex: '1 1 280px', pageBreakInside: 'avoid', breakInside: 'avoid' }}>
          <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center', borderTop: '4px solid var(--primary)' }}>
            <h4 style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Kecerdasan Dominan</h4>
            <h2 style={{ fontSize: '2rem', marginTop: '10px', color: 'var(--primary)' }}>{recs.topMI}</h2>
          </div>
          </div>
        )}
        
        {(selectedMode === 'comprehensive' || selectedMode === 'riasec') && (
          <div style={{ display: 'inline-block', flex: '1 1 280px', pageBreakInside: 'avoid', breakInside: 'avoid' }}>
          <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center', borderTop: '4px solid var(--secondary)' }}>
            <h4 style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Tipe Karir (Holland)</h4>
            <h2 style={{ fontSize: '2rem', marginTop: '10px', color: 'var(--secondary)' }}>{recs.topRiasec}</h2>
          </div>
          </div>
        )}

        {(selectedMode === 'comprehensive' || selectedMode === 'iq') && recs.fsiq && (
          <div style={{ display: 'inline-block', flex: '1 1 280px', pageBreakInside: 'avoid', breakInside: 'avoid' }}>
          <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center', borderTop: '4px solid #8b5cf6' }}>
            <h4 style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Total Skor IQ (FSIQ)</h4>
            <h2 style={{ fontSize: '2.5rem', margin: '10px 0', color: '#8b5cf6' }}>{recs.fsiq}</h2>
            <div style={{ background: 'rgba(139, 92, 246, 0.1)', color: '#8b5cf6', padding: '5px 15px', borderRadius: '20px', display: 'inline-block', fontSize: '0.9rem', fontWeight: 'bold' }}>
              {recs.fsiqCategory}
            </div>
          </div>
          </div>
        )}

        {(selectedMode === 'comprehensive' || selectedMode === 'iq') && (
          <div style={{ display: 'inline-block', flex: '1 1 280px', pageBreakInside: 'avoid', breakInside: 'avoid' }}>
          <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center', borderTop: '4px solid #8b5cf6' }}>
            <h4 style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Pilar Kognitif (IQ)</h4>
            <h2 style={{ fontSize: '2rem', marginTop: '10px', color: '#8b5cf6' }}>{recs.topIQ}</h2>
          </div>
          </div>
        )}

        {selectedMode === 'interest' && (
          <div style={{ display: 'inline-block', flex: '1 1 280px', pageBreakInside: 'avoid', breakInside: 'avoid' }}>
          <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center', borderTop: '4px solid var(--accent)' }}>
            <h4 style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Fokus Minat</h4>
            <h2 style={{ fontSize: '2rem', marginTop: '10px', color: 'var(--accent)' }}>Tes Minat Selesai</h2>
          </div>
          </div>
        )}
      </div>

      {/* Roadmap Rekomendasi */}
      <div className="glass-panel" style={{ padding: '2.5rem', marginBottom: '3rem' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '2rem', color: 'var(--text-primary)' }}>
          <GraduationCap color="var(--accent)" size={28} /> 
          Peta Jalan (Roadmap) Masa Depan Anda
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {recs.roadmap.map((step, idx) => (
            <div key={idx} className="pdf-avoid-break" style={{ pageBreakInside: 'avoid', breakInside: 'avoid' }}>
              <div style={{ display: 'flex', gap: '20px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: isExporting ? 'transparent' : 'rgba(245, 158, 11, 0.1)', border: '2px solid var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'var(--accent)' }}>
                    {idx + 1}
                  </div>
                  {idx !== recs.roadmap.length - 1 && (
                    <div style={{ width: '2px', flexGrow: 1, background: 'rgba(255,255,255,0.1)', margin: '10px 0' }} />
                  )}
                </div>
                <div className="indicator-card-sub" style={{ background: isExporting ? 'transparent' : 'rgba(0,0,0,0.2)', padding: '1.5rem', borderRadius: '12px', flexGrow: 1, border: '1px solid var(--border-glass)' }}>
                  <h4 style={{ color: 'var(--text-primary)', fontSize: '1.1rem', marginBottom: '8px' }}>{step.title}</h4>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Rincian Skor */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem', pageBreakAfter: 'avoid', breakAfter: 'avoid' }}>Analisis Pakar & Pemetaan</h2>
        <div className="radar-grid-container" style={{ display: 'block' }}>
          
          {(selectedMode === 'comprehensive' || selectedMode === 'multiple_intelligence') && 
            renderRadarChart(
              recs.sortedMI, 
              "Kecerdasan Majemuk", 
              <Star size={20} color="var(--primary)" />, 
              "var(--primary)",
              "Howard Gardner",
              "Pakar Psikologi Kognitif (Harvard University)",
              true // isFirst
            )
          }

          {(selectedMode === 'comprehensive' || selectedMode === 'riasec') && 
            renderRadarChart(
              recs.sortedRiasec, 
              "Potensi Karir (RIASEC)", 
              <Briefcase size={20} color="var(--accent)" />, 
              "var(--accent)",
              "John L. Holland",
              "Pakar Psikologi Karir & Vokasional"
            )
          }

          {(selectedMode === 'comprehensive' || selectedMode === 'interest') && 
            renderRadarChart(
              recs.sortedInterest, 
              "Minat & Bakat", 
              <BookOpen size={20} color="var(--secondary)" />, 
              "var(--secondary)",
              "E.K. Strong Jr.",
              "Perintis Tes Inventori Minat"
            )
          }

          {(selectedMode === 'comprehensive' || selectedMode === 'iq') && 
            renderRadarChart(
              recs.sortedIQ, 
              "IQ (Kognitif)", 
              <BrainCircuit size={20} color="#8b5cf6" />, 
              "#8b5cf6",
              "David Wechsler",
              "Pakar Psikologi Tes Kognitif & IQ"
            )
          }

        </div>
      </div>
      
      {/* Footer Dokumen Resmi */}
      {isExporting && (
        <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '2px dashed var(--border-light)', textAlign: 'center', color: 'var(--text-muted)' }}>
          <p style={{ margin: '0 0 5px 0', fontSize: '0.9rem', fontWeight: 'bold' }}>EduTalent Assessment System &copy; {new Date().getFullYear()}</p>
          <p style={{ margin: 0, fontSize: '0.8rem' }}>Dokumen ini dihasilkan secara otomatis oleh sistem dan sah sebagai referensi analisis potensi siswa.</p>
        </div>
      )}

      </div> {/* Penutup id="pdf-content" */}

      <div className="no-print" style={{ textAlign: 'center', display: 'flex', gap: '15px', justifyContent: 'center', marginTop: '2rem' }}>
        <button className="btn btn-secondary" onClick={() => onClose ? onClose() : navigate('/')}>
          <RefreshCw size={18} /> {onClose ? 'Tutup & Kembali' : 'Ulangi Tes'}
        </button>
        <button className="btn btn-primary" onClick={handleDownloadPDF}>
          <Printer size={18} /> Unduh PDF
        </button>
      </div>

    </div>
  );
}

