import {useEffect,useState} from 'react'
import {supabase} from '../supabase'

export default function ProfilePage({

user,
logout

}){

const [nome,setNome]=useState("")
const [cognome,setCognome]=useState("")
const [lingua,setLingua]=useState("it")

const [loading,setLoading]=
useState(true)


useEffect(()=>{

caricaProfilo()

},[])



async function caricaProfilo(){

const {data}=

await supabase

.from(
'profiles'
)

.select()

.eq(
'id',
user.id
)

.single()


if(data){

setNome(
data.nome || ""
)

setCognome(
data.cognome || ""
)

setLingua(
data.language || "it"
)

}

setLoading(false)

}



async function salva(){

await supabase

.from(
'profiles'
)

.update({

nome,

cognome,

language:
lingua

})

.eq(
'id',
user.id
)


alert(
"Profilo aggiornato"
)

}



async function cambiaPassword(){

const nuova=

prompt(
"Nuova password"
)


if(!nuova){

return

}


if(

nuova.length<6

){

alert(
"Minimo 6 caratteri"
)

return

}


try{

await supabase
.auth
.updateUser({

password:
nuova

})


alert(
"Password aggiornata"
)

}

catch(e){

alert(
e.message
)

}

}



if(loading){

return(

<div style={{

textAlign:'center'

}}>

<h2>

Caricamento...

</h2>

</div>

)

}



return(

<div style={{

width:'100%',

maxWidth:'1000px',

margin:'0 auto'

}}>


<div style={{

textAlign:'center',

marginBottom:'35px'

}}>

<h1 style={{

fontSize:'56px',

margin:'0',

fontWeight:'700',

color:'#1E293B'

}}>

Profilo

</h1>


<p style={{

marginTop:'10px',

fontSize:'20px',

color:'#64748B'

}}>

Gestisci le informazioni del tuo account

</p>

</div>




<div style={{

background:'white',

padding:'35px',

borderRadius:'25px',

maxWidth:'700px',

margin:'0 auto',

boxShadow:
'0 2px 12px rgba(0,0,0,.08)'

}}>


<div style={{

textAlign:'center',

marginBottom:'25px'

}}>

<img

src="/logo.png"

alt="profile"

style={{

width:'100px',

opacity:.9

}}

/>

</div>


<Input

label="Nome"

value={nome}

setValue={setNome}

/>


<Input

label="Cognome"

value={cognome}

setValue={setCognome}

/>



<div style={{

marginBottom:'20px'

}}>

<label style={{

display:'block',

marginBottom:'8px',

fontWeight:'600'

}}>

Lingua

</label>


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

<option value="fr">

🇫🇷 Français

</option>

<option value="es">

🇪🇸 Español

</option>

</select>

</div>



<div style={{

display:'flex',

justifyContent:'center',

gap:'12px',

flexWrap:'wrap',

marginTop:'30px'

}}>

<button

onClick={salva}

style={btn}

>

Salva profilo

</button>


<button

onClick={cambiaPassword}

style={btn}

>

🔒 Password

</button>


<button

onClick={logout}

style={logoutBtn}

>

Logout

</button>

</div>

</div>

</div>

)

}



function Input({

label,
value,
setValue

}){

return(

<div style={{

marginBottom:'20px'

}}>

<label style={{

display:'block',

marginBottom:'8px',

fontWeight:'600'

}}>

{label}

</label>


<input

value={value}

onChange={(e)=>

setValue(
e.target.value
)}

style={inputStyle}

/>

</div>

)

}



const inputStyle={

width:'100%',

padding:'14px',

borderRadius:'12px',

border:'1px solid #D5DCE5',

fontSize:'15px',

boxSizing:'border-box'

}



const btn={

padding:'12px 20px',

background:'#234E70',

color:'white',

border:'none',

borderRadius:'12px',

cursor:'pointer'

}



const logoutBtn={

padding:'12px 20px',

background:'#CC3333',

color:'white',

border:'none',

borderRadius:'12px',

cursor:'pointer'

}