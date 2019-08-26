const post = (postItem) => {
  let article = document.createElement('article')
  let title = document.createElement('h1')
  let textDiv = document.createElement('div')
  let articleText = document.createElement('p')

  textDiv.setAttribute("id", "text")

  article.appendChild(title)
  article.appendChild(textDiv)
  textDiv.appendChild(articleText)

  title.textContent = postItem.title
  articleText.textContent = postItem.content

  return article
}

const posts = (postEntries) => {
  let container = document.createElement('div')
  container.className = "posts"

  postEntries.forEach(postItem => container.appendChild(post(postItem)))

  return container
}

export default posts