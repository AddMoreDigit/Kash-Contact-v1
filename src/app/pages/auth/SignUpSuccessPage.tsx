import { CheckCircle2 } from 'lucide-react';

type Page = 'dashboard' | 'campaigns' | 'vouchers' | 'transactions' | 'profile' | 'overview' | 'draft' | 'howItWorks' | 'campaignDetail' | 'messaging' | 'serviceDetail' | 'selectedServices' | 'createCampaign' | 'manageCampaign' | 'contributors' | 'contributorDetail' | 'campaignSchedule' | 'campaignsHistory' | 'contribute' | 'individualCampaign' | 'groupCampaign' | 'managingCampaigns' | 'helpSupport' | 'saveDraft' | 'selectServices' | 'signup' | 'vendorSignup' | 'otpVerification' | 'signupSuccess' | 'login' | 'forgotPassword' | 'createNewPassword' | 'selectUserType' | 'vendorDashboard' | 'corporateDashboard';

interface SignUpSuccessPageProps {
  onNavigate: (page: Page) => void;
  accountType?: 'user' | 'vendor' | 'corporate';
}

export function SignUpSuccessPage({ onNavigate, accountType = 'user' }: SignUpSuccessPageProps) {
  const handleExploreDashboard = () => {
    // Navigate to appropriate dashboard based on account type
    if (accountType === 'vendor') {
      onNavigate('vendorDashboard');
    } else if (accountType === 'corporate') {
      onNavigate('corporateDashboard');
    } else {
      onNavigate('dashboard');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Section - Black Background */}
      <div className="bg-[#000000] flex-1 flex flex-col items-center justify-center py-16">
        {/* Success Icon */}
        <div className="mb-6">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
            <CheckCircle2 size={48} className="text-[#4CAF50]" strokeWidth={3} />
          </div>
        </div>

        {/* Congratulation Text */}
        <h1 className="text-white mb-3" style={{ fontSize: '24px' }}>
          Congratulation
        </h1>

        {/* Subtitle */}
        <p className="text-white" style={{ fontSize: '14px' }}>
          Your account is set up and ready to go.
        </p>
      </div>

      {/* Bottom Section - White Background */}
      <div className="bg-white flex-1 flex flex-col items-center justify-center py-16 px-8">
        <div className="max-w-md w-full">
          {/* You can now: heading */}
          <p className="text-gray-900 mb-4" style={{ fontSize: '15px' }}>
            You can now:
          </p>

          {/* Benefits List */}
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-2">
              <span className="text-gray-900 mt-0.5" style={{ fontSize: '15px' }}>•</span>
              <span className="text-gray-900" style={{ fontSize: '15px' }}>
                Join or create savings campaigns
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-900 mt-0.5" style={{ fontSize: '15px' }}>•</span>
              <span className="text-gray-900" style={{ fontSize: '15px' }}>
                Track your progress toward your goals
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-900 mt-0.5" style={{ fontSize: '15px' }}>•</span>
              <span className="text-gray-900" style={{ fontSize: '15px' }}>
                Access vendor services and exclusive vouchers
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-900 mt-0.5" style={{ fontSize: '15px' }}>•</span>
              <span className="text-gray-900" style={{ fontSize: '15px' }}>
                Connect with your community — stress-free
              </span>
            </li>
          </ul>

          {/* Explore Dashboard Button */}
          <button
            onClick={handleExploreDashboard}
            className="w-full bg-[#8363F2] text-white py-3 rounded-md hover:bg-[#7354e1] transition-colors"
            style={{ fontSize: '15px' }}
          >
            Explore Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}
