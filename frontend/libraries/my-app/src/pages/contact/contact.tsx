// import { MyH1 } from "../../components/headres/MyH1"
import { useEffect, useState } from "react"
import { flipkartdata } from "../../api/flipkart.api"
import { MyH1 } from "../../components"
import { Mycard } from "../../components/mycards/Mycard"
// import Mycard from "../../components/mycards/Mycard"

export const Contact=()=>{
    var [pro,setPro]=useState([])
    useEffect(()=>{
        flipkartdata().then((a)=>{
            setPro(a)
    })
},[])
console.log(pro)
    return <>
    {pro.map((d:any)=>{return <><Mycard img={d.image} /></>})}
    <MyH1 a={"im contact"} bg={"red"}/></>
}