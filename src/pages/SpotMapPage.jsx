import { useEffect, useRef } from 'react'

import {
MapContainer,
TileLayer,
Marker,
Popup,
useMap
}
from 'react-leaflet'

import L from 'leaflet'

import 'leaflet/dist/leaflet.css'


delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({

iconRetinaUrl:
'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',

iconUrl:
'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',

shadowUrl:
'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png'

})


function ResizeMap(){

const map=useMap()

useEffect(()=>{

setTimeout(()=>{

map.invalidateSize()

},200)

},[map])

return null

}


export default function SpotMapPage({

spots

}){

const center=

spots.length

?

[
Number(spots[0].latitudine),
Number(spots[0].longitudine)
]

:

[41.9,12.5]


return(

<div>

<h1>

🗺 Mappa Spot

</h1>

<br/>

<div style={{

height:'75vh',

width:'100%',

borderRadius:'20px',

overflow:'hidden'

}}>

<MapContainer

center={center}

zoom={7}

style={{

height:'100%',

width:'100%'

}}

>

<ResizeMap/>

<TileLayer

url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

attribution="OpenStreetMap"

/>

{

spots.map(

spot=>

<Marker

key={spot.id}

position={[

Number(
spot.latitudine
),

Number(
spot.longitudine
)

]}

>

<Popup>

<b>

{

spot.nome||

"Spot"

}

</b>

<br/>

Lat:

{spot.latitudine}

<br/>

Lon:

{spot.longitudine}

</Popup>

</Marker>

)

}

</MapContainer>

</div>

</div>

)

}