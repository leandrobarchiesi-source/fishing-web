import Modal from 'react-modal'

Modal.setAppElement('#root')

export default function SessionModal({

session,

isOpen,

onClose

}){

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

🎣 Dettaglio Sessione

</h2>

<hr/>

<p>

<b>Luogo:</b>

{session.luogo}

</p>

<p>

<b>Tipo:</b>

{session.tipo_pescata}

</p>

<p>

<b>Data:</b>

{

new Date(
session.data
)

.toLocaleDateString()

}

</p>

<p>

<b>Temperatura:</b>

{session.temperatura ?? "-"}

°C

</p>

<p>

<b>Pressione:</b>

{session.pressione ?? "-"}

</p>

<p>

<b>Vento:</b>

{session.vento ?? "-"}

</p>

<p>

<b>Condizioni:</b>

{session.condizioni ?? "-"}

</p>

<p>

<b>Fase Lunare:</b>

{session.fase_lunare ?? "-"}

</p>

<p>

<b>Note:</b>

</p>

<div style={{

padding:15,

background:"#F1F5F9",

borderRadius:10

}}>

{session.note ?? "-"}

</div>

<br/>

<button
onClick={onClose}
>

Chiudi

</button>

</Modal>

)

}