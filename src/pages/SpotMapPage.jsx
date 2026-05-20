import { useEffect, useState } from 'react'

import {
MapContainer,
TileLayer
}
from 'react-leaflet'

import 'leaflet/dist/leaflet.css'


export default function SpotMapPage(){

const [mounted,setMounted]=
useState(false)

useEffect(()=>{

setTimeout(()=>{

setMounted(true)

},300)

},[])


if(!mounted){

return(

<div>

Caricamento mappa...

</div>

)

}


return(

<div>

<h1>

🗺 Mappa Spot

</h1>

<div style={{

height:'80vh',

width:'100%',

borderRadius:'20px',

overflow:'hidden',

background:'white'

}}>

<MapContainer

center={[41.9,12.5]}

zoom={6}

style={{

height:'100%',

width:'100%'

}}

>

<TileLayer

url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

/>

</MapContainer>

</div>

</div>

)

}