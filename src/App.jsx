import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { Compass, Brain, Target, Sparkles, ArrowRight, Lock, Lightbulb } from 'lucide-react';
import TestEngine from './components/TestEngine';

function LandingPage({ onSelectMode }) {
  const navigate = useNavigate();

  return (
    <div className="container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '4rem 1.5rem', position: 'relative' }}>
      <div className="glass-panel animate-fade-in" style={{ padding: '3rem', textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1.5rem', borderRadius: '35px', background: 'rgba(0, 0, 0, 0.3)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)' }}>
            <div style={{ width: '160px', height: '160px', borderRadius: '25px', overflow: 'hidden', marginBottom: '1rem' }}>
              <img src="/logo.jpg" alt="EduTalent Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--secondary)', letterSpacing: '3px', textTransform: 'uppercase', textAlign: 'center' }}>
              Navigasi Potensi & Karir Masa Depan
            </div>
          </div>
        </div>
        
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          Selamat Datang di <span className="gradient-text">EduTalent</span>
        </h1>
        
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem' }}>
          Pilih modul tes yang ingin Anda ambil. Anda bisa memilih tes spesifik untuk hasil instan, atau memilih <strong>Tes Komprehensif</strong> untuk mendapatkan <em>Roadmap Karir</em> yang lengkap.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', marginBottom: '3rem' }}>
          
          <button className="glass-card animate-fade-in animate-delay-1" onClick={() => onSelectMode('multiple_intelligence')} style={{ cursor: 'pointer', border: '1px solid var(--primary)', background: 'rgba(79, 70, 229, 0.05)', flex: '1 1 250px', maxWidth: '300px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
              <Brain size={36} color="var(--primary)" />
              <h3 style={{ fontSize: '1.1rem' }}>1. Kecerdasan Majemuk</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Fokus mengenali tipe kecerdasan dominan Anda.</p>
            </div>
          </button>

          <button className="glass-card animate-fade-in animate-delay-2" onClick={() => onSelectMode('interest')} style={{ cursor: 'pointer', border: '1px solid var(--secondary)', background: 'rgba(16, 185, 129, 0.05)', flex: '1 1 250px', maxWidth: '300px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
              <Target size={36} color="var(--secondary)" />
              <h3 style={{ fontSize: '1.1rem' }}>2. Minat & Bakat</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Menemukan kecenderungan aktivitas favorit Anda.</p>
            </div>
          </button>

          <button className="glass-card animate-fade-in animate-delay-3" onClick={() => onSelectMode('riasec')} style={{ cursor: 'pointer', border: '1px solid var(--accent)', background: 'rgba(245, 158, 11, 0.05)', flex: '1 1 250px', maxWidth: '300px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
              <Sparkles size={36} color="var(--accent)" />
              <h3 style={{ fontSize: '1.1rem' }}>3. Potensi Karir (RIASEC)</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Memetakan tipe profil Holland Code Anda.</p>
            </div>
          </button>

          <button className="glass-card animate-fade-in animate-delay-4" onClick={() => onSelectMode('iq')} style={{ cursor: 'pointer', border: '1px solid #8b5cf6', background: 'rgba(139, 92, 246, 0.05)', flex: '1 1 250px', maxWidth: '300px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
              <Lightbulb size={36} color="#8b5cf6" />
              <h3 style={{ fontSize: '1.1rem' }}>4. Tes IQ (Kognitif)</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Mengukur logika, spasial, dan memori kerja.</p>
            </div>
          </button>

        </div>

        <div style={{ position: 'relative', display: 'inline-block', width: '100%', maxWidth: '600px' }}>
          <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', background: '#0f172a', padding: '0 15px', color: 'white', fontSize: '1.2rem', fontWeight: 'bold', letterSpacing: '2px', zIndex: 1 }}>ATAU</div>
          <div style={{ borderTop: '2px solid rgba(255,255,255,0.2)', width: '100%', position: 'absolute', top: '0', left: '0' }}></div>
          <button className="btn btn-primary animate-fade-in animate-delay-4" style={{ padding: '1.2rem 3rem', fontSize: '1.2rem', width: '100%', marginTop: '30px', boxShadow: 'var(--shadow-glow)' }} onClick={() => onSelectMode('comprehensive')}>
            5. Mulai Tes Komprehensif (Rekomendasi) <ArrowRight size={24} />
          </button>
        </div>

      </div>

      {/* Footer */}
      <div style={{ textAlign: 'center', marginTop: '2rem', position: 'relative', width: '100%', maxWidth: '900px', margin: '2rem auto 0' }}>
        <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem', opacity: 0.5 }}>
          &copy; {new Date().getFullYear()} EduTalent - Hak Cipta Dilindungi
        </span>
        
        {/* Secret Admin Button */}
        <button 
          onClick={() => navigate('/admin')}
          style={{ 
            position: 'absolute', 
            right: '0', 
            bottom: '-2px', 
            background: 'none', 
            border: 'none', 
            color: 'var(--text-muted)', 
            opacity: 0.2, 
            cursor: 'pointer',
            padding: '5px',
            transition: 'opacity 0.3s'
          }}
          onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
          onMouseOut={(e) => e.currentTarget.style.opacity = '0.2'}
          title="Area Khusus Admin"
        >
          <Lock size={14} />
        </button>
      </div>
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
            <option value="umum">Mahasiswa / Umum</option>
          </select>
        </div>

        <button className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }} onClick={handleSubmit}>
          Lanjutkan ke Tes
        </button>
      </div>
    </div>
  );
}

import ResultDashboard from './components/ResultDashboard';
import AdminDashboard from './components/AdminDashboard';
import { saveResultToDB } from './utils/db';
import { calculateScores, getRecommendations } from './utils/recommendationEngine';

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
    <Routes>
      <Route path="/" element={<LandingPage onSelectMode={handleSelectMode} />} />
      <Route path="/register" element={<RegisterPage onStartTest={handleStartTest} />} />
      <Route path="/test" element={<TestEngine selectedMode={selectedMode} onComplete={handleTestComplete} />} />
      <Route path="/result" element={<ResultDashboard userData={userData} testResults={testResults} selectedMode={selectedMode} />} />
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
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
