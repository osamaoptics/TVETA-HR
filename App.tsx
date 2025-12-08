import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import EmployeeList from './pages/EmployeeList';
import EmployeeForm from './pages/EmployeeForm';
import EmployeeDetail from './pages/EmployeeDetail';
import Login from './pages/Login';
import Register from './pages/Register';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={
              <Layout><Dashboard /></Layout>
            } />
            <Route path="/employees" element={
              <Layout><EmployeeList /></Layout>
            } />
            <Route path="/employees/:id" element={
              <Layout><EmployeeDetail /></Layout>
            } />
            <Route path="/add" element={
              <Layout><EmployeeForm /></Layout>
            } />
            <Route path="/edit/:id" element={
              <Layout><EmployeeForm /></Layout>
            } />
          </Route>
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;