import {useState} from 'react'

export default function AddSessionModal({

isOpen,
onClose,
onSave,
spots

}){

const [spotId,setSpotId]=useState("")
const [tipo,setTipo]=useState("Libera")
const [data,setData]=useState("")
const [oraInizio,setOraInizio]=useState("")
const [oraFine,setOraFine]=useState("")
const [note,setNote]=useState("")


if(!isOpen){

return null

}


function salva(){

const spot=

spots.find(

s=>s.id===spotId

)


if(!spot){

alert(
"Seleziona uno spot"
)

return

}


onSave({

spot_id:
spot.id,

luogo:
spot.nome,

latitudine:
spot.latitudine,

longitudine:
spot.longitudine,

tipo_pescata:
tipo,

data,

ora_inizio:
oraInizio,

ora_fine:
oraFine,

note

})

}



return(

<div style={overlay}>


<div style={modal}>


<h2 style={{

marginTop:0,

textAlign:'center'

}}>

➕ Nuova Sessione

</h2>



<label>

Spot

</label>

<select

value={spotId}

onChange={(e)=>

setSpotId(
e.target.value
)}

style={input}

>

<option value="">

Seleziona spot

</option>

{

spots.map(

s=>

<option

key={s.id}

value={s.id}

>

{s.nome}

</option>

)

}

</select>



<label>

Tipo pescata

</label>

<select

value={tipo}

onChange={(e)=>

setTipo(
e.target.value
)}

style={input}

>

<option value="Gara">

Gara

</option>

<option value="Test-Match">

Test-Match

</option>

<option value="Pool">

Pool

</option>

<option value="Prova">

Prova

</option>

<option value="Libera">

Libera

</option>

</select>


<label>

Data

</label>

<input

type='date'

value={data}

onChange={(e)=>

setData(
e.target.value
)}

style={input}

/>



<label>

Ora inizio

</label>

<input

type='time'

value={oraInizio}

onChange={(e)=>

setOraInizio(
e.target.value
)}

style={input}

/>



<label>

Ora fine

</label>

<input

type='time'

value={oraFine}

onChange={(e)=>

setOraFine(
e.target.value
)}

style={input}

/>



<label>

Note

</label>

<textarea

rows={4}

value={note}

onChange={(e)=>

setNote(
e.target.value
)}

style={input}

/>



<div style={{

display:'flex',

justifyContent:'space-between',

marginTop:'25px'

}}>

<button

onClick={onClose}

style={cancelBtn}

>

Annulla

</button>


<button

onClick={salva}

style={saveBtn}

>

Salva

</button>

</div>

</div>

</div>

)

}



const overlay={

position:'fixed',

top:0,
left:0,
right:0,
bottom:0,

background:
'rgba(0,0,0,.4)',

display:'flex',

justifyContent:'center',

alignItems:'center',

zIndex:9999

}


const modal={

background:'white',

width:'500px',

padding:'30px',

borderRadius:'25px',

maxHeight:'85vh',

overflowY:'auto'

}


const input={

width:'100%',

padding:'12px',

marginTop:'8px',

marginBottom:'15px',

borderRadius:'10px',

border:'1px solid #ddd',

boxSizing:'border-box'

}


const saveBtn={

padding:'12px 20px',

background:'#234E70',

color:'white',

border:'none',

borderRadius:'12px',

cursor:'pointer'

}


const cancelBtn={

padding:'12px 20px',

background:'#ddd',

border:'none',

borderRadius:'12px',

cursor:'pointer'

}