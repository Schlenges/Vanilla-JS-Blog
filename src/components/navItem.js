const navItem = (tag, isActive, onClick, onSelect) => {
  let button = document.createElement('button')
  
  function handleClick(){
    onClick()
    onSelect()
  }

  const render = () => {
    if(!document.querySelector('.nav-link')){
      button.className = isActive ? "nav-link active" : "nav-link"
      button.id = tag.replace(/\s/g,'')
      button.textContent = tag
      button.addEventListener('click', handleClick)
      button.addEventListener('select', handleClick)
    } else {
      let btnClass = document.querySelector(`#${tag.replace(/\s/g,'')}`).classList
      isActive ? btnClass.add("active") : btnClass.remove("active")
    }
  }

  render()

  return button
}

export default navItem