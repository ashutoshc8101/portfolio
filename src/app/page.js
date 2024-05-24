import Experience from './Experience';
import Navbar from './Navbar';
import Profile from './Profile';
import Projects from './Projects';
import Footer from "./Footer";

export default function Home() {
  return (
    <>
    <Navbar />
    <Profile />
    <div className='experience-wrapper'>
      <Experience />
    </div>
    <div className='project-wrapper'>
      <Projects />
    </div>
    <Footer />
    </>
  );
}
