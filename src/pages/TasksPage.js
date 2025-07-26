import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';

const TasksPage = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Complete Daily Check-in', reward: 5, status: 'available', category: 'daily' },
    { id: 2, title: 'Share on Social Media', reward: 10, status: 'completed', category: 'social' },
    { id: 3, title: 'Refer 3 Friends', reward: 50, status: 'in-progress', category: 'referral' },
    { id: 4, title: 'Make First Investment', reward: 25, status: 'available', category: 'investment' },
    { id: 5, title: 'Watch Tutorial Videos', reward: 15, status: 'available', category: 'education' }
  ]);

  const completeTask = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, status: 'completed' } : task
    ));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'text-green-400';
      case 'in-progress': return 'text-yellow-400';
      default: return 'text-purple-400';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return 'fa-check-circle';
      case 'in-progress': return 'fa-clock';
      default: return 'fa-play-circle';
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">Tasks & Rewards</h1>
          <div className="bg-purple-600/20 px-4 py-2 rounded-lg">
            <span className="text-purple-300">Total Earned: </span>
            <span className="text-purple-400 font-bold">$75</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {['daily', 'social', 'referral', 'investment', 'education'].map(category => (
            <div key={category} className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4 capitalize">
                {category} Tasks
              </h3>
              <div className="space-y-3">
                {tasks.filter(task => task.category === category).map(task => (
                  <div key={task.id} className="bg-slate-700 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-white font-medium">{task.title}</h4>
                      <i className={`fas ${getStatusIcon(task.status)} ${getStatusColor(task.status)}`}></i>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-green-400 font-bold">${task.reward}</span>
                      {task.status === 'available' && (
                        <button
                          onClick={() => completeTask(task.id)}
                          className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded text-sm transition-colors"
                        >
                          Start
                        </button>
                      )}
                      {task.status === 'completed' && (
                        <span className="text-green-400 text-sm">Completed</span>
                      )}
                      {task.status === 'in-progress' && (
                        <span className="text-yellow-400 text-sm">In Progress</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-800 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Task Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">
                {tasks.filter(t => t.status === 'completed').length}
              </div>
              <div className="text-purple-300">Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400">
                {tasks.filter(t => t.status === 'in-progress').length}
              </div>
              <div className="text-yellow-300">In Progress</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">
                {tasks.filter(t => t.status === 'available').length}
              </div>
              <div className="text-blue-300">Available</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">
                ${tasks.filter(t => t.status === 'completed').reduce((sum, t) => sum + t.reward, 0)}
              </div>
              <div className="text-green-300">Total Earned</div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TasksPage;
