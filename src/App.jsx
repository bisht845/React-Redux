
import './App.css'
import { useSelector } from 'react-redux'




function App() {

const myData = useSelector(state => state.offer.offerCategory)
console.log('MyData', myData)



  return (
    <>
      <div>
      Data
      </div>
        
    </>
  )
}

export default App
