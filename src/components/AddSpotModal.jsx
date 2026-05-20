import Modal from 'react-modal'
import {useState} from 'react'

import SpotPickerMap from './SpotPickerMap'

Modal.setAppElement('#root')


export default function AddSpotModal({

isOpen,
onClose,
onSave

}){

const [nome,setNome]=
useState("")

const [position,
setPosition]=
useState(null)


return(

<Modal

isOpen={isOpen}

onRequestClose={onClose}

style={{

content:{

maxWidth:'800px',

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


<SpotPickerMap

position={position}

setPosition={setPosition}

/>

<br/>


{

position

&&

<div>

Lat:

{position.lat.toFixed(6)}

<br/>

Lon:

{position.lng.toFixed(6)}

</div>

}


<br/>


<button

onClick={()=>{

if(!position){

alert(
"Seleziona punto"
)

return

}

onSave({

nome,

latitudine:
position.lat,

longitudine:
position.lng

})

}}

>

Salva Spot

</button>

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