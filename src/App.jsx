import {useEffect,useState} from 'react'

import {supabase} from './supabase'

import Sidebar
from './components/Sidebar'

import Dashboard
from './pages/Dashboard'

function App(){

const [email,setEmail]=
useState("")

const [password,setPassword]=
useState("")

const [user,setUser]=
useState(null)

const [sessions,
setSessions]=
useState([])

const [sessionCount,
setSessionCount]=
useState(0)

const [spotCount,
setSpotCount]=
useState(0)

useEffect(()=>{

checkUser()

},[])


async function checkUser(){

const {

data

}

=

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
userId
)


setSessions(

sessionsResult
.data
||[]

)

setSessionCount(

sessionsResult
.data
.length

)

setSpotCount(

spotsResult
.data
.length

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

width:350,

boxShadow:
'0 2px 10px rgba(0,0,0,.1)'

}}>

<h1>

Fishing Web 🎣

</h1>

<br/>

<input

placeholder='Email'

value={email}

onChange={(e)=>

setEmail(
e.target.value
)}

style={{

width:'100%',

padding:12,

marginBottom:10

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

padding:12,

marginBottom:20

}}

/>

<button

onClick={login}

style={{

width:'100%',

padding:12

}}

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

logout={logout}

/>


<div style={{

marginLeft:260,

padding:30,

width:'100%',

background:"#E2E8F0",

minHeight:'100vh'

}}>

<Dashboard

sessionCount={sessionCount}

spotCount={spotCount}

sessions={sessions}

refreshData={loadData}

/>
</div>

</div>

)

}

export default App