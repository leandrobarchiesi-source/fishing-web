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

padding:'20px 25px',

borderRadius:'20px',

marginBottom:'15px',

boxShadow:
'0 2px 12px rgba(0,0,0,.08)',

maxWidth:'1000px',

width:'100%',

display:'flex',

alignItems:'center',

justifyContent:'space-between',

boxSizing:'border-box'

}}>


<div style={{

display:'flex',

alignItems:'center',

gap:'20px',

flex:1

}}>

<div>

<h3 style={{

margin:'0',

fontSize:'22px',

color:'#334155'

}}>

{session.luogo}

</h3>


<div style={{

marginTop:'8px',

color:'#64748B',

fontSize:'14px'

}}>

{session.tipo_pescata}

•

{data}

</div>

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

width:'40px',

height:'40px',

border:'none',

borderRadius:'10px',

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