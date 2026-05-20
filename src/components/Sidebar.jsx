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

width:240,

background:"#17233C",

color:"white",

height:"100vh",

padding:"20px",

position:"fixed",

left:0,

top:0,

display:'flex',

flexDirection:'column',

boxSizing:'border-box'

}}>

<h2 style={{

marginBottom:30

}}>

🎣 Fishing

</h2>


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

borderColor:"#334155",

marginBottom:15

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

gap:12,

padding:'14px',

cursor:'pointer',

borderRadius:12,

marginBottom:8,

transition:
'0.2s',

background:

active

?

'#304567'

:

'transparent'

}}

>

<div>

{icon}

</div>

<div>

{label}

</div>

</div>

)

}