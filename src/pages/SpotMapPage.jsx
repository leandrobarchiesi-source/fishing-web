import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

export default function SpotMapPage(){

return(

<div>

<h1>

🗺 Mappa Spot

</h1>

<div style={{

height:'80vh',

width:'100%'

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