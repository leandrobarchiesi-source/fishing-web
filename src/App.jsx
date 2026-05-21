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
import AddSessionModal from './components/AddSessionModal'


function App(){

const [user,setUser]=useState(null)
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const [sessions,setSessions]=useState([])
const [spots,setSpots]=useState([])
const [sessionCount,setSessionCount]=useState(0)
const [spotCount,setSpotCount]=useState(0)
const [selectedPage,setSelectedPage]=useState("dashboard")
const [addingSession,setAddingSession]=useState(false)
const [selectedSession,setSelectedSession]=useState(null)
const [editingSession,setEditingSession]=useState(null)
const [addingSpot,setAddingSpot]=useState(false)
const [registerMode,setRegisterMode]=useState(false)
const [nome,setNome]=useState("")
const [cognome,setCognome]=useState("")
const [lingua,setLingua]=useState("it")
const [profile,setProfile]=useState(null)


useEffect(()=>{checkUser()},[])




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

const {data:profilo}=

await supabase

.from(
'profiles'
)

.select()

.eq(
'id',
user.id)

.single()


setProfile(
profilo
)

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

async function register(){

const {data,error}=

await supabase.auth.signUp({

email,
password

})

if(error){

alert(error.message)

return

}


const user=data.user

if(user){

await supabase

.from('profiles')

.insert({

id:user.id,

nome,

cognome,

language:lingua

})

}

alert(
"Account creato"
)

setRegisterMode(false)

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


setAddingSpot(false)

await loadData()

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

condizioni:
sessione.condizioni,

fase_lunare:
sessione.fase_lunare,

note:
sessione.note

})

.eq(
'id',
sessione.id)


if(error){

alert(
error.message
)

return

}


setEditingSession(
null
)

await loadData()

}

function getLunarPhase(date){

const phases=[

"🌑 Luna Nuova",
"🌒 Luna crescente",
"🌓 Primo Quarto",
"🌔 Gibbosa crescente",
"🌕 Luna piena",
"🌖 Gibbosa calante",
"🌗 Ultimo Quarto",
"🌘 Luna calante"

]


const lp=2551443

const now=date.getTime()/1000

const newMoon=
592500

const phase=

((now-newMoon)%lp)/lp


return phases[
Math.floor(
phase*8
)%8
]

}

async function getWeather(

lat,
lon,
dataOra

){

try{

const giorno=

dataOra
.toISOString()
.split("T")[0]


const ora=
dataOra.getHours()


const response=

await fetch(

`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,pressure_msl,wind_speed_10m,weather_code&start_date=${giorno}&end_date=${giorno}`

)

const data=

await response.json()


const codice=

data.hourly.weather_code[ora]


const condizioni={

0:"Sereno",

1:"Prevalentemente sereno",

2:"Parzialmente nuvoloso",

3:"Nuvoloso",

45:"Nebbia",

48:"Nebbia intensa",

51:"Pioviggine",

61:"Pioggia",

63:"Pioggia moderata",

65:"Pioggia intensa",

71:"Neve",

80:"Rovesci",

95:"Temporale"

}


return{

temperatura:
data.hourly.temperature_2m[ora],

pressione:
data.hourly.pressure_msl[ora],

vento:
data.hourly.wind_speed_10m[ora]+" km/h",

condizioni:

condizioni[codice]

||

"Non disponibile"

}

}

catch{

return{

temperatura:null,

pressione:null,

vento:null,

condizioni:null

}

}

}

async function salvaSessione(sessione){

const user=

(
await supabase
.auth
.getUser()
)

.data.user


const id=
crypto.randomUUID()


const dataOra=

new Date(

sessione.data+

"T"+

sessione.ora_inizio+

":00"

)



const meteo=

await getWeather(

sessione.latitudine,

sessione.longitudine,

dataOra

)


const fase=

getLunarPhase(
dataOra
)



const {error}=

await supabase

.from(
'fishing_sessions'
)

.insert({

id,

user_id:user.id,

spot_id:
sessione.spot_id,

luogo:
sessione.luogo,

latitudine:
sessione.latitudine,

longitudine:
sessione.longitudine,

tipo_pescata:
sessione.tipo_pescata,

data:
sessione.data,

ora_inizio:
dataOra.toISOString(),

ora_fine:

new Date(

sessione.data+

"T"+

sessione.ora_fine+

":00"

).toISOString(),

note:
sessione.note,

temperatura:
meteo.temperatura,

pressione:
meteo.pressione,

vento:
meteo.vento,

condizioni:
meteo.condizioni,

fase_lunare:
fase

})


if(error){

alert(error.message)

return

}


setAddingSession(false)

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

{

registerMode

?

<>

<input
placeholder='Nome'
value={nome}
onChange={(e)=>
setNome(e.target.value)
}
style={inputStyle}
/>

<input
placeholder='Cognome'
value={cognome}
onChange={(e)=>
setCognome(e.target.value)
}
style={inputStyle}
/>

<input
placeholder='Email'
value={email}
onChange={(e)=>
setEmail(e.target.value)
}
style={inputStyle}
/>

<input
type='password'
placeholder='Password'
value={password}
onChange={(e)=>
setPassword(e.target.value)
}
style={inputStyle}
/>


<select

value={lingua}

onChange={(e)=>

setLingua(
e.target.value
)}

style={inputStyle}

>

<option value="it">

🇮🇹 Italiano

</option>

<option value="en">

🇬🇧 English

</option>

</select>


<button

onClick={register}

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

Crea account

</button>


<p style={{

marginTop:'20px',

cursor:'pointer',

color:'#234E70'

}}

onClick={()=>

setRegisterMode(false)

}

>

Hai già un account? Accedi

</p>

</>

:

<>

<input
placeholder='Email'
value={email}
onChange={(e)=>
setEmail(e.target.value)
}
style={inputStyle}
/>

<input
type='password'
placeholder='Password'
value={password}
onChange={(e)=>
setPassword(e.target.value)
}
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


<p style={{

marginTop:'20px',

cursor:'pointer',

color:'#234E70'

}}

onClick={()=>

setRegisterMode(true)

}

>

Non hai un account? Crealo

</p>

</>

}

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

profile={profile}

refreshData={loadData}

/>

}


{selectedPage==="sessioni" &&

<SessionsPage

sessions={sessions}

onView={setSelectedSession}

onEdit={setEditingSession}

onDelete={eliminaSessione}

addSession={()=>{

setAddingSession(true)

}}
/>

}


{selectedPage==="spot" &&

<SpotPage

spots={spots}

addSpot={()=>

setAddingSpot(true)

}

refreshData={loadData}

/>}


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

onSave={(dati)=>{

salvaModifica(
dati
)

}}

/>

<AddSpotModal

isOpen={
addingSpot
}

onClose={()=>

setAddingSpot(false)

}

onSave={salvaSpot}

/>

<AddSessionModal

isOpen={addingSession}

onClose={()=>

setAddingSession(false)

}

onSave={salvaSessione}

spots={spots}

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