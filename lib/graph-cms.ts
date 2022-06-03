interface Options {
  variables?: Record<string, string | number | boolean>
  preview?: boolean
}
async function fetchAPI(
  query: string,
  {variables, preview}: Options = {}
): Promise<Record<string, any>> {
  try {
    // eslint-disable-next-line no-console
    console.log(preview)
    const res = await fetch(process.env.GRAPHCMS_PROJECT_API ?? "", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${
        //   preview
        //     ? process.env.GRAPHCMS_DEV_AUTH_TOKEN
        //     : process.env.GRAPHCMS_PROD_AUTH_TOKEN
        // }`,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    })
    const json = await res.json()
    if (json.errors) {
      console.error(process.env.CMS_GCMS_PROJECT_NAME)
      console.error(json.errors)
      throw new Error("Failed to fetch API")
    }
    return json.data
  } catch (error) {
    let message = "Unknown Error"
    if (error instanceof Error) {
      message = error.message
      console.error(error.message)
    } else {
      message = String(error)
      console.error(message)
    }
    return {message}
  }
}

const getAllCardImages = async (
  first = 6
): Promise<Record<string, Array<any>>> => {
  const data = await fetchAPI(
    `
  query CardImages($first: Int!) {
    cardImages(first: $first) {
      name
      description {
        text
      }
      image
      price
    }
  }  
  `,
    {preview: true, variables: {first}}
  )
  return data.cardImages
}

export {getAllCardImages}
