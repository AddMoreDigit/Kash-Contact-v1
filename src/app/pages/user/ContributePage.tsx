import { useState } from 'react';
import { UserSidebar } from '../../components/layout/UserSidebar';
const imgCampaign = new URL(
  '../../../assets/4f3cf17b509ff91a3ab3bb07631643b028d47067.png',
  import.meta.url
).href;

type Page = 'dashboard' | 'campaigns' | 'vouchers' | 'transactions' | 'profile' | 'overview' | 'draft' | 'howItWorks' | 'campaignDetail' | 'messaging' | 'serviceDetail' | 'selectedServices' | 'createCampaign' | 'manageCampaign' | 'contributors' | 'contributorDetail' | 'campaignSchedule' | 'campaignsHistory' | 'contribute' | 'individualCampaign' | 'groupCampaign' | 'managingCampaigns' | 'helpSupport' | 'saveDraft' | 'selectServices' | 'signup' | 'vendorSignup' | 'otpVerification' | 'signupSuccess' | 'login' | 'forgotPassword' | 'createNewPassword' | 'selectUserType' | 'vendorDashboard' | 'corporateDashboard' | 'serviceProviders';

interface ContributePageProps {
  onNavigate: (page: Page) => void;
  onShowNotifications?: () => void;
  hasUnreadNotifications?: boolean;
  onShowCart?: () => void;
  onLogout?: () => void;
}

