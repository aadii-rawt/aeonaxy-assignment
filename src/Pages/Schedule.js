import { useContext } from "react";
import { DataContext } from "../Context/DataContext";
// Images
import userProfile from "../Assets/profileUser.jpg";
import microsoft from "../Assets/microsoft.png";
import google from "../Assets/search.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faUser } from "@fortawesome/free-regular-svg-icons";
import { faEarthAmericas, faVideo } from "@fortawesome/free-solid-svg-icons";

function Schedule() {
  const { selectedDate } = useContext(DataContext);
  return (
    <div className="my-4 flex flex-col items-center justify-center">
      <img src={userProfile} className="w-12 mx-auto rounded-full" />
      <h2 className="font-semibold my-4 text-center">You are scheduled</h2>
      <p className="text-sm text-center">
        A calendar invitaion has been send to your email address.
      </p>
      <button className="w-fit mx-auto border-[1px]  border-black rounded-3xl px-3 py-1 my-4 text-sm font-light">
        Open Invitation
      </button>
      <div className="p-4 border-[1px] border-black rounded">
        <h1 className="font-semibold">Fibery Demo</h1>
        <p className="text-sm my-2 flex gap-2 items-center">
        <FontAwesomeIcon icon={faUser} /> Polina Zenevich
        </p>
        <p className="text-sm my-2 flex gap-2 items-center">
        <FontAwesomeIcon icon={faCalendar} /> 3:00pm - 3:45pm,
          {selectedDate},2024
        </p>
        <p className="text-sm my-2 flex gap-2 items-center">
        <FontAwesomeIcon icon={faEarthAmericas} /> India Standard Time
        </p>
        <p className="text-sm my-2 flex gap-2 items-center">
        <FontAwesomeIcon icon={faVideo} /> Web conferencing details to
          follow.
        </p>
      </div>
      {/* <hr className="w-full my-7 h-[1px] bg-slate-700" /> */}
      <h2 className="font-semibold text-base mt-5">
        Schedule your own meetings with Calendly for free
      </h2>
      <p className="text-sm py-1">
        Eliminate the back-and-forth emails for finding time.
      </p>
      <div className="loginwit flex flex-wrap justify-evenly gap-3">
        <button className="w-fit mx-auto border-[1px] border-black rounded-3xl px-3 py-1 my-4 text-sm font-light flex items-center gap-3">
          <img src={google} className="w-5" /> Sign up with Google
        </button>
        <button className="w-fit mx-auto border-[1px] border-black rounded-3xl px-3 py-1 my-4 text-sm font-light flex items-center gap-3">
          <img src={microsoft} className="w-5" /> Sign up with Microsoft
        </button>
      </div>
    </div>
  );
}
export default Schedule;
