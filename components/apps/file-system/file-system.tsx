import React, {useState} from "react"

let fileManager = null
const getFile = async (): Promise<string | null> => {
  if (typeof window !== "undefined" && "showOpenFilePicker" in window) {
    const response = await window?.showOpenFilePicker({
      types: [
        {
          description: "Svg Images",
          accept: {
            "image/*": [".png", ".gif", ".jpeg", ".jpg", ".svg"],
          },
        },
      ],
      excludeAcceptAllOption: true,
      multiple: true,
    })
    const [fileHandle] = response
    fileManager = fileHandle
    if (fileHandle.kind === "file") {
      const file = await fileHandle.getFile()
      const content = await file.text()
      return content
    }
  }
  return null
}

const saveFile = async (): Promise<void> => {
  // fileManager
}

const FileSystem = (): JSX.Element => {
  const [svgContent, setSvgContent] = useState<string | null>(null)
  return (
    <div className="flex flex-col border border-red-500">
      <h2>
        <a href="https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API">
          MDN File System
        </a>
      </h2>

      <div className="flex flex-col ">
        <div className="flex justify-between max-w-[18rem] mx-auto border gap-4">
          <button
            id="open"
            className="border"
            onClick={async (): Promise<void> => {
              const content = await getFile()
              if (content !== null) {
                setSvgContent(content)
              }
            }}
          >
            Open Svg
          </button>
          <button disabled={svgContent === null} className="border">
            Save Svg
          </button>
        </div>
        <textarea
          id="editor"
          rows={20}
          placeholder="Upload SVG"
          disabled={svgContent === null}
          value={svgContent ?? ""}
          onChange={(e): void => {
            setSvgContent(e.target.value)
          }}
        ></textarea>
      </div>
      <div id="img-container"></div>
    </div>
  )
}

export default FileSystem
