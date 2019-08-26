import Post from './Post.js'

const Posts = (postEntries) => {

  const render = () => {
    let container = document.createElement('div')
    
    container.className = "posts"

    postEntries.forEach( post => container.appendChild(Post(post)))

    return container
  }

  return render()
}

export default Posts