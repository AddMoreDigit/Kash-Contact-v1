import { UserSidebar } from '../../components/layout/UserSidebar';
import svgPaths from '../../../imports/svg-c93d13tepm';
//import svgPathsOld from '../../../imports/svg-qxgvifls4i';
//import imgRectangle149 from 'figma:asset/c3da0b093907ae1f1f073f5b5b081f4b60182725.png';
//import imgRectangle491 from 'figma:asset/b8f358508256be2f2d88edd8037f9c1c992b7ef0.png';
//import imgRectangle498 from 'figma:asset/4f3cf17b509ff91a3ab3bb07631643b028d47067.png';
import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import type { Page } from '../../types/navigation';
//type Page = 'dashboard' | 'campaigns' | 'vouchers' | 'transactions' | 'profile' | 'overview' | 'draft' | 'howItWorks' | 'campaignDetail' | 'viewCampaignDetail' | 'messaging' | 'serviceDetail' | 'selectedServices' | 'createCampaign' | 'manageCampaign' | 'contributors' | 'contributorDetail' | 'campaignSchedule' | 'campaignsHistory' | 'contribute' | 'individualCampaign' | 'groupCampaign' | 'managingCampaigns' | 'helpSupport' | 'saveDraft' | 'selectServices' | 'signup' | 'vendorSignup' | 'otpVerification' | 'signupSuccess' | 'login' | 'forgotPassword' | 'createNewPassword' | 'vendorDashboard' | 'corporateDashboard' | 'selectUserType' | 'serviceProviders';

interface SaveAsDraftPageProps {
  onNavigate: (page: Page) => void;
  onLogout?: () => void;
  onShowNotifications?: () => void;
  hasUnreadNotifications?: boolean;
  onShowCart?: () => void;
}

