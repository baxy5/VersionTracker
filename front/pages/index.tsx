import { GetServerSideProps } from 'next'

import { Layout, Hero, Content } from "../components/index"

const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

import { Roboto } from '@next/font/google'
const roboto = Roboto({
  subsets: ['latin'],
  weight: "300",
  style: "normal"
})

// TODO: Theme switcher
// TODO: data type

export default function Home({ data }: any) {
  return (
    <div className={`${roboto.className}`} >
      <Layout>
        <Hero />
        <Content />
      </Layout>
    </div >
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const data: any[] = await prisma.technology.findMany()

  return {
    props: {
      data
    }
  }
}



