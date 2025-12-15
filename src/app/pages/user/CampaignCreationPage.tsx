import { useState, useEffect } from 'react';
import { UserSidebar } from '../../components/layout/UserSidebar';
import { CampaignSubmittedDialog } from '../../components/dialogs/CampaignSubmittedDialog';
import { Calendar, Users, Target } from 'lucide-react';
import { toast } from 'sonner';
import type { Page } from '../../types/navigation';

interface BookedItem {
  id: number;
  type: 'room' | 'food' | 'transport' | 'activity';
  name: string;
  price: string;
  checkIn?: string;
  checkOut?: string;
  location?: string;
  provider?: string;
  image?: string;
  quantity?: number;
  nights?: number;
  totalPrice?: number;
}

interface CampaignCreationPageProps {
  onNavigate: (page: Page) => void;
  onLogout?: () => void;
  cartItems?: BookedItem[];
}

export function CampaignCreationPage({ onNavigate, onLogout, cartItems = [] }: CampaignCreationPageProps) {
  const [campaignName, setCampaignName] = useState('');
  const [campaignType, setCampaignType] = useState<'individual' | 'group'>('individual');
  const [targetAmount, setTargetAmount] = useState('');
  const [description, setDescription] = useState('');
  const [endDate, setEndDate] = useState('');
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  // Load draft data if continuing editing
  useEffect(() => {
    const draftData = localStorage.getItem('continueEditingDraft');
    if (draftData) {
      try {
        const draft = JSON.parse(draftData);
        
        // Pre-fill form with draft data
        setCampaignName(draft.title || '');
        setTargetAmount(draft.goal ? draft.goal.replace('R', '').replace(/\s/g, '').replace(',', '') : '');
        
        // Show notification that draft was loaded
        toast.info(`Continuing draft: "${draft.title}"`, {
          duration: 3000,
        });
        
        // Clear the draft data from localStorage after loading
        localStorage.removeItem('continueEditingDraft');
      } catch (error) {
        console.error('Error loading draft:', error);
        toast.error('Failed to load draft data');
      }
    }
  }, []);

  // Calculate total from cart items
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      if (item.totalPrice) {
        return total + item.totalPrice;
      }
      const price = parseFloat(item.price.replace('R', '').replace(/\s/g, ''));
      return total + price;
    }, 0);
  };

  const totalPrice = getTotalPrice();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!campaignName.trim()) {
      toast.error('Please enter a campaign name');
      return;
    }
    
    if (!targetAmount || parseFloat(targetAmount) <= 0) {
      toast.error('Please enter a valid target amount');
      return;
    }
    
    if (!endDate) {
      toast.error('Please select an end date');
      return;
    }
    
    // Show success dialog
    setShowSuccessDialog(true);
  };

  const handleSuccessClose = () => {
    setShowSuccessDialog(false);
    onNavigate('campaigns');
  };

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      {/* Sidebar */}
      <UserSidebar activePage="campaigns" onNavigate={onNavigate} onLogout={onLogout} />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* Header */}
        <div className="px-8 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h1 className="font-['Inter',sans-serif] text-[20px] font-medium text-black tracking-[-0.2px]">Create Campaign</h1>
          </div>
        </div>

        {/* Content */}
        <div className="px-8 py-6">
          <div className="max-w-4xl">
            {/* Campaign Type Selection */}
            <div className="mb-8">
              <h2 className="font-['Inter',sans-serif] text-[18px] font-medium text-black mb-4">Campaign Type</h2>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setCampaignType('individual')}
                  className={`p-6 rounded-lg border-2 transition-all ${
                    campaignType === 'individual'
                      ? 'border-purple-600 bg-purple-50'
                      : 'border-gray-200 hover:border-purple-300'
                  }`}
                >
                  <Users className="w-8 h-8 mb-3 text-purple-600" />
                  <h3 className="font-['Inter',sans-serif] text-[16px] font-medium text-black mb-2">Individual Campaign</h3>
                  <p className="font-['Inter',sans-serif] text-[14px] text-gray-600">
                    Create a personal campaign for yourself
                  </p>
                </button>
                <button
                  onClick={() => setCampaignType('group')}
                  className={`p-6 rounded-lg border-2 transition-all ${
                    campaignType === 'group'
                      ? 'border-purple-600 bg-purple-50'
                      : 'border-gray-200 hover:border-purple-300'
                  }`}
                >
                  <Users className="w-8 h-8 mb-3 text-purple-600" />
                  <h3 className="font-['Inter',sans-serif] text-[16px] font-medium text-black mb-2">Group Campaign</h3>
                  <p className="font-['Inter',sans-serif] text-[14px] text-gray-600">
                    Create a campaign and invite contributors
                  </p>
                </button>
              </div>
            </div>

            {/* Campaign Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Campaign Name */}
              <div>
                <label className="block font-['Inter',sans-serif] text-[14px] font-medium text-black mb-2">
                  Campaign Name *
                </label>
                <input
                  type="text"
                  value={campaignName}
                  onChange={(e) => setCampaignName(e.target.value)}
                  placeholder="Enter campaign name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg font-['Inter',sans-serif] text-[14px] focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block font-['Inter',sans-serif] text-[14px] font-medium text-black mb-2">
                  Description
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe your campaign..."
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg font-['Inter',sans-serif] text-[14px] focus:outline-none focus:ring-2 focus:ring-purple-600 resize-none"
                />
              </div>

              {/* Target Amount and End Date */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-['Inter',sans-serif] text-[14px] font-medium text-black mb-2">
                    Target Amount *
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 font-['Inter',sans-serif] text-[14px] text-gray-500">
                      R
                    </span>
                    <input
                      type="number"
                      value={targetAmount}
                      onChange={(e) => setTargetAmount(e.target.value)}
                      placeholder={totalPrice > 0 ? totalPrice.toFixed(2) : '0.00'}
                      className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg font-['Inter',sans-serif] text-[14px] focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                  </div>
                  {totalPrice > 0 && (
                    <p className="mt-1 font-['Inter',sans-serif] text-[12px] text-gray-500">
                      Cart total: R{totalPrice.toFixed(2)}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block font-['Inter',sans-serif] text-[14px] font-medium text-black mb-2">
                    End Date *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg font-['Inter',sans-serif] text-[14px] focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                  </div>
                </div>
              </div>

              {/* Selected Services Summary */}
              {cartItems.length > 0 && (
                <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                  <h3 className="font-['Inter',sans-serif] text-[16px] font-medium text-black mb-4">
                    Selected Services ({cartItems.length})
                  </h3>
                  <div className="space-y-3">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {item.image && (
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-12 h-12 rounded object-cover"
                            />
                          )}
                          <div>
                            <p className="font-['Inter',sans-serif] text-[14px] text-black">{item.name}</p>
                            <p className="font-['Inter',sans-serif] text-[12px] text-gray-600">
                              {item.provider}
                              {item.checkIn && item.checkOut && (
                                <span> • {item.checkIn} - {item.checkOut}</span>
                              )}
                            </p>
                          </div>
                        </div>
                        <p className="font-['Inter',sans-serif] text-[14px] font-medium text-black">
                          {item.totalPrice ? `R${item.totalPrice.toFixed(2)}` : item.price}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-purple-300 flex justify-between">
                    <span className="font-['Inter',sans-serif] text-[16px] font-medium text-black">Total</span>
                    <span className="font-['Inter',sans-serif] text-[16px] font-medium text-black">
                      R{totalPrice.toFixed(2)}
                    </span>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => onNavigate('serviceDetail')}
                  className="flex-1 px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-lg font-['Inter',sans-serif] text-[16px] font-medium hover:bg-purple-50 transition-colors"
                >
                  Back to Services
                </button>
                <button
                  type="button"
                  onClick={() => {
                    toast.info('Campaign saved as draft');
                    onNavigate('draft');
                  }}
                  className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-['Inter',sans-serif] text-[16px] font-medium hover:bg-gray-50 transition-colors"
                >
                  Save as Draft
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-purple-600 text-white rounded-lg font-['Inter',sans-serif] text-[16px] font-medium hover:bg-purple-700 transition-colors"
                >
                  Create Campaign
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Success Dialog */}
      <CampaignSubmittedDialog
        open={showSuccessDialog}
        onOpenChange={setShowSuccessDialog}
        onNavigate={onNavigate}
      />
    </div>
  );
}