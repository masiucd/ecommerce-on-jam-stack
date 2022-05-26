import React, {useEffect, useState} from "react"
import styles from "./styles.module.css"

const useGoogleMapApi = () => {
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

const Geolocation = () => {
  const url = useGoogleMapApi()

  return (
    <div className={styles.wrapper}>
      <p>Geolocation</p>
      <div className="card">
        {url !== null && (
          <iframe
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={url}
            width="100%"
            height="500"
            id="map"
          ></iframe>
        )}
      </div>
    </div>
  )
}

export default Geolocation
