import { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { chosenProjectInfo, darkModeState } from './atoms/atoms';
import PortfolioCard from './PortfolioCard';
import ProjectContainer from './ProjectContainer';
import DarkModeButton from './DarkModeButton';

interface projectType {
  title: string;
  github_link: string;
  live_demo: string
  tags: string[];
  description: string;
  link: string;
}

function App() {
  const isDark = useRecoilValue(darkModeState);
  const projectChosen: projectType = useRecoilValue(chosenProjectInfo);
  const setChosenProjectInfo = useSetRecoilState(chosenProjectInfo);
  const [projects, setProjects] = useState<projectType[]>([]);

  const initProjects = async () => {
    await fetch("https://luigiworks.tech/all")
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(err => console.log(err));
  }

  const onClick = (filename: string) => {
    projects.map((project: projectType) => {
      if (filename == project.link) {
        setChosenProjectInfo(project);
      }
    });

    const section = document.getElementById("portfolio");
    if (section != null) {
      section.scrollIntoView();
    }
  }

  const closeProject = () => {
    setChosenProjectInfo({
      title: '',
      description: '',
      tags: [],
      github_link: '',
      live_demo: '',
      link: '',
    });
  }

  useEffect(() => {
    initProjects();
  }, [])

  return (
    <div className={'bg-bg h-full w-full m-0 transition ease-linear duration-300 ' + (isDark ? 'bg-bgTexture' : 'lightPattern')}>
      <DarkModeButton />
      <div className='flex flex-col m-auto bg-liBg dark:bg-transparent w-fit pt-4 pb-4 lg:mb-16'>
        <h1 className='text-center text-liLight dark:text-light font-medium text-base'>My Recent Work</h1>
        <h2 className='text-center text-liSec dark:text-primaryAlt font-medium text-3xl'>Projects</h2>
      </div>

      {projectChosen.title !== '' &&
        <div className='flex w-11/12 lg:w-3/4 h-fit m-auto p-5'>
          <ul className='hidden lg:block p-4 bg-liSec dark:bg-bgAlt text-liBg rounded-l-2xl 
          whitespace-nowrap transition ease-linear duration-300'>
            {projects.map((project) =>
              <li onClick={() => onClick(project.link)} key={project.title}
                className={'py-1 px-2 text-md cursor-pointer transition ease-linear duration-300 ' +
                  'dark:hover:bg-primary hover:bg-liBg hover:text-black rounded-md '
                  + (projectChosen.title == project.title && 'dark:bg-primary bg-liBg text-black')}>
                {project.title}</li>
            )}
          </ul>
          <ProjectContainer onClick={() => closeProject()} />
        </div>}

      <div className={'w-11/12 md:w-3/4 m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 print:grid-cols-3 '
        + (projectChosen.title == '' ? "block" : "hidden")}>
        {projects.map((project) =>
          <PortfolioCard
            key={project.title}
            header={project.title}
            demoLink={project.live_demo}
            onClick={() => onClick(project.link)}
            path={project.link + '.webp'}
          />
        )}
      </div>
    </div>
  );
}

export default App;
