import { useState } from "react"

function MaliyetHesapla() {
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
        setReset(count1 * count2)
    }
    console.log(result)

    return (
        <>
            <div>Adet</div>
            <input 
                type="text" 
                className="numItem1" 
                onChange={handleCount1}
            />
            <div>Birim Fiyatı</div>
            <input 
                type="text" 
                className="numItem1" 
                onChange={handleCount2}
            />
            <button type="submit" onClick={handleResult} >hesapla</button>
            <p>sonuc:{result}</p>
        </>
    )


}

export default MaliyetHesapla