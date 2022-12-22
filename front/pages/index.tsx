import { Roboto } from '@next/font/google'

import { Navbar, Hero } from "../components/index"

const roboto = Roboto({
  subsets: ['latin'],
  weight: "100",
  style: "normal"
})

export default function Home() {
  return (
    <div className={`${roboto.className}`} >
      <Navbar />
      <Hero />
      <div className="versiontracker"></div>
    </div >
  )
}
