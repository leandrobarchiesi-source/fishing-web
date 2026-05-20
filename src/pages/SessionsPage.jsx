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

Gestisci e modifica le sessioni

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

onView={()=>
onView(s)
}

onEdit={()=>
onEdit(s)
}

onDelete={()=>
onDelete(s)
}

/>

)

}

</div>

)

}