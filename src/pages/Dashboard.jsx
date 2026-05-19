import { useState } from 'react'

import SessionCard
from '../components/SessionCard'

import SessionModal
from '../components/SessionModal'


export default function Dashboard({

sessionCount,

spotCount,

sessions

}){

const [

selectedSession,

setSelectedSession

]

=

useState(null)


return(

<div>

<h1>

Bentornato 🎣

</h1>

<br/>

<div style={{

display:'flex',

gap:20,

marginBottom:30

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


<h2>

Ultime Sessioni

</h2>

<br/>

{

sessions.length===0

?

<p>

Nessuna sessione

</p>

:

sessions.map(

(s)=>

<SessionCard

key={s.id}

session={s}

onView={(session)=>

setSelectedSession(
session
)

}

onEdit={(session)=>{

console.log(
"modifica",
session
)

}}

onDelete={(session)=>{

console.log(
"elimina",
session
)

}}

/>

)

}


<SessionModal

session={selectedSession}

isOpen={

selectedSession
!=null

}

onClose={()=>

setSelectedSession(
null
)

}

/>

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

width:200,

background:'white',

borderRadius:20,

boxShadow:

'0 2px 10px rgba(0,0,0,.1)'

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