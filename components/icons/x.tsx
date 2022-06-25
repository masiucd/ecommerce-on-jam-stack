import React from "react"

interface Props {
  width?: number
  height?: number
}
const XIcon = ({width = 25, height = 25}: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    className="fill-current"
    viewBox="0 0 256 256"
  >
    <rect width="256" height="256" fill="none"></rect>
    <line
      x1="200"
      y1="56"
      x2="56"
      y2="200"
      className="stroke-current"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    ></line>
    <line
      x1="200"
      y1="200"
      x2="56"
      y2="56"
      className="stroke-current"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    ></line>
  </svg>
)

export {XIcon}
