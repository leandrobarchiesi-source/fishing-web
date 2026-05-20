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

<h2>

Caricamento...

</h2>

)

}



return(

<div>

<h1>

👤 Profilo

</h1>

<br/>


<div style={{

background:'white',

padding:'30px',

borderRadius:'20px',

maxWidth:'700px'

}}>


<div style={{

textAlign:'center',

marginBottom:'30px'

}}>

<div style={{

fontSize:'80px'

}}>

👤

</div>

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

marginBottom:'15px'

}}>

<label>

Lingua

</label>


<select

value={lingua}

onChange={(e)=>

setLingua(
e.target.value
)}

style={style}

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

🔒 Cambia password

</button>


<button

onClick={logout}

style={logoutBtn}

>

Logout

</button>

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

marginBottom:'15px'

}}>

<label>

{label}

</label>

<input

value={value}

onChange={(e)=>

setValue(
e.target.value
)}

style={style}

/>

</div>

)

}



const style={

width:'100%',

padding:'10px',

borderRadius:'10px',

border:'1px solid #ccc'

}


const btn={

padding:'12px 20px',

marginRight:'10px',

background:'#17233C',

color:'white',

border:'none',

borderRadius:'10px',

cursor:'pointer'

}


const logoutBtn={

padding:'12px 20px',

background:'#cc3333',

color:'white',

border:'none',

borderRadius:'10px',

cursor:'pointer'

}