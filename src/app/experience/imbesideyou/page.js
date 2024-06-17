import Footer from "@/app/Footer";
import Navbar from "@/app/Navbar";
import Image from 'next/image';
import imbesideyou from '../../../assets/imbesideyou.png'
import imbesideyou_banner from '../../../assets/imbesideyou_banner.png';

export default function Imbesideyou() {
  return <>

    <div className="banner">
      <Image src={imbesideyou_banner} alt="banner image" />
    </div>

    <div className="role-info">
      <div className="experience-content">
        <div className="organization-title">Japanese StartUp - I&apos;m besideyou Inc</div>
        <div className="role-description">
        I'm besideyou Inc., an early-stage Japanese startup funded by seed capital, is dedicated to addressing human resource (HR) and mental health challenges using AI technology. <br /><br />
        The startup has already made significant strides in the HR sector for remote work with its PALS solution. This AI-powered tool analyzes online meetings to identify disengaged employees and those with limited networking opportunities.<br /><br />
        Expanding its impact, I'm besideyou Inc. has now ventured into mental health with its latest platform, Therawin. This innovative platform offers counseling services enhanced by AI-driven analysis. During my internship, I focused on developing the therapists' and clients' dashboard for this application
        </div>

        <div className="role-info-row">
          <div className="role-info-item">
            <div className="role-info-label">Position</div>
            <div>Software Engineer Intern</div>
          </div>

          <div className="role-info-item">
            <div className="role-info-label">Project</div>
            <div>Therawin</div>
          </div>

          <div className="role-info-item">
            <div className="role-info-label">Timeline</div>
            <div>May, 2023 - July, 2023</div>
          </div>

          <div className="role-info-item">
            <div className="role-info-label">Tools Used</div>
            <div>React, MySQL, Python, AWS Lambda, AWS RDS</div>
          </div>
        </div>
      </div>

    </div>

    <div className="my-impact">
      <div className="experience-content">
        <div className="organization-title">My Impact</div>
        <ol>
          <li>My primary accomplishment involved creating the therapists' and clients' dashboards using AWS Serverless Lambda, RDS, S3, and API Gateway services. This encompassed developing the frontend UI with React, Redux, and React Router.</li>
          <li>I took on the challenge of integrating the Google Calendar API, Zoom Meetings API using Server-to-Server authentication, and an SMTP service for email delivery.</li>
          <li>Additionally, I designed and documented 27 scalable API endpoints to support dashboard functionalities such as authentication and session scheduling.</li>
        </ol>
      </div>
    </div>


    <div className="my-learnings">
      <div className="experience-content">
        <div className="organization-title">Milestone 1 : UI and Calendar API Integration</div>
        <ol>
          <li></li>
          <li></li>
          <li></li>
        </ol>
      </div>
    </div>

    <h1 style={{color: "red", textAlign: 'center'}}>Mid Term presentation</h1>


    <div className="my-learnings" style={{backgroundColor: '#fff'}}>
      <div className="experience-content">
        <div className="organization-title">Milestone 2 : Backend services and Zoom API</div>
        <ol>
          <li></li>
          <li></li>
          <li></li>
        </ol>
      </div>
    </div>

    <h1 style={{color: "red", textAlign: 'center'}}>Final presentation</h1>


    <div className="my-learnings">
      <div className="experience-content">
        <div className="organization-title">Learnings</div>
        <ol>
        <li></li>
        </ol>
      </div>
    </div>

    <div className="overall-experience">
      <div className="experience-content">
        <div className="organization-title">My Overall Experience</div>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

        <h3 style={{color: "red", textAlign: 'center'}}>Image here and samples of work.</h3>
      </div>
    </div>

    <Footer />

  </>
};