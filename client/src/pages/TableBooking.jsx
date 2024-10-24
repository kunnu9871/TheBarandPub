import React, { useState } from "react";

const TableBooking = () => {
  const [guests, setGuests] = useState(1);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  
  const timeslots = [
    "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", 
    "2:00 PM", "6:00 PM", "6:30 PM", "7:00 PM", 
    "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM"
  ];

  const handleGuestsChange = (event) => {
    setGuests(event.target.value);
  };

  const handleBooking = () => {
    if (!selectedDate || !selectedTime) {
      alert("Please select a date and time!");
      return;
    }
    alert(`Table booked for ${guests} guests on ${selectedDate} at ${selectedTime}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-opacity-30 backdrop-blur">
      <div className="w-full max-w-lg bg-white p-8 rounded-3xl shadow-2xl transition transform hover:scale-105 hover:shadow-xl">
        <h1 className="text-4xl font-bold text-center mb-6 text-blue-900">Book Your Table</h1>
        <div className="space-y-4">
          {/* Date Selection */}
          <div className="flex flex-col">
            <label className="text-lg font-medium text-blue-800">Select Date:</label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 transition duration-300"
            />
          </div>

          {/* Time Slot Selection */}
          <div className="flex flex-col">
            <label className="text-lg font-medium text-blue-800">Select Time Slot:</label>
            <div className="grid grid-cols-3 gap-2 mt-2">
              {timeslots.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`p-2 rounded-lg text-white font-bold transition duration-300 ${
                    selectedTime === time ? "bg-blue-500" : "bg-blue-500"
                  } hover:bg-blue-600 focus:ring-2 focus:ring-blue-300`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* Number of Guests */}
          <div className="flex flex-col">
            <label className="text-lg font-medium text-blue-800">Number of Guests:</label>
            <select
              value={guests}
              onChange={handleGuestsChange}
              className="p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 transition duration-300"
            >
              {[...Array(20).keys()].map((guest) => (
                <option key={guest + 1} value={guest + 1}>
                  {guest + 1} Guest{guest + 1 > 1 && "s"}
                </option>
              ))}
            </select>
          </div>

          {/* Book Now Button */}
          <div className="text-center">
            <button
              onClick={handleBooking}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold text-lg transition-transform transform hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableBooking;
