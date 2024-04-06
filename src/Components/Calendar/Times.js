import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../Context/DataContext";

function Times() {
  const timeList = [
    "1:30pm",
    "2:00pm",
    "2:30pm",
    "3:00pm",
    "3:30pm",
    "4:00pm",
    "4:30pm",
    "5:00pm",
    "5:30pm",
    "6:00pm",
    "6:30pm",
    "7:00pm",
    "7:30pm",
    "8:00pm",
    "8:30pm",
    "9:00pm",
    "9:30pm",
  ];
  const { selectedDate } = useContext(DataContext);
  return (
    <div className="px-3">
      <p className="text-sm my-3 h- ">{selectedDate}</p>
      <div className="max-h-[300px] md:max-h-[300px] my-2 flex flex-col sm::flex-row gap-2 overflow-y-scroll">
        {timeList.map((time, index) => {
          return (
            <Link
              to="/form"
              key={index}
              className="font-semibold text-sm text-blue-600 px-6 py-2 border-2 border-blue-700 rounded"
            >
              {time}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
export default Times;
