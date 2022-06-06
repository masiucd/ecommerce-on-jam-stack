interface Options {
  variables?: Record<string, string | number | boolean>
}
async function fetchAPI(query: string, {variables}: Options = {}) {
  try {
    // eslint-disable-next-line no-console

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
  }
}

const getAllCardImages = async (first = 6): Promise<HashMap<Array<Card>>> => {
  const data = await fetchAPI(
    `
  query CardImages($first: Int!) {
    cardImages(first: $first) {
      id
      name
      description {
        text
      }
      image
      price
    }
  }  
  `,
    {variables: {first}}
  )
  return data.cardImages
}

export {getAllCardImages}
