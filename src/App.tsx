import { BrowserRouter as Router } from 'react-router-dom'
import ExtensionCounter from './components/ExtensionCounter'

export default function App() {
  return (
    <Router>
      <ExtensionCounter />
    </Router>
  )
}
