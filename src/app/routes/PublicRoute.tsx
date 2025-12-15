import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export const PublicRoute = () => {
  const { isAuthenticated, isLoading, accountType } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#8363f2]"></div>
      </div>
    );
  }

  // If authenticated, redirect to appropriate dashboard
  if (isAuthenticated) {
    switch (accountType) {
      case 'vendor':
        return <Navigate to="/vendor-dashboard" replace />;
      case 'corporate':
        return <Navigate to="/corporate-dashboard" replace />;
      default:
        return <Navigate to="/dashboard" replace />;
    }
  }

  return <Outlet />;
};