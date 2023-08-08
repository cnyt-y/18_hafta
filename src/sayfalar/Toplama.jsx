import { useState } from "react"

function Toplama() {
    const [count1,setCount1] = useState(0)
    const [count2,setCount2] = useState(0)
    const [result,setReset] = useState(0)

    const handleCount1 = (e)=>{
        setCount1(parseInt(e.target.value))
    }

    const handleCount2 = (e)=>{
        setCount2(parseInt(e.target.value))
    }
    const handleResult = (e)=>{
        setReset(count1 + count2)
    }
    console.log(result)

    return (
        <>
            <input 
                type="text" 
                className="numItem1" 
                placeholder="Sayı 1"
                onChange={handleCount1}
            />
            <input 
                type="text" 
                className="numItem1" 
                placeholder="Sayı 2"
                onChange={handleCount2}
            />
            <button type="submit" onClick={handleResult} >hesapla</button>
            <p>sonuc:{result}</p>
        </>
    )
}

export default Toplama