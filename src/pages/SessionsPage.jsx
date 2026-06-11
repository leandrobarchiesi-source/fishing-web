import SessionCard from '../components/SessionCard'
import { t } from '../i18n/t'

export default function SessionsPage({

sessions,
onView,
onEdit,
onDelete,
addSession

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

  alignItems:'flex-start',

  flexWrap:'wrap',

  gap:'20px',

  marginBottom:'40px'

}}>

<div>

<h1 style={{

  fontSize:'58px',

  margin:'0',

  fontWeight:'700'

}}>

  {t(language,'allSessions')}

</h1>

<p style={{

  color:'#64748B',

  fontSize:'18px',

  marginTop:'20px',

  marginBottom:0

}}>

{t(language,'manageSessions')}

</p>

</div>



<button

onClick={addSession}

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

➕ {t(language,'newSession')}
</button>

</div>



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

{t(language,'noSessions')}

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