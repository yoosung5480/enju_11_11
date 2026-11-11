import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import coverPhoto from '../assets/진짜한번너사랑한다.jpg'

const GiftReveal = lazy(() => import('./GiftReveal'))
type Step = 'cover' | 'question' | 'gift'

function Heart({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" fill="currentColor" />
    </svg>
  )
}

function Arrow() {
  return <span className="button-arrow" aria-hidden="true">↗</span>
}

function GiftIllustration() {
  return (
    <div className="gift-illustration" aria-hidden="true">
      <span className="handwritten illustration-note">a little gift, a lot of love.</span>
      <svg className="pepero-illustration" viewBox="0 0 460 460" fill="none">
        <defs>
          <pattern id="paper-lines" width="7" height="7" patternUnits="userSpaceOnUse">
            <path d="M0 7 7 0" stroke="#d9cbb9" strokeOpacity=".13" />
          </pattern>
          <filter id="paper-shadow" x="-30%" y="-30%" width="160%" height="180%">
            <feDropShadow dx="0" dy="12" stdDeviation="12" floodColor="#624c36" floodOpacity=".12" />
          </filter>
        </defs>
        <ellipse cx="240" cy="392" rx="152" ry="16" fill="#e9decb" opacity=".5" />
        <g transform="rotate(-8 230 230)">
          <g transform="rotate(-14 192 250)">
            <rect x="164" y="82" width="16" height="239" rx="7" fill="#d7ad72" />
            <rect x="162" y="79" width="20" height="174" rx="9" fill="#59392d" />
            <path d="M168 91v147" stroke="#86604b" strokeWidth="3" strokeLinecap="round" />
          </g>
          <g transform="rotate(-3 210 250)">
            <rect x="201" y="53" width="16" height="268" rx="7" fill="#dfba83" />
            <rect x="198" y="49" width="22" height="198" rx="10" fill="#73503b" />
            <path d="m204 73 8 4m-9 17 9-4m-8 21 8 4m-9 18 10-4m-10 20 9 5m-8 17 9-3m-9 22 8 4m-8 18 8-3m-9 22 9 3" stroke="#c09970" strokeWidth="5" strokeLinecap="round" />
          </g>
          <g transform="rotate(9 242 260)">
            <rect x="237" y="66" width="16" height="267" rx="7" fill="#d7ad72" />
            <rect x="234" y="62" width="22" height="198" rx="10" fill="#4c3028" />
            <path d="M241 75v163" stroke="#7b5443" strokeWidth="3" strokeLinecap="round" />
          </g>
          <g transform="rotate(20 268 260)">
            <rect x="269" y="95" width="16" height="243" rx="7" fill="#dfba83" />
            <rect x="266" y="91" width="22" height="179" rx="10" fill="#8b5449" />
            <path d="m270 108 14 7m-14 14 14 7m-14 14 14 7m-14 14 14 7m-14 14 14 7m-14 14 14 7m-14 14 14 7" stroke="#d9b7a6" strokeWidth="4" />
          </g>
          <g filter="url(#paper-shadow)">
            <path d="M92 220h286v150a12 12 0 0 1-12 12H104a12 12 0 0 1-12-12Z" fill="#f7eedc" />
            <path d="m92 220 143 91 143-91" fill="#e9d9bf" />
            <path d="m92 220 143 91 143-91v150a12 12 0 0 1-12 12H104a12 12 0 0 1-12-12Z" fill="url(#paper-lines)" />
            <path d="m92 370 103-91m183 91-103-91" stroke="#e2d2b9" strokeWidth="1.5" />
            <path d="m92 220 143 91 143-91" stroke="#d8c6aa" strokeWidth="1.5" />
          </g>
          <path d="M225 302c-12-36-55-50-57-24-2 21 34 23 57 24Z" fill="#a54237" />
          <path d="M235 303c13-36 56-49 57-23 1 20-34 22-57 23Z" fill="#b24c40" />
          <path d="m225 303-19 55-12-17-18 5 37-46m24 4 14 48 12-13 18 5-33-46" fill="#a54237" />
          <path d="M221 296q12-8 20 2l-2 14q-10 6-19-3Z" fill="#87392f" />
          <path d="M175 277q16-4 44 22m67-18q-20-6-46 20" stroke="#d47b67" strokeWidth="2" strokeLinecap="round" />
          <text x="113" y="354" fill="#705847" fontSize="17" fontFamily="Georgia, serif" fontStyle="italic">for. 은주</text>
        </g>
        <path d="m77 138 4 11 11 4-11 4-4 11-4-11-11-4 11-4Z" fill="#b58553" />
        <path d="m375 177 3 8 8 3-8 3-3 8-3-8-8-3 8-3Z" fill="#b58553" />
        <path d="M344 78c-7-12-23-3-14 8l15 14 13-16c8-12-8-20-14-6Z" fill="#ac4a3d" transform="rotate(15 344 88)" />
        <path d="M91 318c-4-7-13-2-8 5l8 8 8-9c4-7-5-11-8-4Z" fill="#b85d4d" />
      </svg>
      <div className="round-stamp"><span>MADE WITH</span><Heart /><span>LOVE, ALWAYS</span></div>
      <span className="handwritten illustration-caption">달콤한 건 전부 네 거 ♡</span>
    </div>
  )
}

