import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import ExtensionCounter from './components/ExtensionCounter'

export default function App() {
  return (
    <Router>
      <ExtensionCounter />
    </Router>
  )
}
