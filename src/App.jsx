import { useEffect, useState } from "react"
import Home from "./pages/Home"
import Spinner from "./components/utilities/Spinner"


function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(()=> {
      setLoading(false)
    },2000)
    return () => {
      return clearInterval(timer)
    }
  },[])
  return (
    <>
      { loading ?  <div className="loaderWrap"><Spinner /></div> : <div className="content fade-in"><Home /></div>  }
    </>
  )
}

export default App  