import { education } from '../data/resume'

export default function Education() {
  return (
    <section className="education" id="education">
      <h2 className="section-title">Education</h2>
      <div className="education__entry">
        <div className="education__header">
          <h3 className="education__school">{education.school}</h3>
          <span className="education__location">{education.location}</span>
        </div>
        <p className="education__degree">{education.degree}</p>
        <p className="education__period">{education.period}</p>
      </div>
    </section>
  )
}
