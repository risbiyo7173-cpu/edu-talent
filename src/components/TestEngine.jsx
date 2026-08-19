import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { tests, likertOptions } from '../data/mockTests';
import { CheckCircle2, ChevronRight, BrainCircuit, ArrowLeft, Timer } from 'lucide-react';

export default function TestEngine({ selectedMode, onComplete }) {
  const navigate = useNavigate();
  
  // Filter tests based on selectedMode
  const activeTests = selectedMode === 'comprehensive' 
    ? tests 
    : tests.filter(t => t.id === selectedMode);

  // State for tracking progress and test state
  const [testState, setTestState] = useState('onboarding'); // 'onboarding', 'testing', 'calculating'
  const [currentTestIndex, setCurrentTestIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const currentTest = activeTests[currentTestIndex];
  const currentQuestion = currentTest.questions[currentQuestionIndex];

  // Calculate overall progress
  const totalQuestions = activeTests.reduce((acc, test) => acc + test.questions.length, 0);
  const answeredCount = Object.keys(answers).length;
  const progressPercent = Math.round((answeredCount / totalQuestions) * 100);

  // Timer State (30 seconds per question)
  const [timeLeft, setTimeLeft] = useState(totalQuestions * 30);

  useEffect(() => {
    if (testState !== 'testing') return;

    if (timeLeft <= 0) {
      // Auto-submit when time is up
      setTestState('calculating');
      return;
    }
    const timerId = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timerId);
  }, [timeLeft, testState]);

  // Fake Loading Calculation Effect
  useEffect(() => {
    if (testState === 'calculating') {
      const timer = setTimeout(() => {
        onComplete(answers);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [testState, answers, onComplete]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleAnswer = (value) => {
    // Save answer
    const newAnswers = {
      ...answers,
      [currentQuestion.id]: {
        value,
        category: currentQuestion.category,
        testId: currentTest.id
      }
    };
    setAnswers(newAnswers);

    // Move to next question or next test
    if (currentQuestionIndex < currentTest.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else if (currentTestIndex < activeTests.length - 1) {
      setCurrentTestIndex(prev => prev + 1);
      setCurrentQuestionIndex(0);
    } else {
      // Test is completely finished, enter calculating mode
      setTestState('calculating');
    }
  };

  if (testState === 'onboarding') {
    return (
      <div className="container" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <div className="glass-panel animate-fade-in" style={{ padding: '3rem', maxWidth: '600px', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(79, 70, 229, 0.1)', border: '1px solid var(--primary)', marginBottom: '1.5rem' }}>
            <CheckCircle2 size={40} color="var(--primary)" />
          </div>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Instruksi Ujian</h2>
          <div style={{ textAlign: 'left', background: 'rgba(0,0,0,0.2)', padding: '1.5rem', borderRadius: '12px', marginBottom: '2rem', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--text-secondary)' }}>
            <ul style={{ margin: 0, paddingLeft: '1.5rem', lineHeight: '1.8' }}>
              <li>Jawablah secara jujur sesuai kata hati Anda. Tidak ada jawaban benar atau salah.</li>
              <li>Anda memiliki batas waktu total (sekitar 30 detik per soal secara akumulatif).</li>
              <li>Fokus, cari tempat yang tenang, dan siapkan diri Anda.</li>
              <li>Sistem akan memproses hasil Anda secara instan menggunakan analisis pakar.</li>
            </ul>
          </div>
          <button className="btn btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.1rem' }} onClick={() => setTestState('testing')}>
            Mulai Ujian Sekarang
          </button>
          <button className="btn btn-secondary" style={{ width: '100%', marginTop: '1rem', padding: '1rem' }} onClick={() => navigate('/')}>
            Batal
          </button>
        </div>
      </div>
    );
  }

  if (testState === 'calculating') {
    return (
      <div className="container" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <div className="glass-panel animate-fade-in" style={{ padding: '3rem', maxWidth: '500px', textAlign: 'center' }}>
          <div className="spin-animation" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.1)', border: '2px dashed var(--secondary)', marginBottom: '2rem' }}>
            <BrainCircuit size={40} color="var(--secondary)" />
          </div>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Memproses Data Anda...</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            Sistem pakar sedang menganalisis pola kognitif dan menyusun rekomendasi *roadmap* masa depan Anda.
          </p>
          <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
            <div className="loading-bar-animation" style={{ height: '100%', width: '50%', background: 'var(--secondary)' }}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', padding: '3rem 1.5rem' }}>
      
      {/* Header & Progress */}
      <div style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
          <BrainCircuit color="var(--primary)" />
          {currentTest.title}
        </h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
          {currentTest.description}
        </p>

        {/* Timer UI */}
        <div style={{ 
          display: 'inline-flex', 
          alignItems: 'center', 
          gap: '8px', 
          padding: '8px 16px', 
          borderRadius: '20px', 
          background: timeLeft < 60 ? 'rgba(239, 68, 68, 0.1)' : 'rgba(255,255,255,0.05)',
          border: `1px solid ${timeLeft < 60 ? '#ef4444' : 'var(--border-glass)'}`,
          color: timeLeft < 60 ? '#ef4444' : 'var(--text-primary)',
          fontWeight: 'bold',
          marginBottom: '2rem',
          transition: 'all 0.3s ease'
        }}>
          <Timer size={18} className={timeLeft < 60 ? 'pulse-animation' : ''} />
          <span>Sisa Waktu: {formatTime(timeLeft)}</span>
        </div>

        {/* Progress Bar */}
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
            <span>Progres Keseluruhan</span>
            <span>{progressPercent}%</span>
          </div>
          <div style={{ height: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${progressPercent}%`, background: 'var(--primary)', transition: 'width 0.3s ease' }} />
          </div>
        </div>
      </div>

      {/* Question Card */}
      <div className="glass-panel animate-fade-in" style={{ padding: '3rem 2rem', maxWidth: '700px', margin: '0 auto', width: '100%', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', fontSize: '0.85rem', color: 'var(--text-muted)', background: 'rgba(255,255,255,0.05)', padding: '4px 10px', borderRadius: '12px' }}>
          Pertanyaan {currentQuestionIndex + 1} dari {currentTest.questions.length}
        </div>

        <h3 style={{ fontSize: '1.4rem', textAlign: 'center', marginTop: '1rem', marginBottom: '3rem', lineHeight: '1.5' }}>
          "{currentQuestion.text}"
        </h3>

        {/* Options */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {(currentQuestion.options || likertOptions).map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(option.value)}
              className="btn btn-secondary"
              style={{
                width: '100%', 
                justifyContent: 'flex-start', 
                padding: '1rem 1.5rem',
                fontSize: '1rem',
                borderRadius: '10px',
                textAlign: 'left'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', width: '100%' }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', border: '2px solid var(--text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {/* Empty circle for radio button look */}
                </div>
                <span>{option.label}</span>
              </div>
            </button>
          ))}
        </div>


        {/* Cancel Button */}
        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <button 
            onClick={() => navigate('/')} 
            style={{ 
              background: 'transparent', 
              border: 'none', 
              color: 'var(--text-muted)', 
              cursor: 'pointer', 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px', 
              fontSize: '0.9rem' 
            }}
            onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
            onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
          >
            <ArrowLeft size={16} /> Batal & Kembali ke Beranda
          </button>
        </div>
      </div>

    </div>
  );
}
