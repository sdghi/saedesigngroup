import React from "react"
import InitialCursor from "./cursors/initialCursor"
import BrandingCursor from "./cursors/brandingCursor"
import PackagingCursor from "./cursors/packagingCursor"
import WorkCursor from "./cursors/workCursor"
import ServicesCursor from "./cursors/servicesCursor"
import AboutCursor from "./cursors/aboutCursor"
import ContactCursor from "./cursors/contactCursor"

const CustomCursor = ({ xValue, yValue, cursorElement }) => {
  switch (cursorElement) {
    case "initial":
      return <InitialCursor xValue={xValue} yValue={yValue} />
    case "branding":
      return <BrandingCursor xValue={xValue} yValue={yValue} />
    case "packaging":
      return <PackagingCursor xValue={xValue} yValue={yValue} />
    case "work":
      return <WorkCursor xValue={xValue} yValue={yValue} />
    case "services":
      return <ServicesCursor xValue={xValue} yValue={yValue} />
    case "about":
      return <AboutCursor xValue={xValue} yValue={yValue} />
    case "contact":
      return <ContactCursor xValue={xValue} yValue={yValue} />
    default:
      return null
  }
}

export default CustomCursor
