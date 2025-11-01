'use client'

import { useState } from 'react'

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    // Slide 1: Title Slide
    {
      title: 'TRAINING COMPLETION REPORT',
      content: (
        <div style={{ textAlign: 'center', paddingTop: '60px' }}>
          <h1 style={{ fontSize: '48px', color: '#1a365d', marginBottom: '30px', fontWeight: 'bold' }}>
            Maths Kit Training Programme
          </h1>
          <h2 style={{ fontSize: '36px', color: '#2d3748', marginBottom: '40px' }}>
            Gandhi Aided Primary School
          </h2>
          <div style={{ fontSize: '28px', color: '#4a5568', marginTop: '60px', lineHeight: '1.8' }}>
            <p><strong>Duration:</strong> 2 Days</p>
            <p><strong>Trainer:</strong> Mrs. Jayashree</p>
            <p style={{ marginTop: '40px', fontSize: '24px', color: '#718096' }}>
              {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      )
    },
    // Slide 2: Training Overview
    {
      title: 'TRAINING OVERVIEW',
      content: (
        <div style={{ padding: '40px 60px' }}>
          <div style={{ backgroundColor: '#ebf8ff', padding: '30px', borderRadius: '12px', marginBottom: '30px' }}>
            <h3 style={{ fontSize: '32px', color: '#2c5282', marginBottom: '20px' }}>Programme Details</h3>
            <ul style={{ fontSize: '24px', lineHeight: '2', color: '#2d3748', listStyle: 'none', paddingLeft: 0 }}>
              <li style={{ marginBottom: '15px' }}>📍 <strong>Venue:</strong> Gandhi Aided Primary School</li>
              <li style={{ marginBottom: '15px' }}>⏱️ <strong>Duration:</strong> 2 Days Comprehensive Training</li>
              <li style={{ marginBottom: '15px' }}>👩‍🏫 <strong>Trainer:</strong> Mrs. Jayashree</li>
              <li style={{ marginBottom: '15px' }}>🎯 <strong>Focus:</strong> Maths Kit Teaching Methodology</li>
            </ul>
          </div>
          <div style={{ backgroundColor: '#f7fafc', padding: '25px', borderRadius: '12px' }}>
            <p style={{ fontSize: '22px', color: '#4a5568', lineHeight: '1.6', margin: 0 }}>
              <strong>Objective:</strong> To equip teachers with hands-on skills for effective mathematics instruction using teaching kits
            </p>
          </div>
        </div>
      )
    },
    // Slide 3: Training Participants
    {
      title: 'TRAINING PARTICIPANTS',
      content: (
        <div style={{ padding: '40px 60px' }}>
          <div style={{ display: 'grid', gap: '25px' }}>
            <div style={{
              backgroundColor: '#fff5f5',
              padding: '30px',
              borderRadius: '12px',
              borderLeft: '6px solid #e53e3e'
            }}>
              <h3 style={{ fontSize: '28px', color: '#742a2a', marginBottom: '10px' }}>
                1. Headmistress
              </h3>
              <p style={{ fontSize: '20px', color: '#4a5568', margin: 0 }}>
                School Leadership & Administrative Head
              </p>
            </div>

            <div style={{
              backgroundColor: '#fffaf0',
              padding: '30px',
              borderRadius: '12px',
              borderLeft: '6px solid #dd6b20'
            }}>
              <h3 style={{ fontSize: '28px', color: '#7c2d12', marginBottom: '10px' }}>
                2. Assistant Teacher
              </h3>
              <p style={{ fontSize: '20px', color: '#4a5568', margin: 0 }}>
                Teaching Faculty Member
              </p>
            </div>

            <div style={{
              backgroundColor: '#f0fff4',
              padding: '30px',
              borderRadius: '12px',
              borderLeft: '6px solid #38a169'
            }}>
              <h3 style={{ fontSize: '28px', color: '#22543d', marginBottom: '10px' }}>
                3. Senior Resource Person
              </h3>
              <p style={{ fontSize: '20px', color: '#4a5568', margin: 0 }}>
                Educational Resource Coordinator
              </p>
            </div>
          </div>
          <div style={{ marginTop: '40px', textAlign: 'center', fontSize: '24px', color: '#2d3748', fontWeight: 'bold' }}>
            Total Participants: 3
          </div>
        </div>
      )
    },
    // Slide 4: Training Content
    {
      title: 'TRAINING MODULES COVERED',
      content: (
        <div style={{ padding: '30px 60px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
            <div style={{ backgroundColor: '#edf2f7', padding: '25px', borderRadius: '10px' }}>
              <h4 style={{ fontSize: '24px', color: '#2d3748', marginBottom: '15px' }}>📚 Day 1</h4>
              <ul style={{ fontSize: '20px', lineHeight: '1.8', color: '#4a5568' }}>
                <li>Introduction to Maths Kits</li>
                <li>Components & Materials</li>
                <li>Teaching Methodology</li>
                <li>Hands-on Practice Sessions</li>
              </ul>
            </div>

            <div style={{ backgroundColor: '#edf2f7', padding: '25px', borderRadius: '10px' }}>
              <h4 style={{ fontSize: '24px', color: '#2d3748', marginBottom: '15px' }}>📚 Day 2</h4>
              <ul style={{ fontSize: '20px', lineHeight: '1.8', color: '#4a5568' }}>
                <li>Advanced Techniques</li>
                <li>Classroom Integration</li>
                <li>Assessment Methods</li>
                <li>Practical Demonstrations</li>
              </ul>
            </div>
          </div>

          <div style={{ marginTop: '30px', backgroundColor: '#bee3f8', padding: '25px', borderRadius: '10px' }}>
            <h4 style={{ fontSize: '24px', color: '#1a365d', marginBottom: '15px' }}>🎯 Key Focus Areas</h4>
            <ul style={{ fontSize: '20px', lineHeight: '1.8', color: '#2d3748', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
              <li>Interactive Learning</li>
              <li>Student Engagement</li>
              <li>Concept Clarity</li>
              <li>Practical Application</li>
            </ul>
          </div>
        </div>
      )
    },
    // Slide 5: Key Outcomes
    {
      title: 'TRAINING OUTCOMES',
      content: (
        <div style={{ padding: '40px 60px' }}>
          <div style={{ display: 'grid', gap: '25px' }}>
            <div style={{ backgroundColor: '#e6fffa', padding: '25px', borderRadius: '10px', borderLeft: '5px solid #38b2ac' }}>
              <h4 style={{ fontSize: '24px', color: '#234e52', marginBottom: '12px' }}>✅ Skills Acquired</h4>
              <p style={{ fontSize: '20px', color: '#2d3748', lineHeight: '1.7', margin: 0 }}>
                All participants gained comprehensive knowledge of maths kit usage and teaching strategies
              </p>
            </div>

            <div style={{ backgroundColor: '#fef5e7', padding: '25px', borderRadius: '10px', borderLeft: '5px solid #f59e0b' }}>
              <h4 style={{ fontSize: '24px', color: '#78350f', marginBottom: '12px' }}>✅ Practical Experience</h4>
              <p style={{ fontSize: '20px', color: '#2d3748', lineHeight: '1.7', margin: 0 }}>
                Hands-on sessions enabled participants to confidently implement learned techniques
              </p>
            </div>

            <div style={{ backgroundColor: '#ede9fe', padding: '25px', borderRadius: '10px', borderLeft: '5px solid #8b5cf6' }}>
              <h4 style={{ fontSize: '24px', color: '#4c1d95', marginBottom: '12px' }}>✅ Classroom Ready</h4>
              <p style={{ fontSize: '20px', color: '#2d3748', lineHeight: '1.7', margin: 0 }}>
                Teachers are now equipped to integrate maths kits into daily lesson plans effectively
              </p>
            </div>

            <div style={{ backgroundColor: '#fce7f3', padding: '25px', borderRadius: '10px', borderLeft: '5px solid #ec4899' }}>
              <h4 style={{ fontSize: '24px', color: '#831843', marginBottom: '12px' }}>✅ Enhanced Teaching</h4>
              <p style={{ fontSize: '20px', color: '#2d3748', lineHeight: '1.7', margin: 0 }}>
                Improved understanding of student-centric, activity-based mathematics education
              </p>
            </div>
          </div>
        </div>
      )
    },
    // Slide 6: Recommendations
    {
      title: 'RECOMMENDATIONS',
      content: (
        <div style={{ padding: '40px 60px' }}>
          <div style={{ backgroundColor: '#f7fafc', padding: '30px', borderRadius: '12px', marginBottom: '25px' }}>
            <h3 style={{ fontSize: '28px', color: '#2d3748', marginBottom: '20px' }}>📋 Action Items</h3>
            <ul style={{ fontSize: '22px', lineHeight: '2', color: '#4a5568' }}>
              <li>Regular practice sessions for teachers</li>
              <li>Integration of maths kits in weekly lesson plans</li>
              <li>Student feedback collection and assessment</li>
              <li>Follow-up training session after 3 months</li>
              <li>Documentation of best practices</li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#ebf4ff', padding: '25px', borderRadius: '12px' }}>
            <h3 style={{ fontSize: '28px', color: '#2c5282', marginBottom: '15px' }}>🎯 Expected Impact</h3>
            <p style={{ fontSize: '20px', color: '#2d3748', lineHeight: '1.8', margin: 0 }}>
              Enhanced student engagement, improved mathematical understanding, and development of conceptual clarity through hands-on learning approaches.
            </p>
          </div>
        </div>
      )
    },
    // Slide 7: Conclusion
    {
      title: 'CONCLUSION',
      content: (
        <div style={{ textAlign: 'center', padding: '50px 60px' }}>
          <div style={{ backgroundColor: '#f0fdf4', padding: '40px', borderRadius: '15px', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '36px', color: '#065f46', marginBottom: '25px' }}>
              ✓ Training Successfully Completed
            </h2>
            <p style={{ fontSize: '24px', color: '#2d3748', lineHeight: '1.8', marginBottom: '20px' }}>
              The 2-day Maths Kit Training Programme at Gandhi Aided Primary School has been successfully completed with all objectives achieved.
            </p>
            <p style={{ fontSize: '22px', color: '#4a5568', lineHeight: '1.7' }}>
              All three participants demonstrated excellent understanding and are well-prepared to implement the learned methodologies in their teaching practice.
            </p>
          </div>

          <div style={{ marginTop: '50px', padding: '30px', backgroundColor: '#edf2f7', borderRadius: '12px' }}>
            <p style={{ fontSize: '24px', color: '#2d3748', marginBottom: '20px' }}>
              <strong>Trainer:</strong> Mrs. Jayashree
            </p>
            <p style={{ fontSize: '20px', color: '#4a5568' }}>
              Gandhi Aided Primary School
            </p>
          </div>
        </div>
      )
    },
    // Slide 8: Thank You
    {
      title: '',
      content: (
        <div style={{
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        }}>
          <h1 style={{ fontSize: '72px', color: '#ffffff', marginBottom: '30px', fontWeight: 'bold' }}>
            THANK YOU
          </h1>
          <p style={{ fontSize: '32px', color: '#f7fafc', marginBottom: '50px' }}>
            For Your Participation & Dedication
          </p>
          <div style={{ fontSize: '24px', color: '#e2e8f0', lineHeight: '1.8' }}>
            <p>Gandhi Aided Primary School</p>
            <p>Maths Kit Training Programme</p>
          </div>
        </div>
      )
    }
  ]

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      backgroundColor: '#1a202c',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Main Slide */}
      <div style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px'
      }}>
        <div style={{
          width: '1200px',
          height: '675px',
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Slide Header */}
          {slides[currentSlide].title && (
            <div style={{
              backgroundColor: '#2d3748',
              padding: '30px 60px',
              borderBottom: '4px solid #4299e1'
            }}>
              <h2 style={{
                fontSize: '36px',
                color: '#ffffff',
                margin: 0,
                fontWeight: 'bold'
              }}>
                {slides[currentSlide].title}
              </h2>
            </div>
          )}

          {/* Slide Content */}
          <div style={{
            height: slides[currentSlide].title ? 'calc(100% - 110px)' : '100%',
            overflowY: 'auto'
          }}>
            {slides[currentSlide].content}
          </div>

          {/* Slide Number */}
          <div style={{
            position: 'absolute',
            bottom: '20px',
            right: '30px',
            fontSize: '18px',
            color: '#718096',
            fontWeight: 'bold'
          }}>
            {currentSlide + 1} / {slides.length}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div style={{
        padding: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px'
      }}>
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          style={{
            padding: '12px 30px',
            fontSize: '18px',
            backgroundColor: currentSlide === 0 ? '#4a5568' : '#4299e1',
            color: '#ffffff',
            border: 'none',
            borderRadius: '6px',
            cursor: currentSlide === 0 ? 'not-allowed' : 'pointer',
            fontWeight: 'bold',
            opacity: currentSlide === 0 ? 0.5 : 1
          }}
        >
          ← Previous
        </button>

        {/* Slide Indicators */}
        <div style={{ display: 'flex', gap: '10px' }}>
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: 'none',
                backgroundColor: currentSlide === index ? '#4299e1' : '#4a5568',
                cursor: 'pointer',
                padding: 0
              }}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          style={{
            padding: '12px 30px',
            fontSize: '18px',
            backgroundColor: currentSlide === slides.length - 1 ? '#4a5568' : '#4299e1',
            color: '#ffffff',
            border: 'none',
            borderRadius: '6px',
            cursor: currentSlide === slides.length - 1 ? 'not-allowed' : 'pointer',
            fontWeight: 'bold',
            opacity: currentSlide === slides.length - 1 ? 0.5 : 1
          }}
        >
          Next →
        </button>
      </div>

      {/* Instructions */}
      <div style={{
        textAlign: 'center',
        padding: '10px',
        color: '#a0aec0',
        fontSize: '14px'
      }}>
        Use arrow buttons or click dots to navigate • Press F11 for fullscreen
      </div>
    </div>
  )
}
