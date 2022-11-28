import { useEffect, useState } from "react"
import { jewelerydata } from "../../api/jewelery.api"
import { Card2 } from "../../components/mycards/Card2"

interface Ijewelery{}
interface Irating{
    count:number,
    rate:number
}
interface Ijwelpro {
    category: string,
    description: string,
    id: number,
    price: number
    rating: Irating
    title: string
}
export const Jewelery: React.FC<Ijewelery> = (props) => {
    var [localstate, setLocalstate] = useState<Ijwelpro[]>([])
    useEffect(() => {
        jewelerydata().then((a) => {
            console.log(a)
            setLocalstate(a)
        })
    }, [])

    return <>
    <h1>category:{localstate[0]?.category}</h1>
   {localstate.map((p:any) => {
    return <>
        <Card2 description={p.description} image={p.image} price={p.price} rating={p.rating} title={p.title} />
    </>
    


})}
</>
}