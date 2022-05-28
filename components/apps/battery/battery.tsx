import React, {useState} from "react"

interface Nav extends Navigator {
  getBattery: () => Promise<Record<string, any>>
}
const getBattery = async (): Promise<Record<string, any>> => {
  const navigator = window.navigator as Nav
  const battery = await navigator.getBattery()
  return battery
}

const Battery = (): JSX.Element => {
  const [battery, setBattery] = useState<null | Record<string, any>>(null)
  if (battery !== null) {
    // console.log(battery)
    // console.log(battery.charging)
    // console.log(battery.level)
    // console.log(`${battery.level * 100}%`)
  }
  return (
    <div>
      <p>Battery</p>
      <button
        onClick={async (): Promise<void> => {
          const battery = await getBattery()

          setBattery(battery)
        }}
      >
        click
      </button>
      <div className="h-20 w-40 border-2 border-slate-700 p-2">
        <div
          className={`progress border-2 border-red-500 h-full bg-red-400 w-[10%] ${
            battery ? `w-[${battery.level * 100}%]` : ""
          } `}
        ></div>
      </div>
    </div>
  )
}

// let batteryIsCharging = false;

// navigator.getBattery().then(function(battery) {
//   batteryIsCharging = battery.charging;

//   battery.addEventListener('chargingchange', function() {
//     batteryIsCharging = battery.charging;
//   });
// });

export default Battery
