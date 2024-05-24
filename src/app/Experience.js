import Image from 'next/image'

export default function Experience() {
  return <section className="work-experience">
    <div className="heading">Professional Experience</div>
    {/* <div className="subheading">Reverse chronological order</div> */}
    <div className="work-exp-row">
      <div className="work-exp">
        <div className="work-image">
          <Image src="https://static.wixstatic.com/media/b0335f_b8826810859741b89cecd2f3f5fcf25c~mv2.png/v1/fill/w_338,h_247,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Frame%20633682.png"
          alt="Frame 633682.png" width="292" height="214" fetchPriority="high" />
        </div>
        <div className="organization">
          <a href="#">I&apos;m besideyou Inc</a>
        </div>
        <div className="designation">Software Engineer Intern</div>
        <div className="description">
          Developed the therapist and patient dashboards for the Therawin application.
        </div>
      </div>

      <div className="work-exp">
        <div className="work-image">
          <Image src="https://static.wixstatic.com/media/b0335f_b8826810859741b89cecd2f3f5fcf25c~mv2.png/v1/fill/w_338,h_247,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Frame%20633682.png"
          alt="Frame 633682.png"  width="292" height="214" fetchPriority="high" />
        </div>
        <div className="organization">
          <a href="#">IRA, IIT Jammu</a>
        </div>
        <div className="designation">Full Developer Intern</div>
        <div className="description">
          Developed core modules as hostel, mess, medical, gate pass and team using Flutter.
        </div>
      </div>

      <div className="work-exp">
        <div className="work-image">
          <Image src="https://static.wixstatic.com/media/b0335f_b8826810859741b89cecd2f3f5fcf25c~mv2.png/v1/fill/w_338,h_247,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Frame%20633682.png"
          alt="Frame 633682.png"  width="292" height="214" fetchPriority="high" />
        </div>
        <div className="organization">
          <a href="#">Oppia Foundation</a>
        </div>
        <div className="designation">Google Summer of Code 2021 Student</div>
        <div className="description">
          Migrated core pages to Angular and introduced router to reduce loading time.
        </div>
      </div>
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