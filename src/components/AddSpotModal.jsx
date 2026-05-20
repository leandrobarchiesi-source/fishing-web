import Modal from 'react-modal'
import {useState} from 'react'

Modal.setAppElement('#root')

export default function AddSpotModal({

isOpen,
onClose,
onSave

}){

const [nome,setNome]=
useState("")

const [lat,setLat]=
useState("")

const [lon,setLon]=
useState("")


return(

<Modal

isOpen={isOpen}

onRequestClose={onClose}

style={{

content:{

maxWidth:'500px',

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

📍 Nuovo Spot

</h2>

<br/>

<input

placeholder='Nome spot'

value={nome}

onChange={(e)=>

setNome(
e.target.value
)}

style={styleInput}

/>


<input

placeholder='Latitudine'

value={lat}

onChange={(e)=>

setLat(
e.target.value
)}

style={styleInput}

/>


<input

placeholder='Longitudine'

value={lon}

onChange={(e)=>

setLon(
e.target.value
)}

style={styleInput}

/>

<br/>

<div style={{

display:'flex',

gap:10

}}>

<button

onClick={()=>{

onSave({

nome,

latitudine:
parseFloat(lat),

longitudine:
parseFloat(lon)

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

borderRadius:'10px',

border:'1px solid #ccc'

}