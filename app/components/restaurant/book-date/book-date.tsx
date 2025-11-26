"use client";
import { useState } from "react";
import { useTheme } from "next-themes";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import styles from "./book-date.module.css";
const { bookContainer } = styles;
const BookDate = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [attendees, setAttendees] = useState(1);
  const { theme } = useTheme();

  return (
    <div className={`${bookContainer} p-3`}>
      <h5 className="text-center">Book a Reservation</h5>
      <hr />
      <div className="d-flex flex-column text-center">
        <div className="d-flex justify-content-center flex-column gap-3">
          <label>Number of Attendees:</label>
          <input
            type="number"
            min="1"
            value={attendees}
            onChange={(e) => setAttendees(Number(e.target.value))}
            className="form-control text-center"
            placeholder="Number of attendees"
          />

          <div className="d-flex gap-2">
            <div className="flex-grow-1">
              <label>Select Date:</label>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => date && setSelectedDate(date)}
                dateFormat="MMMM d, yyyy"
                className="form-control text-center"
                calendarClassName={theme === "dark" ? styles.darkDatepicker : ""}
              />
            </div>

            <div className="flex-grow-1">
              <label>Select Time:</label>
              <DatePicker
                selected={selectedTime}
                onChange={(time) => time && setSelectedTime(time)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={30}
                timeCaption="Time"
                dateFormat="h:mm aa"
                className="form-control text-center"
                calendarClassName={theme === "dark" ? styles.darkDatepicker : ""}
              />
            </div>
          </div>
        </div>

        <button className="btn btn-danger mt-3 py-2">Book Now</button>
      </div>
    </div>
  );
};

export default BookDate;
