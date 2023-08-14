// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import LoginCard from './components/LoginCard/LoginCard'

function App() {

  return (
    <div className='w-screenl h-screen'>
        <h1 className='mb-40 font-bold bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-transparent bg-clip-text animate-gradient'>React TodoApp</h1>
        <LoginCard />
    </div>
  )
}

export default App

//bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-red-900 via-violet-200 to-orange-500
//bg-gradient-to-r from-green-300 via-blue-500 to-purple-600