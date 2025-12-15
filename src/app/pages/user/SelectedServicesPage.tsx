import { useState } from 'react';
import { Trash2, MapPin } from 'lucide-react';
//import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { toast, Toaster } from 'sonner';
import { UserSidebar } from '../../components/layout/UserSidebar';
import svgPaths from '../../../imports/svg-c93d13tepm';
//import svgPathsOld from '../../../imports/svg-yz68h60k91';
//import imgRoom1 from 'figma:asset/50b9941bb18b04433a8da878785acb0358877f72.png';
//import imgRoom2 from 'figma:asset/840a8d2b23fcae6efd3c33d28ca3649c5eda74ed.png';
//import imgBus from 'figma:asset/703a3a22134188eeed9837e5755d43d8e16d5f2f.png';

type Page = 'dashboard' | 'campaigns' | 'vouchers' | 'transactions' | 'profile' | 'overview' | 'draft' | 'howItWorks' | 'campaignDetail' | 'viewCampaign' | 'messaging' | 'messageChat' | 'serviceDetail' | 'selectedServices' | 'createCampaign' | 'manageCampaign' | 'contributors' | 'contributorDetail' | 'campaignSchedule' | 'myCampaignSchedule' | 'campaignsHistory' | 'contribute' | 'individualCampaign' | 'groupCampaign' | 'managingCampaigns' | 'helpSupport' | 'saveDraft' | 'selectServices' | 'viewCampaignDetail' | 'serviceProviders' | 'signup' | 'vendorSignup' | 'otpVerification' | 'signupSuccess' | 'login' | 'forgotPassword' | 'createNewPassword' | 'selectUserType' | 'vendorDashboard' | 'vendorProfile' | 'vendorCampaigns' | 'vendorServices' | 'vendorTransactions' | 'vendorOverview' | 'vendorDrafts' | 'vendorHelp' | 'vendorInvoice' | 'vendorReport' | 'approveBookingRequest' | 'editBooking' | 'corporateDashboard' | 'corporateCampaigns' | 'corporateProfile' | 'corporateCampaignDetail' | 'corporateSchedule' | 'corporateTransactions' | 'corporateVouchers' | 'corporateOverview' | 'corporateDrafts' | 'corporateHelp' | 'corporateGoalsTracker' | 'corporateTransactionsTable';

interface SelectedServicesPageProps {
  onNavigate: (page: Page) => void;
  onShowNotifications?: () => void;
  hasUnreadNotifications?: boolean;
  onShowCart?: () => void;
  onLogout?: () => void;
}

interface Service {
  id: number;
  name: string;
  location: string;
  provider: string;
  category: string;
  price: number;
  image: string;
}

