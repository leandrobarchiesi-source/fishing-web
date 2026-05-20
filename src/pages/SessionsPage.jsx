import SessionCard from '../components/SessionCard'

export default function SessionsPage({

sessions,

onView,

onEdit,

onDelete

}){

return(

<div>

<h1>

🎣 Tutte le Sessioni

</h1>

<p>

Gestisci le tue sessioni di pesca

</p>

<br/>

{

sessions.length===0

?

<div style={{

background:'white',

padding:20,

borderRadius:20

}}>

Nessuna sessione

</div>

:

sessions.map(

s=>

<SessionCard

key={s.id}

session={s}

onView={onView}

onEdit={onEdit}

onDelete={onDelete}

/>

)

}

</div>

)

}