import { useEffect, useState } from 'react'
import { supabase } from './supabase'

import Sidebar from './components/Sidebar'

import SessionModal from './components/SessionModal'
import EditSessionModal from './components/EditSessionModal'
import AddSpotModal from './components/AddSpotModal'

import Dashboard from './pages/Dashboard'
import SessionsPage from './pages/SessionsPage'
import SpotPage from './pages/SpotPage'
import ProfilePage from './pages/ProfilePage'


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
addingSession,
setAddingSession
]=useState(false)

const [
selectedSession,
setSelectedSession
]=useState(null)

const [
editingSession,
setEditingSession
]=useState(null)

const [
addingSpot,
setAddingSpot
]=useState(false)



useEffect(()=>{

checkUser()

},[])



async function checkUser(){

const {data}=

await supabase
.auth
.getUser()

if(data.user){

setUser(data.user)

await loadData()

}

}

<SessionsPage

sessions={sessions}

onView={setSelectedSession}

onEdit={setEditingSession}

onDelete={eliminaSessione}

addSession={()=>{

console.log(
"Nuova sessione"
)

alert(
"Nuova sessione"
)

setAddingSession(true)

}}
/>



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
user.id)



setSessions(
sessionsResult.data||[]
)

setSpots(
spotsResult.data||[]
)

setSessionCount(
sessionsResult.data?.length||0
)

setSpotCount(
spotsResult.data?.length||0
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



async function salvaSpot(spot){

const user=

(
await supabase
.auth
.getUser()
)

.data.user


const {error}=

await supabase

.from(
'spots'
)

.insert({

user_id:user.id,

nome:spot.nome,

latitudine:spot.latitudine,

longitudine:spot.longitudine

})


if(error){

console.log(error)

return

}


setAddingSpot(false)

await loadData()

}



async function eliminaSpot(spot){

const {data}=

await supabase

.from(
'fishing_sessions'
)

.select('id')

.eq(
'spot_id',
spot.id
)


if(data?.length>0){

alert(

"Impossibile eliminare.\n\nSpot utilizzato da "+

data.length+

" sessioni"

)

return

}


if(

!window.confirm(
"Eliminare spot?"
)

){

return

}


await supabase

.from(
'spots'
)

.delete()

.eq(
'id',
spot.id)


await loadData()

}



async function salvaModifica(sessione){

const {error}=

await supabase

.from(
'fishing_sessions'
)

.update({

luogo:sessione.luogo,

tipo_pescata:
sessione.tipo_pescata,

data:sessione.data,

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


setEditingSession(null)

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


await supabase

.from(
'fishing_sessions'
)

.delete()

.eq(
'id',
session.id)


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

color:'#234E70'

}}>

FishingTrack

</h1>


<p style={{

marginBottom:30,

color:'#666'

}}>

Il tuo diario di pesca digitale

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

background:'#234E70',

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

background:'#EEF4F8',

minHeight:'100vh'

}}>

<Sidebar

selected={selectedPage}

setSelected={setSelectedPage}

logout={logout}

/>


<div style={{

position:'fixed',

left:'240px',

top:0,

right:0,

bottom:0,

background:'#EEF4F8',

padding:'40px',

boxSizing:'border-box',

overflowY:'auto'

}}>

{selectedPage==="dashboard" &&

<Dashboard

sessionCount={sessionCount}

spotCount={spotCount}

sessions={sessions}

refreshData={loadData}

/>

}


{selectedPage==="sessioni" &&

<SessionsPage

sessions={sessions}

onView={setSelectedSession}

onEdit={setEditingSession}

onDelete={eliminaSessione}

/>

}


{selectedPage==="spot" &&

<SpotPage

spots={spots}

onDelete={eliminaSpot}

addSpot={()=>

setAddingSpot(true)

}

/>

}


{selectedPage==="profilo" &&

<ProfilePage

user={user}

logout={logout}

/>

}


<SessionModal

session={selectedSession}

isOpen={
selectedSession!=null
}

onClose={()=>

setSelectedSession(null)

}

/>


<EditSessionModal

session={editingSession}

isOpen={
editingSession!=null
}

onClose={()=>

setEditingSession(null)
}

onSave={
salvaModifica
}

/>


<AddSpotModal

isOpen={
addingSpot
}

onClose={()=>

setAddingSpot(false)
}

onSave={
salvaSpot
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