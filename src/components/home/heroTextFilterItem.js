import React, { useState } from "react"
import { useAppContext } from "../../provider"
import { useCursorChange } from '../../hooks'
import { HeadingTwo } from '../../elements'

const HeroTextFilterItem = ({
  filterValue,
  newCursorElement,
  content,
  setStartScroll,
  setProjectCategoryFilter,
  setShowLogos,
}) => {
  const { setCursorElement } = useAppContext()


  const handleProjectFilter = () => {
    setProjectCategoryFilter(filterValue)
    setStartScroll(true)
    setShowLogos(false)
    // Reset to initial cursor so images don't appear on scroll
    setCursorElement({ initial: "initial" })
  }

  const [bind] = useCursorChange({ [newCursorElement]: newCursorElement })

  const { setCurrentImageIndex, currentImageIndex, totalFilterImages } = useAppContext()

  // ImgStep control how much the mouse will move before going to the next picture
  const [imgStep, setImgStep] = useState(0)

  const handleMouseMove = () => {
    // Increase the imgStep by 1 everytime the mouse moves over it
    setImgStep(imgStep + 1)

    // 80 = how much images (totalFilterImages) * how many pixels before it moves (20)
    // Be sure to add the next step after the multiplication
    if (imgStep > totalFilterImages * 20 + 20) {
      // If it is the max index of pics then go back to 0
      setImgStep(0)
    }
    // Turn the imgStep into a flat value and set it to the img Index
    setCurrentImageIndex(Math.floor(imgStep / 20))


    console.log('current image index', currentImageIndex)
  }

  return (
    <strong
      style={{ fontWeight: 500 }}
      role="button"
      tabIndex={0}
      {...bind}
      onMouseMove={handleMouseMove}
      onClick={handleProjectFilter}
      onKeyDown={handleProjectFilter}
    >
      {content}
    </strong>
  )
}

export default HeroTextFilterItem
