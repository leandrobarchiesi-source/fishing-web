import {useState} from 'react'

import SessionCard
from '../components/SessionCard'

import SessionModal
from '../components/SessionModal'

import EditSessionModal
from '../components/EditSessionModal'

import {supabase}
from '../supabase'


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


const [

editingSession,

setEditingSession

]

=

useState(null)



async function eliminaSessione(

session

){

if(

!window.confirm(

"Eliminare sessione?"

)

){

return

}

await supabase

.from(
'fishing_sessions'
)

.delete()

.eq(
'id',
session.id
)

window.location.reload()

}



async function salvaModifica(

sessione

){

await supabase

.from(
'fishing_sessions'
)

.update({

luogo:
sessione.luogo,

note:
sessione.note

})

.eq(
'id',
sessione.id
)

setEditingSession(
null
)

window.location.reload()

}



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

sessions.map(

(s)=>

<SessionCard

key={s.id}

session={s}

onView={(x)=>

setSelectedSession(x)

}

onEdit={(x)=>

setEditingSession(x)

}

onDelete={(x)=>

eliminaSessione(x)

}

/>

)

}


<SessionModal

session={selectedSession}

isOpen={
selectedSession!=null
}

onClose={()=>

setSelectedSession(null)

}

/>


<EditSessionModal

session={editingSession}

isOpen={
editingSession!=null
}

onClose={()=>

setEditingSession(null)

}

onSave={salvaModifica}

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

<h3>{title}</h3>

<h1>{value}</h1>

</div>

)

}