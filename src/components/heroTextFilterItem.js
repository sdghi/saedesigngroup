import React from "react"

const HeroTextFilterItem = ({
  context,
  filterValue,
  newCursorElement,
  content,
  setStartScroll,
  setProjectCategoryFilter,
}) => {
  const handleProjectFilter = filterValue => {
    setProjectCategoryFilter(filterValue)
    setStartScroll(true)
  }

  return (
    <strong
      role="button"
      tabIndex={0}
      onMouseEnter={() =>
        context.setCursorElement({ [newCursorElement]: newCursorElement })
      }
      onMouseLeave={() => context.setCursorElement({ initial: "initial" })}
      onClick={() => handleProjectFilter(filterValue)}
      onKeyDown={() => handleProjectFilter(filterValue)}
    >
      {content}
    </strong>
  )
}

export default HeroTextFilterItem
