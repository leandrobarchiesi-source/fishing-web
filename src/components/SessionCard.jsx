import {
FaEye,
FaEdit,
FaTrash
}
from 'react-icons/fa'


export default function SessionCard({

session,
onView,
onEdit,
onDelete

}){


const data=

new Date(
session.data
)

.toLocaleDateString()



return(

<div style={{

background:'white',

padding:'18px 25px',

borderRadius:'20px',

marginBottom:'15px',

boxShadow:
'0 2px 12px rgba(0,0,0,.08)',

width:'100%',

maxWidth:'950px',

display:'flex',

alignItems:'center',

justifyContent:'space-between',

boxSizing:'border-box'

}}>


<div style={{

display:'grid',

gridTemplateColumns:
'280px 180px',

alignItems:'center',

gap:'30px',

flex:1

}}>


<div>

<h3 style={{

margin:0,

fontSize:'20px',

color:'#334155'

}}>

{session.luogo}

</h3>

</div>


<div style={{

fontSize:'14px',

color:'#64748B'

}}>

{session.tipo_pescata}

{" • "}

{data}

</div>


</div>



<div style={{

display:'flex',

gap:'10px'

}}>

<IconButton

onClick={()=>

onView(session)

}

>

<FaEye/>

</IconButton>


<IconButton

onClick={()=>

onEdit(session)

}

>

<FaEdit/>

</IconButton>


<IconButton

danger

onClick={()=>

onDelete(session)

}

>

<FaTrash/>

</IconButton>

</div>

</div>

)

}



function IconButton({

children,
onClick,
danger

}){

return(

<button

onClick={onClick}

style={{

width:'42px',

height:'42px',

border:'none',

borderRadius:'12px',

cursor:'pointer',

background:

danger

?

'#FFE5E5'

:

'#EEF4F8',

color:

danger

?

'#CC3333'

:

'#234E70'

}}

>

{children}

</button>

)

}