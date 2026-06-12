import Modal from 'react-modal'
import { t } from '../i18n/t'


Modal.setAppElement('#root')

export default function SessionModal({

session,

isOpen,

onClose,

language


}){

if(!session){

return null

}

const oraInizio =

  session.ora_inizio

    ?

    new Date(
      session.ora_inizio
    )

    .toLocaleTimeString(
      'it-IT',
      {
        hour:'2-digit',
        minute:'2-digit'
      }
    )

    :

    '-'


const oraFine =

  session.ora_fine

    ?

    new Date(
      session.ora_fine
    )

    .toLocaleTimeString(
      'it-IT',
      {
        hour:'2-digit',
        minute:'2-digit'
      }
    )

    :

    '-'

return(

<Modal

isOpen={isOpen}

onRequestClose={onClose}

style={{

  content:{

    maxWidth:'900px',

    width:'90%',

    maxHeight:'80vh',

    margin:'auto',

    borderRadius:'20px',

    padding:'30px',

    overflowY:'auto'

  },

  overlay:{

    background:
      'rgba(0,0,0,.5)'

  }

}}
>

<h2>

  🎣 {t(language,'sessionDetails')}

</h2>

<div style={{

  display:'grid',

  gridTemplateColumns:'180px 1fr',

  rowGap:'4px',

  marginBottom:'4px'

}}>

  <b>{t(language,'location')}</b>
  <span>{session.luogo}</span>

  <b>{t(language,'type')}</b>
  <span>{session.tipo_pescata}</span>

  <b>{t(language,'date')}</b>
  <span>
    {new Date(session.data).toLocaleDateString()}
  </span>

  <b>{t(language,'startTime')}</b>
  <span>{oraInizio}</span>

  <b>{t(language,'endTime')}</b>
  <span>{oraFine}</span>

  <b>{t(language,'waterTemperature')}</b>
  <span>
    {session.temperatura_acqua ?? '-'} °C
  </span>

</div>


<div style={{

  background:'#F8FAFC',

  border:'1px solid #E2E8F0',

  borderRadius:'12px',

  padding:'4px',

  marginBottom:'2px'

}}>

  <h4>

    {t(language,'weatherData')}

  </h4>

  <div style={{

    display:'grid',

    gridTemplateColumns:'180px 1fr',

    rowGap:'4px'

  }}>

    <b>{t(language,'temperature')}</b>
    <span>{session.temperatura ?? '-'} °C</span>

    <b>{t(language,'pressure')}</b>
    <span>{session.pressione ?? '-'}</span>

    <b>{t(language,'wind')}</b>
    <span>{session.vento ?? '-'}</span>

    <b>{t(language,'conditions')}</b>
    <span>{session.condizioni ?? '-'}</span>

    <b>{t(language,'moonPhase')}</b>
    <span>{session.fase_lunare ?? '-'}</span>

  </div>

</div>

<h4>

  {t(language,'notes')}

</h4>

<div style={{

  padding:'6px',

  background:'#F1F5F9',

  borderRadius:'12px',

  minHeight:'120px',

  maxHeight:'180px',

  overflowY:'auto',

  whiteSpace:'pre-wrap',

  lineHeight:'1.4'

}}>

  {session.note || '-'}

</div>
<br/>

<div style={{

  display:'flex',

  justifyContent:'flex-end',

  marginTop:'4px'

}}>

  <button

    onClick={onClose}

    style={{

      padding:'12px 12px',

      background:'#234E70',

      color:'white',

      border:'none',

      borderRadius:'10px',

      cursor:'pointer',

      fontSize:'15px',

      fontWeight:'600'

    }}

  >

    {t(language,'close')}

  </button>

</div>

</Modal>
)

}