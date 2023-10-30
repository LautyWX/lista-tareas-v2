import './App.css'
import Title from "./components/title/Index.jsx"
import Input from './components/input/Index'
import List from './components/list/Index'
import background from './assets/background.jpg'

function App() {
  return (
    <div className='main-container'>
      <Title/>
      <Input/>
      <List/>
    </div>
  )
}

export default App
