import {useEffect,useState} from 'react'

import {supabase} from './supabase'

import Sidebar from './components/Sidebar'

import Dashboard from './pages/Dashboard'


function App(){

const [user,setUser]=
useState(null)

const [email,setEmail]=
useState("")

const [password,setPassword]=
useState("")

const [sessions,setSessions]=
useState([])

const [sessionCount,setSessionCount]=
useState(0)

const [spotCount,setSpotCount]=
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

loadData()

}

}



async function loadData(){

const userId=

(
await supabase
.auth
.getUser()
)

.data.user.id


const sessionsResult=

await supabase

.from(
'fishing_sessions'
)

.select()

.eq(
'user_id',
userId
)

.order(
'data',
{
ascending:false
}
)


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
userId
)


setSessions(
sessionsResult.data||[]
)

setSessionCount(
sessionsResult.data.length
)

setSpotCount(
spotsResult.data.length
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

window.location.reload()

}


async function logout(){

await supabase
.auth
.signOut()

window.location.reload()

}



if(!user){

return(

<div style={{

display:'flex',

justifyContent:'center',

alignItems:'center',

height:'100vh',

background:'#EAF6FF'

}}>

<div style={{

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
)
}

/>

<br/><br/>

<input

type='password'

placeholder='Password'

value={password}

onChange={(e)=>

setPassword(
e.target.value
)
}

/>

<br/><br/>

<button

onClick={login}

>

Login

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

<h1>

🎣 Sessioni

</h1>

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