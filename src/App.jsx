import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className="overflow-hidden bg-contain bg-center h-screen w-screen bg-[url('/background.png')]">
          <div className="absolute top-[-20vw] right-[5vw] w-[30vw] h-[30vw] bg-fade-circle backdrop-blur-lg rounded-full"></div>
          <div className="absolute top-[-20vw] right-[5vw] w-[30vw] h-[30vw] bg-fade-circle backdrop-blur-lg rounded-full"></div>
    <Navbar/>
    <Home/>
   </div>
  )
}

export default App
