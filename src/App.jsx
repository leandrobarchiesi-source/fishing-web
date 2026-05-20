import { useEffect, useState } from 'react'

import { supabase } from './supabase'

import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import SessionsPage from './pages/SessionsPage'


function App() {

const [user,setUser]=
useState(null)

const [email,setEmail]=
useState("")

const [password,setPassword]=
useState("")

const [sessions,setSessions]=
useState([])

const [sessionCount,
setSessionCount]=
useState(0)

const [spotCount,
setSpotCount]=
useState(0)

const [selectedPage,
setSelectedPage]=
useState(
'dashboard'
)


useEffect(()=>{

checkUser()

},[])



async function checkUser(){

const {

data

}=

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

const userId=
user.id


const sessionsResult=

await supabase

.from(
'fishing_sessions'
)

.select()

.eq(
'user_id',
userId)

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

.select(
'id'
)

.eq(
'user_id',
userId)


setSessions(
sessionsResult.data || []
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

const {

data

}=

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

fontSize:'70px',

marginBottom:'10px'

}}>

🎣

</div>


<h1 style={{

margin:0,

fontSize:'34px',

color:'#17233C'

}}>

Fishing Web

</h1>

<p style={{

color:'#666',

marginBottom:'30px'

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

style={{

width:'100%',

padding:'14px',

fontSize:'16px',

borderRadius:'12px',

border:
'1px solid #ddd',

marginBottom:'15px',

boxSizing:'border-box'

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

padding:'14px',

fontSize:'16px',

borderRadius:'12px',

border:
'1px solid #ddd',

marginBottom:'20px',

boxSizing:'border-box'

}}

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

borderRadius:'12px',

cursor:'pointer'

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

sessionCount={
sessionCount
}

spotCount={
spotCount
}

sessions={
sessions
}

refreshData={
loadData
}

/>

}


{

selectedPage==="sessioni"

&&

<SessionsPage

sessions={sessions}

onView={(s)=>{

console.log(
"view",
s
)

}}

onEdit={(s)=>{

console.log(
"edit",
s
)

}}

onDelete={(s)=>{

console.log(
"delete",
s
)

}}

/>
}


{

selectedPage==="spot"

&&

<h1>

📍 Spot

</h1>

}


{

selectedPage==="statistiche"

&&

<h1>

📊 Statistiche

</h1>

}


{

selectedPage==="profilo"

&&

<h1>

👤 Profilo

</h1>

}

</div>

</div>

)

}


export default App