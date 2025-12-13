import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import type { Page } from "@/types/page.type";
import { toast } from "sonner";
import { Logo } from "./components/layout";

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

  const handleLogin = () => {
    setHasError(false);

    if (!email.trim() || !password) {
      setHasError(true);
      toast.error("Please enter both email and password");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setHasError(true);
      toast.error("Please enter a valid email address");
      return;
    }

    if (onLogin) {
      onLogin(email, password, accountType);
    }

    // Set authentication flag in localStorage
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("hasVisitedBefore", "true");

    toast.success("Login successful!");
    setTimeout(() => {
      // Navigate to appropriate dashboard based on account type
      if (accountType === "vendor") {
        onNavigate("vendorDashboard");
      } else if (accountType === "corporate") {
        onNavigate("corporateDashboard");
      } else {
        onNavigate("dashboard");
      }
    }, 1000);
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
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className="bg-white flex w-full min-h-screen">
      {/* Left Section - Purple Background */}
      <div className="w-[49%] bg-[#E5DEFF] relative flex flex-col py-8 px-12">
        {/* Back Button */}
        <button
          onClick={handleBack}
          className="flex items-center gap-2 mb-12 hover:opacity-80 transition-opacity"
        >
          <div className="w-9 h-9 rounded-full border border-black flex items-center justify-center cursor-pointer">
            <svg
              width="10"
              height="18"
              viewBox="0 0 10 18"
              fill="none"
            >
              <path
                d="M9 1L1 9L9 17"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="text-black text-base">back</span>
        </button>

        {/* Black Panel */}
        <div className="bg-black flex-1 flex flex-col justify-center px-12 rounded-lg">
          <h1 className="text-white text-4xl mb-4">Hi</h1>
          <h2 className="text-white text-6xl mb-6">Log In</h2>
          <p className="text-white text-lg">
            Please continue Logging In as {getAccountTypeText()}
          </p>
        </div>
      </div>

      {/* Right Section - White Background */}
      <div className="w-[51%] bg-white flex flex-col items-center py-12 px-16 pb-32 relative overflow-hidden">
        {/* Logo */}
        <div className="mb-12">
          <Logo className="h-10" />
        </div>

        {/* Form */}
        <div className="w-full max-w-md">
          <h2 className="text-3xl text-black mb-8 text-center">
            Log In
          </h2>

          {/* Email Field */}
          <div className="mb-6">
            <label className="text-sm text-gray-700 mb-2 block">
              User Email Address{" "}
              <span className="text-red-500">*</span>
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
              className={`w-full px-4 py-3 border ${hasError ? "border-red-500" : "border-gray-400"} rounded-md text-sm outline-none focus:border-[#8363f2] transition-colors`}
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
                className={`w-full px-4 py-3 border ${hasError ? "border-red-500" : "border-gray-400"} rounded-md text-sm outline-none focus:border-[#8363f2] transition-colors pr-12`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity"
              >
                {showPassword ? (
                  <EyeOff size={18} className="text-gray-600" />
                ) : (
                  <Eye size={18} className="text-gray-600" />
                )}
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="mb-6 text-right">
            <button
              onClick={handleForgotPassword}
              className="text-[#8363f2] text-xs hover:underline"
            >
              Forgot password?
            </button>
          </div>

          {/* Login Button */}
          <button
            onClick={handleLogin}
            className="w-full bg-[#8363f2] text-white py-3 rounded-md text-base text-center hover:bg-[#7354e1] transition-colors mb-6"
          >
            Log In
          </button>

          {/* Register Link */}
          <p className="text-center text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <button
              onClick={handleRegister}
              className="text-[#8363f2] underline hover:opacity-80 transition-opacity"
            >
              Register here
            </button>
          </p>
        </div>

        {/* Purple Gradient Bottom Right */}
        <div className="absolute bottom-0 right-0 w-full h-64 pointer-events-none overflow-hidden">
          <svg
            viewBox="0 0 624 330"
            fill="none"
            className="absolute -bottom-10 -right-20 w-[800px] h-auto"
            preserveAspectRatio="none"
          >
            <path
              d="M4 400.181C4 364.45 27.6277 333.026 61.953 323.103L132 302.855L272.5 260.855L1257.13 4.98589C1310.06 -8.76888 1366.32 6.38745 1405.18 44.8692L1439.55 78.9141C1442.4 81.7313 1444 85.5687 1444 89.5723V508.355H4V400.181Z"
              fill="url(#gradient)"
            />
            <defs>
              <linearGradient
                id="gradient"
                x1="4"
                y1="268"
                x2="1444"
                y2="268"
                gradientUnits="userSpaceOnUse"
              >
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


