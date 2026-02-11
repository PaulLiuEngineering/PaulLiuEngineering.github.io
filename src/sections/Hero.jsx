import { contact } from '../data/resume'

export default function Hero() {
  return (
    <header className="hero">
      <h1 className="hero__name">Paul Liu</h1>
      <p className="hero__title">Site Reliability Engineer</p>
      <p className="hero__tagline">
        Automation, platform engineering, and reliability at scale.
      </p>
      <div className="hero__contact">
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
        <span className="hero__separator"> · </span>
        <a href={`tel:${contact.phone.replace(/-/g, '')}`}>{contact.phone}</a>
        <span className="hero__separator"> · </span>
        <span>{contact.location}</span>
        <span className="hero__separator"> · </span>
        <a href={contact.githubUrl} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </header>
  )
}
