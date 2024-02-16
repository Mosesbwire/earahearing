import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/home/Home'
import Confirmation from './pages/confirmation/confirmation'
import ResultsForm from './pages/Results/ResultsForm'
import { Logo } from './components/logo/Logo'
import PageContextProvider from './context/PageContext'
import ProgressContextProvider from './context/ProgressContext'
import './App.css'


function App() {
  return (
    <BrowserRouter>
      <main>
        <header className="container header">
          <Logo/>
        </header>
        <PageContextProvider>
          <ProgressContextProvider>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/confirm-email' element={<Confirmation/>}/>
              <Route path='/form' element={<ResultsForm/>}/>
            </Routes>
          </ProgressContextProvider>
        </PageContextProvider>
      </main> 
    </BrowserRouter>
  )
}

export default App
