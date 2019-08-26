import Navbar from './components/navbar.js'
import Posts from './components/posts.js'

import postsFile from '../posts/posts.js'

let state = {
  "posts": postsFile.posts,
  "tag": "home"
}

const setTag = (newTag) => {
  state.tag = newTag
  state.posts = state.tag !== "home" ? postsFile.posts.filter(post => post.tag === state.tag) : postsFile.posts
  renderPosts()
}

let container = document.createElement('div')

const renderPosts = () => {
  if(!document.querySelector('.posts')){
    container.appendChild(Navbar(setTag))
    container.appendChild(Posts(state.posts))
  } else{
    container.replaceChild(Posts(state.posts), document.querySelector('.posts'))
  }
}

const app = () => {
  renderPosts()
  return container
}

export default app