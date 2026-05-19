import Dashboard
from './pages/Dashboard'

import Sidebar
from './components/Sidebar'

function App(){

return(

<div
style={{
display:'flex'
}}
>

<Sidebar
logout={()=>
alert("logout")
}
/>

<div style={{

marginLeft:260,

padding:30,

width:'100%',

background:"#E2E8F0",

minHeight:'100vh'

}}>

<Dashboard

sessionCount={6}

spotCount={4}

sessions={[]}

/>

</div>

</div>

)

}

export default App