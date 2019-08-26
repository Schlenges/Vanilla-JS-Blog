import Navbar from './components/Navbar.js'
import Posts from './components/Posts.js'

import postsFile from './data/posts.js'

const App = () => {
  let container
  let state = {
    "posts": postsFile.posts,
    "tag": "home"
  }

  const setTag = (newTag) => {
    state.tag = newTag
    state.posts = state.tag !== "home" ? postsFile.posts.filter(post => post.tag === state.tag) : postsFile.posts
    render()
  }

  const render = () => {
    if(!document.querySelector('.posts')){
      container = document.createElement('div')
      container.appendChild(Navbar(setTag))
      container.appendChild(Posts(state.posts))

      return container
    }

    container.replaceChild(Posts(state.posts), document.querySelector('.posts'))
  }

  return render()
}

export default App