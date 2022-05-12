import "./style.css"
import "./home.css"

const navItems = [
  {name: "DOM", path: "./src/pages/dom.html"},
  {name: "Naviagtor", path: "./src/pages/navigator.html"},
  {name: "Copy", path: "./src/pages/copy.html"},
  {name: "Permission API", path: "./src/pages/permission-api.html"},
]

const app = document.querySelector<HTMLDivElement>("#app")!

app.innerHTML = `
<div class="box">
  <ul>    
    ${navItems.map(item => `<li> <a href=${item.path}>${item.name}</a>   </li>`).join("")}
  </ul>
</div>
`
