import { useState, useEffect } from 'react';
import { UserSidebar } from '../../components/layout/UserSidebar';
import { toast } from 'sonner';
import { Calendar, Plus, X } from 'lucide-react';
//import imgRectangle140 from 'figma:asset/2d90d1ffe99df5817a38c395c08ec5116a7be340.png';
//import imgRectangle141 from 'figma:asset/2cd0806b75ceaec4ce1353812cc2f2eb82fde8f2.png';
//import imgRectangle142 from 'figma:asset/6a4cb1a71759404169c3e112082d2c3714560afd.png';
//import imgEllipse34 from 'figma:/assets/2fc4b373dd85a6869cf572c5f63c4cccb3cd1ec0.png';
//import imgEllipse35 from 'figma:/assets/6d6828c6accb3c6c74ecaf7d5c9614b0fa026e28.png';
//import imgEllipse36 from 'figma:/assets/14e5699a8399d12dd79e85db4e560c982e664a8c.png';
import svgPaths from '../../../imports/svg-c93d13tepm';
import type { Page } from '../../types/navigation';
//type Page = 'dashboard' | 'campaigns' | 'vouchers' | 'transactions' | 'profile' | 'overview' | 'draft' | 'howItWorks' | 'campaignDetail' | 'messaging' | 'serviceDetail' | 'selectedServices' | 'createCampaign' | 'manageCampaign' | 'contributors' | 'contributorDetail' | 'campaignSchedule' | 'campaignsHistory' | 'contribute' | 'individualCampaign' | 'groupCampaign' | 'managingCampaigns' | 'helpSupport' | 'saveDraft' | 'selectServices' | 'signup' | 'vendorSignup' | 'otpVerification' | 'signupSuccess' | 'login' | 'forgotPassword' | 'createNewPassword' | 'selectUserType' | 'vendorDashboard' | 'corporateDashboard' | 'serviceProviders';

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

interface CampaignCreationFlowPageProps {
  onNavigate: (page: Page) => void;
  onLogout?: () => void;
  cartItems?: BookedItem[];
  onShowNotifications?: () => void;
  hasUnreadNotifications?: boolean;
  onShowCart?: () => void;
}

interface Member {
  id: string;
  name: string;
  avatar: string;
  contributionAmount?: number;
}

