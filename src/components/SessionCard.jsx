import {
FaEye,
FaEdit,
FaTrash
}
from 'react-icons/fa'

import { t } from '../i18n/t'

export default function SessionCard({

  session,
  onView,
  onEdit,
  onDelete,
  language

}){



const data=

new Date(
session.data
)

.toLocaleDateString()

function getTipo(tipo){

  switch(tipo){

    case 'Gara':
      return t(language,'gara')

    case 'Test-Match':
      return t(language,'testMatch')

    case 'Pool':
      return t(language,'pool')

    case 'Prova':
      return t(language,'prova')

    case 'Libera':
      return t(language,'libera')

    default:
      return tipo
  }

}

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

{getTipo(session.tipo_pescata)}
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
  title={t(language,'view')}
  onClick={()=>onView(session)}
>
  <FaEye/>
</IconButton>

<IconButton
  title={t(language,'edit')}
  onClick={()=>onEdit(session)}
>
  <FaEdit/>
</IconButton>

<IconButton
  title={t(language,'delete')}
  danger
  onClick={()=>onDelete(session)}
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
  danger,
  title

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