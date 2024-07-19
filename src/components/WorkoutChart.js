import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const WorkoutChart = ({ user }) => {
  const data = user.workouts.map(workout => ({
    name: workout.type,
    minutes: workout.minutes
  }));

  return (
    <div className="bg-white p-6 rounded shadow-lg">
      <h2 className="text-2xl mb-4">{user.name}'s Workout Progress</h2>
      <BarChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="minutes" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default WorkoutChart;
