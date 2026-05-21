import {
MapContainer,
TileLayer,
Marker,
Popup,
useMapEvents,
useMap
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

iconAnchor:[12,41],

popupAnchor:[0,-35]

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




function FlyToMarker({

position

}){

const map=useMap()

map.flyTo(

[position.lat,position.lng],

14,

{

duration:1.5

}

)

return null

}




function EditableMarker({

spot,
refreshData

}){

const [nome,setNome]=useState(

spot.nome||""

)


const [position,setPosition]=useState({

lat:Number(
spot.latitudine
),

lng:Number(
spot.longitudine
)

})


const [zoom,setZoom]=

useState(false)



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

refreshData?.()

}



return(

<Marker

position={position}

icon={icon}

draggable={true}

eventHandlers={{

click(){

setZoom(true)

},

dragend(e){

const p=

e.target.getLatLng()

setPosition(p)

}

}}

>

{

zoom &&

<FlyToMarker

position={position}

/>

}


<Popup

offset={[0,-35]}

closeButton={true}

>

<div style={{

width:'240px',

paddingTop:'10px'

}}>


<input

value={nome}

onChange={(e)=>

setNome(
e.target.value
)}

style={{

width:'100%',

padding:'12px',

borderRadius:'10px',

border:'1px solid #D6DEE8',

marginBottom:'15px',

boxSizing:'border-box',

fontSize:'15px'

}}

/>



<div style={{

marginBottom:'12px',

color:'#334155'

}}>

<b>

Lat:

</b>

{' '}

{position.lat.toFixed(5)}

</div>



<div style={{

marginBottom:'15px',

color:'#334155'

}}>

<b>

Lon:

</b>

{' '}

{position.lng.toFixed(5)}

</div>



<div style={{

fontSize:'13px',

color:'#64748B',

marginBottom:'20px'

}}>

📍 Trascina il pin per cambiare posizione

</div>



<button

onClick={salva}

style={{

width:'100%',

padding:'14px',

background:'#234E70',

color:'white',

border:'none',

borderRadius:'14px',

cursor:'pointer',

fontWeight:'600',

fontSize:'16px'

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
spots=[],
refreshData

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

refreshData={refreshData}

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