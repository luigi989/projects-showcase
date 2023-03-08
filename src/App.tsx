import './App.css';
import PortfolioCard from './PortfolioCard';

function App() {
  return (
    <div className='bg-bg h-full w-full m-0'>
      <div className='flex flex-col m-auto bg-transparent w-fit pt-4 pb-4 lg:pb-16'>
        <h1 className='text-center text-light font-medium text-base'>My Recent Work</h1>
        <h2 className='text-center text-primaryAlt font-medium text-3xl'>Projects</h2>
      </div>
      <div className='w-11/12 md:w-3/4 p-4 m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 print:grid-cols-3 overflow-hidden'>
        <PortfolioCard
          header='The Periodic System in a interactive system'
          link='https://github.com/luigi989/periodic'
          demoLink='https://periodic.luigiworks.tech'
          path={'/portfolio_periodic.webp'}
        />
        <PortfolioCard
          header='Kurskatalog'
          link='https://github.com/HawkieOne/kurskatalog-id'
          demoLink='https://kurskatalog.hawkie.me/'
          path={'/builder.webp'}
        />
        <PortfolioCard
          header='Space-app'
          link='https://github.com/HawkieOne/space-app'
          demoLink='https://spaceapp.hawkie.me'
          path={'/portfolio_spaceApp.webp'}
        />
        <PortfolioCard
          header='SmallApps'
          link='https://github.com/luigi989/smallApps'
          demoLink='https://apps.luigiworks.tech'
          path={'/portfolio_smallApps.webp'}
        />
        <PortfolioCard
          header='Ragnarok'
          link='https://github.com/luigi989/Ragnarok'
          demoLink='https://ragnarok.luigiworks.tech'
          path={'/portfolio_ragnarok.webp'}
        />
        <PortfolioCard
          header='Examples in HTML/CSS'
          link='https://github.com/luigi989/examples'
          path={'/portfolio_examples.webp'}
        />
        <PortfolioCard
          header='Meal-Planner'
          link='https://github.com/HawkieOne/Meal-Planner'
          path={'/portfolio_mealPlanner.webp'}
        />
      </div>
    </div>
  );
}

export default App;
