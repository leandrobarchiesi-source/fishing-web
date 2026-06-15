import Modal from 'react-modal'
import { useEffect, useState } from 'react'
import { t } from '../i18n/t'

Modal.setAppElement('#root')

export default function EditSessionModal({

  session,
  isOpen,
  onClose,
  onSave,
  language

}){

  const [form, setForm] = useState({

    luogo: "",
    tipo: "",
    data: "",
    oraInizio: "",
    oraFine: "",

    temperaturaAcqua: "",

    temperatura: "",
    pressione: "",
    vento: "",
    condizioni: "",
    fase: "",

    note: ""

  })

  useEffect(() => {

    if (!session) return

    setForm({

      luogo: session.luogo || "",

      tipo: session.tipo_pescata || "",

      data: session.data?.substring(0, 10) || "",

oraInizio:
  session.ora_inizio
    ? new Date(session.ora_inizio)
        .toLocaleTimeString(
          'it-IT',
          {
            hour:'2-digit',
            minute:'2-digit',
            hour12:false
          }
        )
    : "",

oraFine:
  session.ora_fine
    ? new Date(session.ora_fine)
        .toLocaleTimeString(
          'it-IT',
          {
            hour:'2-digit',
            minute:'2-digit',
            hour12:false
          }
        )
    : "",
    
      temperaturaAcqua:
        session.temperatura_acqua || "",

      temperatura:
        session.temperatura || "",

      pressione:
        session.pressione || "",

      vento:
        session.vento || "",

      condizioni:
        session.condizioni || "",

      fase:
        session.fase_lunare || "",

      note:
        session.note || ""

    })

  }, [session])

  if (!session) return null

  function update(nome, valore) {

    setForm(prev => ({

      ...prev,

      [nome]: valore

    }))
  }

  function salva() {

    const dati = {

      ...session,

      luogo: form.luogo,

      tipo_pescata: form.tipo,

      data: form.data,

      ora_inizio:
        `${form.data}T${form.oraInizio}:00`,

      ora_fine:
        `${form.data}T${form.oraFine}:00`,

      temperatura_acqua:
        form.temperaturaAcqua,

      temperatura:
        form.temperatura,

      pressione:
        form.pressione,

      vento:
        form.vento,

      condizioni:
        form.condizioni,

      fase_lunare:
        form.fase,

      note:
        form.note

    }

    onSave?.(dati)
  }

  return (

<Modal

  isOpen={isOpen}

  onRequestClose={onClose}

  style={{

    content: {

      maxWidth: '900px',
      width: '90%',
      maxHeight: '90vh',

      margin: 'auto',

      borderRadius: '20px',

      padding: '30px'

    },

    overlay: {

      background:
        'rgba(0,0,0,.5)'

    }

  }}

>

  <h2>
    🎣 {t(language,'editSession')}
  </h2>

  <Input
    label={t(language,'location')}
    value={form.luogo}
    onChange={(v) => update("luogo", v)}
  />

  <div style={{

    display:'flex',

    gap:'15px',

    alignItems:'flex-start'

  }}>

    <div style={{flex:1}}>

      <div style={{

        display:'flex',

        alignItems:'center',

        gap:'15px',

        marginBottom:'12px'

      }}>

        <label style={{

          width:'160px',

          fontWeight:'500',

          flexShrink:0

        }}>

          {t(language,'type')}

        </label>

        <select

          value={form.tipo}

          onChange={(e)=>
            update(
              "tipo",
              e.target.value
            )
          }

          style={{

            ...styleInput,

            marginBottom:0,

            flex:1

          }}

        >

          <option value="Gara">Gara</option>
          <option value="Test-Match">Test-Match</option>
          <option value="Pool">Pool</option>
          <option value="Prova">Prova</option>
          <option value="Libera">Libera</option>

        </select>

      </div>

    </div>

    <div style={{flex:1}}>

      <Input
        label={t(language,'date')}
        type="date"
        value={form.data}
        onChange={(v)=>update("data",v)}
      />

    </div>

  </div>

  <div style={{

    display:'flex',

    gap:'10px'

  }}>

    <div style={{flex:1}}>

      <Input
        label={t(language,'startTime')}
        type="time"
        value={form.oraInizio}
        onChange={(v)=>
          update(
            "oraInizio",
            v
          )
        }
      />

    </div>

    <div style={{flex:1}}>

      <Input
        label={t(language,'endTime')}
        type="time"
        value={form.oraFine}
        onChange={(v)=>
          update(
            "oraFine",
            v
          )
        }
      />

    </div>

  </div>

  <Input
    label={t(language,'waterTemperature')}
    value={form.temperaturaAcqua}
    onChange={(v)=>
      update(
        "temperaturaAcqua",
        v
      )
    }
  />

  <div style={{

    background:'#F8FAFC',

    border:
      '1px solid #E2E8F0',

    borderRadius:'12px',

    padding:'15px',

    marginBottom:'20px'

  }}>

    <h4 style={{

      marginTop:0,

      marginBottom:'15px'

    }}>

      {t(language,'weatherData')}

    </h4>

    <div style={{

      display:'grid',

      gridTemplateColumns:
        '160px 1fr',

      rowGap:'8px'

    }}>

      <b>{t(language,'temperature')}</b>
      <span>{form.temperatura}</span>

      <b>{t(language,'pressure')}</b>
      <span>{form.pressione}</span>

      <b>{t(language,'wind')}</b>
      <span>{form.vento}</span>

      <b>{t(language,'conditions')}</b>
      <span>{form.condizioni}</span>

      <b>{t(language,'moonPhase')}</b>
      <span>{form.fase}</span>

    </div>

  </div>

  <label>

    {t(language,'notes')}

  </label>

  <textarea

    rows={10}

    value={form.note}

    onChange={(e)=>
      update(
        "note",
        e.target.value
      )
    }

    style={{

      ...styleInput,

      height:'250px'

    }}

  />

  <div style={{

    display:'flex',

    gap:'10px',

    marginTop:'10px'

  }}>

    <button onClick={salva}>

      {t(language,'save')}

    </button>

    <button onClick={onClose}>

      {t(language,'cancel')}

    </button>

  </div>

</Modal>

  )

}

function Input({

  label,
  value,
  onChange,
  type = "text"

}) {

  return (

    <div style={{

      display:'flex',

      alignItems:'center',

      gap:'15px',

      marginBottom:'8px'

    }}>

      <label style={{

        width:'160px',

        fontWeight:'500',

        flexShrink:0

      }}>

        {label}

      </label>

      <input

        type={type}

        value={value}

        onChange={(e)=>
          onChange(
            e.target.value
          )
        }

        style={{

          ...styleInput,

          marginBottom:0,

          flex:1

        }}

      />

    </div>

  )

}

const styleInput = {

  width: '100%',

  padding: '10px',

  marginBottom: '15px',

  borderRadius: '8px',

  border: '1px solid #ccc',

  boxSizing: 'border-box'

}