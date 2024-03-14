import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/home/Home'
import MainLayout from './layouts/MainLayout'
import TestResults from './pages/test-results/TestResults'
import ResultsForm from './pages/Results/ResultsForm'
// import { Logo } from './components/logo/Logo'
import PageContextProvider from './context/PageContext'
import ProgressContextProvider from './context/ProgressContext'
import './App.css'


function App() {
  return (
    <BrowserRouter>
      <main>
          <PageContextProvider>
            <ProgressContextProvider>
              <Routes>
                <Route element={<MainLayout/>}>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/form' element={<ResultsForm/>}/>
                </Route>
              </Routes>
            </ProgressContextProvider>
          </PageContextProvider>
        <Routes>
          <Route path='/results' element={<TestResults/>}/>
        </Routes>
      </main> 
    </BrowserRouter>
  )
}

export default App
