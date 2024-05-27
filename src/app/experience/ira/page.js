import Footer from "@/app/Footer";
import Navbar from "@/app/Navbar";
import Image from 'next/image';
import iraBanner from '../../../assets/ira_banner2.png';


export default function IRA() {
  return <>

    <div className="banner" style={{backgroundColor: '#242A38'}}>
      <Image src={iraBanner} alt="banner image" />
    </div>

    <div className="role-info">
      <div className="experience-content">
        <div className="organization-title">Institute Resource Application - IIT Jammu</div>
        <div className="role-description">Developed UI and serverless backend for therawin application.</div>

        <div className="role-info-row">
          <div className="role-info-item">
            <div className="role-info-label">Position</div>
            <div>Full Stack Developer Intern</div>
          </div>

          <div className="role-info-item">
            <div className="role-info-label">Project</div>
            <div>IRA App</div>
          </div>

          <div className="role-info-item">
            <div className="role-info-label">Timeline</div>
            <div>June, 2022 - Dec, 2022</div>
          </div>

          <div className="role-info-item">
            <div className="role-info-label">Tools Used</div>
            <div>Figma, After Effects, Spark AR</div>
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