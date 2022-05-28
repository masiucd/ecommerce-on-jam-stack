import React, {FC, useState} from "react"

let fileHandle: any = null
const getFile = async (): Promise<string | null> => {
  if (typeof window !== "undefined" && "showOpenFilePicker" in window) {
    const options = {
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
    }
    ;[fileHandle] = await window.showOpenFilePicker(options)

    if (fileHandle.kind === "file") {
      const file = await fileHandle.getFile()
      const content = await file.text()
      return content
    }
  }
  return null
}

async function writeFile(fileHandle: any, contents: string): Promise<void> {
  // Create a FileSystemWritableFileStream to write to.
  const writable = await fileHandle.createWritable()

  // Write the contents of the file to the stream.
  await writable.write(contents)

  // Close the file and write the contents to disk.
  await writable.close()
}

type ButtonProps = {
  onClick: () => void
  children: React.ReactNode
  className?: string
  disabled?: boolean
}
const Button: FC<ButtonProps> = ({
  children,
  className,
  onClick,
  disabled,
}): JSX.Element => {
  return (
    <button
      onClick={onClick}
      className={`p-1 disabled:opacity-60 disabled:cursor-not-allowed shadow-sm rounded-md border-2 border-slate-700 bg-slate-200 hover:bg-slate-400 ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

const FileSystem = (): JSX.Element => {
  const [svgContent, setSvgContent] = useState<string | null>(null)
  return (
    <div className="flex flex-col shadow-md p-2 min-w-full  md:min-w-[35rem]">
      <h2>
        <a href="https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API">
          MDN File System
        </a>
      </h2>

      <div className="flex flex-col ">
        <div className="flex justify-between max-w-[18rem] mx-auto  gap-4 m-2">
          <Button
            className="border p-1"
            onClick={async (): Promise<void> => {
              const content = await getFile()
              if (content !== null) {
                setSvgContent(content)
              }
            }}
          >
            Open Svg
          </Button>
          <Button
            onClick={(): void => {
              if (svgContent !== null) {
                writeFile(fileHandle, svgContent)
              }
            }}
            disabled={svgContent === null}
            className="border"
          >
            Save Svg
          </Button>
        </div>
        <textarea
          className="border border-slate-700 p-2 rounded-md shadow-md"
          rows={10}
          placeholder="Upload SVG"
          disabled={svgContent === null}
          value={svgContent ?? ""}
          onChange={(e): void => {
            setSvgContent(e.target.value)
          }}
        ></textarea>
      </div>
      <div className="p-2 ">
        <p>Preview SVG image</p>
        <div
          dangerouslySetInnerHTML={{
            __html: svgContent !== null ? svgContent : "",
          }}
        />
      </div>
    </div>
  )
}

export default FileSystem
