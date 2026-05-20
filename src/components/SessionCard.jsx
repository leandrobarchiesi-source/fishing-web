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

return(

<div style={{

background:'white',

padding:30,

borderRadius:20,

marginBottom:15,

boxShadow:
'0 2px 10px rgba(0,0,0,.1)'

}}>

<h3>

{session.luogo}

</h3>

<p>

{session.tipo_pescata}

</p>

<p>

{

new Date(
session.data
)

.toLocaleDateString()

}

</p>

<div style={{

display:'flex',

gap:10

}}>

<button
onClick={()=>
onView(session)
}>
<FaEye/>
</button>

<button
onClick={()=>
onEdit(session)
}>
<FaEdit/>
</button>

<button
onClick={()=>
onDelete(session)
}>
<FaTrash/>
</button>

</div>

</div>

)

}