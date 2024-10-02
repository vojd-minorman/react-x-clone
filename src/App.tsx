import './App.css'
import NavigationSidebar from './components/navigation/NavigationSidebar'
import TrendsSection from './components/trends/AsideSection'
import TimelineSection from './components/timeline/TimelineSection'

function App() {
  return (
    <div className='sm:flex flex-row justify-between'>
      <div className='sm:flex-none hidden sm:block lg:w-1/4 xl:w-1/5'>
        <NavigationSidebar/>
      </div>
      <div className='sm:flex-auto lg:w-1/2 xl:w-3/5'>
        <TimelineSection/>
      </div>
      <div className='hidden lg:block lg:w-1/4 xl:w-1/5'>
        <TrendsSection/>
      </div>
    </div>
  )
}

export default App