import Social from './Social'
import Image from 'next/image'
import profile from '../assets/profile.jpg'

const styles = {
  mainContainer: {
    flexGrow: '3'
  },
  nameStyle: {
    fontSize: '2em',
    margin: '60px 0px 0px 0px',
    fontWeight: '500'
  },
};


export default function Profile() {

  return <main className="main">
    <div className='profile'>
      <div style={styles.mainContainer}>
        {/* <Image src={profile} alt='profile image' /> */}
        <div style={styles.nameStyle}>
        Hi, I&apos;m Ashutosh, a <span className='highlight'>software developer</span> passionate about <br /> building products and exploring new technologies</div>

        <div className='bio'>
          {/* <div>Software Engineer at <a href="">Zorang</a></div> */}
          <div>GSoC&apos;21 student and GSoC&apos;22 mentor with <a href="https://www.oppia.org/about-foundation" target="_blank">Oppia Foundation↗</a></div>
          <div>Worked previously with <a href="https://www.imbesideyou.com/"
            target="_blank">I&apos;m beside you Inc↗</a> and <a href="https://github.com/iraapp/ira"
            target='_blank'>IRA↗</a></div>

          <div>Graduated from <a href="https://iitjammu.ac.in" target="_blank">IIT Jammu↗</a></div>
        </div>
        <Social />
      </div>
      <div className='picture'>
        <Image src={profile} alt="profile" />
      </div>
    </div>
    {/* <Skills /> */}
  </main>;
}