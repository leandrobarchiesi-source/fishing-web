import SessionCard from '../components/SessionCard'

export default function SessionsPage({

sessions,
onView,
onEdit,
onDelete

}){

return(

<div style={{

width:'100%',

maxWidth:'1200px',

margin:'0 auto'

}}>


<h1 style={{

fontSize:'58px',

textAlign:'center',

margin:'0',

fontWeight:'700'

}}>

🎣 Tutte le Sessioni

</h1>


<p style={{

textAlign:'center',

color:'#64748B',

fontSize:'18px',

marginTop:'10px',

marginBottom:'45px'

}}>

Gestisci e modifica le sessioni

</p>



<div style={{

display:'flex',

flexDirection:'column',

alignItems:'center'

}}>

{

sessions.length===0

?

<div style={{

background:'white',

padding:'25px',

borderRadius:'20px',

width:'100%',

maxWidth:'900px',

textAlign:'center',

boxShadow:
'0 2px 12px rgba(0,0,0,.08)'

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

</div>

)

}