export function SelectedServicesPage({ onNavigate, onShowNotifications, hasUnreadNotifications, onShowCart, onLogout }: SelectedServicesPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [services, setServices] = useState<Service[]>([
    {
      id: 1,
      name: 'Deluxe Room',
      location: 'Cape Town',
      provider: 'Seaview lodge',
      category: 'Accommodation',
      price: 2500,
      image: '/assets/50b9941bb18b04433a8da878785acb0358877f72.png'
    },
    {
      id: 2,
      name: 'Deluxe Super',
      location: 'Cape Town',
      provider: 'Tastebites catering',
      category: 'Food',
      price: 750,
      image: '/assets/840a8d2b23fcae6efd3c33d28ca3649c5eda74ed.png'
    },
    {
      id: 3,
      name: '16 Sitter mini bus',
      location: 'Cape Town',
      provider: 'Ride Africa Trans',
      category: 'Transport',
      price: 3750,
      image: '/assets/703a3a22134188eeed9837e5755d43d8e16d5f2f.png'
    }
  ]);

  const handleRemove = (id: number) => {
    const service = services.find(s => s.id === id);
    setServices(services.filter(s => s.id !== id));
    toast.success(`${service?.name} removed from selected services`);
  };

  const totalAmount = services.reduce((sum, service) => sum + service.price, 0);

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      {/* Sidebar */}
      <UserSidebar
        activePage="campaigns"
        onNavigate={onNavigate}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navbar */}
        <div className="h-[60px] bg-white border-b border-gray-300 flex items-center justify-between px-6">
          {/* Search Bar */}
          <div className="flex-1 max-w-md">
            <div className="relative bg-[#f5f5fa] rounded-xl shadow-[inset_2px_2px_4px_rgba(170,170,204,0.25),inset_-2px_-2px_4px_rgba(255,255,255,0.5)]">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
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

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto bg-white px-8 py-6">
          {/* Page Title */}
          <h1 className="font-['Inter',sans-serif] text-[32px] font-medium text-black mb-2">Selected Services</h1>
          <p className="font-['Inter',sans-serif] text-[20px] text-[#4e4d4d] mb-8">
            Selected from our trusted partners for accommodation, food, actives and more
          </p>

          {/* Services List */}
          <div className="space-y-6">
            {services.length === 0 ? (
              <div className="text-center py-16">
                <p className="font-['Inter',sans-serif] text-[20px] text-gray-500">No services selected yet</p>
                <button 
                  onClick={() => onNavigate('serviceProviders')}
                  className="mt-4 bg-[#8363f2] px-6 py-3 rounded-lg text-white font-['Inter',sans-serif] text-[16px] hover:bg-[#7052e1] transition-colors"
                >
                  Browse Services
                </button>
              </div>
            ) : (
              services.map((service) => (
                <div key={service.id} className="bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(0,0,0,0.25)] overflow-hidden flex">
                  {/* Service Image */}
                  <div className="w-[340px] h-[258px]">
                    <img 
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover rounded-l-lg"
                    />
                  </div>

                  {/* Service Details */}
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="font-['Inter',sans-serif] text-[32px] font-medium text-black mb-3">{service.name}</h3>
                      <div className="flex items-center gap-2 mb-4">
                        <MapPin className="w-5 h-5 text-[#8363f2]" />
                        <span className="font-['Inter',sans-serif] text-[20px] text-black">
                          {service.location} | {service.provider}
                        </span>
                      </div>
                      <div className="inline-block bg-[rgba(131,99,242,0.2)] px-4 py-2 rounded-lg">
                        <span className="font-['Inter',sans-serif] text-[20px] text-[#3f3d3d]">{service.category}</span>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="mt-4">
                      <p className="font-['Inter',sans-serif] text-[32px] font-medium text-black">
                        R{service.price.toLocaleString()}.00
                      </p>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <div className="bg-[rgba(131,99,242,0.2)] w-[171px] flex items-center justify-center rounded-r-lg">
                    <button 
                      onClick={() => handleRemove(service.id)}
                      className="flex flex-col items-center gap-3 hover:opacity-80 transition-opacity"
                    >
                      <Trash2 className="w-10 h-10 text-[#8363f2]" />
                      <span className="font-['Inter',sans-serif] text-[20px] text-black">Remove</span>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Total and Action Buttons */}
          {services.length > 0 && (
            <div className="mt-8 flex items-center justify-between">
              <div>
                <p className="font-['Inter',sans-serif] text-[24px] text-gray-700">Total Amount:</p>
                <p className="font-['Inter',sans-serif] text-[36px] font-semibold text-black">
                  R{totalAmount.toLocaleString()}.00
                </p>
              </div>
              <div className="flex gap-4">
                <button 
                  onClick={() => onNavigate('serviceProviders')}
                  className="border-2 border-[#8363f2] px-8 py-3 rounded-lg text-[#8363f2] font-['Inter',sans-serif] text-[18px] font-medium hover:bg-purple-50 transition-colors"
                >
                  Add More Services
                </button>
                <button 
                  onClick={() => {
                    toast.success('Proceeding to checkout...');
                    setTimeout(() => onNavigate('campaigns'), 1500);
                  }}
                  className="bg-[#8363f2] px-8 py-3 rounded-lg text-white font-['Inter',sans-serif] text-[18px] font-medium hover:bg-[#7052e1] transition-colors"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <Toaster />
    </div>
  );
}
