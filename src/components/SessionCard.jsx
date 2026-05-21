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

maxWidth:'900px',

boxSizing:'border-box'

}}>


<div style={{

display:'flex',

justifyContent:'space-between',

alignItems:'center',

flexWrap:'wrap',

gap:'15px'

}}>



<div style={{

display:'flex',

alignItems:'center',

gap:'20px',

flexWrap:'wrap',

flex:1

}}>


<h3 style={{

margin:0,

fontSize:'20px',

color:'#334155',

minWidth:'220px'

}}>

{session.luogo}

</h3>



<div style={{

fontSize:'14px',

color:'#64748B',

whiteSpace:'nowrap'

}}>

{session.tipo_pescata}

{" • "}

{data}

</div>

</div>



<div style={{

display:'flex',

gap:'10px',

flexShrink:0

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