import { Dialog, DialogContent, DialogTitle, DialogDescription } from '../../../components/ui/dialog';
import { Button } from '../../../components/ui/button';
import { Check } from 'lucide-react';
import type { Page } from '../../types/navigation';
//type Page = 'dashboard' | 'campaigns' | 'vouchers' | 'transactions' | 'profile' | 'overview' | 'draft' | 'howItWorks' | 'campaignDetail' | 'messaging' | 'serviceDetail' | 'selectedServices' | 'createCampaign' | 'corporateDashboard' | 'corporateCampaigns';

interface CampaignSubmittedDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onNavigate: (page: Page) => void;
  userType?: 'user' | 'corporate';
}

export function CampaignSubmittedDialog({ 
  open, 
  onOpenChange, 
  onNavigate,
  userType = 'user' 
}: CampaignSubmittedDialogProps) {
   
  const handleGotIt = () => {
    onOpenChange(false);
    onNavigate(userType === 'corporate' ? 'corporateCampaigns' : 'campaigns');
  };

  const handleBackToDashboard = () => {
    onOpenChange(false);
    onNavigate(userType === 'corporate' ? 'corporateDashboard' : 'dashboard');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl p-0 gap-0 bg-white overflow-hidden">
        {/* Success Icon */}
        <div className="flex flex-col items-center justify-center pt-16 pb-8 px-8">
          {/* Outer circle - light purple */}
          <div className="relative w-[165px] h-[165px] bg-purple-100 rounded-full flex items-center justify-center mb-8">
            {/* Inner circle - green checkmark */}
            <div className="w-[112px] h-[112px] bg-green-500 rounded-full flex items-center justify-center">
              <Check size={64} className="text-white" strokeWidth={3} />
            </div>
          </div>

          {/* Title */}
          <DialogTitle className="font-['Inter',sans-serif] text-[26px] font-semibold text-[#2d1b69] text-center mb-4">
            Your Campaign is on its way to approval
          </DialogTitle>

          {/* Description */}
          <DialogDescription className="text-center text-purple-600 font-['Inter',sans-serif] text-[20px] leading-[30px] tracking-[-0.32px] mb-8">
            <p className="mb-0">We have sent your request to the service</p>
            <p className="mb-0">provider and we just waiting for vendor to</p>
            <p className="mb-0">approve</p>
          </DialogDescription>

          {/* Buttons */}
          <div className="w-full max-w-md space-y-3">
            <Button
              onClick={handleGotIt}
              className="w-full h-[56px] bg-purple-600 hover:bg-purple-700 text-white font-['Inter',sans-serif] text-[24px] rounded-lg"
            >
              Got it
            </Button>
            <Button
              onClick={handleBackToDashboard}
              variant="ghost"
              className="w-full h-[56px] bg-[#f5f4f6] hover:bg-gray-200 text-[#2d1b69] font-['Inter',sans-serif] text-[24px] rounded-lg"
            >
              Back to dashboard
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}