import {MapContainer,TileLayer,Marker,useMapEvents} from 'react-leaflet'
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

setPosition(

e.latlng

)

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
setPosition

}){

return(

<MapContainer

center={[41.9,12.5]}

zoom={6}

style={{

height:'400px',

borderRadius:'20px'

}}

>

<TileLayer

url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

/>

<LocationMarker

position={position}

setPosition={setPosition}

/>

</MapContainer>

)

}