import Home from './pages/home/Home'
import { Logo } from './components/logo/Logo'
import PageContextProvider from './context/PageContext'
import './App.css'


function App() {
  return (
    <main>
      <header className="container header">
        <Logo/>
      </header>
      <PageContextProvider>
        <Home/>
      </PageContextProvider>
      
    </main> 
  )
}

export default App
