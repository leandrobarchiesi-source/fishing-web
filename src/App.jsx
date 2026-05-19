import { useEffect,useState } from 'react'
import { supabase } from './supabase'

function App(){

const [user,setUser]=
useState(null)

const [email,setEmail]=
useState("")

const [password,setPassword]=
useState("")

const [sessionCount,
setSessionCount]=
useState(0)

const [spotCount,
setSpotCount]=
useState(0)

const [sessions,
setSessions]=
useState([])

const [loading,
setLoading]=
useState(true)


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

loadData()
}

setLoading(false)

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


if(loading){

return(
<div>
Caricamento...
</div>
)

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
)}

style={{

width:'100%',
padding:10,
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
padding:10,
marginBottom:20

}}
/>

<button

onClick={login}

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


return(

<div style={{

padding:40

}}>

<h1>

Bentornato 🎣

</h1>

<br/>

<div style={{

display:'flex',
gap:20

}}>

<div style={{

padding:20,
background:'#f4f4f4',
borderRadius:20,
width:200

}}>

<h2>

🎣 Sessioni

</h2>

<h1>

{sessionCount}

</h1>

</div>


<div style={{

padding:20,
background:'#f4f4f4',
borderRadius:20,
width:200

}}>

<h2>

📍 Spot

</h2>

<h1>

{spotCount}

</h1>

</div>

</div>

<br/>

<h2>

Ultime Sessioni

</h2>

<table style={{

width:'100%',
borderCollapse:
'collapse'

}}>

<thead>

<tr>

<th>
Luogo
</th>

<th>
Tipo
</th>

<th>
Data
</th>

<th>
Note
</th>

</tr>

</thead>

<tbody>

{sessions.map(
(s)=>(

<tr
key={s.id}
style={{
borderBottom:
'1px solid #ddd'
}}
>

<td>

{s.luogo}

</td>

<td>

{s.tipo_pescata}

</td>

<td>

{
new Date(
s.data
)
.toLocaleDateString()
}

</td>

<td>

{s.note}

</td>

</tr>

)
)}

</tbody>

</table>

<br/>

<button
onClick={logout}
>

Logout

</button>

</div>

)

}

export default App