export function ContributePage({
  onNavigate,
  onShowNotifications,
  hasUnreadNotifications,
  onShowCart,
  onLogout
}: ContributePageProps) {
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'ewallet' | 'debit' | 'eft'>('debit');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);
  const [paymentType, setPaymentType] = useState<'once' | 'recurring'>('once');
  const [cardHolderName, setCardHolderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [saveCard, setSaveCard] = useState(false);

  const campaignData = {
    name: 'Gold Reef City Weekend',
    goal: 10000,
    contributed: 3000,
    image: imgCampaign
  };

  const progress = Math.round((campaignData.contributed / campaignData.goal) * 100);

  const quickAmounts = [
    { label: 'R100', value: 100 },
    { label: 'R500', value: 500 },
    { label: 'R1000', value: 1000 },
    { label: 'Custom', value: null }
  ];

  const handleQuickAmount = (value: number | null) => {
    if (value === null) {
      setAmount('');
    } else {
      setAmount(value.toString());
    }
  };

  const handleConfirmContribute = () => {
    if (!amount || !agreedToTerms) return;
    
    if (paymentMethod === 'debit') {
      setShowPaymentDialog(true);
    } else {
      console.log('Contributing:', amount, 'via', paymentMethod);
      // Handle other payment methods
    }
  };

  const handleAddCard = () => {
    console.log('Adding card:', { cardHolderName, cardNumber, expiryDate, cvv, saveCard, paymentType });
    setShowPaymentDialog(false);
    // Process contribution
  };

  return (
    <div className="flex min-h-screen bg-[#f9fafb]">
      <UserSidebar
        activePage="campaigns"
        onNavigate={onNavigate}
        onLogout={onLogout}
      />

      <div className="flex-1 flex flex-col">
        {/* Main Content */}
        <div className="flex-1 overflow-y-auto bg-[#f9fafb] p-6">
          <div className="max-w-[700px] mx-auto">
            {/* Header */}
            <h1 className="font-['Inter',sans-serif] text-[20px] font-medium text-black mb-6">Contribute</h1>

            <div className="bg-white rounded-lg border border-[#e5e7eb] overflow-hidden">
              {/* Campaign Image */}
              <div className="relative h-[200px] overflow-hidden">
                <img
                  src={campaignData.image}
                  alt={campaignData.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Campaign Name */}
                <h2 className="font-['Inter',sans-serif] text-[18px] font-medium text-black mb-4">{campaignData.name}</h2>

                {/* Progress Section */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#10b981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <circle cx="12" cy="12" r="10" strokeWidth="2" />
                      </svg>
                      <span className="font-['Inter',sans-serif] text-[12px] text-[#6b7280]">
                        Goal <span className="text-black font-medium">R{campaignData.goal.toLocaleString()}</span>
                      </span>
                    </div>
                    <span className="font-['Inter',sans-serif] text-[12px] text-[#6b7280]">
                      Contributed <span className="text-black font-medium">R{campaignData.contributed.toLocaleString()}</span>
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="relative">
                    <div className="w-full bg-[#e5e7eb] h-2 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#10b981] rounded-full transition-all duration-500"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                    <span 
                      className="absolute -top-1 font-['Inter',sans-serif] text-[11px] font-medium text-[#1f2937]"
                      style={{ right: `${Math.max(100 - progress - 5, 0)}%` }}
                    >
                      {progress}%
                    </span>
                  </div>
                </div>

                {/* Enter Amount */}
                <div className="mb-4">
                  <label className="block font-['Inter',sans-serif] text-[14px] font-medium text-black mb-2">
                    Enter Amount (ZAR)
                  </label>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-[#d1d5db] rounded-md font-['Inter',sans-serif] text-[14px] text-[#1f2937] placeholder:text-[#9ca3af] outline-none focus:border-[#8363f2] transition-colors"
                    placeholder="0.00"
                  />
                </div>

                {/* Quick Amount Buttons */}
                <div className="grid grid-cols-4 gap-3 mb-6">
                  {quickAmounts.map((qa) => (
                    <button
                      key={qa.label}
                      onClick={() => handleQuickAmount(qa.value)}
                      className={`px-4 py-2 rounded-md font-['Inter',sans-serif] text-[14px] transition-colors ${
                        (qa.value === null && amount === '') || amount === qa.value?.toString()
                          ? 'bg-[#8363f2] text-white'
                          : 'bg-white border border-[#d1d5db] text-[#374151] hover:bg-[#f9fafb]'
                      }`}
                    >
                      {qa.label}
                    </button>
                  ))}
                </div>

                {/* Payment Methods */}
                <div className="mb-6">
                  <label className="block font-['Inter',sans-serif] text-[14px] font-medium text-black mb-3">
                    Payment Methods
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="payment"
                        value="ewallet"
                        checked={paymentMethod === 'ewallet'}
                        onChange={(e) => setPaymentMethod(e.target.value as any)}
                        className="w-4 h-4 text-[#8363f2] border-[#d1d5db] focus:ring-[#8363f2]"
                      />
                      <span className="font-['Inter',sans-serif] text-[14px] text-[#374151]">Ewallent Balance</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="payment"
                        value="debit"
                        checked={paymentMethod === 'debit'}
                        onChange={(e) => setPaymentMethod(e.target.value as any)}
                        className="w-4 h-4 text-[#8363f2] border-[#d1d5db] focus:ring-[#8363f2]"
                      />
                      <span className="font-['Inter',sans-serif] text-[14px] text-[#374151]">Debit Card</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="payment"
                        value="eft"
                        checked={paymentMethod === 'eft'}
                        onChange={(e) => setPaymentMethod(e.target.value as any)}
                        className="w-4 h-4 text-[#8363f2] border-[#d1d5db] focus:ring-[#8363f2]"
                      />
                      <span className="font-['Inter',sans-serif] text-[14px] text-[#374151]">EFT</span>
                    </label>
                  </div>
                </div>

                {/* Terms & Conditions */}
                <div className="mb-6">
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={agreedToTerms}
                      onChange={(e) => setAgreedToTerms(e.target.checked)}
                      className="w-4 h-4 mt-0.5 text-[#8363f2] border-[#d1d5db] rounded focus:ring-[#8363f2]"
                    />
                    <span className="font-['Inter',sans-serif] text-[12px] text-[#6b7280]">
                      I agree to campaign{' '}
                      <a href="#" className="text-[#8363f2] hover:underline">
                        terms & Conditions
                      </a>
                    </span>
                  </label>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-end gap-3">
                  <button
                    onClick={() => onNavigate('campaigns')}
                    className="px-6 py-2 border border-[#d1d5db] bg-white rounded-md font-['Inter',sans-serif] text-[14px] text-[#374151] hover:bg-[#f9fafb] transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleConfirmContribute}
                    disabled={!amount || !agreedToTerms}
                    className={`px-6 py-2 rounded-md font-['Inter',sans-serif] text-[14px] transition-colors ${
                      amount && agreedToTerms
                        ? 'bg-[#8363f2] text-white hover:bg-[#7354e1]'
                        : 'bg-[#e5e7eb] text-[#9ca3af] cursor-not-allowed'
                    }`}
                  >
                    Confirm Contribute
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Dialog */}
      {showPaymentDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-[460px] shadow-xl">
            {/* Header */}
            <h2 className="font-['Inter',sans-serif] text-[18px] font-medium text-black mb-6">Add a new payment</h2>

            {/* Debit Card with Visa Logo */}
            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="cardType"
                  checked={true}
                  readOnly
                  className="w-5 h-5 text-[#8363f2] border-[#d1d5db] focus:ring-[#8363f2]"
                />
                <span className="font-['Inter',sans-serif] text-[16px] text-black">Debit Card</span>
              </label>
              <div className="font-['Inter',sans-serif] text-[18px] font-bold text-[#1a1f71]">VISA</div>
            </div>

            {/* Once Off / Recurring */}
            <div className="flex items-center gap-6 mb-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="paymentFrequency"
                  value="once"
                  checked={paymentType === 'once'}
                  onChange={(e) => setPaymentType('once')}
                  className="w-4 h-4 text-[#8363f2] border-[#d1d5db] focus:ring-[#8363f2]"
                />
                <span className="font-['Inter',sans-serif] text-[14px] text-[#374151]">Once Off</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="paymentFrequency"
                  value="recurring"
                  checked={paymentType === 'recurring'}
                  onChange={(e) => setPaymentType('recurring')}
                  className="w-4 h-4 text-[#8363f2] border-[#d1d5db] focus:ring-[#8363f2]"
                />
                <span className="font-['Inter',sans-serif] text-[14px] text-[#374151]">Recurring</span>
              </label>
            </div>

            {/* Card holder name */}
            <div className="mb-4">
              <label className="block font-['Inter',sans-serif] text-[14px] font-medium text-black mb-2">
                Card holder name
              </label>
              <input
                type="text"
                value={cardHolderName}
                onChange={(e) => setCardHolderName(e.target.value)}
                className="w-full px-4 py-2.5 bg-white border border-[#d1d5db] rounded-md font-['Inter',sans-serif] text-[14px] text-[#1f2937] placeholder:text-[#9ca3af] outline-none focus:border-[#8363f2] transition-colors"
                placeholder="Enter name here"
              />
            </div>

            {/* Card number */}
            <div className="mb-4">
              <label className="block font-['Inter',sans-serif] text-[14px] font-medium text-black mb-2">
                Card number
              </label>
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className="w-full px-4 py-2.5 bg-white border border-[#d1d5db] rounded-md font-['Inter',sans-serif] text-[14px] text-[#1f2937] placeholder:text-[#9ca3af] outline-none focus:border-[#8363f2] transition-colors"
                placeholder="0000 0000 0000 0000"
              />
            </div>

            {/* Expiry Date and CVV */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block font-['Inter',sans-serif] text-[14px] font-medium text-black mb-2">
                  Expiry Date
                </label>
                <input
                  type="text"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  className="w-full px-4 py-2.5 bg-white border border-[#d1d5db] rounded-md font-['Inter',sans-serif] text-[14px] text-[#1f2937] placeholder:text-[#9ca3af] outline-none focus:border-[#8363f2] transition-colors"
                  placeholder=""
                />
              </div>
              <div>
                <label className="block font-['Inter',sans-serif] text-[14px] font-medium text-black mb-2">
                  Cvv
                </label>
                <input
                  type="text"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  className="w-full px-4 py-2.5 bg-white border border-[#d1d5db] rounded-md font-['Inter',sans-serif] text-[14px] text-[#1f2937] placeholder:text-[#9ca3af] outline-none focus:border-[#8363f2] transition-colors"
                  placeholder=""
                />
              </div>
            </div>

            {/* Save card checkbox */}
            <div className="mb-6">
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={saveCard}
                  onChange={(e) => setSaveCard(e.target.checked)}
                  className="w-4 h-4 mt-0.5 text-[#8363f2] border-[#d1d5db] rounded focus:ring-[#8363f2]"
                />
                <span className="font-['Inter',sans-serif] text-[13px] text-[#6b7280]">
                  Save card securely for future Paymets
                </span>
              </label>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setShowPaymentDialog(false)}
                className="px-6 py-2.5 border border-[#d1d5db] bg-white rounded-md font-['Inter',sans-serif] text-[14px] text-[#374151] hover:bg-[#f9fafb] transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleAddCard}
                className="px-6 py-2.5 rounded-md font-['Inter',sans-serif] text-[14px] font-medium transition-colors bg-[#8363f2] text-white hover:bg-[#7354e1]"
              >
                Add Card
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}