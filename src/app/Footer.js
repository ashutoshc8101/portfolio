import { author, profile } from '../portfolio'

export default function Footer() {
  return <div className="footer">
    <div className="footer-content">
      <div>@{author.year} | {author.name}</div>
      <div>
      <a href={`mailto:${profile.socials.email}`} target="blank"
      >Email</a> | <a href={profile.socials.linkedin} target="blank"
      >LinkedIn</a> | <a href={profile.socials.github} target="blank"
      >GitHub</a> | <a href={profile.socials.twitter} target="blank"
      >Twitter</a></div>
    </div>
  </div>;
};
