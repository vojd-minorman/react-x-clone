import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavigationSidebar from './components/navigation/NavigationSidebar'
import TrendsSection from './components/trends/AsideSection'
import TimelineSection from './components/timeline/TimelineSection'
import Profile from './components/profile/Profile'

function App() {
  return (
    <Router>
      <div className="max-w-screen-xl mx-auto flex">
        <div className='w-[280px] fixed h-screen overflow-y-auto hidden lg:block'>
          <NavigationSidebar/>
        </div>
        <div className='flex-1 lg:ml-[280px]'>
          <div className='flex flex-col lg:flex-row'>
            <main className='sm:flex-1 sm:border-x border-[#2F3336]'>
              <Routes>
                <Route path="/" element={<TimelineSection />} />
                <Route path="/profile/:username" element={<Profile />} />
              </Routes>
            </main>
            <aside className='w-full lg:w-[350px] hidden lg:block'>
              <TrendsSection/>
            </aside>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App