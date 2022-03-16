import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

const Home: NextPage = () => {
  const PhaserApp = dynamic(() => import('~/lib/components/PhaserApp'), {
    ssr: false,
  })

  return <PhaserApp />
}

export default Home
