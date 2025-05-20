
import axios from 'axios';
import GoogleMapReact from 'google-map-react';
import { useEffect, useState } from 'react';
import { Modal } from '@/components/ui/modal';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const Marker = ({ text, onClick, available }) => (
  <div
    onClick={onClick}
    className={`p-1 rounded-md cursor-pointer hover:opacity-75 ${available ? 'bg-green-500' : 'bg-red-500'} text-white`}
  >
    {text}
  </div>
);

const AdminLogin = () => (
  <div className="p-4">
    <h2 className="text-xl font-bold mb-4">Admin Login</h2>
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;
        if (username === 'tullah_admin' && password === 'SecurePass123!') {
          localStorage.setItem('adminToken', 'secure-admin-token');
          alert('Admin login successful!');
          window.location.href = "/admin-dashboard";
        } else {
          alert('Login failed. Please check your credentials.');
        }
      }}
    >
      <input type="text" name="username" placeholder="Username" required className="border p-2 mb-2 w-full"/>
      <input type="password" name="password" placeholder="Password" required className="border p-2 mb-2 w-full"/>
      <button type="submit" className="bg-blue-500 text-white p-2 w-full">Login</button>
    </form>
  </div>
);

const AdminDashboard = () => (
  <div className="p-4">
    <h2 className="text-xl font-bold mb-4">Admin Dashboard</h2>
    <ul className="list-disc pl-5">
      <li>View All Room Bookings</li>
      <li>Manage Event RSVPs</li>
      <li>Cancel or Modify Bookings</li>
      <li>Generate Reports</li>
    </ul>
  </div>
);

const AppRouter = () => (
  <Router basename="/">
    <Routes>
      <Route path="/" element={<Navigate to="/admin-login" />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="*" element={<Navigate to="/admin-login" />} />
    </Routes>
  </Router>
);

export default AppRouter;
