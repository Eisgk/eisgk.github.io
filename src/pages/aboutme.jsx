import React from 'react';
import Layout from '../component/Layout';
import profile from '../images/profile.jpg';

const aboutPskill = [
  {
    id: 1,
    name: 'Great Communication Skills',
  },
  {
    id: 2,
    name: 'Outstanding Management',
  },
  {
    id: 3,
    name: 'Strategic Planning',
  },
  {
    id: 4,
    name: 'Multi-tasking',
  },
];
const aboutTskill = [
  {
    id: 1,
    name: 'CSS',
  },
  {
    id: 2,
    name: 'HTML',
  },
  {
    id: 3,
    name: 'ReactJS',
  },
  {
    id: 4,
    name: 'Java',
  },
  {
    id: 5,
    name: 'C++',
  },
];

const aboutme = () => {
  return (
    <Layout>
      <div className="flex flex-col ">
        <div>
          <div className="flex flex-wrap justify-left place-content-center">
            <div className="w-6/12 sm:w-4/12 px-4">
              <img
                src={profile}
                alt="A dinosaur"
                className="shadow rounded-full max-w-2 h-auto align-middle border-none"
              />
              {/* <p className="text-center font-mono">
                Nitjaree Nanta <br />
                Computer Engineering
              </p> */}
            </div>
          </div>
          <div>
            <span className=" content-center font-mono">
              <p className="font-bold text-lg underline">Education</p>
              <p>
                Bachelor of Engineering ( Computer Engineering) <br />
                2018-2021 <br />
                Chiang Mai University, Chiang Mai, Thailand
              </p>
            </span>

            {/* {aboutData.map(x=>{
                return (
                    <ul class="list-inside bg-rose-200 ...">
                    <li key={x.id}>
                        {x.name}
                    </li>
                    </ul>
                )
            })} */}
            <span className="content-center font-mono">
              <p className="font-bold text-lg underline">Technical Skills</p>
              {aboutTskill.map((x) => {
                return <li key={x.id}>{x.name}</li>;
              })}
            </span>
            <span className=" content-center font-mono">
              <p className="font-bold text-lg underline">Personal Skills</p>
              {aboutPskill.map((x) => {
                return <li key={x.id}>{x.name}</li>;
              })}
            </span>
          </div>
        </div>
      </div>
      <div class="footer-social-links">
        <a
          href="https://www.facebook.com/nitchareent/"
          title="Facebook"
          target="_blank"
        >
          <i class="fa fa-facebook"></i>
        </a>
        <a href="https://github.com/Eisgk" title="Github" target="_blank">
          <i class="fa fa-github"></i>
        </a>
        <a href="#" title="Google+" target="_blank">
          <i class="fa fa-google-plus"></i>
        </a>
        <a href="#" title="LinkedIn+" target="_blank">
          <i class="fa fa-linkedin"></i>
        </a>
        <a href="#" title="Dribbble" target="_blank">
          <i class="fa fa-dribbble"></i>
        </a>
      </div>
    </Layout>
  );
};

export default aboutme;
