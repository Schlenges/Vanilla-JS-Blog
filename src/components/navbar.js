import NavItem from './navItem.js'

const navbar = (setTag) => {

  let state = {
    "tags": ["home", "coding", "nutrition", "mental health"],
    "active": "home",
    "setActive": (tag) => {state.active = tag; render()}
  }

  let nav = document.createElement("nav")

  const render = () => {
    if(!document.querySelector('.nav-link')){
      // createElements
      
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

      state.tags.forEach(tag => navWrap.appendChild(NavItem(tag, state.active === tag, () => setTag(tag), () => state.setActive(tag))))
    } else {
      state.tags.forEach(tag => NavItem(tag, state.active === tag, () => setTag(tag), () => {state.setActive(tag)})) // pass as props obj
    }

    
    
  }

  render()
  return nav
}

export default navbar