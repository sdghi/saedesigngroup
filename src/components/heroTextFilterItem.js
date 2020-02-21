import React from "react"

const HeroTextFilterItem = ({
  setCursorElement,
  filterValue,
  newCursorElement,
  content,
  setStartScroll,
  setProjectCategoryFilter,
  setShowLogos,
}) => {
  const handleProjectFilter = filterValue => {
    setProjectCategoryFilter(filterValue)
    setStartScroll(true)
    setShowLogos(false)
  }

  return (
    <strong
      role="button"
      tabIndex={0}
      onMouseEnter={() =>
        setCursorElement({ [newCursorElement]: newCursorElement })
      }
      onMouseLeave={() => setCursorElement({ initial: "initial" })}
      onClick={() => handleProjectFilter(filterValue)}
      onKeyDown={() => handleProjectFilter(filterValue)}
    >
      {content}
    </strong>
  )
}

export default HeroTextFilterItem
