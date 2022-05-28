import {Head, Html, Main, NextScript} from "next/document"

export default function Document(): JSX.Element {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-stone-200">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
