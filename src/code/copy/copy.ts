import {initStyles} from "../../headers"
import "./copy.css"
;(() => {
  initStyles()
  const dialog = document.createElement("dialog") as HTMLDialogElement
  dialog.setAttribute("open", "false")

  const copyInput = document.getElementById("copy-input") as HTMLInputElement
  const copy = async (): Promise<void> => {
    await navigator.clipboard.writeText(copyInput.value)
    dialog.innerHTML = `<div class="dialog"> <p>Copied to clipboard <span>${copyInput.value}</span>!</p></div>`
    document.body.appendChild(dialog)
    setTimeout(() => {
      document.body.removeChild(dialog)
      copyInput.value = ""
    }, 2500)
  }

  const copyButton = document.getElementById("copy-button") as HTMLButtonElement
  copyButton.addEventListener("click", copy)
})()
