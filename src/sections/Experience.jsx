import { experience } from '../data/resume'

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <h2 className="section-title">Experience</h2>
      {experience.map((job, i) => (
        <article key={i} className="job">
          <div className="job__header">
            <div className="job__company-line">
              <h3 className="job__company">{job.company}</h3>
              <span className="job__location">{job.location}</span>
            </div>
            <p className="job__title">{job.title}</p>
            <p className="job__period">{job.period}</p>
            {job.team && <p className="job__team">{job.team}</p>}
          </div>
          <div className="job__projects">
            {job.projects.map((proj, j) => (
              <div key={j} className="project">
                <p className="project__name">
                  {proj.name}
                  {proj.tech?.length > 0 && (
                    <span className="project__tech">
                      {' '}({proj.tech.join(', ')})
                    </span>
                  )}
                </p>
                <ul className="project__bullets">
                  {proj.bullets.map((bullet, k) => (
                    <li key={k}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </article>
      ))}
    </section>
  )
}
