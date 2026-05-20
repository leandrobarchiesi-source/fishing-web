import {useState} from 'react'

import SessionCard from '../components/SessionCard'
import SessionModal from '../components/SessionModal'
import EditSessionModal from '../components/EditSessionModal'

import {supabase} from '../supabase'


export default function Dashboard({

sessionCount,
spotCount,
sessions,
refreshData

}){

const [
selectedSession,
setSelectedSession
]=useState(null)

const [
editingSession,
setEditingSession
]=useState(null)



async function eliminaSessione(session){

if(
!window.confirm(
"Eliminare sessione?"
)
){
return
}

const {error}=

await supabase

.from(
'fishing_sessions'
)

.delete()

.eq(
'id',
session.id)


if(error){

console.log(error)

return

}

await refreshData()

}



async function salvaModifica(
sessione
){

const {error}=

await supabase

.from(
'fishing_sessions'
)

.update({

luogo:
sessione.luogo,

tipo_pescata:
sessione.tipo_pescata,

data:
sessione.data,

ora_inizio:
sessione.ora_inizio,

ora_fine:
sessione.ora_fine,

temperatura:
sessione.temperatura,

pressione:
sessione.pressione,

vento:
sessione.vento,

fase_lunare:
sessione.fase_lunare,

note:
sessione.note

})

.eq(
'id',
sessione.id)


if(error){

console.log(error)

return

}

setEditingSession(
null
)

await refreshData()

}



return(

<div style={{

width:'100%',

maxWidth:'1200px',

margin:'0 auto'

}}>

<h1 style={{

fontSize:'52px',

marginTop:0,

marginBottom:'30px',

fontWeight:'700'

}}>

Bentornato
</h1>

<br/>

<div style={{

display:'flex',

justifyContent:'center',

gap:'25px',

marginBottom:'50px',

flexWrap:'wrap'

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


<h2 style={{

width:'100%',

textAlign:'center',

marginBottom:'35px'

}}>
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

onSave={
salvaModifica
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