import './App.css'
import NavigationSidebar from './components/navigation/NavigationSidebar'
import TrendsSection from './components/trends/AsideSection'
import TimelineSection from './components/timeline/TimelineSection'

function App() {

  return (
    <>
      <div className='sm:flex flex-row justify-between'>
        <div className='sm:flex-none '>
        <NavigationSidebar/>
        </div>
        <div className='sm:flex-auto'>
        <TimelineSection/>
        </div>
        <div className=''>
        <TrendsSection/>
        </div>


      </div>

    </>
  )
}

export default App
