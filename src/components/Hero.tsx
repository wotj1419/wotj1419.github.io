import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const focusWords = ['직관적인 UI', '디테일한 인터랙션', '사용자 경험']
const terminalCommand = '> console.log("안녕하세요! 박재서입니다. :)");'
const terminalOutput = '-> 안녕하세요! 박재서입니다. :)'

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0)
  const [reduceMotion] = useState(() => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false)
  const [commandLength, setCommandLength] = useState(reduceMotion ? terminalCommand.length : 2)
  const [showOutput, setShowOutput] = useState(reduceMotion)

  useEffect(() => {
    const timer = window.setInterval(() => setWordIndex((index) => (index + 1) % focusWords.length), 3000)
    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    if (reduceMotion) return
    if (commandLength < terminalCommand.length) {
      const timer = window.setTimeout(() => setCommandLength((length) => length + 1), 45)
      return () => window.clearTimeout(timer)
    }

    const timer = window.setTimeout(() => setShowOutput(true), 500)
    return () => window.clearTimeout(timer)
  }, [commandLength, reduceMotion])

  return <section className="hero" aria-labelledby="hero-title"><div className="hero-layout"><div className="hero-copy"><div className="hero-greeting"><span>안녕하세요. 저는 </span><span className="hero-word-wrap"><AnimatePresence mode="wait"><motion.span key={wordIndex} className="hero-word" initial={{ width: 0, opacity: 0 }} animate={{ width: 'auto', opacity: 1 }} exit={{ width: 0, opacity: 0 }} transition={{ duration: 0.5, ease: 'easeInOut' }}>{focusWords[wordIndex]}</motion.span></AnimatePresence></span><span> 를 고민하는 프론트엔드 개발자</span></div><div className="hero-name"><h1 id="hero-title">박재서입니다.</h1><strong>PARK JAESEO</strong></div><p className="hero-description">사용자에게 먼저 다가갈 수 있는 프론트엔드 부분을 담당하고 있습니다.<br />제 포트폴리오를 방문해 주셔서 진심으로 감사드립니다.</p></div><div className="hero-terminal-wrap"><div className="hero-terminal" role="status" aria-label="개발자 소개 터미널"><div className="hero-terminal-bar" aria-hidden="true"><span /><span /><span /></div><div className="hero-terminal-body"><p><span className="terminal-prompt">&gt; </span>{terminalCommand.slice(2, commandLength)}{!showOutput && <span className="terminal-cursor">|</span>}</p>{showOutput && <p className="terminal-output">{terminalOutput}<span className="terminal-cursor">|</span></p>}</div></div><div className="hero-terminal-glow" aria-hidden="true" /><img className="hero-brackets" src="/assets/hero-brackets.png" alt="메탈릭 그린 3D 브래킷" /></div></div><motion.button className="scroll-indicator" animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }} onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}> <span>Scroll Down</span><span aria-hidden="true">↓</span></motion.button></section>
}
