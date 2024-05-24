import { profile } from '../../portfolio';

export default function Resume() {
  return (
    <div className="resume-content">
      <iframe src={profile.resume} allow="autoplay"></iframe>
    </div>
  );
}
