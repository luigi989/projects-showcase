import React from 'react'

const PortfolioCard = (props) => {
    return (
        <article className='p-5 bg-bgAlt rounded-2xl flex flex-col'>
            <div className='rounded-2xl'>
                <img src={props.path} alt='portfolio 1' className='rounded-2xl' />
            </div>

            <h1 className='grow my-5 text-liBg dark:text-white'>{props.header}</h1>
            <div className='flex gap-3 '>
                <a target='_blank' rel='noreferrer'
                    href={props.link ? props.link : 'https://github.com/luigi989'}>
                    <button className='hover:bg-primary hover:text-bgAlt 
                        transition ease-linear duration-300
                        w-max inline-block py-1 px-3 rounded-lg cursor-pointer border-solid border-[1px]
                    border-primaryAlt text-primaryAlt'>Github</button>
                </a>
                {props.demoLink &&
                    <a target='_blank' rel='noreferrer'
                        href={props.demoLink}>
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