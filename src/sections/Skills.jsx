import { skills } from '../data/resume'

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills__technical">
        <h3 className="skills__subtitle">Technical</h3>
        <ul className="skills__tags">
          {skills.technical.map((s, i) => (
            <li key={i} className="skills__tag">{s}</li>
          ))}
        </ul>
      </div>
      <div className="skills__languages">
        <h3 className="skills__subtitle">Languages</h3>
        <p>{skills.languages.join(', ')}</p>
      </div>
      <div className="skills__cert">
        <h3 className="skills__subtitle">Certificate</h3>
        <p>{skills.certificate}</p>
      </div>
    </section>
  )
}
