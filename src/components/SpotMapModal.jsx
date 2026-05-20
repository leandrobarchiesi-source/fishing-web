import Modal from 'react-modal'
import SpotPickerMap from './SpotPickerMap'

Modal.setAppElement('#root')

export default function SpotMapModal({

isOpen,
onClose,
spots

}){

return(

<Modal

isOpen={isOpen}

onRequestClose={onClose}

style={{

content:{

top:'5%',

left:'5%',

right:'5%',

bottom:'5%',

padding:'20px',

borderRadius:'20px'

},

overlay:{

background:
'rgba(0,0,0,.5)'

}

}}

>

<div style={{

display:'flex',

justifyContent:'space-between',

alignItems:'center'

}}>

<h2>

🗺 Mappa Spot

</h2>

<button

onClick={onClose}

>

Chiudi

</button>

</div>

<br/>

<SpotPickerMap

position={null}

setPosition={()=>{}}

spots={spots}

/>

</Modal>

)

}