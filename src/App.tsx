import './App.css';
import PortfolioCard from './PortfolioCard';
import portfolio_periodic from './assets/portfolio_periodic.webp';
import portfolio_exaples from './assets/portfolio_examples.webp';
import portfolio_smallApps from './assets/portfolio_smallApps.webp';
import portfolio_ragnarok from './assets/portfolio_ragnarok.webp';
import portfolio_spaceApp from './assets/portfolio_spaceApp.webp';
import portfolio_mealPlanner from './assets/portfolio_mealPlanner.webp';
import portfolio_kurskatalog from './assets/builder.webp';

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
          path={portfolio_periodic}
        />
        <PortfolioCard
          header='Kurskatalog'
          link='https://github.com/HawkieOne/kurskatalog-id'
          demoLink='https://kurskatalog.hawkie.me/'
          path={portfolio_kurskatalog}
        />
        <PortfolioCard
          header='Space-app'
          link='https://github.com/HawkieOne/space-app'
          demoLink='https://spaceapp.hawkie.me'
          path={portfolio_spaceApp}
        />
        <PortfolioCard
          header='SmallApps'
          link='https://github.com/luigi989/smallApps'
          demoLink='https://apps.luigiworks.tech'
          path={portfolio_smallApps}
        />
        <PortfolioCard
          header='Ragnarok'
          link='https://github.com/luigi989/Ragnarok'
          demoLink='https://ragnarok.luigiworks.tech'
          path={portfolio_ragnarok}
        />
        <PortfolioCard
          header='Examples in HTML/CSS'
          link='https://github.com/luigi989/examples'
          path={portfolio_exaples}
        />
        <PortfolioCard
          header='Meal-Planner'
          link='https://github.com/HawkieOne/Meal-Planner'
          path={portfolio_mealPlanner}
        />
      </div>
    </div>
  );
}

export default App;
