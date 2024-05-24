import Image from 'next/image';
import Link from 'next/link';

import { experiences } from '../portfolio';

export default function Experience() {
  return <section className="work-experience" id="experience">
    <div className="heading">Professional Experience</div>
    <div className="work-exp-row">

      { experiences.map((exp, idx) => <div key={idx} className='work-exp'>
        <div className="work-image">
          <Link href="/experience"><Image src={exp.thumbnail}
            alt="thumbnail" width="292" height="214" fetchPriority="high" />
          </Link>
        </div>
        <div className="organization">
          <Link href="/experience">{exp.title}</Link>
        </div>
        <div className="designation">{exp.designation}</div>
        <div className="description">
          {exp.description}
        </div>
      </div>) }
    </div>
  </section>
};