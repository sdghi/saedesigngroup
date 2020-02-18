import React, { useEffect, useContext } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { myContext } from "../provider"

const ServicesPage = () => {
  const { setCursorElement } = useContext(myContext)

  useEffect(() => {
    setCursorElement({ initial: "initial" })
  }, [setCursorElement])

  return (
    <Layout>
      <SEO title="Services" />
      <div>Services</div>
    </Layout>
  )
}

export default ServicesPage
