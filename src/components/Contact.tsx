import { profile } from '../data/portfolio'
export function Contact() { return <footer id="contact" className="contact"><h2>Contact</h2><div><a href={`mailto:${profile.email}`}>{profile.email}</a><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a><a href={profile.resume} target="_blank" rel="noreferrer">PDF Resume</a></div></footer> }