export function CampaignCreationFlowPage({ 
  onNavigate, 
  onLogout, 
  cartItems = [],
  onShowNotifications,
  hasUnreadNotifications,
  onShowCart
}: CampaignCreationFlowPageProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  
  // Step 1: Campaign Details
  const [campaignName, setCampaignName] = useState('');
  const [goalAmount, setGoalAmount] = useState('');
  const [campaignCategory, setCampaignCategory] = useState('Vacation');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedServices, setSelectedServices] = useState([
    { id: 1, name: 'Seaview Lodge', location: 'Cape Town', category: 'Accommodation Standard Room', image: '/assets/2d90d1ffe99df5817a38c395c08ec5116a7be340.png' },
    { id: 2, name: 'Water Boat Tour', location: 'Cape town front Beach', category: 'Boat Tour', image: '/assets/2cd0806b75ceaec4ce1353812cc2f2eb82fde8f2.png'  },
    { id: 3, name: 'Safari Car Tour', location: 'Cape Town Game Reserve', category: 'Western cape', image: '/assets/6a4cb1a71759404169c3e112082d2c3714560afd.png' }
  ]);
  
  // Step 2: Plan Contributions
  const [targetAmount, setTargetAmount] = useState('');
  const [contributionFrequency, setContributionFrequency] = useState('Monthly');
  const [members, setMembers] = useState<Member[]>([
    { id: '1', name: 'Alice', avatar: '/assets/2fc4b373dd85a6869cf572c5f63c4cccb3cd1ec0.png' },
    { id: '2', name: 'John', avatar: '/assets/6d6828c6accb3c6c74ecaf7d5c9614b0fa026e28.png' },
    { id: '3', name: 'Jabulani', avatar: '/assets/14e5699a8399d12dd79e85db4e560c982e664a8c.png' }
  ]);
  const [searchMember, setSearchMember] = useState('');
  const [campaignTerms, setCampaignTerms] = useState('');
  const [editingDraftId, setEditingDraftId] = useState<number | null>(null);
  const [contributionMode, setContributionMode] = useState<'equal' | 'custom'>('equal');

  // Load draft data if available
  useEffect(() => {
    const draftData = localStorage.getItem('continueEditingDraft');
    if (draftData) {
      try {
        const draft = JSON.parse(draftData);
        
        // Store the draft ID so we can remove it when launching
        if (draft.id) {
          setEditingDraftId(draft.id);
        }
        
        // Restore basic fields
        if (draft.title) setCampaignName(draft.title);
        if (draft.goal) {
          const amount = draft.goal.replace('R', '').replace(/\s/g, '').replace(',', '').replace('.00', '');
          setGoalAmount(amount);
        }
        
        // Restore full form data if available
        if (draft.formData) {
          const formData = draft.formData;
          if (formData.campaignName) setCampaignName(formData.campaignName);
          if (formData.goalAmount) setGoalAmount(formData.goalAmount);
          if (formData.campaignCategory) setCampaignCategory(formData.campaignCategory);
          if (formData.startDate) setStartDate(formData.startDate);
          if (formData.endDate) setEndDate(formData.endDate);
          if (formData.selectedServices) setSelectedServices(formData.selectedServices);
          if (formData.targetAmount) setTargetAmount(formData.targetAmount);
          if (formData.contributionFrequency) setContributionFrequency(formData.contributionFrequency);
          if (formData.members) setMembers(formData.members);
          if (formData.campaignTerms) setCampaignTerms(formData.campaignTerms);
          if (formData.contributionMode) setContributionMode(formData.contributionMode);
        }
        
        // Restore the step progress
        if (draft.step) {
          setCurrentStep(draft.step);
        }
        
        toast.info(`Continuing draft: "${draft.title}"`, { duration: 3000 });
        localStorage.removeItem('continueEditingDraft');
      } catch (error) {
        console.error('Error loading draft:', error);
      }
    }
  }, []);

  const handleNext = () => {
    if (currentStep === 1) {
      if (!campaignName.trim()) {
        toast.error('Please enter a campaign name');
        return;
      }
      if (!goalAmount) {
        toast.error('Please enter a goal amount');
        return;
      }
    }
    
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      onNavigate('dashboard');
    }
  };

  const handleSaveDraft = () => {
    // Get existing drafts from localStorage
    const existingDrafts = localStorage.getItem('savedDrafts');
    let drafts = existingDrafts ? JSON.parse(existingDrafts) : [];
    
    // Create new draft object with current progress
    const newDraft = {
      id: Date.now(),
      title: campaignName || 'Untitled Campaign',
      image: selectedServices[0]?.image || '/asset/2d90d1ffe99df5817a38c395c08ec5116a7be340.png',
      rating: 4,
      reviews: 24,
      serviceProvider: selectedServices[0]?.name || 'Service Provider',
      goal: `R${goalAmount || '0'}.00`,
      members: members.length,
      step: currentStep,
      totalSteps: 3,
      progress: (currentStep / 3) * 100,
      // Store all form data
      formData: {
        campaignName,
        goalAmount,
        campaignCategory,
        startDate,
        endDate,
        selectedServices,
        targetAmount,
        contributionFrequency,
        members,
        campaignTerms,
        contributionMode,
      }
    };
    
    // Add new draft to the beginning of the array
    drafts.unshift(newDraft);
    
    // Save back to localStorage
    localStorage.setItem('savedDrafts', JSON.stringify(drafts));
    
    toast.success('Campaign saved as draft');
    setTimeout(() => onNavigate('draft'), 500);
  };

  const handleLaunchCampaign = () => {
    // Create campaign object
    const newCampaign = {
      id: Date.now(),
      title: campaignName,
      image: selectedServices[0]?.image || '/asset/2d90d1ffe99df5817a38c395c08ec5116a7be340.png',
      serviceProvider: selectedServices[0]?.name || 'Service Provider',
      catering: selectedServices[1]?.name || '',
      startDate: startDate,
      endDate: endDate,
      goal: parseFloat(goalAmount) || 0,
      contributed: 0,
      members: members.map(m => m.avatar),
      buttonText: 'Manage',
      buttonClass: 'bg-[#2d1b69]',
      status: 'Pending',
      category: campaignCategory,
      contributionFrequency,
      campaignTerms,
      selectedServices,
      createdAt: new Date().toISOString()
    };

    // Get existing campaigns
    const existingCampaigns = localStorage.getItem('activeCampaigns');
    let campaigns = existingCampaigns ? JSON.parse(existingCampaigns) : [];
    
    // Add new campaign
    campaigns.unshift(newCampaign);
    localStorage.setItem('activeCampaigns', JSON.stringify(campaigns));

    // If this was a draft being edited, remove it from drafts
    if (editingDraftId) {
      const existingDrafts = localStorage.getItem('savedDrafts');
      if (existingDrafts) {
        const drafts = JSON.parse(existingDrafts);
        const updatedDrafts = drafts.filter((draft: any) => draft.id !== editingDraftId);
        localStorage.setItem('savedDrafts', JSON.stringify(updatedDrafts));
      }
    }

    setShowSuccessDialog(true);
  };

  const handleRemoveService = (id: number) => {
    setSelectedServices(selectedServices.filter(service => service.id !== id));
    toast.success('Service removed');
  };

  const handleAddMember = () => {
    if (searchMember.trim()) {
      const newMember: Member = {
        id: Date.now().toString(),
        name: searchMember,
        avatar: '/assets/2fc4b373dd85a6869cf572c5f63c4cccb3cd1ec0.png'
      };
      setMembers([...members, newMember]);
      setSearchMember('');
      toast.success(`${searchMember} invited!`);
    }
  };

  const handleContributionAmountChange = (memberId: string, amount: string) => {
    const updatedMembers = members.map(member => 
      member.id === memberId 
        ? { ...member, contributionAmount: parseFloat(amount) || 0 }
        : member
    );
    setMembers(updatedMembers);
  };

  const handleRemoveMember = (memberId: string) => {
    setMembers(members.filter(member => member.id !== memberId));
    toast.success('Member removed');
  };

  const calculateEqualContribution = () => {
    const target = parseFloat(targetAmount || goalAmount || '0');
    const memberCount = members.length;
    return memberCount > 0 ? (target / memberCount).toFixed(2) : '0.00';
  };

  const getTotalCustomContributions = () => {
    return members.reduce((sum, member) => sum + (member.contributionAmount || 0), 0);
  };

  const getRemainingAmount = () => {
    const target = parseFloat(targetAmount || goalAmount || '0');
    const total = getTotalCustomContributions();
    return target - total;
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <UserSidebar
        activePage="dashboard"
        onNavigate={onNavigate}
        onLogout={onLogout}
        onShowNotifications={onShowNotifications}
        hasUnreadNotifications={hasUnreadNotifications}
        onShowCart={onShowCart}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-auto">
        {/* Top Navbar */}
        <div className="h-[60px] bg-white border-b border-gray-300 flex items-center justify-between px-6">
          {/* Search Bar */}
          <div className="flex-1 max-w-md">
            <div className="relative bg-[#f5f5fa] rounded-xl shadow-[inset_2px_2px_4px_rgba(170,170,204,0.25),inset_-2px_-2px_4px_rgba(255,255,255,0.5)]">
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-transparent px-4 py-2 font-['SF_Pro_Rounded',sans-serif] text-[#7878ab] text-sm outline-none"
              />
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#f5f5fa] rounded-full shadow-[2px_2px_4px_rgba(170,170,204,0.5),-2px_-2px_4px_#ffffff] flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                  <path clipRule="evenodd" d={svgPaths.p250aca00} fill="#7878AB" fillRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Create Button */}
            <button
              onClick={() => onNavigate('serviceProviders')}
              className="bg-[#8363f2] hover:bg-[#7354e1] text-white px-6 py-2 rounded-lg font-['Inter',sans-serif] text-[14px] font-medium transition-colors"
            >
              Create
            </button>

            {/* Bell Icon */}
            <button
              onClick={onShowNotifications}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
                <path d={svgPaths.p12cfc680} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
              {hasUnreadNotifications && (
                <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              )}
            </button>

            {/* Shopping Cart Icon */}
            <button
              onClick={onShowCart}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
                <path d={svgPaths.p3422b400} fill="#202020" />
              </svg>
            </button>

            {/* Profile Avatar */}
            <button 
              onClick={onShowNotifications}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
                <g clipPath="url(#clip0_8_2090)">
                  <path d={svgPaths.p10fc6980} fill="black" />
                  <path d={svgPaths.p1534e400} fill="#EEEEEE" fillOpacity="0.933333" />
                  <path d={svgPaths.p38192080} fill="#EEEEEE" fillOpacity="0.933333" />
                </g>
                <defs>
                  <clipPath id="clip0_8_2090">
                    <rect fill="white" height="24" width="24" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>

        {/* Header */}
        <div className="px-8 py-6 border-b border-gray-200">
          <div className="flex items-center gap-4 mb-4">
            <button
              onClick={handleBack}
              className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
                <path d="M15 18L9 12L15 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div>
              <h1 className="font-['Inter',sans-serif] text-[20px] font-semibold text-black">
                {currentStep === 3 ? 'Reviews & Checkout' : 'Create a new campaign'}
              </h1>
              <p className="font-['Inter',sans-serif] text-[14px] text-[#6b7280]">
                {currentStep === 3 
                  ? 'Verify your details before confirming your campaign' 
                  : 'Fill in the details to launch your new campaign.'}
              </p>
            </div>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-center gap-4 mt-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-['Inter',sans-serif] text-[16px] font-medium ${
                currentStep >= 1 ? 'bg-[#8363f2] text-white' : 'bg-[#f5f5f5] text-[#9ca3af]'
              }`}>
                1
              </div>
              <p className="font-['Inter',sans-serif] text-[12px] text-[#6b7280] mt-2">Campaign Details</p>
            </div>

            {/* Connector Line 1 */}
            <div className="w-24 h-[2px] bg-gray-300 mb-6" />

            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-['Inter',sans-serif] text-[16px] font-medium ${
                currentStep >= 2 ? 'bg-[#8363f2] text-white' : 'bg-[#f5f5f5] text-[#9ca3af]'
              }`}>
                2
              </div>
              <p className="font-['Inter',sans-serif] text-[12px] text-[#6b7280] mt-2">Plan Contributions</p>
            </div>

            {/* Connector Line 2 */}
            <div className="w-24 h-[2px] bg-gray-300 mb-6" />

            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-['Inter',sans-serif] text-[16px] font-medium ${
                currentStep >= 3 ? 'bg-[#8363f2] text-white' : 'bg-[#f5f5f5] text-[#9ca3af]'
              }`}>
                3
              </div>
              <p className="font-['Inter',sans-serif] text-[12px] text-[#6b7280] mt-2">Review & Confirm</p>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-8">
          {/* Step 1: Campaign Details */}
          {currentStep === 1 && (
            <div className="max-w-[1128px] mx-auto bg-white rounded-[8px] shadow-[0px_1px_3px_2px_rgba(0,0,0,0.25)] p-8">
              <h2 className="font-['Inter',sans-serif] text-[32px] font-medium text-black mb-6">Campaign Details</h2>
              
              {/* Campaign Name */}
              <div className="mb-6">
                <label className="block font-['Inter',sans-serif] text-[16px] text-gray-700 mb-2">
                  Campaign Name
                </label>
                <input
                  type="text"
                  value={campaignName}
                  onChange={(e) => setCampaignName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-[8px] font-['Inter',sans-serif] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#8363f2]"
                  placeholder="Enter campaign name"
                />
              </div>

              {/* Row: Goal Amount, Category, Start Date, End Date */}
              <div className="grid grid-cols-4 gap-4 mb-6">
                <div>
                  <label className="block font-['Inter',sans-serif] text-[16px] text-gray-700 mb-2">
                    Goal amount
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 font-['Inter',sans-serif] text-[16px] text-gray-500">R</span>
                    <input
                      type="number"
                      value={goalAmount}
                      onChange={(e) => setGoalAmount(e.target.value)}
                      className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-[8px] font-['Inter',sans-serif] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#8363f2]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-['Inter',sans-serif] text-[16px] text-gray-700 mb-2">
                    Campaign category
                  </label>
                  <select
                    value={campaignCategory}
                    onChange={(e) => setCampaignCategory(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-[8px] font-['Inter',sans-serif] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#8363f2] bg-white"
                  >
                    <option>Vacation</option>
                    <option>Event</option>
                    <option>Gift</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block font-['Inter',sans-serif] text-[16px] text-gray-700 mb-2">
                    Start Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-[8px] font-['Inter',sans-serif] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#8363f2]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-['Inter',sans-serif] text-[16px] text-gray-700 mb-2">
                    End Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-[8px] font-['Inter',sans-serif] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#8363f2]"
                    />
                  </div>
                </div>
              </div>

              {/* Selected Service Provider */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <label className="block font-['Inter',sans-serif] text-[16px] text-gray-700">
                    Selected Service Provider
                  </label>
                  <button
                    onClick={() => onNavigate('serviceProviders')}
                    className="flex items-center gap-2 px-4 py-2 bg-[#8363f2] text-white rounded-[8px] font-['Inter',sans-serif] text-[14px] hover:bg-[#7354e1] transition-colors"
                  >
                    <Plus size={16} />
                    Add
                  </button>
                </div>

                <div className="space-y-3">
                  {selectedServices.map((service) => (
                    <div key={service.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-[8px]">
                      <div className="flex items-center gap-3">
                        <img src={service.image} alt={service.name} className="w-12 h-12 rounded-[8px] object-cover" />
                        <div>
                          <p className="font-['Inter',sans-serif] text-[14px] font-semibold text-black">{service.name}</p>
                          <p className="font-['Inter',sans-serif] text-[12px] text-gray-600">
                            {service.location} / {service.category}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => onNavigate('serviceDetail')}
                          className="px-3 py-1 text-[#8363f2] font-['Inter',sans-serif] text-[14px] hover:underline"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleRemoveService(service.id)}
                          className="p-1 hover:bg-gray-100 rounded transition-colors"
                        >
                          <X size={18} className="text-gray-500" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-4 mt-8">
                <button
                  onClick={handleBack}
                  className="px-6 py-3 border border-[#acaaaa] rounded-[8px] font-['Inter',sans-serif] text-[24px] text-black hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveDraft}
                  className="px-6 py-3 border border-[#acaaaa] rounded-[8px] font-['Inter',sans-serif] text-[24px] text-[#484747] hover:bg-gray-50 transition-colors"
                >
                  Save as Draft
                </button>
                <button
                  onClick={handleNext}
                  className="px-6 py-3 bg-[#8363f2] text-white rounded-[8px] font-['Inter',sans-serif] text-[24px] hover:bg-[#7354e1] transition-colors"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Plan Contributions */}
          {currentStep === 2 && (
            <div className="max-w-[1128px] mx-auto bg-white rounded-[8px] shadow-[0px_1px_3px_2px_rgba(0,0,0,0.25)] p-8">
              <h2 className="font-['Inter',sans-serif] text-[32px] font-medium text-black mb-6">Financial Goal</h2>
              
              {/* Target Amount and Contribution Frequency */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block font-['Inter',sans-serif] text-[16px] text-gray-700 mb-2">
                    Target Amount
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 font-['Inter',sans-serif] text-[16px] text-gray-500">R</span>
                    <input
                      type="number"
                      value={targetAmount || goalAmount}
                      onChange={(e) => setTargetAmount(e.target.value)}
                      className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-[8px] font-['Inter',sans-serif] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#8363f2]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-['Inter',sans-serif] text-[16px] text-gray-700 mb-2">
                    Contribution Frequency
                  </label>
                  <select
                    value={contributionFrequency}
                    onChange={(e) => setContributionFrequency(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-[8px] font-['Inter',sans-serif] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#8363f2] bg-white"
                  >
                    <option>Monthly</option>
                    <option>Weekly</option>
                    <option>Bi-weekly</option>
                  </select>
                </div>
              </div>

              {/* Campaign T&Cs */}
              <div className="mb-8">
                <h3 className="font-['Inter',sans-serif] text-[20px] font-medium text-black mb-3">Campaign T&Cs</h3>
                <textarea
                  value={campaignTerms}
                  onChange={(e) => setCampaignTerms(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-[8px] font-['Inter',sans-serif] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#8363f2] resize-none"
                  rows={4}
                  placeholder="Enter terms and conditions..."
                />
              </div>

              {/* Members */}
              <div className="mb-8">
                <h3 className="font-['Inter',sans-serif] text-[20px] font-medium text-black mb-3">Members</h3>
                
                <div className="flex gap-3 mb-4">
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={searchMember}
                      onChange={(e) => setSearchMember(e.target.value)}
                      placeholder="Search by Username or email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-[8px] font-['Inter',sans-serif] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#8363f2]"
                    />
                    <Plus className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  </div>
                  <button
                    onClick={handleAddMember}
                    className="px-6 py-3 bg-[#8363f2] text-white rounded-[8px] font-['Inter',sans-serif] text-[16px] hover:bg-[#7354e1] transition-colors"
                  >
                    Invite
                  </button>
                </div>

                <div className="flex gap-3">
                  {members.map((member) => (
                    <div key={member.id} className="flex flex-col items-center">
                      <img src={member.avatar} alt={member.name} className="w-12 h-12 rounded-full object-cover" />
                      <p className="font-['Inter',sans-serif] text-[12px] text-gray-700 mt-1">{member.name}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contribution Distribution */}
              {members.length > 0 && (
                <div className="mb-8">
                  <h3 className="font-['Inter',sans-serif] text-[20px] font-medium text-black mb-4">Contribution Distribution</h3>
                  
                  {/* Mode Toggle */}
                  <div className="flex gap-3 mb-6">
                    <button
                      onClick={() => setContributionMode('equal')}
                      className={`flex-1 px-4 py-3 rounded-[8px] font-['Inter',sans-serif] text-[14px] font-medium transition-colors border-2 ${
                        contributionMode === 'equal' 
                          ? 'bg-[#8363f2] text-white border-[#8363f2]' 
                          : 'bg-white text-gray-700 border-gray-300 hover:border-[#8363f2]'
                      }`}
                    >
                      Divide Equally
                    </button>
                    <button
                      onClick={() => setContributionMode('custom')}
                      className={`flex-1 px-4 py-3 rounded-[8px] font-['Inter',sans-serif] text-[14px] font-medium transition-colors border-2 ${
                        contributionMode === 'custom' 
                          ? 'bg-[#8363f2] text-white border-[#8363f2]' 
                          : 'bg-white text-gray-700 border-gray-300 hover:border-[#8363f2]'
                      }`}
                    >
                      Set Custom Amounts
                    </button>
                  </div>

                  {/* Equal Distribution Display */}
                  {contributionMode === 'equal' && (
                    <div className="bg-[#f9fafb] rounded-[8px] p-6 border border-gray-200">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="font-['Inter',sans-serif] text-[14px] text-gray-600 mb-1">
                            Each member contributes equally
                          </p>
                          <p className="font-['Inter',sans-serif] text-[24px] font-semibold text-[#8363f2]">
                            R{calculateEqualContribution()} / {contributionFrequency.toLowerCase()}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-['Inter',sans-serif] text-[12px] text-gray-500">Total Members</p>
                          <p className="font-['Inter',sans-serif] text-[20px] font-semibold text-black">{members.length}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-3">
                        {members.map((member) => (
                          <div key={member.id} className="bg-white rounded-[8px] p-3 border border-gray-200">
                            <div className="flex items-center gap-2 mb-2">
                              <img src={member.avatar} alt={member.name} className="w-8 h-8 rounded-full object-cover" />
                              <p className="font-['Inter',sans-serif] text-[13px] font-medium text-black">{member.name}</p>
                            </div>
                            <p className="font-['Inter',sans-serif] text-[16px] font-semibold text-[#8363f2]">
                              R{calculateEqualContribution()}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Custom Distribution UI */}
                  {contributionMode === 'custom' && (
                    <div className="space-y-4">
                      <div className="bg-[#fef9f5] border border-[#fcd9b8] rounded-[8px] p-4 mb-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-['Inter',sans-serif] text-[13px] text-gray-600">Target Amount</p>
                            <p className="font-['Inter',sans-serif] text-[18px] font-semibold text-black">
                              R{parseFloat(targetAmount || goalAmount || '0').toFixed(2)}
                            </p>
                          </div>
                          <div>
                            <p className="font-['Inter',sans-serif] text-[13px] text-gray-600">Total Allocated</p>
                            <p className={`font-['Inter',sans-serif] text-[18px] font-semibold ${
                              getTotalCustomContributions() === parseFloat(targetAmount || goalAmount || '0')
                                ? 'text-green-600'
                                : 'text-orange-600'
                            }`}>
                              R{getTotalCustomContributions().toFixed(2)}
                            </p>
                          </div>
                          <div>
                            <p className="font-['Inter',sans-serif] text-[13px] text-gray-600">Remaining</p>
                            <p className={`font-['Inter',sans-serif] text-[18px] font-semibold ${
                              getRemainingAmount() === 0 ? 'text-green-600' : 'text-red-600'
                            }`}>
                              R{getRemainingAmount().toFixed(2)}
                            </p>
                          </div>
                        </div>
                      </div>

                      {members.map((member) => (
                        <div key={member.id} className="bg-white rounded-[8px] p-4 border border-gray-200">
                          <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3 flex-1">
                              <img src={member.avatar} alt={member.name} className="w-10 h-10 rounded-full object-cover" />
                              <div className="flex-1">
                                <p className="font-['Inter',sans-serif] text-[14px] font-medium text-black">{member.name}</p>
                                <p className="font-['Inter',sans-serif] text-[12px] text-gray-500">Per {contributionFrequency.toLowerCase()}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 font-['Inter',sans-serif] text-[14px] text-gray-500">R</span>
                                <input
                                  type="number"
                                  value={member.contributionAmount || ''}
                                  onChange={(e) => handleContributionAmountChange(member.id, e.target.value)}
                                  placeholder="0.00"
                                  className="w-32 pl-7 pr-3 py-2 border border-gray-300 rounded-[8px] font-['Inter',sans-serif] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#8363f2]"
                                />
                              </div>
                              <button
                                onClick={() => handleRemoveMember(member.id)}
                                className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                                title="Remove member"
                              >
                                <X size={18} className="text-red-500" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex justify-end gap-4 mt-8">
                <button
                  onClick={handleBack}
                  className="px-6 py-3 border border-[#acaaaa] rounded-[8px] font-['Inter',sans-serif] text-[24px] text-black hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={handleSaveDraft}
                  className="px-6 py-3 border border-[#acaaaa] rounded-[8px] font-['Inter',sans-serif] text-[24px] text-[#484747] hover:bg-gray-50 transition-colors"
                >
                  Save as Draft
                </button>
                <button
                  onClick={handleNext}
                  className="px-6 py-3 bg-[#8363f2] text-white rounded-[8px] font-['Inter',sans-serif] text-[24px] hover:bg-[#7354e1] transition-colors"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Review & Confirm */}
          {currentStep === 3 && (
            <div className="max-w-[1128px] mx-auto space-y-6">
              {/* Summary of Services */}
              <div className="bg-white rounded-[8px] shadow-[0px_1px_3px_2px_rgba(0,0,0,0.25)] p-8">
                <h2 className="font-['Inter',sans-serif] text-[20px] font-semibold text-black mb-6">Summary of Services</h2>
                
                <div className="border-b border-gray-300 pb-3 mb-4">
                  <div className="grid grid-cols-4 gap-4">
                    <p className="font-['Inter',sans-serif] text-[14px] font-medium text-[#6b7280]">Vendors</p>
                    <p className="font-['Inter',sans-serif] text-[14px] font-medium text-[#6b7280]">Category</p>
                    <p className="font-['Inter',sans-serif] text-[14px] font-medium text-[#6b7280] text-center">Quantity/Unit</p>
                    <p className="font-['Inter',sans-serif] text-[14px] font-medium text-[#6b7280] text-right">Price</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-4 gap-4 items-center">
                    <div className="flex items-center gap-3">
                      <img src={'/asset/2d90d1ffe99df5817a38c395c08ec5116a7be340.png'} alt="Seaview Lodge" className="w-[60px] h-[48px] rounded-[8px] object-cover" />
                      <p className="font-['Inter',sans-serif] text-[14px] text-black">Seaview Lodge</p>
                    </div>
                    <p className="font-['Inter',sans-serif] text-[14px] text-black">Accommodation</p>
                    <p className="font-['Inter',sans-serif] text-[14px] text-black text-center">2</p>
                    <p className="font-['Inter',sans-serif] text-[14px] text-black text-right">R6000.00</p>
                  </div>

                  <div className="grid grid-cols-4 gap-4 items-center">
                    <div className="flex items-center gap-3">
                      <img src={'/assets/2cd0806b75ceaec4ce1353812cc2f2eb82fde8f2.png'} alt="Water Boat Tour" className="w-[60px] h-[48px] rounded-[8px] object-cover" />
                      <p className="font-['Inter',sans-serif] text-[14px] text-black">Water Boat Tou</p>
                    </div>
                    <p className="font-['Inter',sans-serif] text-[14px] text-black">Activity</p>
                    <p className="font-['Inter',sans-serif] text-[14px] text-black text-center">2</p>
                    <p className="font-['Inter',sans-serif] text-[14px] text-black text-right">R1500.00</p>
                  </div>

                  <div className="grid grid-cols-4 gap-4 items-center">
                    <div className="flex items-center gap-3">
                      <img src={'/assets/14e5699a8399d12dd79e85db4e560c982e664a8c.png'} alt="Safari Car Tour" className="w-[60px] h-[48px] rounded-[8px] object-cover" />
                      <p className="font-['Inter',sans-serif] text-[14px] text-black">Safari Car Tour</p>
                    </div>
                    <p className="font-['Inter',sans-serif] text-[14px] text-black">Activity</p>
                    <p className="font-['Inter',sans-serif] text-[14px] text-black text-center">2</p>
                    <p className="font-['Inter',sans-serif] text-[14px] text-black text-right">R2000.00</p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-300">
                  <p className="font-['Inter',sans-serif] text-[16px] font-semibold text-black text-right">Total R9500.00</p>
                </div>
              </div>

              {/* Service Provider Details */}
              <div className="bg-white rounded-[8px] shadow-[0px_1px_3px_2px_rgba(0,0,0,0.25)] p-8">
                <h2 className="font-['Inter',sans-serif] text-[20px] font-semibold text-black mb-6">Service Provider Details</h2>
                
                {/* Accommodation Service */}
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <img src={'/asset/2d90d1ffe99df5817a38c395c08ec5116a7be340.png'} alt="Seaview Lodge" className="w-[80px] h-[64px] rounded-[8px] object-cover" />
                    <div>
                      <h3 className="font-['Inter',sans-serif] text-[16px] font-semibold text-black">Seaview Lodge</h3>
                      <p className="font-['Inter',sans-serif] text-[13px] text-[#6b7280]">Cape Town • Accommodation</p>
                    </div>
                  </div>
                  
                  <div className="bg-[#f9fafb] rounded-[8px] p-4 mb-3">
                    <h4 className="font-['Inter',sans-serif] text-[14px] font-semibold text-black mb-3">Room Details</h4>
                    <div className="grid grid-cols-2 gap-3 text-[13px]">
                      <div>
                        <p className="text-[#6b7280]">Room Type</p>
                        <p className="text-black font-medium">Standard Room</p>
                      </div>
                      <div>
                        <p className="text-[#6b7280]">Guests</p>
                        <p className="text-black font-medium">2 Adults</p>
                      </div>
                      <div>
                        <p className="text-[#6b7280]">Check-in</p>
                        <p className="text-black font-medium">{startDate || '01 Sep 2025'}</p>
                      </div>
                      <div>
                        <p className="text-[#6b7280]">Check-out</p>
                        <p className="text-black font-medium">{endDate || '16 Dec 2025'}</p>
                      </div>
                      <div>
                        <p className="text-[#6b7280]">Nights</p>
                        <p className="text-black font-medium">3 Nights</p>
                      </div>
                      <div>
                        <p className="text-[#6b7280]">Amenities</p>
                        <p className="text-black font-medium">WiFi, Breakfast, Pool</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-[#fef9f5] border border-[#fcd9b8] rounded-[8px] p-4">
                    <h4 className="font-['Inter',sans-serif] text-[13px] font-semibold text-black mb-2">Terms & Conditions</h4>
                    <ul className="space-y-1 text-[12px] text-[#6b7280]">
                      <li>• Free cancellation up to 48 hours before check-in</li>
                      <li>• 50% deposit required to confirm booking</li>
                      <li>• Check-in time: 2:00 PM, Check-out time: 11:00 AM</li>
                      <li>• No smoking in rooms, pets not allowed</li>
                    </ul>
                  </div>
                </div>

                {/* Transport Service */}
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <img src={'/assets/6a4cb1a71759404169c3e112082d2c3714560afd.png'} alt="Safari Car Tour" className="w-[80px] h-[64px] rounded-[8px] object-cover" />
                    <div>
                      <h3 className="font-['Inter',sans-serif] text-[16px] font-semibold text-black">Safari Car Tour</h3>
                      <p className="font-['Inter',sans-serif] text-[13px] text-[#6b7280]">Cape Town Game Reserve • Transport</p>
                    </div>
                  </div>
                  
                  <div className="bg-[#f9fafb] rounded-[8px] p-4 mb-3">
                    <h4 className="font-['Inter',sans-serif] text-[14px] font-semibold text-black mb-3">Transport Details</h4>
                    <div className="grid grid-cols-2 gap-3 text-[13px]">
                      <div>
                        <p className="text-[#6b7280]">Vehicle Type</p>
                        <p className="text-black font-medium">4x4 Safari Vehicle</p>
                      </div>
                      <div>
                        <p className="text-[#6b7280]">Capacity</p>
                        <p className="text-black font-medium">6 Passengers</p>
                      </div>
                      <div>
                        <p className="text-[#6b7280]">Duration</p>
                        <p className="text-black font-medium">Full Day (8 hours)</p>
                      </div>
                      <div>
                        <p className="text-[#6b7280]">Pickup Location</p>
                        <p className="text-black font-medium">Seaview Lodge</p>
                      </div>
                      <div>
                        <p className="text-[#6b7280]">Included</p>
                        <p className="text-black font-medium">Guide, Refreshments</p>
                      </div>
                      <div>
                        <p className="text-[#6b7280]">Route</p>
                        <p className="text-black font-medium">Western Cape Game Reserve</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-[#fef9f5] border border-[#fcd9b8] rounded-[8px] p-4">
                    <h4 className="font-['Inter',sans-serif] text-[13px] font-semibold text-black mb-2">Terms & Conditions</h4>
                    <ul className="space-y-1 text-[12px] text-[#6b7280]">
                      <li>• Cancellation 24 hours prior for full refund</li>
                      <li>• Weather-dependent - alternative date offered if cancelled</li>
                      <li>• Valid driver's license required for self-drive option</li>
                      <li>• Children under 12 must be accompanied by an adult</li>
                    </ul>
                  </div>
                </div>

                {/* Activity Service */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <img src={'/assets/2cd0806b75ceaec4ce1353812cc2f2eb82fde8f2.png'} alt="Water Boat Tour" className="w-[80px] h-[64px] rounded-[8px] object-cover" />
                    <div>
                      <h3 className="font-['Inter',sans-serif] text-[16px] font-semibold text-black">Water Boat Tour</h3>
                      <p className="font-['Inter',sans-serif] text-[13px] text-[#6b7280]">Cape Town Front Beach • Activity</p>
                    </div>
                  </div>
                  
                  <div className="bg-[#f9fafb] rounded-[8px] p-4 mb-3">
                    <h4 className="font-['Inter',sans-serif] text-[14px] font-semibold text-black mb-3">Activity Details</h4>
                    <div className="grid grid-cols-2 gap-3 text-[13px]">
                      <div>
                        <p className="text-[#6b7280]">Activity Type</p>
                        <p className="text-black font-medium">Boat Tour & Sightseeing</p>
                      </div>
                      <div>
                        <p className="text-[#6b7280]">Participants</p>
                        <p className="text-black font-medium">Up to 12 people</p>
                      </div>
                      <div>
                        <p className="text-[#6b7280]">Duration</p>
                        <p className="text-black font-medium">2.5 hours</p>
                      </div>
                      <div>
                        <p className="text-[#6b7280]">Departure</p>
                        <p className="text-black font-medium">V&A Waterfront Marina</p>
                      </div>
                      <div>
                        <p className="text-[#6b7280]">Included</p>
                        <p className="text-black font-medium">Life jackets, Drinks, Snacks</p>
                      </div>
                      <div>
                        <p className="text-[#6b7280]">Highlights</p>
                        <p className="text-black font-medium">Seals, Dolphins, Coastline</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-[#fef9f5] border border-[#fcd9b8] rounded-[8px] p-4">
                    <h4 className="font-['Inter',sans-serif] text-[13px] font-semibold text-black mb-2">Terms & Conditions</h4>
                    <ul className="space-y-1 text-[12px] text-[#6b7280]">
                      <li>• Free cancellation up to 24 hours before departure</li>
                      <li>• Tour subject to weather conditions and sea safety</li>
                      <li>• Minimum age: 5 years old</li>
                      <li>• No refund for no-shows or late arrivals</li>
                      <li>• Swimming ability not required but recommended</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Campaigns Details */}
              <div className="bg-white rounded-[8px] shadow-[0px_1px_3px_2px_rgba(0,0,0,0.25)] p-8">
                <h2 className="font-['Inter',sans-serif] text-[20px] font-semibold text-black mb-6">Campaigns Details</h2>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-300">
                    <p className="font-['Inter',sans-serif] text-[14px] text-[#6b7280]">Goal Amount</p>
                    <p className="font-['Inter',sans-serif] text-[14px] font-medium text-black">R{goalAmount || '9500.00'}</p>
                  </div>

                  <div className="flex justify-between items-center pb-3 border-b border-gray-300">
                    <p className="font-['Inter',sans-serif] text-[14px] text-[#6b7280]">Start Date</p>
                    <p className="font-['Inter',sans-serif] text-[14px] font-medium text-black">{startDate || '01 September 2025'}</p>
                  </div>

                  <div className="flex justify-between items-center pb-3 border-b border-gray-300">
                    <p className="font-['Inter',sans-serif] text-[14px] text-[#6b7280]">End Date</p>
                    <p className="font-['Inter',sans-serif] text-[14px] font-medium text-black">{endDate || '16 December 2025'}</p>
                  </div>

                  <div className="flex justify-between items-center">
                    <p className="font-['Inter',sans-serif] text-[14px] text-[#6b7280]">Contribution Frequency</p>
                    <p className="font-['Inter',sans-serif] text-[14px] font-medium text-black">{contributionFrequency}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-4">
                <button
                  onClick={handleBack}
                  className="px-6 py-2.5 border border-gray-300 rounded-[8px] font-['Inter',sans-serif] text-[14px] text-[#374151] hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveDraft}
                  className="px-6 py-2.5 border border-gray-300 rounded-[8px] font-['Inter',sans-serif] text-[14px] text-[#374151] hover:bg-gray-50 transition-colors"
                >
                  Save as Draft
                </button>
                <button
                  onClick={handleLaunchCampaign}
                  className="px-6 py-2.5 bg-[#8363f2] text-white rounded-[8px] font-['Inter',sans-serif] text-[14px] font-medium hover:bg-[#7354e1] transition-colors"
                >
                  Launch Campaign
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Success Dialog */}
      {showSuccessDialog && (
        <div className="fixed inset-0 bg-black/45 flex items-center justify-center z-50">
          <div className="bg-white rounded-[12px] p-8 max-w-md w-full mx-auto relative">
            <button
              onClick={() => setShowSuccessDialog(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col items-center text-center">
              {/* Success Icon */}
              <div className="w-20 h-20 bg-[#22c55e] rounded-full flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24">
                  <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              <h2 className="font-['Inter',sans-serif] text-[18px] font-semibold text-black mb-3">
                Your Campaign is on its way to approval
              </h2>

              <p className="font-['Inter',sans-serif] text-[14px] text-[#6b7280] leading-[22px] mb-6">
                We have sent your request to the service provider and we just waiting for vendor to approve
              </p>

              <button
                onClick={() => {
                  setShowSuccessDialog(false);
                  toast.success('Campaign submitted successfully!');
                  onNavigate('campaigns');
                }}
                className="w-full px-6 py-2.5 bg-[#8363f2] text-white rounded-[8px] font-['Inter',sans-serif] text-[14px] font-medium hover:bg-[#7354e1] transition-colors mb-2"
              >
                Got it
              </button>

              <button
                onClick={() => {
                  setShowSuccessDialog(false);
                  onNavigate('dashboard');
                }}
                className="w-full px-6 py-2.5 text-[#8363f2] font-['Inter',sans-serif] text-[14px] hover:underline transition-all"
              >
                Back to dashboard
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}