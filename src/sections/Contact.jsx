import { contact } from '../data/resume'

export default function Contact() {
  return (
    <footer className="contact" id="contact">
      <h2 className="section-title">Contact</h2>
      <div className="contact__links">
        <a href={`mailto:${contact.email}`}>Email</a>
        <a href={`tel:${contact.phone.replace(/-/g, '')}`}>Phone</a>
        <a href={contact.githubUrl} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="/resume.docx" download>Resume</a>
      </div>
      <p className="contact__address">{contact.location}</p>
    </footer>
  )
}
