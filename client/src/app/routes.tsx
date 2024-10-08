import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard } from '@/features/dashboard/components';
import { DashboardProducts } from '@/features/dashboard-products/components';
import { FormCreateproduct } from '@/features/dashboard-products/components/form.create-product';
import { Login } from '@/features/authentication/components/login';
import { Register } from '@/features/authentication/components/register';
import LayoutDashboard from '@/features/dashboard/components/layout';
import { Home } from '@/features/catalogs/components/home';
import { Layout } from '@/features/catalogs/components/layout';
import { AuthLayout } from '@/features/authentication/components/layout.auth';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<LayoutDashboard />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/products" element={<DashboardProducts />} />
          <Route path="/dashboard/products/create" element={<FormCreateproduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
