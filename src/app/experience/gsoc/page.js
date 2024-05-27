import Footer from "@/app/Footer";
import Image from 'next/image';
import gsocBanner from '../../../assets/GSoC-icon.svg';

export default function GSoC() {
  return <>
  <div className="banner" style={{ alignItems: 'center' }}>
    <Image src={gsocBanner} alt="banner image" />
  </div>

  <div className="role-info">
    <div className="experience-content">
      <div className="organization-title">Oppia Foundation</div>
      <div className="role-description">Developed UI and serverless backend for therawin application.</div>

      <div className="role-info-row">
        <div className="role-info-item">
          <div className="role-info-label">Position</div>
          <div>Google Summer of Code Student</div>
        </div>

        <div className="role-info-item">
          <div className="role-info-label">Project</div>
          <div>Oppia Web</div>
        </div>

        <div className="role-info-item">
          <div className="role-info-label">Timeline</div>
          <div>May, 2021 - Aug, 2021</div>
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