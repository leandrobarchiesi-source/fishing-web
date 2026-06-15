import { t } from '../i18n/t'

export default function StatisticsPage({

  language

}) {

  return (

    <div style={{

      display:'flex',

      flexDirection:'column',

      justifyContent:'center',

      alignItems:'center',

      height:'70vh',

      textAlign:'center'

    }}>

      <h1 style={{

        fontSize:'56px',

        marginBottom:'20px'

      }}>

        📊

      </h1>

      <h2>

        {t(language,'underConstruction')}

      </h2>

      <p>

        {t(language,'statisticsComingSoon')}

      </p>

    </div>

  )

}