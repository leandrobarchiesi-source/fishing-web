import {

FaEye,
FaEdit,
FaTrash,
FaMap,
FaPlus

}

from 'react-icons/fa'


export default function SpotPage({

spots,

onView,

onEdit,

onDelete,

openMap,

addSpot

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

Gestisci i tuoi spot

</p>

</div>


<div style={{

display:'flex',

gap:10

}}>

<button

onClick={addSpot}

style={buttonStyle}

>

<FaPlus/>

{" "}Aggiungi Spot

</button>


<button

onClick={openMap}

style={buttonStyle}

>

<FaMap/>

{" "}Apri mappa

</button>

</div>

</div>



{

spots.length===0

?

<div style={{

background:'white',

padding:20,

borderRadius:20

}}>

Nessuno spot

</div>

:

spots.map(

spot=>

<div

key={spot.id}

style={{

background:'white',

padding:20,

borderRadius:20,

marginBottom:15,

boxShadow:
'0 2px 10px rgba(0,0,0,.1)'

}}

>

<h3>

{

spot.nome

||

spot.luogo

||

"Spot"

}

</h3>

<p>

📍

{

spot.latitudine

}

,

{

spot.longitudine

}

</p>


<div style={{

display:'flex',

gap:10

}}>

<button
onClick={()=>
onView(spot)
}
>
<FaEye/>
</button>

<button
onClick={()=>
onEdit(spot)
}
>
<FaEdit/>
</button>

<button
onClick={()=>
onDelete(spot)
}
>
<FaTrash/>
</button>

</div>

</div>

)

}

</div>

)

}



const buttonStyle={

padding:'12px 18px',

border:'none',

borderRadius:'12px',

background:'#17233C',

color:'white',

cursor:'pointer',

display:'flex',

alignItems:'center',

gap:8

}