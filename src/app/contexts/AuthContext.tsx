import  { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export type UserType = 'user' | 'vendor' | 'corporate';

interface AuthContextType {
  isAuthenticated: boolean;
  userType: UserType | null;
  userEmail: string;
  login: (email: string, type: UserType) => void;
  logout: () => void;
  setUserEmail: (email: string) => void;
  setIsPasswordResetFlow: (isReset: boolean) => void;
  isPasswordResetFlow: boolean;
  isLoading: boolean;
  accountType: UserType;
  setAccountType: (type: UserType) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('isAuthenticated') === 'true';
  });
  
  const [accountType, setAccountType] = useState<UserType>(() => {
    const stored = localStorage.getItem('accountType');
    return (stored as UserType) || 'user';
  });
  
  const [userType, setUserType] = useState<UserType | null>(() => {
    const stored = localStorage.getItem('userType');
    return stored as UserType | null;
  });
  
  const [userEmail, setUserEmail] = useState<string>('');
  const [isPasswordResetFlow, setIsPasswordResetFlow] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Check authentication status on mount
    const checkAuth = () => {
      const token = localStorage.getItem('token');
      const storedUserType = localStorage.getItem('userType');
      const storedAccountType = localStorage.getItem('accountType');
      
      if (token) {
        setIsAuthenticated(true);
        setUserType(storedUserType as UserType);
        if (storedAccountType) {
          setAccountType(storedAccountType as UserType);
        }
      }
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  const login = (email: string, type: UserType) => {
    setIsAuthenticated(true);
    setUserType(type);
    setAccountType(type);
    setUserEmail(email);
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('userType', type);
    localStorage.setItem('accountType', type);
    localStorage.setItem('token', 'dummy-token'); 
  };

  const logout =async () => {

    setIsAuthenticated(false);
    setUserType(null);
    setUserEmail('');
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userType');
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        userType,
        userEmail,
        login,
        logout,
        setUserEmail,
        setIsPasswordResetFlow,
        isPasswordResetFlow,
        isLoading,
        accountType,
        setAccountType
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};