export function SaveAsDraftPage({ onNavigate, onLogout, onShowNotifications, hasUnreadNotifications, onShowCart }: SaveAsDraftPageProps) {
  const initialDrafts = [
    {
      id: 1,
      title: 'Magalies park gateway weekend',
      image: '/assets/c3da0b093907ae1f1f073f5b5b081f4b60182725.png',
      rating: 2,
      reviews: 24,
      serviceProvider: 'Magalies Hotel',
      goal: 'R10 000.00',
      members: 3,
      step: 3,
      totalSteps: 5,
      progress: 60,
    },
    {
      id: 2,
      title: 'Magalies park gateway weekend',
      image: '/assets/b8f358508256be2f2d88edd8037f9c1c992b7ef0.png',
      rating: 2,
      reviews: 24,
      serviceProvider: 'Magalies Hotel',
      goal: 'R10 000.00',
      members: 3,
      step: 2,
      totalSteps: 5,
      progress: 40,
    },
    {
      id: 3,
      title: 'Gold reef city team building',
      image: '/assets/4f3cf17b509ff91a3ab3bb07631643b028d47067.png',
      rating: 5,
      reviews: 100,
      serviceProvider: 'Magalies Hotel',
      goal: 'R18 000.00',
      members: 8,
      step: 1,
      totalSteps: 5,
      progress: 20,
    },
  ];

  const [drafts, setDrafts] = useState(initialDrafts);

  // Load drafts from localStorage on mount
  useEffect(() => {
    const savedDrafts = localStorage.getItem('savedDrafts');
    if (savedDrafts) {
      try {
        const parsedDrafts = JSON.parse(savedDrafts);
        // Merge saved drafts with initial mock drafts
        setDrafts([...parsedDrafts, ...initialDrafts]);
      } catch (error) {
        console.error('Error loading saved drafts:', error);
      }
    }
  }, []);

  const handleDeleteDraft = (id: number, title: string) => {
    // Remove the draft from the list
    setDrafts(prevDrafts => prevDrafts.filter(draft => draft.id !== id));
    
    // Also remove from localStorage if it's a saved draft
    const savedDrafts = localStorage.getItem('savedDrafts');
    if (savedDrafts) {
      try {
        const parsedDrafts = JSON.parse(savedDrafts);
        const updatedDrafts = parsedDrafts.filter((draft: any) => draft.id !== id);
        localStorage.setItem('savedDrafts', JSON.stringify(updatedDrafts));
      } catch (error) {
        console.error('Error updating saved drafts:', error);
      }
    }
    
    toast.success(`"${title}" has been deleted`, {
      duration: 3000,
    });
  };

  const handleContinueEditing = (draft: any) => {
    // Store the draft data in localStorage so the campaign creation page can pick it up
    localStorage.setItem('continueEditingDraft', JSON.stringify({
      id: draft.id,
      title: draft.title,
      serviceProvider: draft.serviceProvider,
      goal: draft.goal,
      members: draft.members,
      step: draft.step,
      totalSteps: draft.totalSteps,
      progress: draft.progress,
      formData: draft.formData, // Include form data if available
    }));
    
    toast.success(`Continuing "${draft.title}"`, {
      duration: 2000,
    });
    
    // Navigate to campaign creation page
    setTimeout(() => {
      onNavigate('createCampaign');
    }, 500);
  };

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      {/* Sidebar */}
      <UserSidebar activePage="draft" onNavigate={onNavigate} onLogout={onLogout} onShowNotifications={onShowNotifications} hasUnreadNotifications={hasUnreadNotifications} onShowCart={onShowCart} />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-y-auto bg-white">
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

        {/* Content */}
        <div className="px-8 py-6">
          {/* Title and Description */}
          <div className="mb-6">
            <h1 className="font-['Inter',sans-serif] text-[20px] font-semibold text-black mb-1">
              Save as draft
            </h1>
            <p className="font-['Inter',sans-serif] text-[12px] text-[#6b7280] leading-[18px]">
              These are the campaigns you've started but not completed, continue editing to fishing and launch your campaign
            </p>
          </div>

          {/* Draft Cards */}
          <div className="space-y-4">
            {drafts.map((draft) => (
              <div 
                key={draft.id} 
                className="bg-white rounded-[8px] border border-[#e5e7eb] p-4"
              >
                <div className="flex gap-4">
                  {/* Campaign Image */}
                  <div className="flex-shrink-0">
                    <img
                      src={draft.image}
                      alt={draft.title}
                      className="w-[90px] h-[90px] rounded-[8px] object-cover"
                    />
                  </div>

                  {/* Campaign Info */}
                  <div className="flex-1">
                    {/* Title and Rating */}
                    <div className="flex items-start gap-2 mb-2">
                      <h3 className="font-['Inter',sans-serif] text-[14px] font-semibold text-black">
                        {draft.title}
                      </h3>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-3 h-3" fill="none" viewBox="0 0 24 24">
                            <path 
                              d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" 
                              fill={i < draft.rating ? '#FFA500' : '#E5E7EB'} 
                            />
                          </svg>
                        ))}
                        <span className="font-['Inter',sans-serif] text-[10px] text-[#6b7280] ml-0.5">
                          (24 Reviews)
                        </span>
                      </div>
                    </div>
                    
                    {/* Draft Badge */}
                    <div className="inline-flex items-center gap-1.5 px-2 py-1 bg-white border border-[#e5e7eb] rounded-[4px] mb-3">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24">
                        <path d={svgPaths.p1d4ae3f0} fill="white" stroke="#8363f2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        <path d={svgPaths.pbfd1c00} stroke="#8363f2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                      <span className="font-['Inter',sans-serif] text-[11px] text-[#8363f2]">Draft</span>
                    </div>

                    {/* Details Row */}
                    <div className="flex items-center gap-4 mb-3 flex-wrap">
                      <button 
                        onClick={() => onNavigate('serviceDetail')}
                        className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24">
                          <path d={svgPaths.pa168800} fill="black" />
                          <path d={svgPaths.p7709200} fill="#8363F2" />
                          <path d={svgPaths.p4d96400} fill="#8363F2" />
                        </svg>
                        <span className="font-['Inter',sans-serif] text-[11px] text-[#374151]">
                          Service Providers|{draft.serviceProvider}
                        </span>
                      </button>
                      <div className="flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="10" stroke="#8363F2" strokeWidth="2" fill="none"/>
                          <path d="M12 6v6l4 2" stroke="#8363F2" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                        <span className="font-['Inter',sans-serif] text-[11px] text-[#374151]">
                          Goal-{draft.goal}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24">
                          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="#8363F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <circle cx="9" cy="7" r="4" stroke="#8363F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="#8363F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="font-['Inter',sans-serif] text-[11px] text-[#374151]">
                          Member added so far({draft.members})
                        </span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-3">
                      <p className="font-['Inter',sans-serif] text-[10px] text-[#374151] mb-1.5">
                        Step {draft.step} of {draft.totalSteps}
                      </p>
                      <div className="relative h-1.5 bg-[#e5e7eb] rounded-full overflow-hidden">
                        <div
                          className="absolute left-0 top-0 h-full bg-[#8363f2]"
                          style={{ width: `${draft.progress}%` }}
                        />
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => handleContinueEditing(draft)}
                        className="h-[32px] px-4 bg-[#8363f2] hover:bg-[#7354e1] text-white rounded-[6px] font-['Inter',sans-serif] text-[12px] transition-colors"
                      >
                        Continue editing
                      </button>
                      <button 
                        onClick={() => handleDeleteDraft(draft.id, draft.title)}
                        className="h-[32px] px-4 bg-white border border-[#fca5a5] text-[#dc2626] rounded-[6px] font-['Inter',sans-serif] text-[12px] hover:bg-[#fef2f2] transition-colors"
                      >
                        Delete Draft
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}