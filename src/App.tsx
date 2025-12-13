import { useState } from "react";
import { Toaster } from "sonner";
import type { Page } from "./types/page.type";
import { getRouteComponent } from "./app/routes/routes";


function App() {
  const [currentPage, setCurrentPage] = useState<Page>("selectUserType");
  const [accountType, setAccountType] = useState<"user" | "vendor" | "corporate">("corporate");
  const [userEmail, setUserEmail] = useState<string>("");
  const [isPasswordResetFlow, setIsPasswordResetFlow] = useState<boolean>(false);

  const handleNavigate = (page: Page) => {
    if (page === 'forgotPassword') {
      setIsPasswordResetFlow(true);
    } else if (page === 'login' || page === 'vendorSignup') {
      setIsPasswordResetFlow(false);
    }
    setCurrentPage(page);
  };

  const handleSelectUserType = (type: "user" | "vendor" | "corporate") => {
    setAccountType(type);
  };

  const handleSignUp = (type: "user" | "vendor" | "corporate") => {
    setAccountType(type);
    handleNavigate('vendorSignup');
  };

  const handleCreateAccount = (email: string) => {
    setUserEmail(email);
  };

  const handleLogin = (
    email: string,
    password: string,
    type: "user" | "vendor" | "corporate"
  ) => {
    console.log("Login:", { email, password, type });
    setAccountType(type);
    setUserEmail(email);
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    handleNavigate("selectUserType");
    setAccountType("corporate");
    setUserEmail("");
  };

  return (
    <>
      <Toaster position="top-right" richColors />
      {getRouteComponent(currentPage, {
        onNavigate: handleNavigate,
        onSelectUserType: handleSelectUserType,
        onSignUp: handleSignUp,
        onCreateAccount: handleCreateAccount,
        onLogin: handleLogin,
        onLogout: handleLogout,
        accountType,
        userEmail,
        isPasswordResetFlow
      })}
    </>
  );
}

export default App;