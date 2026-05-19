import Modal from 'react-modal'
import {useEffect,useState} from 'react'

Modal.setAppElement('#root')

export default function EditSessionModal({

session,
isOpen,
onClose,
onSave

}){

const [luogo,setLuogo]=useState("")
const [tipo,setTipo]=useState("")
const [data,setData]=useState("")
const [oraInizio,setOraInizio]=useState("")
const [oraFine,setOraFine]=useState("")
const [temperatura,setTemperatura]=useState("")
const [pressione,setPressione]=useState("")
const [vento,setVento]=useState("")
const [fase,setFase]=useState("")
const [note,setNote]=useState("")


useEffect(()=>{

if(session){

setLuogo(
session.luogo||""
)

setTipo(
session.tipo_pescata||""
)

setData(
session.data?.substring(0,10)||""
)

setOraInizio(

session.ora_inizio

? new Date(
session.ora_inizio
)

.toISOString()

.substring(11,16)

: ""

)

setOraFine(

session.ora_fine

? new Date(
session.ora_fine
)

.toISOString()

.substring(11,16)

: ""

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

🎣 Modifica Sessione

</h2>

<br/>

<label>Luogo</label>
<input
value={luogo}
onChange={(e)=>setLuogo(e.target.value)}
style={styleInput}
/>

<label>Tipo</label>
<input
value={tipo}
onChange={(e)=>setTipo(e.target.value)}
style={styleInput}
/>

<label>Data</label>
<input
type='date'
value={data}
onChange={(e)=>setData(e.target.value)}
style={styleInput}
/>

<div style={{
display:'flex',
gap:10
}}>

<div style={{flex:1}}>

<label>

Ora inizio

</label>

<input
type='time'
value={oraInizio}
onChange={(e)=>
setOraInizio(
e.target.value
)
}
style={styleInput}
/>

</div>


<div style={{flex:1}}>

<label>

Ora fine

</label>

<input
type='time'
value={oraFine}
onChange={(e)=>
setOraFine(
e.target.value
)
}
style={styleInput}
/>

</div>

</div>


<label>Temperatura</label>
<input
value={temperatura}
onChange={(e)=>
setTemperatura(
e.target.value
)}
style={styleInput}
/>

<label>Pressione</label>
<input
value={pressione}
onChange={(e)=>
setPressione(
e.target.value
)}
style={styleInput}
/>

<label>Vento</label>
<input
value={vento}
onChange={(e)=>
setVento(
e.target.value
)}
style={styleInput}
/>

<label>Fase lunare</label>
<input
value={fase}
onChange={(e)=>
setFase(
e.target.value
)}
style={styleInput}
/>

<label>Note</label>

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

gap:10

}}>

<button

onClick={()=>{

onSave({

...session,

luogo,

tipo_pescata:tipo,

data,

ora_inizio:
`${data}T${oraInizio}:00`,

ora_fine:
`${data}T${oraFine}:00`,

temperatura,

pressione,

vento,

fase_lunare:fase,

note

})

}}

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