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


interface RouteProps {
  onNavigate: (page: Page) => void;
  onSelectUserType?: (type: "user" | "vendor" | "corporate") => void;
  onSignUp?: (type: "user" | "vendor" | "corporate") => void;
  onCreateAccount?: (email: string) => void;
  onLogin?: (email: string, password: string, type: "user" | "vendor" | "corporate") => void;
  onLogout?: () => void;
  accountType?: "user" | "vendor" | "corporate";
  userEmail?: string;
  isPasswordResetFlow?: boolean;
}

export const getRouteComponent = (
  currentPage: Page,
  props: RouteProps
) => {
  switch (currentPage) {
    case "selectUserType":
      return (
        <SelectUserTypePage
          onNavigate={props.onNavigate}
          onSelectUserType={props.onSelectUserType!}
        />
      );
    case "signup":
      return (
        <SignUpPage
          onNavigate={props.onNavigate}
          onSignUp={props.onSignUp!}
        />
      );
    case "vendorSignup":
      return (
        <VendorSignUpPage
          onNavigate={props.onNavigate}
          accountType={props.accountType!}
          onCreateAccount={props.onCreateAccount!}
        />
      );
    case "otpVerification":
      return (
        <OTPVerificationPage
          onNavigate={props.onNavigate}
          isSignupFlow={!props.isPasswordResetFlow}
          accountType={props.accountType!}
          userEmail={props.userEmail || 'user@example.com'}
        />
      );
    case "signupSuccess":
      return (
        <SignUpSuccessPage
          onNavigate={props.onNavigate}
          accountType={props.accountType!}
        />
      );
    case "login":
      return (
        <LoginPage
          onNavigate={props.onNavigate}
          onLogin={props.onLogin!}
          accountType={props.accountType!}
        />
      );
    case "forgotPassword":
      return (
        <ForgotPasswordPage
          onNavigate={props.onNavigate}
          accountType={props.accountType!}
        />
      );
    case "createNewPassword":
      return (
        <CreateNewPasswordPage
          onNavigate={props.onNavigate}
          accountType={props.accountType!}
        />
      );
    case "dashboard":
    case "vendorDashboard":
    case "corporateDashboard":
      return (
        <DashboardPage
          onNavigate={props.onNavigate}
          accountType={props.accountType!}
          onLogout={props.onLogout!}
        />
      );
    default:
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl mb-4">Page: {currentPage}</h1>
            <p className="text-gray-600 mb-4">This page is coming soon!</p>
            <button
              onClick={() => props.onNavigate("login")}
              className="px-6 py-2 bg-[#8363f2] text-white rounded-md hover:bg-[#7354e1]"
            >
              Back to Login
            </button>
          </div>
        </div>
      );
  }
};