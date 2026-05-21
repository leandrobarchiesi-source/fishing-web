export default function Dashboard({

sessionCount,
spotCount,
sessions,
user

}){

const ultima=

sessions?.[0]

const conteggioTipi={}

sessions.forEach(s=>{

const t=

s.tipo_pescata||

"Altro"

conteggioTipi[t]=

(conteggioTipi[t]||0)+1

})


const preferito=

Object.keys(
conteggioTipi
)

.sort(

(a,b)=>

conteggioTipi[b]-

conteggioTipi[a]

)[0]



return(

<div style={{

width:'100%',

maxWidth:'1100px',

margin:'0 auto'

}}>

<h1 style={{

fontSize:'48px',

marginTop:0,

marginBottom:'10px',

textAlign:'center',

color:'#1E293B',

fontWeight:'700'

}}>

Bentornato

{

user?.email

?

` ${user.email.split('@')[0]}`

:

""

}

</h1>


<p style={{

textAlign:'center',

color:'#64748B',

fontSize:'18px',

marginBottom:'40px'

}}>

La tua home FishingTrack

</p>

<div style={{

display:'flex',

justifyContent:'center',

gap:'25px',

flexWrap:'wrap',

marginBottom:'50px'

}}>

<Box

title="🎣 Sessioni"

value={sessionCount}

/>

<Box

title="📍 Spot"

value={spotCount}

/>

<Box

title="🕒 Ultima"

value={

ultima

?

new Date(
ultima.data
)

.toLocaleDateString()

:

"-"

}

/>

<Box

title="⭐ Preferita"

value={

preferito||

"-"

}

/>

</div>




<div style={{

background:'white',

padding:'35px',

borderRadius:'25px',

boxShadow:
'0 2px 12px rgba(0,0,0,.08)',

textAlign:'center'

}}>

<h2>

⚡ Azioni rapide

</h2>


<div style={{

display:'flex',

justifyContent:'center',

gap:'20px',

marginTop:'25px',

flexWrap:'wrap'

}}>

<button style={btn}>

➕ Nuova Sessione

</button>


<button style={btn}>

📍 Nuovo Spot

</button>

</div>

</div>



</div>

)

}




function Box({

title,
value

}){

return(

<div style={{

padding:'25px',

width:'180px',

background:'white',

borderRadius:'20px',

boxShadow:
'0 2px 10px rgba(0,0,0,.1)',

textAlign:'center'

}}>

<h3 style={{

marginBottom:'15px',

color:'#64748B'

}}>

{title}

</h3>


<h1 style={{

margin:0,

fontSize:'38px',

color:'#1E293B'

}}>

{value}

</h1>

</div>

)

}



const btn={

padding:'14px 25px',

background:'#234E70',

color:'white',

border:'none',

borderRadius:'14px',

cursor:'pointer',

fontSize:'16px'

}