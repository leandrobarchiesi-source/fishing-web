import {

MapContainer,
TileLayer,
Marker,
Popup,
useMapEvents

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


function LocationMarker({

position,
setPosition

}){

useMapEvents({

click(e){

if(setPosition){

setPosition(
e.latlng
)

}

}

})


if(!position){

return null

}


return(

<Marker

position={position}

icon={icon}

/>

)

}



export default function SpotPickerMap({

position,
setPosition,
spots=[]

}){

return(

<MapContainer

center={[41.9,12.5]}

zoom={6}

style={{

height:'100%',

width:'100%',

borderRadius:'20px',

zIndex:1

}}

>
    
<TileLayer

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

<div>

<h3>

{

spot.nome||

"Spot"

}

</h3>


<p>

📍

{spot.latitudine}

</p>

<p>

📍

{spot.longitudine}

</p>


<button

onClick={()=>{

alert(

"Modifica spot:\n"+

spot.nome

)

}}

style={{

padding:'8px 12px',

background:'#17233C',

color:'white',

border:'none',

borderRadius:'8px',

cursor:'pointer'

}}

>

✏ Modifica

</button>

</div>

</Popup>

</Marker>

)

}


<LocationMarker

position={position}

setPosition={setPosition}

/>

</MapContainer>

)

}