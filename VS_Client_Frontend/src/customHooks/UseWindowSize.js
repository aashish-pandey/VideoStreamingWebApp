import { useEffect } from "react"
import { useState } from "react"

const  useWindowSize = ()=>{
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined
    })


useEffect(()=>{
    const handleResize = ()=>{
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        })

    }

    window.addEventListener('resize', handleResize)

    handleResize()

}, [])

return windowSize

}

export default useWindowSize