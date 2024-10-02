import './App.css'
import NavigationSidebar from './components/navigation/NavigationSidebar'
import TrendsSection from './components/trends/AsideSection'
import TimelineSection from './components/timeline/TimelineSection'

function App() {
  return (
    <div className="max-w-screen-lg mx-auto">
      <div className='flex flex-col sm:flex-row'>
        <div className='w-full sm:w-1/4 sm:fixed sm:h-screen sm:overflow-y-auto'>
          <NavigationSidebar/>
        </div>
        <div className='w-full sm:w-3/4 sm:ml-[15%] flex flex-col lg:flex-row'>
          <div className='w-full lg:w-2/3'>
            <TimelineSection/>
          </div>
          <div className='w-full lg:w-1/3'>
            <TrendsSection/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App