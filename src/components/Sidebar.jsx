import {
 FaHome,
 FaFish,
 FaMapMarkerAlt,
 FaChartBar,
 FaUser,
 FaSignOutAlt
}
from 'react-icons/fa'


export default function Sidebar({

selected,
setSelected,
logout

}){

return(

<div style={{

width:'240px',

background:'#234E70',

color:'white',

height:'100vh',

padding:'20px',

position:'fixed',

left:0,

top:0,

display:'flex',

flexDirection:'column',

boxSizing:'border-box',

boxShadow:
'2px 0 15px rgba(0,0,0,.15)'

}}>


<div style={{

  textAlign:'center',

  paddingBottom:'20px',

  borderBottom:
  '1px solid rgba(255,255,255,.08)',

  marginBottom:'30px'

}}>

<img

  src="/logo.png"

  alt="FishingTrack"

  style={{

    width:'170px',

    maxWidth:'100%',

    height:'auto',

    display:'block',

    margin:'0 auto'

  }}

/>

</div>


<MenuItem

icon={<FaHome/>}

label="Dashboard"

active={
selected==="dashboard"
}

onClick={()=>

setSelected(
"dashboard"
)

}

/>


<MenuItem

icon={<FaFish/>}

label="Sessioni"

active={
selected==="sessioni"
}

onClick={()=>

setSelected(
"sessioni"
)

}

/>


<MenuItem

icon={<FaMapMarkerAlt/>}

label="Spot"

active={
selected==="spot"
}

onClick={()=>

setSelected(
"spot"
)

}

/>


<MenuItem

icon={<FaChartBar/>}

label="Statistiche"

active={
selected==="statistiche"
}

onClick={()=>

setSelected(
"statistiche"
)

}

/>


<MenuItem

icon={<FaUser/>}

label="Profilo"

active={
selected==="profilo"
}

onClick={()=>

setSelected(
"profilo"
)

}

/>



<div style={{

marginTop:'auto'

}}>

<hr style={{

border:'none',

borderTop:
'1px solid rgba(255,255,255,.08)',

marginBottom:'15px'

}}/>


<MenuItem

icon={<FaSignOutAlt/>}

label="Logout"

onClick={logout}

/>

</div>


</div>

)

}



function MenuItem({

icon,
label,
active,
onClick

}){

return(

<div

onClick={onClick}

style={{

display:'flex',

alignItems:'center',

gap:'14px',

padding:'14px',

cursor:'pointer',

borderRadius:'14px',

marginBottom:'8px',

transition:'all .2s ease',

background:

active

?

'#304567'

:

'transparent'

}}

onMouseEnter={(e)=>{

if(!active){

e.currentTarget.style.background=

'rgba(255,255,255,.12)'

}

}}

onMouseLeave={(e)=>{

if(!active){

e.currentTarget.style.background=

'transparent'

}

}}

>

<div style={{

fontSize:'16px',

width:'20px'

}}>

{icon}

</div>


<div style={{

fontSize:'16px'

}}>

{label}

</div>

</div>

)

}