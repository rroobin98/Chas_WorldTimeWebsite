import { useEffect, useState } from "react";
import { timeZones } from "./timeZones";
import { useParams } from "react-router-dom";

export default function SingleClock() {
  const [time, setTime] = useState();

  const { cityKey } = useParams();
  const {city, timeZone, country } = timeZones[cityKey];

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setTime(date.toLocaleTimeString("sv-SE", { timeZone }));
    }, 1000);
  }, []);

  return (
    <div
      className="flex md:flex-col justify-between items-center 
    md:items-start p-6 bg-slate-200 rounded-md w-full md:w-auto mb-4"
    >
      <div className="text-xl text-gray-600">{city}</div>
      <div className="text-xl text-sky-600">{country}</div>
      <div className="text-4xl text-gray-900 font-semibold font-mono">
        {time}
      </div>
    </div>
  );
}
