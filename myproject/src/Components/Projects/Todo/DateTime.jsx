import { useEffect, useState } from "react";

export const DateTime =() => {
    const [datetime, setDatetime] = useState("");

     useEffect(() => {
        const interval = setInterval(() => {
          const currentDate = new Date();
          const formattedDate = currentDate.toLocaleDateString("en-Us", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          });
          const formattedTime = currentDate.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
          });
          setDatetime(`${formattedDate} - ${formattedTime}`);
        }, 1000);
        return () => clearInterval(interval);
      }, []);

    return(
        <>
         <h2 className="date-time">{datetime}</h2>
        </>

    )
}