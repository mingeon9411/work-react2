import reactLogo from '../assets/react.svg'
import '../App.css'

function Welcome({ name }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <img 
        src={reactLogo} 
        className="logo react"
        alt="React logo" 
      />
      <h1>Hello {name}</h1>
    </div>
  )
}
export default Welcome