export default function HomePage() {
  const [step, setStep] = useState<Step>('cover')
  const [answer, setAnswer] = useState('')
  const [error, setError] = useState('')
  const headingRef = useRef<HTMLHeadingElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const previousStep = useRef(step)

  useEffect(() => {
    if (previousStep.current === step) return
    previousStep.current = step
    headingRef.current?.focus({ preventScroll: true })
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [step])

  function checkAnswer(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (answer.trim() === '130') {
      setError('')
      setStep('gift')
      return
    }
    setError(answer.trim() ? '우리 디데이!!!!! 근데이제 태초마을 이후로부터 11/11기준으로!!' : '우리 디데이!!!!! 근데이제 태초마을 이후로부터 11/11기준으로!!')
    inputRef.current?.focus()
  }

  function startOver() {
    setAnswer('')
    setError('')
    setStep('cover')
  }

  const activeStep = ['cover', 'question', 'gift'].indexOf(step)

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#" onClick={(event) => { event.preventDefault(); startOver() }} aria-label="처음으로 돌아가기">11<span>♡</span>11</a>
        <span className="header-caption">A LITTLE GIFT FOR YOU</span>
        <span className="header-date">NOVEMBER 11 <span aria-hidden="true">✳</span></span>
      </header>
      <main id="main-content" className={`main-content stage-${step}`}>
        <div className="occasion-label"><span /> HAPPY PEPERO DAY <span /></div>
        {step === 'cover' && (
          <section className="gift-card cover-card" aria-labelledby="cover-heading">
            <div className="cover-keepsakes">
              <GiftIllustration />
              <figure className="photo-print cover-photo">
                <img src={coverPhoto} width="474" height="342" alt="진짜 한 번 너 사랑한다는 자막이 담긴 예능 장면" />
              </figure>
            </div>
            <div className="cover-copy">
              <span className="recipient-tag"><Heart /> 오직 은주를 위해</span>
              <h1 id="cover-heading" ref={headingRef} tabIndex={-1}>은주에게 도착한<br /><em>(약간)달콤한 마음.</em></h1>
              <p className="cover-message">응주야, 내가 정말 빼빼로 데이를 이렇게 그냥 보낼줄알았어? 으이?!!</p>
              <button className="primary-button" onClick={() => setStep('question')}>선물 열어보기 <Arrow /></button>
              <span className="small-note">흐흐흐 언능 열어보슈</span>
            </div>
            
            <div className="card-bottom"><span>TO. EUNJU</span><span>마음을 담아, 유성이가 <Heart /></span></div>
          </section>
        )}
        {step === 'question' && (
          <section className="gift-card question-card" aria-labelledby="question-heading">
            <span className="eyebrow">A QUESTION FOR US</span>
            <div className="question-heart"><Heart /><span aria-hidden="true">?</span></div>
            <h1 id="question-heading" ref={headingRef} tabIndex={-1}>선물을 열기 전,<br /><em>우리만의 작은 퀴즈.</em></h1>
            <p className="quiz-question" id="quiz-question">오늘은 은주와 유성이가 사귄지<br className="desktop-break" /> 며칠째 되는 날인가요?</p>
            <form className="quiz-form" onSubmit={checkAnswer} noValidate>
              <label className="sr-only" htmlFor="days">우리가 사귄 지 며칠째인지 숫자로 입력</label>
              <div className={`day-input ${error ? 'has-error' : ''}`}>
                <span aria-hidden="true">D +</span>
                <input ref={inputRef} id="days" name="days" type="text" inputMode="numeric" pattern="[0-9]*" autoComplete="off" maxLength={5} placeholder="???" value={answer} onChange={(event) => { setAnswer(event.target.value); setError('') }} aria-describedby={`quiz-question${error ? ' answer-error' : ''}`} aria-invalid={Boolean(error)} />
                <span className="day-suffix" aria-hidden="true">일</span>
              </div>
              <div className="answer-feedback" id="answer-error" aria-live="polite">{error || <span className="input-hint">함께한 날만큼, 차곡차곡 쌓인 마음.</span>}</div>
              <button className="primary-button" type="submit">정답 확인하고 선물 받기 <Arrow /></button>
            </form>
            <button className="text-button back-button" onClick={startOver}>← 표지로 돌아가기</button>
            <div className="card-bottom"><span>OUR LITTLE STORY</span><span>유캔두잇 <Heart /></span></div>
          </section>
        )}
        {step === 'gift' && (
          <section className="reveal-section" aria-labelledby="gift-heading">
            <span className="recipient-tag"><Heart /> 정답입니둥, 우리 130일!</span>
            <h1 id="gift-heading" ref={headingRef} tabIndex={-1}>너의 오늘이<br /><em>조금 더 달콤하길.</em></h1>
            <p className="reveal-intro">작은 선물과 함께, 너에게 전하고 싶은 마음.</p>
            <Suspense fallback={<p className="gift-loading" role="status">선물을 꺼내고 있어 ♡</p>}><GiftReveal /></Suspense>
            <button className="text-button restart-button" onClick={startOver}>↶ 처음부터 다시 보기</button>
          </section>
        )}
        <ol className="step-indicator" aria-label="선물 여는 순서">
          {['도착한 마음', '우리의 이야기', '너를 위한 선물'].map((label, index) => (
            <li key={label} className={index <= activeStep ? 'is-active' : ''} aria-current={index === activeStep ? 'step' : undefined}>
              <span className="step-number">{index < activeStep ? '✓' : `0${index + 1}`}</span><span>{label}</span>
            </li>
          ))}
        </ol>
      </main>
      <footer className="site-footer"><span>JUST FOR YOU, EUNJU</span><span>소소한 선물로 준비해봐쓰예. <Heart /></span><span>FROM. YUSEONG</span></footer>
    </div>
  )
}
