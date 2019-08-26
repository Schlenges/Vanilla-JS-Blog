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

const navbar = (setTag) => {

  let state = {
    "tags": ["home", "coding", "nutrition", "mental health"],
    "active": "home",
    "setActive": (tag) => {state.active = tag; renderItem()}
  }

  // createElements
  let nav = document.createElement("nav")
  let logoDiv = document.createElement("div")
  let blogTitle = document.createElement("p")
  let navWrap = document.createElement('div')

  // setAttributes
  logoDiv.setAttribute("id", "logo")
  blogTitle.textContent = "Things I Learned Today"
  navWrap.className = "nav-wrap"

  // appendElements
  nav.appendChild(logoDiv)
  logoDiv.appendChild(blogTitle)
  nav.appendChild(navWrap)

  
  const renderItem = () => {
    if(!document.querySelector('.nav-link')){
      state.tags.forEach(tag => navWrap.appendChild(navItem(tag, state.active === tag, () => setTag(tag), () => state.setActive(tag))))
    } else {
      state.tags.forEach(tag => navItem(tag, state.active === tag, () => setTag(tag), () => {state.setActive(tag)}))
    }
  } 

  renderItem()

  return nav
}

export default navbar