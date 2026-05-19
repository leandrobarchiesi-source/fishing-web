import SessionCard
from
'../components/SessionCard'

export default function Dashboard({

sessionCount,

spotCount,

sessions

}){

return(

<div>

<h1>

Bentornato 🎣

</h1>

<div style={{

display:'flex',

gap:20

}}>

<Box
title="🎣 Sessioni"
value={sessionCount}
/>

<Box
title="📍 Spot"
value={spotCount}
/>

</div>

<br/>

<h2>

Ultime sessioni

</h2>

{

sessions.map(

s=>

<SessionCard

key={s.id}

session={s}

onView={()=>{}}

onEdit={()=>{}}

onDelete={()=>{}}

/>

)

}

</div>

)

}

function Box({

title,
value

}){

return(

<div style={{

padding:20,

width:180,

background:"#F1F5F9",

borderRadius:20

}}>

<h3>

{title}

</h3>

<h1>

{value}

</h1>

</div>

)

}