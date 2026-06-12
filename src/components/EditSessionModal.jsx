import Modal from 'react-modal'
import { useEffect, useState } from 'react'

Modal.setAppElement('#root')

export default function EditSessionModal({

  session,
  isOpen,
  onClose,
  onSave

}) {

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
              .toISOString()
              .substring(11, 16)
          : "",

      oraFine:
        session.ora_fine
          ? new Date(session.ora_fine)
              .toISOString()
              .substring(11, 16)
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

        🎣 Modifica Sessione

      </h2>

      <Input
        label="Luogo"
        value={form.luogo}
        onChange={(v) => update("luogo", v)}
      />

      <div style={{

        display: 'flex',
        gap: '15px'

      }}>

        <div style={{ flex: 1 }}>

          <label>Tipo</label>

          <select

            value={form.tipo}

            onChange={(e) =>
              update(
                "tipo",
                e.target.value
              )
            }

            style={styleInput}

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

        </div>

        <div style={{ flex: 1 }}>

          <Input
            label="Data"
            type="date"
            value={form.data}
            onChange={(v) =>
              update("data", v)
            }
          />

        </div>

      </div>

      <div style={{

        display: 'flex',
        gap: 10

      }}>

        <div style={{ flex: 1 }}>

          <Input
            label="Ora inizio"
            type="time"
            value={form.oraInizio}
            onChange={(v) =>
              update(
                "oraInizio",
                v
              )
            }
          />

        </div>

        <div style={{ flex: 1 }}>

          <Input
            label="Ora fine"
            type="time"
            value={form.oraFine}
            onChange={(v) =>
              update(
                "oraFine",
                v
              )
            }
          />

        </div>

      </div>

      <Input
        label="Temperatura Acqua"
        value={form.temperaturaAcqua}
        onChange={(v) =>
          update(
            "temperaturaAcqua",
            v
          )
        }
      />

      <div style={{

        background: '#F8FAFC',

        border:
          '1px solid #E2E8F0',

        borderRadius: '12px',

        padding: '15px',

        marginBottom: '20px'

      }}>

        <h4 style={{

          marginTop: 0,

          marginBottom: '15px'

        }}>

          Dati Meteo

        </h4>

        <div style={{

          display: 'grid',

          gridTemplateColumns:
            '1fr 1fr',

          gap: '10px'

        }}>

          <div>
            <b>Temperatura:</b> {form.temperatura}
          </div>

          <div>
            <b>Pressione:</b> {form.pressione}
          </div>

          <div>
            <b>Vento:</b> {form.vento}
          </div>

          <div>
            <b>Condizioni:</b> {form.condizioni}
          </div>

          <div>
            <b>Fase lunare:</b> {form.fase}
          </div>

        </div>

      </div>

      <label>

        Note

      </label>

      <textarea

        rows={10}

        value={form.note}

        onChange={(e) =>
          update(
            "note",
            e.target.value
          )
        }

        style={{

          ...styleInput,

          height: '260px'

        }}

      />

      <div style={{

        display: 'flex',

        gap: '10px',

        marginTop: '20px'

      }}>

        <button onClick={salva}>

          Salva

        </button>

        <button onClick={onClose}>

          Annulla

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

    <>

      <label>

        {label}

      </label>

      <input

        type={type}

        value={value}

        onChange={(e) =>
          onChange(
            e.target.value
          )
        }

        style={styleInput}

      />

    </>

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