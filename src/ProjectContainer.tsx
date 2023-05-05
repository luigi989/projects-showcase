import { useRecoilValue } from 'recoil';
import { chosenProjectInfo } from './atoms/atoms';
import GithubButton from './GithubButton';
import DemoButton from './DemoButton';

interface ProjectContainerProps {
    onClick: () => void
}

const ProjectContainer = ({ onClick }: ProjectContainerProps) => {
    const projectInfo = useRecoilValue(chosenProjectInfo);

    return (
        <div className="p-5 rounded-2xl md:rounded-none md:rounded-r-2xl flex flex-col transition ease-linear duration-300
        bg-liSec dark:bg-bgAlt text-liBg items-center justify-center space-y-6">
            <h1 className='text-2xl text-liLight dark:text-primaryAlt'>{projectInfo.title}</h1>
            <div className='flex flex-col-reverse md:flex-row space-x-4 justify-between'>
                <div className='w-full md:w-1/2 flex flex-col justify-between'>
                    <p>{projectInfo.description}</p>
                    <div className='flex flex-col py-4'>
                        <h2 className='text-xl text-liLight dark:text-primaryAlt'>Built with:</h2>
                        <ul>
                            {projectInfo.tags.map((tag) =>
                                <li key={tag}>
                                    <span className='dark:text-primaryAlt'>{"\> "}</span>
                                    {tag}
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className='flex p-2 space-x-2'>
                        {projectInfo.github_link && <GithubButton link={projectInfo.github_link} />}
                        {projectInfo.live_demo && <DemoButton link={projectInfo.live_demo} />}
                    </div>
                </div>
                <img className='w-3/4 md:w-1/2 rounded-2xl' src={'/' + projectInfo.link + '.webp'} alt='Project image' />
            </div>
            <button onClick={onClick} title='Close project' aria-label='Close project'
            className='py-1 px-3 border-solid border-2 border-red-500 
            hover:text-black hover:bg-red-500 text-white rounded-md
            transition ease-linear duration-300'>
                Back
            </button>
        </div>
    )
}

export default ProjectContainer