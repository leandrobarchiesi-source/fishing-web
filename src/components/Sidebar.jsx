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

logout

}){

return(

<div style={{

width:240,

background:"#1E293B",

color:"white",

height:"100vh",

padding:20,

position:"fixed",

left:0,

top:0

}}>

<h2>

🎣 Fishing

</h2>

<br/>

<MenuItem
icon={<FaHome/>}
label="Dashboard"
/>

<MenuItem
icon={<FaFish/>}
label="Sessioni"
/>

<MenuItem
icon={<FaMapMarkerAlt/>}
label="Spot"
/>

<MenuItem
icon={<FaChartBar/>}
label="Statistiche"
/>

<MenuItem
icon={<FaUser/>}
label="Profilo"
/>

<div
style={{
marginTop:50
}}
>

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
onClick

}){

return(

<div

onClick={onClick}

style={{

display:'flex',

gap:10,

padding:15,

cursor:'pointer',

borderRadius:10,

marginBottom:5

}}>

{icon}

{label}

</div>

)

}