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
          I&apos;m besideyou Inc is a japanese startup which aims to solve HR and mental health problems.
          I worked completely remotely during the internship on building the therawin application which aims to solve reduce gap between therapists and patients.
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
          <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </li>
          <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </li>
          <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </li>
        </ol>
      </div>
    </div>

    <div className="my-learnings">
      <div className="experience-content">
        <div className="organization-title">Learnings</div>
        <ol>
        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </li>
        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </li>
        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </li>
        </ol>
      </div>
    </div>

    <div className="overall-experience">
      <div className="experience-content">
        <div className="organization-title">My Overall Experience</div>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

        {/* <img src="" /> */}
      </div>
    </div>

    <Footer />

  </>
};