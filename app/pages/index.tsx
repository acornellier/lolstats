import { BlitzPage } from 'blitz'
import Layout from 'app/core/layouts/Layout'
import { ChampionGrid } from 'app/components/ChampionGrid'

const Home: BlitzPage = () => {
  return (
    <div>
      <h1>Lolstats</h1>
      <ChampionGrid />
    </div>
  )
}

Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
