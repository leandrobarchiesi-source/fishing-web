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

zIndex:10000,

maxWidth:'800px',

margin:'auto',

borderRadius:'20px',

padding:'30px'

},

overlay:{

background:
'rgba(0,0,0,.5)',

zIndex:9999

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


<div style={{

height:'550px',

borderRadius:'15px',

overflow:'hidden',

marginBottom:'15px'

}}>

<SpotPickerMap

position={position}

setPosition={setPosition}

/>

</div>

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


<div style={{

display:'flex',

gap:10,

marginTop:20

}}>

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

style={{

padding:'10px 20px',

background:'#17233C',

color:'white',

border:'none',

borderRadius:'10px',

cursor:'pointer'

}}

>

Salva Spot

</button>


<button

onClick={onClose}

style={{

padding:'10px 20px',

background:'#ddd',

border:'none',

borderRadius:'10px',

cursor:'pointer'

}}

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