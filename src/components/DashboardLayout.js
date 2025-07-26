import React from 'react';
import SidebarComponent from './SidebarComponent';

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-900 flex">
      <SidebarComponent />
      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
