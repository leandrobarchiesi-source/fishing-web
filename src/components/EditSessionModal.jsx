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

const [tipo,setTipo]=
useState("")

const [temperatura,
setTemperatura]=
useState("")

const [pressione,
setPressione]=
useState("")

const [vento,
setVento]=
useState("")

const [condizioni,
setCondizioni]=
useState("")

const [fase,
setFase]=
useState("")

const [note,
setNote]=
useState("")


useEffect(()=>{

if(session){

setLuogo(
session.luogo||""
)

setTipo(
session.tipo_pescata||""
)

setTemperatura(
session.temperatura||""
)

setPressione(
session.pressione||""
)

setVento(
session.vento||""
)

setCondizioni(
session.condizioni||""
)

setFase(
session.fase_lunare||""
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

style={styleInput}

/>


<label>

Tipo pescata

</label>

<input

value={tipo}

onChange={(e)=>

setTipo(
e.target.value
)}

style={styleInput}

/>


<label>

Temperatura

</label>

<input

value={temperatura}

onChange={(e)=>

setTemperatura(
e.target.value
)}

style={styleInput}

/>


<label>

Pressione

</label>

<input

value={pressione}

onChange={(e)=>

setPressione(
e.target.value
)}

style={styleInput}

/>


<label>

Vento

</label>

<input

value={vento}

onChange={(e)=>

setVento(
e.target.value
)}

style={styleInput}

/>


<label>

Condizioni

</label>

<input

value={condizioni}

onChange={(e)=>

setCondizioni(
e.target.value
)}

style={styleInput}

/>


<label>

Fase lunare

</label>

<input

value={fase}

onChange={(e)=>

setFase(
e.target.value
)}

style={styleInput}

/>


<label>

Note

</label>

<textarea

rows={5}

value={note}

onChange={(e)=>

setNote(
e.target.value
)}

style={{

...styleInput,

height:120

}}

/>


<br/>

<div style={{

display:'flex',

gap:10,

marginTop:20

}}>

<button

onClick={()=>

onSave({

...session,

luogo,

tipo_pescata:tipo,

temperatura,

pressione,

vento,

condizioni,

fase_lunare:fase,

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


const styleInput={

width:'100%',

padding:'10px',

marginBottom:'15px',

borderRadius:'8px',

border:'1px solid #ccc'

}