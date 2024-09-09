import './App.css'
import AsideSection from './components/aside/AsideSection'
import MainSection from './components/main/MainSection'
import NavigationSection from './components/navigation/NavigationSection'

function App() {

  return (
    <>
      <div className='sm:flex flex-row justify-between'>
        <div className='sm:flex-none '>
        <NavigationSection/>
        </div>
        <div className='sm:flex-auto'>
        <MainSection/>
        </div>
        <div className=''>
        <AsideSection/>
        </div>


      </div>

    </>
  )
}

export default App
