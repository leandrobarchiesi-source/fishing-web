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

marginBottom:'10px'

}}>


<div>

<h1 style={{

fontSize:'58px',

margin:'0',

fontWeight:'700'

}}>

📍 Spot

</h1>


<p style={{

color:'#64748B',

fontSize:'18px',

margin:'8px 0 0 0'

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