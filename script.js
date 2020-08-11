const evilButton = document.getElementById('evil-button')
const OFFSET = 100

evilButton.addEventListener('click',() => {
    alert('Nice Try')
    window.close()
})

document.addEventListener('mousemove', (e) => {
    const x = e.pageX
    const y = e.pageY
    const buttonBox = evilButton.getBoundingClientRect()
    const horizontalDistanceForm = distanceFromCenter(buttonBox.x, x, buttonBox.width)
    const verticalDistanceForm = distanceFromCenter(buttonBox.y, y, buttonBox.width)
    const horizontalOffset = buttonBox.width / 2 + OFFSET
    const VerticalOffset = buttonBox.width / 2 + OFFSET
    if(Math.abs(horizontalDistanceForm) <= horizontalOffset && Math.abs(verticalDistanceForm) <= VerticalOffset) {
        setButtonPosition(
            buttonBox.x + horizontalOffset / horizontalDistanceForm *10,
            buttonBox.y + VerticalOffset / verticalDistanceForm *10
        )
    }
})
function setButtonPosition(left, top) {
    const windowBox = document.body.getBoundingClientRect()
    const buttonBox = evilButton.getBoundingClientRect()
  
    if(distanceFromCenter(left, windowBox.left, buttonBox.width) < 0) {
      left = windowBox.right - buttonBox.width - OFFSET
    }
    if(distanceFromCenter(left, windowBox.right, buttonBox.width) > 0) {
      left = windowBox.left + OFFSET
    }
    if(distanceFromCenter(top, windowBox.top, buttonBox.height) < 0) {
      top = windowBox.bottom - buttonBox.height - OFFSET
    }
    if(distanceFromCenter(top, windowBox.bottom, buttonBox.height) > 0) {
      top = windowBox.top + OFFSET
    }
  
    evilButton.style.left = `${left}px`
    evilButton.style.top = `${top}px`
  }
  
function distanceFromCenter(boxPosition, mousePosition, boxSize){
    return boxPosition - mousePosition + boxSize / 2 
}