export default function ProfilePage({

user,
sessionCount,
spotCount,
logout

}){

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

fontSize:'80px',

marginBottom:20

}}>

🎣

</div>


<h2>

Utente

</h2>

<p>

📧

{user?.email}

</p>

<br/>


<div style={{

display:'flex',

gap:20

}}>

<Box

title="Sessioni"

value={sessionCount}

/>

<Box

title="Spot"

value={spotCount}

/>

</div>


<br/>


<button

style={{

padding:'12px 20px',

background:'#17233C',

color:'white',

border:'none',

borderRadius:'12px',

marginRight:10

}}

>

✏ Modifica profilo

</button>


<button

onClick={logout}

style={{

padding:'12px 20px',

background:'#cc3333',

color:'white',

border:'none',

borderRadius:'12px'

}}

>

Logout

</button>

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

padding:20,

width:150,

background:'#E2E8F0',

borderRadius:15

}}>

<h3>

{title}

</h3>

<h1>

{value}

</h1>

</div>

)

}