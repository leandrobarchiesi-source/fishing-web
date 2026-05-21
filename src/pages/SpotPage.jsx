import SpotPickerMap from '../components/SpotPickerMap'

export default function SpotPage({

spots,
addSpot,
onDelete

}){

return(

<div style={{

width:'100%',

maxWidth:'1200px',

margin:'0 auto'

}}>


<div style={{

display:'flex',

justifyContent:'space-between',

alignItems:'center',

flexWrap:'wrap',

gap:'20px',

marginBottom:'25px'

}}>


<div>

<div style={{

display:'flex',

alignItems:'center',

gap:'12px',

marginBottom:'6px'

}}>

<div style={{

fontSize:'34px'

}}>

📍

</div>


<h1 style={{

fontSize:'52px',

margin:0,

fontWeight:'700',

lineHeight:1

}}>

Spot

</h1>

</div>


<p style={{

color:'#64748B',

fontSize:'18px',

margin:0,

paddingLeft:'46px'

}}>

Tutti i tuoi spot sulla mappa

</p>

</div>



<button

onClick={addSpot}

style={{

padding:'14px 25px',

border:'none',

borderRadius:'12px',

background:'#234E70',

color:'white',

cursor:'pointer',

fontSize:'15px',

height:'50px'

}}

>

➕ Aggiungi Spot

</button>

</div>


<div style={{

height:'72vh',

background:'white',

padding:'10px',

borderRadius:'20px',

boxShadow:
'0 2px 12px rgba(0,0,0,.08)'

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