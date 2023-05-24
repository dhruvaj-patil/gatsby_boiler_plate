import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import TopBar from "../components/layout/TopBar"
import { links } from "../data/example"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}



const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <TopBar name="TopBar Test" seoDetails={{defer: true}}></TopBar>
     
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
