import React, { useLayoutEffect, useState } from "react"
import { useMousePosition } from "../hooks"
import InitialCursor from "./cursors/initialCursor"
import BrandingCursor from "./cursors/brandingCursor"
import PackagingCursor from "./cursors/packagingCursor"
import WorkCursor from "./cursors/workCursor"
import ServicesCursor from "./cursors/servicesCursor"
import AboutCursor from "./cursors/aboutCursor"
import ContactCursor from "./cursors/contactCursor"
import RelatedProjectCursor from "./cursors/relatedProjectsCursor"
import SelectedCursor from "./cursors/selectedCursor"
import CaseStudyCursor from "./cursors/caseStudyCursor"

const CustomCursor = ({ xValue, yValue, cursorElement }) => {
  const [showCursor, setShowCursor] = useState(false)
  const [x, y] = useMousePosition()

  /*  Keep this useEffect separate or the x, y change will always setSetCursorElement back
  to initial every time the mouse moves */
  useLayoutEffect(() => {
    // Disable the cursor until the user moves their mouse
    if ((!!x, !!y)) {
      setShowCursor(true)
    }
  }, [x, y])

  if (showCursor) {
    switch (Object.keys(cursorElement)[0]) {
      case "initial":
        return <InitialCursor xValue={x} yValue={y} />
      case "branding":
        return <BrandingCursor xValue={x} yValue={y} />
      case "packaging":
        return <PackagingCursor xValue={x} yValue={y} />
      case "work":
        return <WorkCursor xValue={x} yValue={y} />
      case "services":
        return <ServicesCursor xValue={x} yValue={y} />
      case "about":
        return <AboutCursor xValue={x} yValue={y} />
      case "contact":
        return <ContactCursor xValue={x} yValue={y} />
      case "selected":
        return <SelectedCursor xValue={x} yValue={y} />
      case "related":
        return (
          <RelatedProjectCursor
            xValue={x}
            yValue={y}
            cursorContent={Object.values(cursorElement)[0]}
          />
        )
      case "caseStudy":
        return <CaseStudyCursor xValue={x} yValue={y} />
      default:
        return null
    }
  } else {
    return null
  }
}

export default CustomCursor
