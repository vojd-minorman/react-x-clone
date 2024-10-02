import './App.css'
import NavigationSidebar from './components/navigation/NavigationSidebar'
import TrendsSection from './components/trends/AsideSection'
import TimelineSection from './components/timeline/TimelineSection'

function App() {

  return (
    <>
      <div className='sm:flex flex-row justify-between'>
        <div className='sm:flex-auto hidden sm:block'>
        <NavigationSidebar/>
        </div>
        <div className='sm:flex-auto'>
        <TimelineSection/>
        </div>
        <div className='hidden sm:block'>
        <TrendsSection/>
        </div>


      </div>

    </>
  )
}

export default App
