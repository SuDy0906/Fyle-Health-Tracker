import React, { useState, useEffect } from 'react';
import UserForm from './components/UserForm';
import UserTable from './components/UserTable';
import WorkoutChart from './components/WorkoutChart';
import { getUserData, saveUserData } from './utils/localStorageUtils';
import './App.css';


const App = () => {
  const [users, setUsers] = useState(getUserData());
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    saveUserData(users);
  }, [users]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const selectUser = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className='p-6 flex justify-center font-bold text-2xl'>Health Tracker</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col gap-4">
          <UserForm addUser={addUser} />
          <UserTable users={users} selectUser={selectUser} />
        </div>
        <div className="flex justify-center items-center flex-col">
        <div className="flex justify-center items-center">
          <h1 className='font-bold'>Click On User Name to display Progress</h1>
        </div>
        {selectedUser && (
          <div className="flex justify-center items-center">
            <WorkoutChart user={selectedUser} />
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default App;
