import SpotPickerMap from '../components/SpotPickerMap'

export default function SpotPage({

spots,
addSpot,
onDelete

}){

return(

<div>

<div style={{

display:'flex',

justifyContent:'space-between',

alignItems:'center',

marginBottom:20

}}>

<div>

<h1>

📍 Spot

</h1>

<p>

Tutti i tuoi spot sulla mappa

</p>

</div>


<button

onClick={addSpot}

style={{

padding:'12px 20px',

border:'none',

borderRadius:'12px',

background:'#17233C',

color:'white',

cursor:'pointer'

}}

>

➕ Aggiungi Spot

</button>

</div>


<div style={{

height:'75vh',

background:'white',

padding:'10px',

borderRadius:'20px'

}}>

<SpotPickerMap

position={null}

setPosition={()=>{}}

spots={spots}

onDelete={onDelete}

/>

</div>

</div>

)

}