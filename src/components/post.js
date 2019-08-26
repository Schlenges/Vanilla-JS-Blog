const post = (postItem) => {

  const render = () => {
    // create elements
    let article = document.createElement('article')
    let title = document.createElement('h1')
    let textDiv = document.createElement('div')
    let articleText = document.createElement('p')
  
    // set attributes
    textDiv.setAttribute("id", "text")
    title.textContent = postItem.title
    articleText.textContent = postItem.content
  
    // append elements
    article.appendChild(title)
    article.appendChild(textDiv)
    textDiv.appendChild(articleText)

    return article
  }

  return render()
}

export default post