'use client';
import { useState } from 'react';
import Image from 'next/image';
import { FaHtml5 } from 'react-icons/fa';
const EducationTab = ({ item }) => {
  return <div>EduTAb</div>;
};
const AboutPage = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { id: 1, title: 'Education', content: 'Content for Tab 1' },
    { id: 2, title: 'Skills', content: 'Content for Tab 2' },
    { id: 3, title: 'Experience', content: 'Content for Tab 3' },
  ];
  const education = {
    title: 'My Education',
    tab_id: 1,
    educationList: [
      {
        title: 'University of California, Berkeley',
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
      {
        title: 'University of California, Berkeley',
        institute: 'Bachelor of Science',
        location: 'Damak-5,Jhapa',
        date: '2012-2016',
      },
    ],
  };
  const skills = {
    title: 'Skills',
    tab_id: 2,
    skillList: [
      {
        icon: <FaHtml5 />,
        name: 'HTML',
      },
      {
        icon: <FaHtml5 />,
        name: 'HTML',
      },
      {
        icon: <FaHtml5 />,
        name: 'HTML',
      },
      {
        icon: <FaHtml5 />,
        name: 'HTML',
      },
      {
        icon: <FaHtml5 />,
        name: 'HTML',
      },
      {
        icon: <FaHtml5 />,
        name: 'HTML',
      },
    ],
  };
  const experience = {
    title: 'Experience',
    tab_id: 3,
    experienceList: [
      {
        title: 'University of California, Berkeley',
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
    <div className="lg:w-3/4 md:w-[88%] w-full  mx-auto flex flex-col md:flex-row gap-8 p-8 ">
      {/* left side  */}
      <div className="md:w-[40%] lg:w-1/3 bg-green-400 p-4 rounded-md">
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
        <p className="mb-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut.
        </p>
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
      </div>
      {/* right side tab content */}
      <div className="md:w-2/3 bg-green-400 p-4 rounded-md">
        <h3 className="text-2xl font-semibold mb-4">Tab {activeTab}</h3>
        <div className=" rounded-lg p-6 shadow-md">
          <EducationTab />
          {/* {tabs.find((tab) => tab.id === activeTab)?.content} */}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
