import React, { useState, Component } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { Brain, Target, Sparkles, ArrowRight, Lock, Lightbulb, Clock, CheckCircle, Mail, Info, MapPin, Phone, ShieldCheck, Activity } from 'lucide-react';
import TestEngine from './components/TestEngine';
import ResultDashboard from './components/ResultDashboard';
import AdminDashboard from './components/AdminDashboard';
import { saveResultToDB } from './utils/db';
import { calculateScores, getRecommendations } from './utils/recommendationEngine';

class ErrorBoundary extends Component {
  constructor(props) { super(props); this.state = { hasError: false, error: null }; }
  static getDerivedStateFromError(error) { return { hasError: true, error }; }
  render() {
    if (this.state.hasError) {
      return <div style={{padding: '2rem', color: 'white', background: 'red'}}>
        <h2>Something went wrong.</h2>
        <pre>{this.state.error.toString()}</pre>
        <pre>{this.state.error.stack}</pre>
      </div>;
    }
    return this.props.children;
  }
}

function LandingPage({ onSelectMode }) {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Navbar */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 5%', background: 'rgba(15, 23, 42, 0.8)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(255,255,255,0.05)', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src="/logo.jpg" alt="Logo" style={{ width: '40px', height: '40px', borderRadius: '10px' }} />
          <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>Edu<span className="gradient-text">Cogni</span></span>
        </div>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="#beranda" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 'bold' }}>Beranda</a>
          <a href="#fitur" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 'bold' }}>Modul Tes</a>
          <a href="#tentang" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 'bold' }}>Tentang Kami</a>
        </div>
      </nav>

      <div className="container" id="beranda" style={{ padding: '4rem 1.5rem', flex: 1 }}>
        
        {/* Hero Section */}
        <div className="glass-panel animate-fade-in" style={{ padding: '4rem 2rem', textAlign: 'center', maxWidth: '1000px', margin: '0 auto 4rem', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(79,70,229,0.15) 0%, rgba(0,0,0,0) 70%)', zIndex: 0 }}></div>
          <div style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(16,185,129,0.1) 0%, rgba(0,0,0,0) 70%)', zIndex: 0 }}></div>
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'rgba(79, 70, 229, 0.1)', padding: '8px 20px', borderRadius: '30px', border: '1px solid rgba(79, 70, 229, 0.3)', marginBottom: '2rem' }}>
              <Sparkles size={16} color="var(--primary)" />
              <span style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase' }}>Platform Penilaian Terpadu</span>
            </div>
            
            <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>
              Kenali Potensimu, Rancang <span className="gradient-text">Masa Depanmu!</span>
            </h1>
            
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem', lineHeight: '1.6' }}>
              EduCogni Assessment adalah platform asesmen cerdas berbasis pakar yang membantu mengidentifikasi kecerdasan dominan, minat bakat, dan merancang *Roadmap Karir* yang paling akurat untuk Anda.
            </p>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)' }}>
                <ShieldCheck size={20} color="var(--secondary)" /> <span>Sistem Pakar Valid</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)' }}>
                <Activity size={20} color="var(--accent)" /> <span>Laporan Instan & Analitis</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)' }}>
                <CheckCircle size={20} color="#8b5cf6" /> <span>Rekomendasi PTN Akurat</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modules Section */}
        <div id="fitur" style={{ maxWidth: '1000px', margin: '0 auto 4rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Pilih Modul Tes</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem' }}>Setiap tes dirancang khusus untuk memetakan aspek kognitif dan psikologis spesifik. Anda akan mendapatkan laporan PDF instan setelah menyelesaikannya.</p>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', marginBottom: '3rem' }}>
            
            <button className="glass-card animate-fade-in animate-delay-1" onClick={() => onSelectMode('multiple_intelligence')} style={{ cursor: 'pointer', border: '1px solid var(--primary)', background: 'rgba(79, 70, 229, 0.05)', flex: '1 1 220px', maxWidth: '280px', textAlign: 'left', padding: '2rem 1.5rem' }}>
              <Brain size={36} color="var(--primary)" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Kecerdasan Majemuk</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Petakan 8 tipe kecerdasan Howard Gardner untuk mengetahui gaya belajarmu.</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                <Clock size={14} /> Estimasi: 15 Menit (30 Soal)
              </div>
            </button>

            <button className="glass-card animate-fade-in animate-delay-2" onClick={() => onSelectMode('interest')} style={{ cursor: 'pointer', border: '1px solid var(--secondary)', background: 'rgba(16, 185, 129, 0.05)', flex: '1 1 220px', maxWidth: '280px', textAlign: 'left', padding: '2rem 1.5rem' }}>
              <Target size={36} color="var(--secondary)" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Minat & Bakat</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Temukan kecenderungan aktivitas dan bidang vokasional favorit Anda.</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                <Clock size={14} /> Estimasi: 15 Menit (30 Soal)
              </div>
            </button>

            <button className="glass-card animate-fade-in animate-delay-3" onClick={() => onSelectMode('riasec')} style={{ cursor: 'pointer', border: '1px solid var(--accent)', background: 'rgba(245, 158, 11, 0.05)', flex: '1 1 220px', maxWidth: '280px', textAlign: 'left', padding: '2rem 1.5rem' }}>
              <Sparkles size={36} color="var(--accent)" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Potensi Karir (RIASEC)</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Pemetaan profil Holland Code lengkap dengan rekomendasi universitas (PTN).</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                <Clock size={14} /> Estimasi: 20 Menit (42 Soal)
              </div>
            </button>

            <button className="glass-card animate-fade-in animate-delay-4" onClick={() => onSelectMode('iq')} style={{ cursor: 'pointer', border: '1px solid #8b5cf6', background: 'rgba(139, 92, 246, 0.05)', flex: '1 1 220px', maxWidth: '280px', textAlign: 'left', padding: '2rem 1.5rem' }}>
              <Lightbulb size={36} color="#8b5cf6" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Tes IQ (Kognitif)</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Mengukur logika deduktif, spasial, dan memori kerja berbasis Wechsler.</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                <Clock size={14} /> Estimasi: 30 Menit (40 Soal)
              </div>
            </button>
          </div>

          {/* CTA Comprehensive */}
          <div style={{ position: 'relative', display: 'inline-block', width: '100%', maxWidth: '600px', margin: '0 auto' }}>
            <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', background: 'var(--bg-color)', padding: '0 15px', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 'bold', letterSpacing: '2px', zIndex: 1 }}>ATAU IKUTI SEMUANYA</div>
            <div style={{ borderTop: '1px dashed rgba(255,255,255,0.2)', width: '100%', position: 'absolute', top: '0', left: '0' }}></div>
            <button className="btn btn-primary animate-fade-in animate-delay-4" style={{ padding: '1.2rem 3rem', fontSize: '1.2rem', width: '100%', marginTop: '30px', boxShadow: 'var(--shadow-glow)' }} onClick={() => onSelectMode('comprehensive')}>
              Mulai Tes Komprehensif (Rekomendasi) <ArrowRight size={24} />
            </button>
            <p style={{ marginTop: '15px', color: 'var(--text-muted)', fontSize: '0.85rem' }}><Clock size={14} style={{ display: 'inline', verticalAlign: 'middle' }} /> Estimasi Total: 60 Menit. Output berupa Roadmap Karir Lengkap.</p>
          </div>
        </div>

        {/* Tentang & Kontak Section */}
        <div id="tentang" style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '3rem' }}>
          <div style={{ flex: '1 1 400px' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}><Info color="var(--primary)" /> Tentang Kami</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1rem' }}>
              EduCogni dibangun atas dedikasi untuk membantu generasi muda menemukan potensi sejati mereka. Melalui serangkaian asesmen psikometrik yang diadopsi dari teori-teori pakar dunia (Gardner, Holland, Wechsler), kami menjembatani bakat siswa dengan tuntutan dunia profesional.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              Visi kami adalah memastikan tidak ada siswa yang merasa salah jurusan atau kehilangan arah karir di tengah jalan.
            </p>
          </div>
          <div style={{ flex: '1 1 300px', background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Hubungi Kami</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
              <MapPin size={18} color="var(--accent)" />
              <span>Green Park Regency, Cluster Tulip N 4, Sidoarjo</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
              <Mail size={18} color="var(--accent)" />
              <span>halo@educogni.id</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', color: 'var(--text-secondary)' }}>
              <Phone size={18} color="var(--accent)" />
              <span>(+62) 822 3301 3271</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '2rem', background: 'rgba(0,0,0,0.3)', borderTop: '1px solid rgba(255,255,255,0.05)', position: 'relative' }}>
        <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
          &copy; {new Date().getFullYear()} EduCogni Assessment System - Seluruh Hak Cipta Dilindungi
        </span>
        
        {/* Secret Admin Button */}
        <button 
          onClick={() => navigate('/admin')}
          style={{ position: 'absolute', right: '20px', bottom: '20px', background: 'none', border: 'none', color: 'var(--text-muted)', opacity: 0.2, cursor: 'pointer', transition: 'opacity 0.3s' }}
          onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
          onMouseOut={(e) => e.currentTarget.style.opacity = '0.2'}
          title="Area Khusus Admin"
        >
          <Lock size={14} />
        </button>
      </footer>
    </div>
  );
}

