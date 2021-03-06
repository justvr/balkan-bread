import React from 'react'
import Link from 'gatsby-link'
import Layout from '../layouts/default';
import SEO from '../components/seo'
import Image from '../service/image';
import { FacebookProvider, Like } from 'react-facebook';

const BalkanBread = (props) => (
  <Layout location={props.location}>
    <SEO
      description='balkanski hleb o blogu'
      keywords='balkan bread'
      lang='sr'
      ogType='website'
      title='Balkanski hleb ukratko'
    />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 860,
        padding: '1.45rem 1.0875rem',
        textAlign: 'center'
      }}
    >
      <h1 style={{color: 'rgb(188, 52, 37)'}}>Balkanski hleb</h1>
      <hr style={{display: 'inline-block', width: '150px'}} />
      <p>Nedavno sam se odselila sa Balkana, tačnije iz Srbije. Ma nije bilo nedavno. Bilo je početkom 2019. Otišla sam za hlebom koji mi više leži, pre nego trbuhom za hlebom.</p>
      <p>A život je stenovit. I uvek vodi na različite puteve. Neki ljudi imaju sreće da naiđu na livadu punoj cveća i ostanu tamo. Ali neki ne. Nijedan put nije zagarantovan uspeh ili neuspeh.</p>
      <p>Moja staza nije laka, a ponekad je u stvari pad. Ja volim da ostanem pozitivna i da zovem svoje padove usponima. I ponekad naiđem na cvet na steni penjući se i ne mogu baš da se žalim. Ali uglavnom jedem parče hleba sa konopca viseći na litici.</p>
      <p>Ovim blogom želim da pokažem svoj put i pokoju prečicu života u Nemačkoj u nadi da će nekome pomoći i da će zadovoljiti radoznale glave.</p>
      <p>Provela sam sate istražujući život u Nemačkoj. A nije moralo biti tako. Volela bih da sam imala mesto gde ću pronaći informacije o znakovima pored puta, o ljudima, o institucijama, o dokumentaciji, o proizvodima, o jeziku, o... životu.</p>
      <p>Obećavam da ću realno pisati o svakom aspektu života iz moje perspektive. Šta sam ja i šta su drugi doživeli i naučili. Nove ideje. Dobre i loše stvari.</p>
      <p>Trudiću se da približim kulturu i da približim život koji ja tek sada otkrivam.</p>
      <p>To se odnosi i na hranu, a mi Balkanci uvek dodamo i parče hleba.</p>
      <div>
        <Image src="balkan-bread-about.png" />
      </div>
      <FacebookProvider appId={process.env.GATSBY_FB_APP_ID}>
        <Like
          href="http://www.facebook.com/balkanbread"
          layout="button_count"
          size="large"
        />
      </FacebookProvider>
      <br />
      <Link to="/">Početna</Link>
    </div>
  </Layout>
)

export default BalkanBread
