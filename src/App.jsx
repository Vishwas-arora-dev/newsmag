import { useState } from "react"
import Navbar from "./components/navbar"
import Newsboard from "./components/newsboard"
import Newsitem from "./components/newsitem"

 

const App = () => {
  const [category,setCategory]=useState("technology")
  return (
    <div>
      <Navbar setCategory={setCategory}/>
       <Newsboard category={category}/>
       <Newsitem/>
    </div>
  )
}
export default App
