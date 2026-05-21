import {

MapContainer,
TileLayer,
Marker,
Popup,
useMapEvents

}

from 'react-leaflet'

import L from 'leaflet'
import {useState} from 'react'
import {supabase} from '../supabase'

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




function EditableMarker({

spot

}){

const [nome,setNome]=useState(
spot.nome
)

const [position,setPosition]=useState({

lat:Number(
spot.latitudine
),

lng:Number(
spot.longitudine
)

})



async function salva(){

const {error}=

await supabase

.from(
'spots'
)

.update({

nome,

latitudine:
position.lat,

longitudine:
position.lng

})

.eq(
'id',
spot.id)


if(error){

alert(
error.message
)

return

}


alert(
"Spot aggiornato"
)

window.location.reload()

}



return(

<Marker

position={position}

icon={icon}

draggable={true}

eventHandlers={{

dragend(e){

const p=

e.target.getLatLng()

setPosition(p)

}

}}

>

<Popup>

<div style={{width:'220px'}}>

<input

value={nome}

onChange={(e)=>

setNome(
e.target.value
)}

style={{

width:'100%',

padding:'8px',

marginBottom:'10px'

}}

/>


<p>

Lat:

{position.lat.toFixed(5)}

</p>

<p>

Lon:

{position.lng.toFixed(5)}

</p>


<p style={{

fontSize:'12px',

color:'#64748B'

}}>

Trascina il marker

per cambiare posizione

</p>


<button

onClick={salva}

style={{

width:'100%',

padding:'10px',

background:'#234E70',

color:'white',

border:'none',

borderRadius:'10px',

cursor:'pointer'

}}

>

💾 Salva

</button>

</div>

</Popup>

</Marker>

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

<EditableMarker

key={spot.id}

spot={spot}

/>

)

}


<LocationMarker

position={position}

setPosition={setPosition}

/>

</MapContainer>

)

}