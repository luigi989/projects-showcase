interface PortfolioCardProps {
    header: string
    link: string
    demoLink?: string
    path: string
}

const PortfolioCard = ({header, link, demoLink, path} : PortfolioCardProps)  => {
    return (
        <article className='p-5 bg-bgAlt rounded-2xl flex flex-col'>
            <div className='rounded-2xl'>
                <img src={path} alt='portfolio 1' className='rounded-2xl' />
            </div>

            <h1 className='grow my-5 text-liBg dark:text-white'>{header}</h1>
            <div className='flex gap-3 '>
                <a target='_blank' rel='noreferrer'
                    href={link ? link : 'https://github.com/luigi989'}>
                    <button className='hover:bg-primary hover:text-bgAlt 
                        transition ease-linear duration-300
                        w-max inline-block py-1 px-3 rounded-lg cursor-pointer border-solid border-[1px]
                    border-primaryAlt text-primaryAlt'>Github</button>
                </a>
                {demoLink &&
                    <a target='_blank' rel='noreferrer'
                        href={demoLink}>
                        <button className='hover:text-light hover:bg-bgAlt 
                    transition ease-linear duration-300
                    w-max inline-block py-1 px-3 rounded-lg cursor-pointer border-solid border-[1px] 
                    border-primary bg-primaryAlt text-bg'>Live Demo</button>
                    </a>}
            </div>
        </article>
    )
}

export default PortfolioCard