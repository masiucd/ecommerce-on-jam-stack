import React from "react"

const getFile = async (): Promise<void> => {
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
    const [{kind, name}] = response
    console.log({kind, name})
  }
}
const FileSystem = (): JSX.Element => {
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
              await getFile()
            }}
          >
            Open Svg
          </button>
          <button disabled className="border">
            Save Svg
          </button>
        </div>
        <textarea
          id="editor"
          rows={20}
          placeholder="Upload SVG"
          disabled
        ></textarea>
      </div>
      <div id="img-container"></div>
    </div>
  )
}

export default FileSystem
