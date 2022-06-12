import Highlighted from "~components/elements/highlighted"

import {CallToActions} from "./cta"

const Description = () => (
  <aside className="flex flex-col justify-evenly m-auto p-2 mb-4 leading-7	">
    <h3 className="text-2xl mb-2">Digital art for the people!</h3>
    <p>
      Painting is my second passion after{" "}
      <Highlighted>programing and developing</Highlighted>.{" "}
    </p>
    <p>
      Pick and choose any image that you like, the money will help me to create
      more content and 50% will be given away to{" "}
      <Highlighted>support all the people</Highlighted> in <br />
      <Highlighted>Ukraine</Highlighted> cause of the horrible war.
    </p>
    <CallToActions />
  </aside>
)

export {Description}
