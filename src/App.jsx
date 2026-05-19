import {useEffect,useState} from 'react'

import {supabase} from './supabase'

import Sidebar
from './components/Sidebar'

import Dashboard
from './pages/Dashboard'

function App(){

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


async function logout(){

await supabase
.auth
.signOut()

window.location.reload()

}


if(!user){

return(
<div>

Login necessario

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

sessionCount={
sessionCount
}

spotCount={
spotCount
}

sessions={
sessions
}

/>

</div>

</div>

)

}

export default App