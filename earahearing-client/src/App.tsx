import Home from './pages/home/Home'
import PageContextProvider from './context/PageContext'
import './App.css'


function App() {
  return (
    <main>
      <PageContextProvider>
        <Home/>
      </PageContextProvider>
      
    </main> 
  )
}

export default App
