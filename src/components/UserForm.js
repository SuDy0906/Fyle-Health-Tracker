import React, { useState } from 'react';
import '../index.css'

const UserForm = ({ addUser }) => {
  const [name, setName] = useState('');
  const [workoutType, setWorkoutType] = useState('');
  const [minutes, setMinutes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: Date.now(),
      name,
      workouts: [{ type: workoutType, minutes: parseInt(minutes, 10) }]
    };
    addUser(newUser);
    setName('');
    setWorkoutType('');
    setMinutes('');
  };

  return (
    <div className="flex justify-center items-center ">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white p-6 rounded shadow-lg w-full">
        <input
          type="text"
          placeholder="User Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="p-2 border border-gray-300 roundedw-full"
        />
        <input
          type="text"
          placeholder="Workout Type"
          value={workoutType}
          onChange={(e) => setWorkoutType(e.target.value)}
          required
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="number"
          placeholder="Workout Minutes"
          value={minutes}
          onChange={(e) => setMinutes(e.target.value)}
          required
          className="p-2 border border-gray-300 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700">Add Workout</button>
      </form>
    </div>
  );
};

export default UserForm;
