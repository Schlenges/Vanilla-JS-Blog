import NavItem from './NavItem.js'

const Navbar = (setTag) => {
  let nav
  let logoDiv
  let blogTitle
  let navWrap
  let state = {
    "tags": ["home", /* "coding", "nutrition", "mental health" */],
    "active": "home",
    "setActive": (tag) => {state.active = tag; render()}
  }

  const onClick = (tag) => setTag(tag)
  const onSelect = (tag) => state.setActive(tag)

  function _createElements(){
    nav = document.createElement("nav")
    logoDiv = document.createElement("div")
    blogTitle = document.createElement("p")
    navWrap = document.createElement('div')
  }

  function _addAttributes(){
    logoDiv.setAttribute("id", "logo")
    blogTitle.textContent = "Things I Learned Today"
    navWrap.className = "nav-wrap"
  }

  function _appendElements(){
    nav.appendChild(logoDiv)
    logoDiv.appendChild(blogTitle)
    nav.appendChild(navWrap)
    state.tags.forEach(tag => navWrap.appendChild(
      NavItem(tag, state.active === tag, () => onClick(tag), () => onSelect(tag))
      )
    )
  }

  const render = () => {
    if(!document.querySelector('.nav-link')){
      _createElements()
      _addAttributes()
      _appendElements()

      return nav
    }

    state.tags.forEach(tag => NavItem(tag, state.active === tag, () => onClick(tag), () => onSelect(tag))) 
  }

  return render()
}

export default Navbar