import Image from "next/image"
import { Roboto } from '@next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: "700",
  style: "normal"
})

export default function Home() {
  return (
    <div className={roboto.className}>
      <div className="nav">
        <p className="text-xl">Version<span className="text-white">Vault</span></p>
      </div>
      <div className="hero"></div>
      <div className="versiontracker"></div>
    </div>
  )
}
