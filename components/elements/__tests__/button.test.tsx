import {render, screen} from "@testing-library/react"
import {describe, expect, test, vi} from "vitest"

import Button from "../button"

describe("different ways to use the button", () => {
  test("Common button", () => {
    const fn = vi.fn()
    render(
      <Button onClick={fn} className="border-2 border-red-500">
        <span>Hello</span>
      </Button>
    )
    const buttonElement = screen.getByRole("button", {name: /hello/gi})
    expect(buttonElement).toBeDefined()
    buttonElement.click()
    expect(fn).toHaveBeenCalledOnce()
    expect(buttonElement.classList.contains("border-2"))
    expect(buttonElement.classList.contains("border-red-500"))
  })
  test("Link button", () => {
    render(
      <Button href="http">
        <span>Hello</span>
      </Button>
    )
    const linkElement = screen.getByRole("link", {name: /hello/gi})
    expect(linkElement.getAttribute("href")).toBe("/http")
  })
})
