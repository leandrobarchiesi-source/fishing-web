import {

MapContainer,
TileLayer,
Marker,
Popup

}

from 'react-leaflet'

import L from 'leaflet'

import 'leaflet/dist/leaflet.css'


const icon=L.icon({

iconUrl:
'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',

shadowUrl:
'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',

iconSize:[25,41],

iconAnchor:[12,41]

})


export default function SpotMapPage({

spots

}){


return(

<div>

<h1>

🗺 Mappa Spot

</h1>

<br/>


<MapContainer

center={[41.9,12.5]}

zoom={6}

scrollWheelZoom={true}

style={{

height:'80vh',

width:'100%',

borderRadius:'20px'

}}

>

<TileLayer

attribution='OpenStreetMap'

url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

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

icon={icon}

>

<Popup>

<b>

{spot.nome || "Spot"}

</b>

<br/>

{spot.latitudine}

<br/>

{spot.longitudine}

</Popup>

</Marker>

)

}

</MapContainer>

</div>

)

}