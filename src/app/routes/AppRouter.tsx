import { useState } from "react";

import type { Page } from "@/types/page.type";
import { DashboardPage } from "../pages/user/DashboardPage";
import { SelectUserTypePage } from "../pages/auth/SelectUserTypePage";
import { SignUpPage } from "../pages/auth/SignUpPage";
import { VendorSignUpPage } from "../pages/auth/VendorSignUpPage";
import { OTPVerificationPage } from "../pages/auth/OTPVerificationPage.tsx";
import { SignUpSuccessPage } from "../pages/auth/SignUpSuccessPage.tsx";
import { LoginPage } from "../pages/auth/LoginPage.tsx";
import { ForgotPasswordPage } from "../pages/auth/ForgotPasswordPage.tsx";
import { CreateNewPasswordPage } from "../pages/auth/CreateNewPasswordPage.tsx";


export function AppRouter() {
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
    // After login, navigate to appropriate dashboard
    handleNavigate(type === 'user' ? 'dashboard' : 
                   type === 'vendor' ? 'vendorDashboard' : 'corporateDashboard');
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    handleNavigate("selectUserType");
    setAccountType("corporate");
    setUserEmail("");
  };

  const renderPage = () => {
    switch (currentPage) {
      case "selectUserType":
        return (
          <SelectUserTypePage
            onNavigate={handleNavigate}
            onSelectUserType={handleSelectUserType}
          />
        );
      case "signup":
        return (
          <SignUpPage
            onNavigate={handleNavigate}
            onSignUp={handleSignUp}
          />
        );
      case "vendorSignup":
        return (
          <VendorSignUpPage
            onNavigate={handleNavigate}
            accountType={accountType}
            onCreateAccount={handleCreateAccount}
          />
        );
      case "otpVerification":
        return (
          <OTPVerificationPage
            onNavigate={handleNavigate}
            isSignupFlow={!isPasswordResetFlow}
            accountType={accountType}
            userEmail={userEmail || 'user@example.com'}
          />
        );
      case "signupSuccess":
        return (
          <SignUpSuccessPage
            onNavigate={handleNavigate}
            accountType={accountType}
          />
        );
      case "login":
        return (
          <LoginPage
            onNavigate={handleNavigate}
            onLogin={handleLogin}
            accountType={accountType}
          />
        );
      case "forgotPassword":
        return (
          <ForgotPasswordPage
            onNavigate={handleNavigate}
            accountType={accountType}
          />
        );
      case "createNewPassword":
        return (
          <CreateNewPasswordPage
            onNavigate={handleNavigate}
            accountType={accountType}
          />
        );
      case "dashboard":
      case "vendorDashboard":
      case "corporateDashboard":
        return (
          <DashboardPage
            onNavigate={handleNavigate}
            accountType={accountType}
            onLogout={handleLogout}
          />
        );
      default:
        return (
          <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl mb-4">Page: {currentPage}</h1>
              <p className="text-gray-600 mb-4">This page is coming soon!</p>
              <button
                onClick={() => handleNavigate("login")}
                className="px-6 py-2 bg-[#8363f2] text-white rounded-md hover:bg-[#7354e1]"
              >
                Back to Login
              </button>
            </div>
          </div>
        );
    }
  };

  return renderPage();
}