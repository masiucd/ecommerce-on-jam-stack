import React, {useEffect, useState} from "react"

const useGoogleMapApi = (): string | null => {
  const [url, setUrl] = useState<string | null>(null)
  useEffect(() => {
    if (typeof window !== "undefined" && "geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(pos => {
        setUrl(
          "https://maps.google.com/maps?q=" +
            pos.coords.latitude +
            "," +
            pos.coords.longitude +
            "&output=embed"
        )
      })
    }
  }, [])
  return url
}

const Geolocation = (): JSX.Element => {
  const url = useGoogleMapApi()
  return (
    <div className="min-w-[40rem] border-2 border-slate-700 rounded-md">
      <p className="bg-white p-2">
        Geolocation
        <a
          className="block text-blue-400"
          href="https://developers.google.com/maps/documentation/javascript/geolocation"
          target="_blank"
          rel="noreferrer"
        >
          Google API
        </a>
        <a
          className="block text-blue-400"
          href="https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API"
          target="_blank"
          rel="noreferrer"
        >
          MDN
        </a>
      </p>
      <div className="p-1">
        {url !== null ? (
          <iframe
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={url}
            width="100%"
            height="500"
            id="map"
          ></iframe>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  )
}

export default Geolocation
