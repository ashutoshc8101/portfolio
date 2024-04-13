import Image from 'next/image';
import python from '../assets/python.svg';
import js from '../assets/js.svg';
import ts from '../assets/ts.svg';
import react from '../assets/react.svg';
import node from '../assets/node.svg';
import django from '../assets/django.svg';
import mongo from '../assets/mongodb.svg';
import mysql from '../assets/mysql.svg';

function Skills() {
  return <div className='skills-section'>
    {/* <div>Skills</div> */}
    <div className="skills-container">
      <div className="skill">
        {/* Python */}
        <Image src={python} alt='python' />
        {/* <span>Python</span> */}
      </div>
      <div className="skill">
        <Image src={js} alt="javscript" />
        <span>JavaScript</span>
      </div>
      <div className="skill">
        <Image src={ts} alt='typescript' />
        <span>TypeScript</span>
      </div>
      <div className="skill">
        <Image src={react} alt="react" />
        <span>React</span>
      </div>
      <div className="skill">
        <Image src={node} alt="node" />
        <span>NodeJS</span>
      </div>
      <div className="skill">
        <Image src={django} alt="django" />
        {/* <span>Django</span> */}
      </div>
      <div className="skill">
        <Image src={mongo} alt="django" />
        {/* <span>MongoDB</span> */}
      </div>
      <div className="skill">
        <Image src={mysql} alt="mysql" />
      </div>
    </div>
  </div>
}

export default Skills;