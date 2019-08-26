import Post from './post.js'

const posts = (postEntries) => {

  const render = () => {
    let container = document.createElement('div')
    container.className = "posts"

    postEntries.forEach(postItem => container.appendChild(Post(postItem)))

    return container
  }

  return render()
  
}

export default posts