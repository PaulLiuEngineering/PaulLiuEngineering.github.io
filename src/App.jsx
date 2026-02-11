import Hero from './sections/Hero'
import Experience from './sections/Experience'
import Skills from './sections/Skills'
import Education from './sections/Education'
import Contact from './sections/Contact'

function App() {
  return (
    <>
      <nav className="nav">
        <a href="#" className="nav__brand">Paul Liu</a>
        <div className="nav__links">
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
      <main className="page">
        <Hero />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
    </>
  )
}

export default App
