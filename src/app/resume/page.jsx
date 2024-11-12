'use client';
import { useState } from 'react';
import Image from 'next/image';
import { FaReact } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiNextdotjs, SiMysql } from 'react-icons/si';
import { motion } from 'framer-motion';

const EducationTab = () => {
  const education = {
    title: 'My Education',
    educationList: [
      {
        institute: 'Model Campus Damak',
        title: 'Bachelor in Computer Application(BCA)',
        location: 'Damak-5,Jhapa',
        date: '2021-2025',
        // points : ['did something', 'did something else']
      },
      // {
      //   institute: 'University of California',
      //   title: 'Bachelor of Science',
      //   location: 'Damak-5,Jhapa',
      //   date: '2012-2016',
      // },
    ],
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-semibold mb-4">{education.title}</h3>
      <div className="flex flex-col pl-2 gap-4 ">
        {education.educationList.map((item) => (
          <div className=" bg-black/40 ring-1 ring-white/20 rounded-md p-4">
            <p className="text-accent/80 text-sm">{item.date}</p>
            <h4 className="text-lg font-semibold py-2">{item.title}</h4>
            <p className="text-white/70 text-sm  ">
              <span className="text-green-500">-</span> {item.institute}
            </p>
            {/* <p className="text-gray-600">{item.location}</p> */}
          </div>
        ))}
      </div>
    </motion.div>
  );
};
const SkillsTab = () => {
  const skills = {
    title: 'My Skills',
    skillList: [
      {
        icon: <FaReact color="#61DAFB" />,
        name: 'React js',
      },
      {
        icon: <SiMongodb color="#47A248" />,
        name: 'MongoDB',
      },
      {
        icon: <SiMysql color="#4479A1" />,
        name: 'MySQL',
      },
      {
        icon: <SiNextdotjs color="gray" />,
        name: 'Next js',
      },
      {
        icon: <SiTailwindcss color="#06B6D4" />,
        name: 'Tailwind css',
      },
    ],
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-semibold mb-4">{skills.title}</h3>
      <div className="grid grid-cols-3 md:grid-cols-4 pl-2 gap-4 ">
        {skills.skillList.map((item) => (
          <div className="text-6xl border border-accent/40  rounded-md p-4 flex items-center justify-center">
            {item.icon}
          </div>
        ))}
      </div>
    </motion.div>
  );
};
const ExperienceTab = () => {
  const experience = {
    title: 'My Experience',
    experienceList: [
      {
        title: 'University of California',
        institute: 'Bachelor of Science',
        location: 'Damak-5,Jhapa',
        date: '2012-2016',
        // points : ['did something', 'did something else']
      },
      {
        title: 'University of California, Berkeley',
        institute: 'Bachelor of Science',
        location: 'Damak-5,Jhapa',
        date: '2012-2016',
      },
      {
        title: 'University of California, Berkeley',
        institute: 'Bachelor of Science',
        location: 'Damak-5,Jhapa',
        date: '2012-2016',
      },
    ],
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-semibold mb-4">{experience.title}</h3>
    </motion.div>
  );
};
const AboutPage = () => {
  const [activeTab, setActiveTab] = useState(1);
  const tabs = [
    { id: 1, title: 'Skills' },
    { id: 2, title: 'Education' },
    { id: 3, title: 'Experience' },
  ];

  return (
    <div className="lg:w-3/4 md:w-[88%] w-full  mx-auto flex flex-col md:flex-row gap-8 p-8 ">
      {/* left side  */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="md:w-[40%] lg:w-1/3  p-4 rounded-md"
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="max-w-[100px] max-h-[100px]  border-2 border-accent ring-accent/30 ring-2 rounded-full overflow-hidden">
            <Image
              src="/hero.png"
              alt="Profile"
              width={100}
              height={100}
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Saurav Gurung</h2>
            <p className="text-gray-600">Full Stack Developer</p>
          </div>
        </div>
        <p className="mb-2">Lorem ipsum dont have much to say right now.</p>
        <div className="flex md:flex-col overflow-auto  gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-md transition-colors flex-1 ${
                activeTab === tab.id ? 'bg-accent/80 ' : 'bg-accent/30 '
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </motion.div>
      {/* right side tab content */}
      <div className="md:w-2/3  p-4">
        {activeTab === 1 && <SkillsTab />}
        {activeTab === 2 && <EducationTab />}
        {activeTab === 3 && <ExperienceTab />}
      </div>
    </div>
  );
};

export default AboutPage;
