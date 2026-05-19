import Modal from 'react-modal'
import {useEffect,useState} from 'react'

Modal.setAppElement('#root')

export default function EditSessionModal({

session,

isOpen,

onClose,

onSave

}){

const [luogo,setLuogo]=
useState("")

const [note,setNote]=
useState("")


useEffect(()=>{

if(session){

setLuogo(
session.luogo||""
)

setNote(
session.note||""
)

}

},[session])


if(!session){

return null

}


return(

<Modal

isOpen={isOpen}

onRequestClose={onClose}

style={{

content:{

maxWidth:'700px',

margin:'auto',

height:'fit-content',

borderRadius:'20px',

padding:'30px'

},

overlay:{

background:
'rgba(0,0,0,.5)'

}

}}

>

<h2>

✏ Modifica Sessione

</h2>

<br/>

<label>

Luogo

</label>

<input

value={luogo}

onChange={(e)=>

setLuogo(
e.target.value
)}

style={{

width:'100%',

padding:10,

marginBottom:15

}}

/>


<label>

Note

</label>

<textarea

value={note}

onChange={(e)=>

setNote(
e.target.value
)}

rows={5}

style={{

width:'100%',

padding:10

}}

/>

<br/><br/>

<div style={{

display:'flex',

gap:10

}}>

<button

onClick={()=>

onSave({

...session,

luogo,

note

})

}

>

Salva

</button>


<button

onClick={onClose}

>

Annulla

</button>

</div>

</Modal>

)

}