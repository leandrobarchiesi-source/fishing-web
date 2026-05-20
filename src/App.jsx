import { useEffect, useState } from 'react'

import { supabase } from './supabase'

import Sidebar from './components/Sidebar'

import SessionModal from './components/SessionModal'
import EditSessionModal from './components/EditSessionModal'

import Dashboard from './pages/Dashboard'
import SessionsPage from './pages/SessionsPage'
import SpotPage from './pages/SpotPage'


function App(){

const [user,setUser]=useState(null)

const [email,setEmail]=useState("")
const [password,setPassword]=useState("")

const [sessions,setSessions]=useState([])
const [spots,setSpots]=useState([])

const [sessionCount,setSessionCount]=useState(0)
const [spotCount,setSpotCount]=useState(0)

const [selectedPage,setSelectedPage]=
useState("dashboard")

const [
selectedSession,
setSelectedSession
]=useState(null)

const [
editingSession,
setEditingSession
]=useState(null)



useEffect(()=>{

checkUser()

},[])



async function checkUser(){

const {data}=

await supabase
.auth
.getUser()

if(data.user){

setUser(
data.user
)

await loadData()

}

}



async function loadData(){

const user=

(
await supabase
.auth
.getUser()
)

.data.user


if(!user){

return

}


const sessionsResult=

await supabase

.from(
'fishing_sessions'
)

.select()

.eq(
'user_id',
user.id
)

.order(
'data',
{
ascending:false
})


const spotsResult=

await supabase

.from(
'spots'
)

.select()

.eq(
'user_id',
user.id
)


setSessions(
sessionsResult.data || []
)

setSpots(
spotsResult.data || []
)

setSessionCount(
sessionsResult.data?.length || 0
)

setSpotCount(
spotsResult.data?.length || 0
)

}



async function login(){

const {error}=

await supabase
.auth
.signInWithPassword({

email,
password

})

if(error){

alert(
error.message
)

return

}


const {data}=

await supabase
.auth
.getUser()

setUser(
data.user
)

await loadData()

}



async function logout(){

await supabase
.auth
.signOut()

setUser(null)

setSessions([])

setSpots([])

}



async function salvaModifica(sessione){

const {error}=

await supabase

.from(
'fishing_sessions'
)

.update({

luogo:
sessione.luogo,

tipo_pescata:
sessione.tipo_pescata,

data:
sessione.data,

ora_inizio:
sessione.ora_inizio,

ora_fine:
sessione.ora_fine,

temperatura:
sessione.temperatura,

pressione:
sessione.pressione,

vento:
sessione.vento,

fase_lunare:
sessione.fase_lunare,

note:
sessione.note

})

.eq(
'id',
sessione.id)


if(error){

console.log(error)

return

}

setEditingSession(
null
)

await loadData()

}



async function eliminaSessione(session){

if(

!window.confirm(
"Eliminare sessione?"
)

){

return

}


const {error}=

await supabase

.from(
'fishing_sessions'
)

.delete()

.eq(
'id',
session.id)


if(error){

console.log(error)

return

}


await loadData()

}



if(!user){

return(

<div style={{

display:'flex',
justifyContent:'center',
alignItems:'center',
height:'100vh',
background:
'linear-gradient(to bottom,#EAF6FF,#D8ECFF)'

}}>

<div style={{

background:'white',

padding:'40px',

width:'420px',

borderRadius:'25px',

boxShadow:
'0 10px 30px rgba(0,0,0,.15)',

textAlign:'center'

}}>

<div style={{

fontSize:'70px'

}}>

🎣

</div>


<h1 style={{

fontSize:'34px',

color:'#17233C'

}}>

Fishing Web

</h1>


<p style={{

marginBottom:30,

color:'#666'

}}>

Accedi al tuo account

</p>


<input

placeholder='Email'

value={email}

onChange={(e)=>

setEmail(
e.target.value
)}

style={inputStyle}

/>


<input

type='password'

placeholder='Password'

value={password}

onChange={(e)=>

setPassword(
e.target.value
)}

style={inputStyle}

/>


<button

onClick={login}

style={{

width:'100%',

padding:'14px',

fontSize:'18px',

background:'#17233C',

color:'white',

border:'none',

borderRadius:'12px'

}}

>

Accedi

</button>

</div>

</div>

)

}



return(

<div style={{

display:'flex'

}}>

<Sidebar

selected={
selectedPage
}

setSelected={
setSelectedPage
}

logout={
logout
}

/>


<div style={{

marginLeft:260,

padding:30,

width:'100%',

background:"#E2E8F0",

minHeight:'100vh'

}}>


{

selectedPage==="dashboard"

&&

<Dashboard

sessionCount={sessionCount}

spotCount={spotCount}

sessions={sessions}

refreshData={loadData}

/>

}


{

selectedPage==="sessioni"

&&

<SessionsPage

sessions={sessions}

onView={setSelectedSession}

onEdit={setEditingSession}

onDelete={eliminaSessione}

/>

}


{

selectedPage==="spot"

&&

<SpotPage

spots={spots}

onView={(s)=>{

console.log(
"view spot",
s
)

}}

onEdit={(s)=>{

console.log(
"edit spot",
s
)

}}

onDelete={(s)=>{

console.log(
"delete spot",
s
)

}}

openMap={()=>{

alert(
"Apri mappa"
)

}}

addSpot={()=>{

alert(
"Aggiungi spot"
)

}}

/>

}


{

selectedPage==="statistiche"

&&

<h1>📊 Statistiche</h1>

}


{

selectedPage==="profilo"

&&

<h1>👤 Profilo</h1>

}



<SessionModal

session={selectedSession}

isOpen={
selectedSession!=null
}

onClose={()=>

setSelectedSession(
null
)

}

/>


<EditSessionModal

session={editingSession}

isOpen={
editingSession!=null
}

onClose={()=>

setEditingSession(
null
)}

onSave={
salvaModifica
}

/>

</div>

</div>

)

}


const inputStyle={

width:'100%',
padding:'14px',
fontSize:'16px',
borderRadius:'12px',
border:'1px solid #ddd',
marginBottom:'15px',
boxSizing:'border-box'

}


export default App