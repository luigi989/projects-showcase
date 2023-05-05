import DemoButton from "./DemoButton"

interface PortfolioCardProps {
    header: string
    demoLink?: string
    path: string
    onClick: () => void;
}

const PortfolioCard = ({header, demoLink, path, onClick} : PortfolioCardProps)  => {
    return (
        <article className='p-5 bg-liSec dark:bg-bgAlt rounded-2xl flex flex-col transition ease-linear duration-300'>
            <div className='rounded-2xl'>
                <img className='rounded-2xl' alt='portfolio 1' src={path} />
            </div>

            <h1 className='grow my-5 text-xl text-liBg dark:text-white'>{header}</h1>
            <div className='flex gap-2'>
                <button onClick={onClick}
                    aria-label="Read more about project"
                    title="Read more about project"
                    className='hover:bg-liPrimary hover:text-liSec
                    dark:hover:bg-primary dark:hover:text-bgAlt 
                    transition ease-linear duration-300
                    w-max inline-block py-1 px-3 rounded-lg cursor-pointer border-solid border-[1px]
                    border-liPrimary dark:border-primaryAlt text-liPrimary dark:text-primaryAlt print:text-xs'>
                    Read More
                </button>
                {demoLink && <DemoButton link={demoLink} />}
            </div>
        </article>
    )
}

export default PortfolioCard