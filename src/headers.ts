import "./style.css"

const initStyles = () => {
  const title = document.querySelector("title") as HTMLTitleElement

  const link1 = document.createElement("link")
  link1.setAttribute("rel", "preconnect")
  link1.setAttribute("href", "https://fonts.googleapis.com")

  const link2 = document.createElement("link")
  link2.setAttribute("rel", "preconnect")
  link2.setAttribute("href", "https://fonts.gstatic.com")
  link2.setAttribute("crossorigin", "")

  const link3 = document.createElement("link")
  link3.setAttribute(
    "href",
    "https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500&family=Roboto+Mono:ital,wght@0,400;1,300;1,400&display=swap"
  )
  link3.setAttribute("rel", "stylesheet")

  title.insertAdjacentElement("afterend", link1)
  link1.insertAdjacentElement("afterend", link2)
  link2.insertAdjacentElement("afterend", link3)
}

export {initStyles}
