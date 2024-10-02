import './App.css'
import NavigationSidebar from './components/navigation/NavigationSidebar'
import TrendsSection from './components/trends/AsideSection'
import TimelineSection from './components/timeline/TimelineSection'

function App() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className='flex flex-col sm:flex-row'>
        <div className='w-full sm:w-[280px] sm:fixed sm:h-screen sm:overflow-y-auto'>
          <NavigationSidebar/>
        </div>
        <div className='w-full sm:ml-[280px] flex flex-col lg:flex-row'>
          <div className='w-full lg:w-[calc(100%-350px)] border-x border-[#2F3336]'>
            <TimelineSection/>
          </div>
          <div className='w-full lg:w-[350px]'>
            <TrendsSection/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App