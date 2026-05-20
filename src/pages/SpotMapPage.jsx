import SpotPickerMap from '../components/SpotPickerMap'

export default function SpotMapPage({

spots

}){

return(

<div>

<div style={{

display:'flex',

justifyContent:'space-between',

alignItems:'center'

}}>

<h1>

🗺 Mappa Spot

</h1>

<button

onClick={()=>{

window.history.back()

}}

style={{

padding:'10px 15px',

border:'none',

borderRadius:'10px',

background:'#17233C',

color:'white'

}}

>

Indietro

</button>

</div>

<br/>


<SpotPickerMap

position={null}

setPosition={()=>{}}

spots={spots}

/>

</div>

)

}