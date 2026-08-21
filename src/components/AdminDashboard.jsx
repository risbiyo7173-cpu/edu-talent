import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllResultsFromDB, clearAllDB, deleteResultById } from '../utils/db';
import { Users, Database, Trash2, ArrowLeft, Search, Download, FileText, Printer } from 'lucide-react';
import ResultDashboard from './ResultDashboard';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [results, setResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinInput, setPinInput] = useState('');
  const [viewingResult, setViewingResult] = useState(null);
  
  // Simple hardcoded PIN for frontend security
  const ADMIN_PIN = 'guru123';

  useEffect(() => {
    if (isAuthenticated) {
      loadData();
    }
  }, [isAuthenticated]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (pinInput === ADMIN_PIN) {
      setIsAuthenticated(true);
    } else {
      alert("PIN Salah! Akses ditolak.");
      setPinInput('');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="container" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="glass-panel animate-fade-in" style={{ padding: '2.5rem', width: '100%', maxWidth: '400px', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid var(--danger)', marginBottom: '1.5rem' }}>
            <Database size={30} color="var(--danger)" />
          </div>
          <h2 style={{ marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Akses Admin</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '0.9rem' }}>
            Area ini khusus untuk guru/admin. Silakan masukkan PIN Anda.
          </p>
          <form onSubmit={handleLogin}>
            <div className="input-group" style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
              <label className="input-label">PIN Keamanan</label>
              <input 
                type="password" 
                className="input-field" 
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value)}
                placeholder="***"
                autoFocus
              />
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button type="button" className="btn btn-secondary" onClick={() => navigate('/')} style={{ flex: 1 }}>
                Kembali
              </button>
              <button type="submit" className="btn btn-primary" style={{ flex: 1, background: 'var(--danger)' }}>
                Buka Data
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  const loadData = async () => {
    const data = await getAllResultsFromDB();
    // Sort by newest first
    data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    setResults(data);
  };

  const handleClear = async () => {
    if (window.confirm("Apakah Anda yakin ingin menghapus SEMUA data peserta? Tindakan ini tidak dapat dibatalkan.")) {
      await clearAllDB();
      await loadData();
    }
  };

  const handleDeleteRow = async (id, name) => {
    if (window.confirm(`Apakah Anda yakin ingin menghapus data peserta atas nama "${name}"?`)) {
      await deleteResultById(id);
      await loadData();
    }
  };

  const exportToCSV = () => {
    if (results.length === 0) {
      alert("Belum ada data untuk diekspor.");
      return;
    }

    // Tentukan header kolom
    const headers = ["Waktu", "Nama Lengkap", "Usia", "Jenjang", "Tipe Karir (RIASEC)", "Kecerdasan Dominan"];
    
    // Konversi baris data
    const csvRows = [];
    csvRows.push(headers.join(",")); // Tambahkan header sebagai baris pertama
    
    filteredResults.forEach(record => {
      // Format tanggal dan jam untuk Excel (tanpa koma agar CSV aman)
      const dateStr = formatDate(record.timestamp);
      
      // Sanitasi input agar CSV valid (bila ada koma dalam nama, diapit tanda kutip ganda)
      const name = `"${record.userData.name.replace(/"/g, '""')}"`;
      const age = record.userData.age;
      const level = record.userData.level.toUpperCase();
      const riasec = `"${record.analysis.topRiasec}"`;
      const mi = `"${record.analysis.topMI}"`;
      
      csvRows.push([dateStr, name, age, level, riasec, mi].join(","));
    });
    
    // Gabungkan dengan newline
    const csvString = csvRows.join("\n");
    
    // Buat Blob dan Link untuk mengunduh
    const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `Data_Peserta_EduCogni_${new Date().getTime()}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredResults = results.filter(r => 
    r.userData.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getModeFromAnalysis = (analysis) => {
    if (!analysis) return 'comprehensive';
    const hasMI = !!analysis.topMI;
    const hasRiasec = !!analysis.topRiasec;
    if (hasMI && hasRiasec) return 'comprehensive';
    if (hasMI) return 'multiple_intelligence';
    if (hasRiasec) return 'riasec';
    return 'interest';
  };

  const formatDate = (isoString) => {
    const d = new Date(isoString);
    return `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()} ${d.getHours()}:${String(d.getMinutes()).padStart(2, '0')}`;
  };

  if (viewingResult) {
    return (
      <div style={{ paddingBottom: '2rem' }}>
        <ResultDashboard 
          userData={viewingResult.data.userData} 
          testResults={viewingResult.data.testResults} 
          initialAnalysis={{ scores: {}, recs: viewingResult.data.analysis }}
          selectedMode={getModeFromAnalysis(viewingResult.data.analysis)} 
          onClose={() => setViewingResult(null)} 
          autoDownload={viewingResult.autoDownload}
        />
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: '3rem 1.5rem', minHeight: '100vh' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '2rem' }}>
            <Database color="var(--primary)" /> Dasbor Admin EduCogni
          </h1>
          <p style={{ color: 'var(--text-secondary)' }}>Melihat dan mengelola hasil tes seluruh peserta.</p>
        </div>
        <div className="flex-responsive" style={{ display: 'flex', gap: '10px', width: '100%' }}>
          <button className="btn btn-secondary btn-responsive-full" onClick={() => navigate('/')}>
            <ArrowLeft size={18} /> Kembali ke Home
          </button>
          <button className="btn btn-primary btn-responsive-full" onClick={exportToCSV}>
            <Download size={18} /> Ekspor CSV
          </button>
          <button className="btn btn-responsive-full" style={{ background: '#ef4444', color: 'white' }} onClick={handleClear}>
            <Trash2 size={18} /> Bersihkan Data
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{ background: 'rgba(79, 70, 229, 0.1)', padding: '15px', borderRadius: '12px' }}>
            <Users size={28} color="var(--primary)" />
          </div>
          <div>
            <h4 style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Total Peserta</h4>
            <h2 style={{ fontSize: '2rem' }}>{results.length}</h2>
          </div>
        </div>
        
        {/* Search Box */}
        <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', flexGrow: 2 }}>
          <div style={{ position: 'relative', width: '100%' }}>
            <Search size={20} color="var(--text-muted)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
            <input 
              type="text" 
              placeholder="Cari nama peserta..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-field"
              style={{ width: '100%', paddingLeft: '40px', marginBottom: 0 }}
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="glass-panel" style={{ overflow: 'hidden', padding: '0 !important' }}>
        <div className="table-responsive">
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead style={{ background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid var(--border-glass)' }}>
              <tr>
                <th style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)', fontWeight: '600' }}>Tanggal</th>
                <th style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)', fontWeight: '600' }}>Nama Lengkap</th>
                <th style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)', fontWeight: '600' }}>Jenjang</th>
                <th style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)', fontWeight: '600' }}>Tipe Karir (RIASEC)</th>
                <th style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)', fontWeight: '600' }}>Kecerdasan Utama</th>
                <th style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)', fontWeight: '600', textAlign: 'center' }}>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {filteredResults.length === 0 ? (
                <tr>
                  <td colSpan="5" style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                    Belum ada data peserta yang ditemukan.
                  </td>
                </tr>
              ) : (
                filteredResults.map((record) => (
                  <tr key={record.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.02)' }}>
                    <td style={{ padding: '1rem 1.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      {formatDate(record.timestamp)}
                    </td>
                    <td style={{ padding: '1rem 1.5rem', fontWeight: '500' }}>
                      {record.userData.name}
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Usia: {record.userData.age}</div>
                    </td>
                    <td style={{ padding: '1rem 1.5rem', textTransform: 'uppercase', fontSize: '0.85rem' }}>
                      <span style={{ background: 'rgba(255,255,255,0.1)', padding: '4px 8px', borderRadius: '4px' }}>
                        {record.userData.level}
                      </span>
                    </td>
                    <td style={{ padding: '1rem 1.5rem', color: 'var(--secondary)', fontWeight: '600' }}>
                      {record.analysis.topRiasec}
                    </td>
                    <td style={{ padding: '1rem 1.5rem', color: 'var(--primary)', fontWeight: '600' }}>
                      {record.analysis.topMI}
                    </td>
                    <td style={{ padding: '1rem 1.5rem', textAlign: 'center' }}>
                      <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                        <button 
                          onClick={() => setViewingResult({ data: record, autoDownload: false })}
                          className="btn"
                          style={{ padding: '6px 12px', fontSize: '0.8rem', background: 'rgba(79, 70, 229, 0.1)', color: 'var(--primary)', border: '1px solid var(--primary)', borderRadius: '6px' }}
                          title="Lihat Laporan PDF"
                        >
                          <FileText size={16} /> Lihat PDF
                        </button>
                        <button 
                          onClick={() => setViewingResult({ data: record, autoDownload: true })}
                          className="btn"
                          style={{ padding: '6px 12px', fontSize: '0.8rem', background: 'var(--primary)', color: 'white', border: 'none', borderRadius: '6px' }}
                          title="Unduh Laporan PDF"
                        >
                          <Printer size={16} /> Unduh PDF
                        </button>
                        <button 
                          onClick={() => handleDeleteRow(record.id, record.userData.name)}
                          style={{ 
                            background: 'rgba(239, 68, 68, 0.1)', 
                            border: 'none', 
                            color: '#ef4444', 
                            cursor: 'pointer', 
                            padding: '8px', 
                            borderRadius: '6px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.2s'
                          }}
                          onMouseOver={(e) => { e.currentTarget.style.background = '#ef4444'; e.currentTarget.style.color = 'white'; }}
                          onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(239, 68, 68, 0.1)'; e.currentTarget.style.color = '#ef4444'; }}
                          title="Hapus Peserta Ini"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
