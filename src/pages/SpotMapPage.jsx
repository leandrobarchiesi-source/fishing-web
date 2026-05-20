import { MapContainer, TileLayer } from 'react-leaflet'
import L from 'leaflet'

import 'leaflet/dist/leaflet.css'

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'


delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({

iconRetinaUrl:markerIcon2x,

iconUrl:markerIcon,

shadowUrl:markerShadow

})


export default function SpotMapPage(){

return(

<div>

<h1>

🗺 Mappa Spot

</h1>

<div style={{

height:'80vh',

width:'100%',

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

attribution='OpenStreetMap'

url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

/>

</MapContainer>

</div>

</div>

)

}