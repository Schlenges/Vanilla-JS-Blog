const NavItem = (tag, isActive, onClick, onSelect) => {
  let button

  function _createElements(){
    button = document.createElement('button')
  }

  function _addAttributes(){
    button.className = isActive ? "nav-link active" : "nav-link"
    button.id = tag.replace(/\s/g,'')
    button.textContent = tag
    button.addEventListener('click', handleClick)
    button.addEventListener('select', handleClick)
  }
  
  function handleClick(){
    onClick()
    onSelect()
  }

  function updateActiveClass(){
    let btnClass = document.querySelector(`#${tag.replace(/\s/g,'')}`).classList
    isActive ? btnClass.add("active") : btnClass.remove("active")
  }

  const render = () => {
    if(!document.querySelector('.nav-link')){
      _createElements()
      _addAttributes()
      return button
    }
    
    updateActiveClass()    
  }

  return render()
}

export default NavItem