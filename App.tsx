import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { ProductList } from './pages/ProductList';
import { Checkout } from './pages/Checkout';
import { Login, Register } from './pages/Auth';
import { Profile } from './pages/Profile';
import { Orders } from './pages/Orders';
import { Admin } from './pages/Admin';
import { AddMoney } from './pages/AddMoney';
import { AuthProvider } from './contexts/AuthContext';

const App: React.FC = () => {
  return (
    <HashRouter>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/category/:categoryId" element={<ProductList />} />
            <Route path="/checkout/:productId" element={<Checkout />} />
            
            {/* Protected Routes */}
            <Route path="/profile" element={<Profile />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/add-money" element={<AddMoney />} />
            <Route path="/admin" element={<Admin />} />
            
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </HashRouter>
  );
};

export default App;