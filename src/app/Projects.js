import Image from 'next/image'
import Link from 'next/link'

import { projects } from '../portfolio';

export default function Projects() {

  return <section className="work-experience" id="projects">
  <div className="heading project-heading">My Projects</div>

  <div className="project-row">
    { projects.map((proj, idx) => <div key={idx} className="project-exp">
      <div className="project-image">
        <Link href={proj.url}>
          <Image src={proj.thumbnail}
                alt="cover imae.jpg"
                width="448"
                height="336"
                fetchPriority="high" />
          </Link>
      </div>
      <div className="project-title">
        <Link href={proj.url}>{proj.title}</Link>
      </div>
      <div className="skills">
        {
          proj.skills.map((skill, idx) => skill + ( idx == proj.skills.length - 1 ? ' ' : ', ' ))
        }
      </div>
      <div className="project-description">
        {proj.description}
      </div>
    </div>) }

    {/* View all */}

    {/* <div className="project-exp">
      <div className="project-image">
      <Image src="https://static.wixstatic.com/media/b0335f_b8649dec8e19490dab93539b0793b665~mv2.jpg/v1/fill/w_518,h_389,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/cover%20imae.jpg"
             alt="cover imae.jpg"
             width="448"
             height="336"
             fetchPriority="high" />
      </div>
      <div className="project-title">
        <a href="#">LAMP</a>
      </div>
      <div className="skills">Angular, Javascript</div>
      <div className="project-description">
        Developed the therapist and patient dashboards for the Therawin application.
      </div>
    </div>

    <div className="project-exp">
      <div className="project-image">
      <Image src="https://static.wixstatic.com/media/b0335f_b8649dec8e19490dab93539b0793b665~mv2.jpg/v1/fill/w_518,h_389,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/cover%20imae.jpg"
             alt="cover imae.jpg"
             width="448"
             height="336"
             fetchPriority="high" />
      </div>
      <div className="project-title">
        <a href="#">Ava</a>
      </div>
      <div className="skills">Angular, Javascript</div>
      <div className="project-description">
        Developed the therapist and patient dashboards for the Therawin application.
      </div>
    </div>

    <div className="project-exp">
      <div className="project-image">
      <Image src="https://static.wixstatic.com/media/b0335f_b8649dec8e19490dab93539b0793b665~mv2.jpg/v1/fill/w_518,h_389,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/cover%20imae.jpg"
             alt="cover imae.jpg"
             width="448"
             height="336"
             fetchPriority="high" />
      </div>
      <div className="project-title">
        <a href="#">SUSI.AI</a>
      </div>
      <div className="skills">Angular, Javascript</div>
      <div className="project-description">
        Developed the therapist and patient dashboards for the Therawin application.
      </div>
    </div> */}

  </div>

  {/* <div className="work-exp-row">
    <div className="work-img">
      <Image src={therawin} className="product-image" alt="therawin image" />
    </div>
    <div className="work-exp-content">
      <div className="organization">I'm Beside You</div>
      <div className="product">Software Engineer Intern</div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis vitae et leo duis ut diam quam nulla. Nisl tincidunt eget nullam non. Commodo elit at imperdiet dui accumsan sit amet. Vitae purus faucibus ornare suspendisse sed nisi lacus. Sodales ut eu sem integer vitae justo eget. Lacus sed viverra tellus in hac habitasse. Enim nec dui nunc mattis enim ut tellus elementum sagittis. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Ultrices dui sapien eget mi.</p>
      <button>More details</button>
    </div>
  </div> */}

</section>
};