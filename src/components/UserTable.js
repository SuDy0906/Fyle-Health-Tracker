import React, { useState } from 'react';

const UserTable = ({ users, selectUser }) => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(search.toLowerCase()) &&
    (filter === 'All' || user.workouts.some(workout => workout.type === filter))
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const displayedUsers = filteredUsers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="p-2 border border-gray-300 rounded mb-2 w-full"
      />
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="p-2 border border-gray-300 rounded mb-2 w-full"
      >
        <option value="All">All</option>
        {/* Add workout type options dynamically */}
        {Array.from(new Set(users.flatMap(user => user.workouts.map(workout => workout.type)))).map(type => (
          <option key={type} value={type}>{type}</option>
        ))}
      </select>
      <table className="table-auto w-full mb-4 bg-white rounded shadow-lg">
        <thead>
          <tr>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Workouts</th>
            <th className="border px-4 py-2">Total Workout Minutes</th>
          </tr>
        </thead>
        <tbody>
          {displayedUsers.map(user => (
            <tr key={user.id} onClick={() => selectUser(user)} className="cursor-pointer hover:bg-gray-100">
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.workouts.map(workout => workout.type).join(', ')}</td>
              <td className="border px-4 py-2">{user.workouts.reduce((total, workout) => total + workout.minutes, 0)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center space-x-2">
        {Array.from({ length: Math.ceil(filteredUsers.length / itemsPerPage) }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => handlePageChange(i + 1)}
            className={`px-4 py-2 rounded ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default UserTable;

