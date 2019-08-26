const Post = (postItem) => {
  let article
  let title
  let textDiv
  let articleText

  function _createElements(){
    article = document.createElement('article')
    title = document.createElement('h1')
    textDiv = document.createElement('div')
    articleText = document.createElement('p')
  }

  function _setAttributes(){
    textDiv.setAttribute("id", "text")
    title.textContent = postItem.title
    articleText.textContent = postItem.content
  }

  function _appendElements(){
    article.appendChild(title)
    article.appendChild(textDiv)
    textDiv.appendChild(articleText)
  }

  const render = () => {
    _createElements()
    _setAttributes()
    _appendElements()
    
    return article
  }

  return render()
}

export default Post