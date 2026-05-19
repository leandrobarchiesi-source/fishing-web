import { useState } from 'react'
import { supabase } from './supabase'

function App() {

  const [email,setEmail]=
      useState("")

  const [password,setPassword]=
      useState("")

  const [loading,setLoading]=
      useState(false)

  async function login(){

    try{

      setLoading(true)

      const {error}=
      await supabase.auth.signInWithPassword({

        email,
        password

      })

      if(error){

        alert(
          error.message
        )

        return
      }

      alert(
        "Login effettuato 🎣"
      )

    }

    catch(e){

      alert(
        e.toString()
      )
    }

    setLoading(false)
  }

  return (

    <div
      style={{

      display:'flex',

      justifyContent:'center',

      alignItems:'center',

      height:'100vh',

      background:'#e8f4ff'

    }}>

      <div
      style={{

      background:'white',

      padding:30,

      borderRadius:20,

      width:350

      }}>

      <h1>
      Fishing Web 🎣
      </h1>

      <input

      placeholder='Email'

      value={email}

      onChange={(e)=>

      setEmail(
        e.target.value
      )}

      style={{

      width:'100%',
      marginBottom:10,
      padding:10

      }}
      />

      <input

      type='password'

      placeholder='Password'

      value={password}

      onChange={(e)=>

      setPassword(
        e.target.value
      )}

      style={{

      width:'100%',
      marginBottom:20,
      padding:10

      }}
      />

      <button

      onClick={login}

      disabled={loading}

      style={{

      width:'100%',
      padding:12

      }}>

      Login

      </button>

      </div>

    </div>
  )
}

export default App