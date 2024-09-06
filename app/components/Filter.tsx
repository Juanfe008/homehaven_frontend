import React, { useState } from 'react';
import { FaSearch, FaMapMarkerAlt, FaCalendarAlt, FaUserFriends } from 'react-icons/fa';

interface FilterProps {
  onFilter: (filter: string) => void;
}

const Filter: React.FC<FilterProps> = ({ onFilter }) => {
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('');

  const handleSearch = () => {
    const filterString = `${location},${checkIn},${checkOut},${guests}`;
    onFilter(filterString);
  };

  return (
    <div className="filter-component bg-white rounded-full shadow-md flex items-center justify-between p-2 max-w-5xl mx-auto">
      <div className="flex items-center border-r px-4">
        <FaMapMarkerAlt className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Where are you going?"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="outline-none text-black"
        />
      </div>
      <div className="flex items-center border-r px-4">
        <FaCalendarAlt className="text-gray-400 mr-2" />
        <input
          type="date"
          placeholder="Check-in"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          className="outline-none text-black"     
        />
      </div>
      <div className="flex items-center border-r px-4">
        <FaCalendarAlt className="text-gray-400 mr-2" />
        <input
          type="date"
          placeholder="Check-out"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          className="outline-none text-black"
        />
      </div>
      <div className="flex items-center px-4">
        <FaUserFriends className="text-gray-400 mr-2" />
        <input
          type="number"
          placeholder="Guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          className="outline-none w-16 text-black"
        />
      </div>
      <button
        onClick={handleSearch}
        className="bg-purple-500 text-white p-2 rounded-full hover:bg-purple-600 transition duration-300"
      >
        <FaSearch />
      </button>
    </div>
  );
};

export default Filter;
