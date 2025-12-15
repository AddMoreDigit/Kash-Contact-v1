import { useState, useEffect } from "react";
import { Eye, EyeOff, Loader2, CheckCircle } from "lucide-react";
import type { Page } from "@/types/page.type";
import { toast } from "sonner";
import { Logo } from "./components/layout";
import { signIn, fetchAuthSession} from "aws-amplify/auth";

interface LoginPageProps {
  onNavigate: (page: Page) => void;
  onLogin?: (
    email: string,
    password: string,
    accountType: "user" | "vendor" | "corporate",
  ) => void;
  accountType?: "user" | "vendor" | "corporate";
}

export function LoginPage({
  onNavigate,
  onLogin,
  accountType = "corporate",
}: LoginPageProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);



  // Check if user is already authenticated
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const session = await fetchAuthSession();

        if (session.tokens) {
          // User is already logged in, redirect to appropriate dashboard
          redirectToDashboard();
        }
      } catch (error) {
        console.log("User is NOT authenticated:", error);
      }
    };

    checkAuth();
  }, []);

  const getAccountTypeText = () => {
    switch (accountType) {
      case "user":
        return "User";
      case "vendor":
        return "Vendor";
      case "corporate":
        return "Corporate";
      default:
        return "Corporate";
    }
  };

  const redirectToDashboard = () => {
    if (accountType === "vendor") {
      onNavigate("vendorDashboard");
    } else if (accountType === "corporate") {
      onNavigate("corporateDashboard");
    } else {
      onNavigate("dashboard");
    }
  };

  const handleLogin = async () => {
    setHasError(false);
    setIsSubmitting(true);
    setIsSuccess(false);

    // Basic validation
    if (!email.trim() || !password) {
      setHasError(true);
      toast.error("Please enter both email and password");
      setIsSubmitting(false);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setHasError(true);
      toast.error("Please enter a valid email address");
      setIsSubmitting(false);
      return;
    }

    try {
      // Call onLogin callback if provided
      if (onLogin) {
        onLogin(email, password, accountType);
      }

      // AWS Amplify sign in
      const { isSignedIn, nextStep } = await signIn({
        username: email,
        password: password
      });

      if (isSignedIn) {
        setIsSuccess(true);
        toast.success("Login successful!");
        
        // Set authentication flag in localStorage (optional)
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("hasVisitedBefore", "true");

        // Redirect to appropriate dashboard
        setTimeout(() => {
          redirectToDashboard();
        }, 1000);
      } else {
        console.log('Sign in requires additional steps:', nextStep);
        
        // Handle different next steps
        if (nextStep.signInStep === 'CONFIRM_SIGN_UP') {
          toast.error("Please verify your email first");
          onNavigate('otpVerification');
        } else if (nextStep.signInStep === 'RESET_PASSWORD') {
          toast.error("Password reset required");
          onNavigate('forgotPassword');
        } else {
          toast.error("Sign in requires additional steps");
        }
        
        setIsSubmitting(false);
      }

    } catch (error: any) {
      console.error('Error signing in:', error);
      setHasError(true);
      
      // Handle specific AWS errors
      if (error.name === 'UserNotFoundException') {
        toast.error("User not found. Please check your email");
      } else if (error.name === 'NotAuthorizedException') {
        toast.error("Incorrect password. Please try again");
      } else if (error.name === 'UserNotConfirmedException') {
        toast.error("Please verify your email first");
        onNavigate('otpVerification');
      } else {
        toast.error("Invalid email or password");
      }
      
      setIsSubmitting(false);
    }
  };

  const handleBack = () => {
    onNavigate("selectUserType");
  };

  const handleForgotPassword = () => {
    onNavigate("forgotPassword");
  };

  const handleRegister = () => {
    onNavigate("signup");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !isSubmitting && !isSuccess) {
      handleLogin();
    }
  };

  return (
    <div className="bg-white flex w-full min-h-screen">
      {/* Left Section - Purple Background */}
      <div className="w-[49%] bg-[#E5DEFF] relative flex flex-col py-8 px-12">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 mb-12 hover:opacity-80 transition-opacity"
          disabled={isSubmitting || isSuccess}
        >
          <div className="w-9 h-9 rounded-full border border-black flex items-center justify-center cursor-pointer">
            <svg width="10" height="18" viewBox="0 0 10 18" fill="none">
              <path d="M9 1L1 9L9 17" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="text-black text-base">back</span>
        </button>

        <div className="bg-black flex-1 flex flex-col justify-center px-12 rounded-lg">
          <h1 className="text-white text-4xl mb-4">Hi</h1>
          <h2 className="text-white text-6xl mb-6">Log In</h2>
          <p className="text-white text-lg">
            Please continue Logging In as {getAccountTypeText()}
          </p>
        </div>
      </div>

      {/* Right Section - White Background */}
      <div className="w-[51%] bg-white flex flex-col items-center py-12 px-16 pb-32 relative overflow-hidden mt-20">
        <div className="mb-12">
          <Logo className="h-10" />
        </div>

        <div className="w-full max-w-md mt-5">
          {/* Success Message */}
          {isSuccess && (
            <div className="mb-4 p-3 bg-green-50 text-green-600 rounded-md flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              <span>Login successful! Redirecting...</span>
            </div>
          )}

          {/* Email Field */}
          <div className="mb-6">
            <label className="text-sm text-gray-700 mb-2 block">
              User Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setHasError(false);
              }}
              onKeyPress={handleKeyPress}
              placeholder="Enter user email address"
              disabled={isSubmitting || isSuccess}
              className={`w-full px-4 py-3 border ${hasError ? "border-red-500" : "border-gray-400"} rounded-md text-sm outline-none focus:border-[#8363f2] transition-colors disabled:opacity-50`}
            />
          </div>

          {/* Password Field */}
          <div className="mb-2">
            <label className="text-sm text-gray-700 mb-2 block">
              Password <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setHasError(false);
                }}
                onKeyPress={handleKeyPress}
                placeholder="Enter password"
                disabled={isSubmitting || isSuccess}
                className={`w-full px-4 py-3 border ${hasError ? "border-red-500" : "border-gray-400"} rounded-md text-sm outline-none focus:border-[#8363f2] transition-colors pr-12 disabled:opacity-50`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                disabled={isSubmitting || isSuccess}
                className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity disabled:opacity-50"
              >
                {showPassword ? (
                  <EyeOff size={18} className="text-gray-600 cursor-pointer" />
                ) : (
                  <Eye size={18} className="text-gray-600 cursor-pointer" />
                )}
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="mb-6 text-right">
            <button
              onClick={handleForgotPassword}
              disabled={isSubmitting || isSuccess}
              className="text-[#8363f2] text-xs hover:underline disabled:opacity-50 cursor-pointer"
            >
              Forgot password?
            </button>
          </div>

          {/* Login Button */}
          <button
            onClick={handleLogin}
            disabled={isSubmitting || isSuccess}
            className="w-full bg-[#8363f2] text-white py-3 rounded-md text-base text-center hover:bg-[#7354e1] transition-colors mb-6 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center cursor-pointer"
          >
            {isSubmitting ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : isSuccess ? (
              <CheckCircle className="h-5 w-5" />
            ) : 'Log In'}
          </button>

          {/* Register Link */}
          <p className="text-center text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <button
              onClick={handleRegister}
              disabled={isSubmitting || isSuccess}
              className="text-[#8363f2] underline hover:opacity-80 transition-opacity cursor-pointer disabled:opacity-50"
            >
              Register here
            </button>
          </p>
        </div>

        {/* Purple Gradient Bottom Right */}
        <div className="absolute bottom-0 right-0 w-full h-64 pointer-events-none overflow-hidden">
          <svg viewBox="0 0 624 330" fill="none" className="absolute -bottom-10 -right-20 w-[800px] h-auto" preserveAspectRatio="none">
            <path d="M4 400.181C4 364.45 27.6277 333.026 61.953 323.103L132 302.855L272.5 260.855L1257.13 4.98589C1310.06 -8.76888 1366.32 6.38745 1405.18 44.8692L1439.55 78.9141C1442.4 81.7313 1444 85.5687 1444 89.5723V508.355H4V400.181Z" fill="url(#gradient)" />
            <defs>
              <linearGradient id="gradient" x1="4" y1="268" x2="1444" y2="268" gradientUnits="userSpaceOnUse">
                <stop offset="0.474" stopColor="#7954FB" />
                <stop offset="1" stopColor="#2D1B69" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}