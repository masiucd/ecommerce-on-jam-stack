import Button from "~components/elements/button"

const CallToActions = () => (
  <div className="flex py-4 gap-3">
    <Button href="/cards">
      <span>All cards</span>
    </Button>
    <Button href="/contact">
      <span>Get in touch</span>
    </Button>
  </div>
)

export {CallToActions}