function RegisterPage({ onStartTest }) {
  const [formData, setFormData] = useState({ name: '', age: '', level: '' });
  
  const handleSubmit = () => {
    if (!formData.name || !formData.age || !formData.level) {
      alert("Mohon lengkapi semua data terlebih dahulu!");
      return;
    }
    onStartTest(formData);
  };

  return (
    <div className="container" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="glass-panel animate-fade-in" style={{ padding: '2.5rem', width: '100%', maxWidth: '500px' }}>
        <h2 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Pendaftaran Peserta</h2>
        
        <div className="input-group">
          <label className="input-label">Nama Lengkap</label>
          <input 
            type="text" 
            className="input-field" 
            placeholder="Masukkan nama Anda..."
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>
        
        <div className="input-group">
          <label className="input-label">Usia</label>
          <input 
            type="number" 
            className="input-field" 
            placeholder="Contoh: 15"
            value={formData.age}
            onChange={(e) => setFormData({...formData, age: e.target.value})}
          />
        </div>

        <div className="input-group">
          <label className="input-label">Jenjang Pendidikan Saat Ini</label>
          <select 
            className="input-field"
            value={formData.level}
            onChange={(e) => setFormData({...formData, level: e.target.value})}
          >
            <option value="">-- Pilih Jenjang --</option>
            <option value="sd">SD (Sekolah Dasar)</option>
            <option value="smp">SMP (Sekolah Menengah Pertama)</option>
            <option value="sma">SMA/SMK (Sekolah Menengah Atas/Kejuruan)</option>
          </select>
        </div>

        <button className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }} onClick={handleSubmit}>
          Lanjutkan ke Tes
        </button>
      </div>
    </div>
  );
}


function MainApp() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [testResults, setTestResults] = useState(null);
  const [selectedMode, setSelectedMode] = useState('comprehensive');

  const handleSelectMode = (mode) => {
    setSelectedMode(mode);
    navigate('/register');
  };

  const handleStartTest = (data) => {
    setUserData(data);
    navigate('/test');
  };

  const handleTestComplete = async (results) => {
    setTestResults(results);
    
    // Save to Cloud DB
    if (userData) {
      const scores = calculateScores(results);
      const analysis = getRecommendations(scores, userData);
      await saveResultToDB(userData, results, analysis);
    }
    
    navigate('/result');
  };

  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<LandingPage onSelectMode={handleSelectMode} />} />
        <Route path="/register" element={<RegisterPage onStartTest={handleStartTest} />} />
        <Route path="/test" element={<TestEngine selectedMode={selectedMode} onComplete={handleTestComplete} />} />
        <Route path="/result" element={<ResultDashboard userData={userData} testResults={testResults} selectedMode={selectedMode} />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </ErrorBoundary>
  );
}

function App() {
  return (
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  );
}

export default App;
