import { useState, useEffect, useMemo } from 'react';
import { UserSidebar } from '../../components/layout/UserSidebar';
import svgPaths from '../../../imports/svg-c93d13tepm';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '../../../components/ui/dialog';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { Edit2, Upload, X, Eye, EyeOff } from 'lucide-react';
import { toast } from 'sonner';
import Cropper from 'react-easy-crop';
import { Point, Area } from 'react-easy-crop';

// Default images
const defaultCoverPhoto = 'https://images.unsplash.com/photo-1596549969402-30040dc1d4b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHByb2Zlc3Npb25hbCUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzY1Nzk0Nzg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';
const defaultProfilePhoto = 'https://images.unsplash.com/photo-1595436222774-4b1cd819aada?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwZXJzb24lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjU3NDQ5MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';

type Page = 'dashboard' | 'campaigns' | 'vouchers' | 'transactions' | 'profile' | 'overview' | 'draft' | 'howItWorks' | 'campaignDetail' | 'messaging' | 'serviceDetail' | 'selectedServices' | 'createCampaign' | 'manageCampaign' | 'contributors' | 'contributorDetail' | 'campaignSchedule' | 'campaignsHistory' | 'contribute' | 'individualCampaign' | 'groupCampaign' | 'managingCampaigns' | 'helpSupport' | 'saveDraft' | 'selectServices' | 'signup' | 'vendorSignup' | 'otpVerification' | 'signupSuccess' | 'login' | 'forgotPassword' | 'createNewPassword' | 'selectUserType' | 'vendorDashboard' | 'corporateDashboard' | 'serviceProviders';

interface ProfilePageProps {
  className?: string;
  onNavigate: (page: Page) => void;
  onLogout?: () => void;
  onShowNotifications?: () => void;
  hasUnreadNotifications?: boolean;
  onShowCart?: () => void;
}

interface PersonalInfo {
  fullNames: string;
  surname: string;
  email: string;
  phoneNumber: string;
  address: string;
}

interface SecurityInfo {
  password: string;
  twoFactorAuth: boolean;
  recoveryEmail: string;
}

interface BillingDetails {
  cardholderName: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}

export function ProfilePage({ className, onNavigate, onLogout, onShowNotifications, hasUnreadNotifications, onShowCart }: ProfilePageProps) {
  const [showEditPersonalInfo, setShowEditPersonalInfo] = useState(false);
  const [showEditSecurity, setShowEditSecurity] = useState(false);
  const [showUploadPhoto, setShowUploadPhoto] = useState(false);
  const [showBankDetails, setShowBankDetails] = useState(false);
  const [profilePhotoKey, setProfilePhotoKey] = useState(Date.now());
  const [currentPhoto, setCurrentPhoto] = useState<string>(defaultProfilePhoto);
  
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    fullNames: 'Vukona revalation',
    surname: 'hlayisi',
    email: 'Vukonahlayisi@gmail.com',
    phoneNumber: '+27 123 456 789',
    address: '123 Main St, Cape Town'
  });

  const [securityInfo, setSecurityInfo] = useState<SecurityInfo>({
    password: '**********',
    twoFactorAuth: false,
    recoveryEmail: 'Vukonahlayisi@gmail.com'
  });

  const [billingDetails, setBillingDetails] = useState<BillingDetails | null>(null);

  const [editPersonalInfo, setEditPersonalInfo] = useState<PersonalInfo>(personalInfo);
  const [editSecurityInfo, setEditSecurityInfo] = useState<SecurityInfo>(securityInfo);
  const [editBankDetails, setEditBankDetails] = useState<BillingDetails>({
    cardholderName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });
  
  const [photoPreview, setPhotoPreview] = useState('');
  const [croppedImage, setCroppedImage] = useState('');
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  // Calculate profile completion
  const profileCompletion = useMemo(() => {
    let setupAccount = personalInfo.email ? 34 : 0;
    let uploadPhoto = currentPhoto !== defaultProfilePhoto ? 5 : 0;
    let personalInformation = 0;
    if (personalInfo.fullNames) personalInformation += 15;
    if (personalInfo.surname) personalInformation += 15;
    if (personalInfo.email) personalInformation += 14;
    if (personalInfo.phoneNumber) personalInformation += 15;
    if (personalInfo.address) personalInformation += 15;
    let bankDetailsPercent = billingDetails ? 100 : 0;
    
    let total = Math.round((setupAccount + uploadPhoto + personalInformation + bankDetailsPercent) / 4);
    
    return {
      setupAccount: { percentage: setupAccount, completed: setupAccount === 34 },
      uploadPhoto: { percentage: uploadPhoto, completed: uploadPhoto === 5 },
      personalInformation: { percentage: personalInformation, completed: personalInformation === 74 },
      bankDetails: { percentage: bankDetailsPercent, completed: bankDetailsPercent === 100 },
      total
    };
  }, [personalInfo, currentPhoto, billingDetails]);

  const handleSavePersonalInfo = () => {
    setPersonalInfo(editPersonalInfo);
    toast.success('Personal information updated successfully');
    setShowEditPersonalInfo(false);
  };

  const handleSaveSecurity = () => {
    setSecurityInfo(editSecurityInfo);
    toast.success('Security settings updated successfully');
    setShowEditSecurity(false);
  };

  const handlePhotoFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setPhotoPreview(result);
        setCroppedImage('');
      };
      reader.readAsDataURL(file);
    }
  };

  const onCropComplete = (croppedArea: Area, croppedAreaPixels: Area) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const createCroppedImage = async () => {
    if (!photoPreview || !croppedAreaPixels) return;

    const image = new Image();
    image.src = photoPreview;
    
    return new Promise<string>((resolve) => {
      image.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        if (!ctx) return;

        canvas.width = croppedAreaPixels.width;
        canvas.height = croppedAreaPixels.height;

        ctx.drawImage(
          image,
          croppedAreaPixels.x,
          croppedAreaPixels.y,
          croppedAreaPixels.width,
          croppedAreaPixels.height,
          0,
          0,
          croppedAreaPixels.width,
          croppedAreaPixels.height
        );

        canvas.toBlob((blob) => {
          if (blob) {
            const reader = new FileReader();
            reader.onloadend = () => {
              resolve(reader.result as string);
            };
            reader.readAsDataURL(blob);
          }
        }, 'image/jpeg', 0.95);
      };
    });
  };

  const handleApplyCrop = async () => {
    const cropped = await createCroppedImage();
    if (cropped) {
      setCroppedImage(cropped);
    } else {
      toast.error('Failed to crop image');
    }
  };

  const handleSavePhoto = () => {
    const finalPhotoUrl = croppedImage || photoPreview;
    
    if (finalPhotoUrl) {
      setCurrentPhoto(finalPhotoUrl);
      toast.success('Profile photo updated successfully');
      setProfilePhotoKey(Date.now());
      setShowUploadPhoto(false);
      setPhotoPreview('');
      setCroppedImage('');
      setCrop({ x: 0, y: 0 });
      setZoom(1);
      setCroppedAreaPixels(null);
    } else {
      toast.error('Please select a photo first');
    }
  };

  const handleCancelPhotoUpload = () => {
    setShowUploadPhoto(false);
    setPhotoPreview('');
    setCroppedImage('');
    setCrop({ x: 0, y: 0 });
    setZoom(1);
  };

  const handleSaveBankDetails = () => {
    setBillingDetails(editBankDetails);
    toast.success('Billing details updated successfully');
    setShowBankDetails(false);
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <UserSidebar activePage="profile" onNavigate={onNavigate} onLogout={onLogout} onShowNotifications={onShowNotifications} hasUnreadNotifications={hasUnreadNotifications} onShowCart={onShowCart} />

      {/* Main Content */}
      <div className="flex-1 bg-[#f5f5f5] overflow-auto">
        {/* Cover Image Section */}
        <div className="relative">
          <div className="h-[180px] bg-gray-200 relative overflow-hidden">
            <img 
              src={defaultCoverPhoto} 
              alt="Cover" 
              className="w-full h-full object-cover"
            />
            {/* Edit Cover Button */}
            <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50">
              <Edit2 className="w-4 h-4 text-[#8363f2]" />
            </button>
          </div>

          {/* Profile Picture */}
          <div className="absolute left-6 -bottom-12 w-24 h-24 rounded-full border-4 border-white overflow-hidden bg-white shadow-lg">
            <img 
              key={profilePhotoKey} 
              src={currentPhoto} 
              alt="Profile" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = defaultProfilePhoto;
              }}
            />
            {/* Edit Profile Photo Button */}
            <button 
              onClick={() => setShowUploadPhoto(true)}
              className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-40 flex items-center justify-center transition-all duration-200 group"
            >
              <Edit2 className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>
        </div>

        {/* Profile Content */}
        <div className="pt-16 px-6 max-w-[900px]">
          {/* User Name and Badge */}
          <div className="flex items-center gap-3 mb-6">
            <h1 className="font-['Inter',sans-serif] text-[20px] font-medium text-black">
              {personalInfo.fullNames} {personalInfo.surname}
            </h1>
            <button 
              onClick={() => setShowEditPersonalInfo(true)}
              className="text-[#8363f2] hover:underline flex items-center gap-1 text-[13px]"
            >
              <Edit2 className="w-3 h-3" />
              <span>Edit</span>
            </button>
            {profileCompletion.total === 100 && (
              <span className="px-3 py-1 bg-[#8363f2] text-white text-[12px] rounded-full">
                100%
              </span>
            )}
          </div>

          {/* Personal Information Section */}
          <div className="bg-white rounded-lg shadow-sm p-5 mb-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-['Inter',sans-serif] text-[16px] font-medium text-black">Personal Information</h2>
              <button 
                onClick={() => {
                  setEditPersonalInfo(personalInfo);
                  setShowEditPersonalInfo(true);
                }}
                className="text-[#8363f2] hover:underline text-[13px] flex items-center gap-1"
              >
                <Edit2 className="w-3 h-3" />
                <span>Edit</span>
              </button>
            </div>
            
            <div className="space-y-3 text-[13px]">
              <div className="flex">
                <div className="text-gray-500 w-32">Full names</div>
                <div className="text-black">{personalInfo.fullNames || 'Not set'}</div>
              </div>
              <div className="flex">
                <div className="text-gray-500 w-32">Surname</div>
                <div className="text-black">{personalInfo.surname || 'Not set'}</div>
              </div>
              <div className="flex">
                <div className="text-gray-500 w-32">Email</div>
                <div className="text-black">{personalInfo.email || 'Not set'}</div>
              </div>
              <div className="flex">
                <div className="text-gray-500 w-32">Phone number</div>
                <div className="text-black">{personalInfo.phoneNumber || 'Not set'}</div>
              </div>
              <div className="flex">
                <div className="text-gray-500 w-32">Address</div>
                <div className="text-black">{personalInfo.address || 'Not set'}</div>
              </div>
            </div>
          </div>

          {/* Security Section */}
          <div className="bg-white rounded-lg shadow-sm p-5 mb-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-['Inter',sans-serif] text-[16px] font-medium text-black">Security</h2>
              <button
                onClick={() => {
                  setEditSecurityInfo(securityInfo);
                  setShowEditSecurity(true);
                }}
                className="text-[#8363f2] hover:underline text-[13px] flex items-center gap-1"
              >
                <Edit2 className="w-3 h-3" />
                <span>Edit</span>
              </button>
            </div>
            
            <div className="space-y-3 text-[13px]">
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Password</span>
                <span className="text-gray-800">••••••••••</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Two-Factor Authentication</span>
                <span className="text-gray-800">{securityInfo.twoFactorAuth ? 'ON' : 'OFF'}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Recovery Email</span>
                <span className="text-gray-800">{securityInfo.recoveryEmail}</span>
              </div>
            </div>
          </div>

          {/* Complete Your Profile Section */}
          <div className="bg-white rounded-lg shadow-sm p-5">
            <h2 className="font-['Inter',sans-serif] text-[16px] font-medium text-black mb-4">Complete Your Profile</h2>
            
            <div className="flex items-start justify-between">
              <div className="space-y-3 flex-1">
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 21 15" fill="none">
                    <path 
                      fillRule="evenodd" 
                      clipRule="evenodd" 
                      d="M7.5 11.5L2 6L0.5 7.5L7.5 14.5L20.5 1.5L19 0L7.5 11.5Z" 
                      fill={profileCompletion.setupAccount.completed ? "#14AE5C" : "#D1D5DB"} 
                    />
                  </svg>
                  <span className="text-[13px] text-gray-800">Setup Account <span className="text-gray-400">{profileCompletion.setupAccount.percentage}%</span></span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 21 15" fill="none">
                    <path 
                      fillRule="evenodd" 
                      clipRule="evenodd" 
                      d="M7.5 11.5L2 6L0.5 7.5L7.5 14.5L20.5 1.5L19 0L7.5 11.5Z" 
                      fill={profileCompletion.uploadPhoto.completed ? "#14AE5C" : "#D1D5DB"} 
                    />
                  </svg>
                  <span className="text-[13px] text-gray-800">Upload your photo <span className="text-gray-400">{profileCompletion.uploadPhoto.percentage}%</span></span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 21 15" fill="none">
                    <path 
                      fillRule="evenodd" 
                      clipRule="evenodd" 
                      d="M7.5 11.5L2 6L0.5 7.5L7.5 14.5L20.5 1.5L19 0L7.5 11.5Z" 
                      fill={profileCompletion.personalInformation.completed ? "#14AE5C" : "#D1D5DB"} 
                    />
                  </svg>
                  <span className="text-[13px] text-gray-800">Personal information <span className="text-gray-400">{profileCompletion.personalInformation.percentage}%</span></span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 21 15" fill="none">
                    <path 
                      fillRule="evenodd" 
                      clipRule="evenodd" 
                      d="M7.5 11.5L2 6L0.5 7.5L7.5 14.5L20.5 1.5L19 0L7.5 11.5Z" 
                      fill={profileCompletion.bankDetails.completed ? "#14AE5C" : "#D1D5DB"} 
                    />
                  </svg>
                  <span className="text-[13px] text-gray-800">Bank Details <span className="text-gray-400">{profileCompletion.bankDetails.percentage}%</span></span>
                </div>
              </div>

              {/* Progress Circle */}
              <div className="relative w-[100px] h-[100px] flex-shrink-0 ml-8">
                {/* Background Circle */}
                <svg className="absolute inset-0 -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#e5e5e5"
                    strokeWidth="8"
                  />
                </svg>
                {/* Progress Circle */}
                <svg className="absolute inset-0 -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#8363f2"
                    strokeWidth="8"
                    strokeDasharray={`${(profileCompletion.total / 100) * 251.2} 251.2`}
                    strokeLinecap="round"
                  />
                </svg>
                {/* Percentage Text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-['Inter',sans-serif] text-[24px] font-semibold text-black">{profileCompletion.total}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Personal Information Dialog */}
      <Dialog open={showEditPersonalInfo} onOpenChange={setShowEditPersonalInfo}>
        <DialogContent className="max-w-[600px]">
          <DialogTitle>Edit Personal Information</DialogTitle>
          <DialogDescription>Update your personal details below</DialogDescription>
          
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="fullNames">Full Names</Label>
              <Input
                id="fullNames"
                value={editPersonalInfo.fullNames}
                onChange={(e) => setEditPersonalInfo({ ...editPersonalInfo, fullNames: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="surname">Surname</Label>
              <Input
                id="surname"
                value={editPersonalInfo.surname}
                onChange={(e) => setEditPersonalInfo({ ...editPersonalInfo, surname: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={editPersonalInfo.email}
                onChange={(e) => setEditPersonalInfo({ ...editPersonalInfo, email: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                id="phoneNumber"
                value={editPersonalInfo.phoneNumber}
                onChange={(e) => setEditPersonalInfo({ ...editPersonalInfo, phoneNumber: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                value={editPersonalInfo.address}
                onChange={(e) => setEditPersonalInfo({ ...editPersonalInfo, address: e.target.value })}
              />
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <button
              onClick={() => setShowEditPersonalInfo(false)}
              className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={handleSavePersonalInfo}
              className="px-6 py-2 bg-[#8363f2] text-white rounded-lg hover:bg-[#7050e0]"
            >
              Save Changes
            </button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Edit Security Dialog */}
      <Dialog open={showEditSecurity} onOpenChange={setShowEditSecurity}>
        <DialogContent className="max-w-[600px]">
          <DialogTitle>Edit Security Settings</DialogTitle>
          <DialogDescription>Update your security preferences below</DialogDescription>
          
          <div className="space-y-6 py-4">
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={editSecurityInfo.password}
                  onChange={(e) => setEditSecurityInfo({ ...editSecurityInfo, password: e.target.value })}
                  className="pr-10"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4 text-gray-500" />
                  ) : (
                    <Eye className="w-4 h-4 text-gray-500" />
                  )}
                </button>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Two-Factor Authentication</Label>
              <p className="text-sm text-gray-500 mb-3">Add an extra layer of security to your account</p>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setEditSecurityInfo({ ...editSecurityInfo, twoFactorAuth: true })}
                  className={`flex-1 px-4 py-2 rounded-lg border transition-colors ${
                    editSecurityInfo.twoFactorAuth
                      ? 'bg-[#8363f2] text-white border-[#8363f2]'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  On
                </button>
                <button
                  type="button"
                  onClick={() => setEditSecurityInfo({ ...editSecurityInfo, twoFactorAuth: false })}
                  className={`flex-1 px-4 py-2 rounded-lg border transition-colors ${
                    !editSecurityInfo.twoFactorAuth
                      ? 'bg-[#8363f2] text-white border-[#8363f2]'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  Off
                </button>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="recoveryEmail">Recovery Email</Label>
              <Input
                id="recoveryEmail"
                type="email"
                value={editSecurityInfo.recoveryEmail}
                onChange={(e) => setEditSecurityInfo({ ...editSecurityInfo, recoveryEmail: e.target.value })}
              />
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <button
              onClick={() => setShowEditSecurity(false)}
              className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={handleSaveSecurity}
              className="px-6 py-2 bg-[#8363f2] text-white rounded-lg hover:bg-[#7050e0]"
            >
              Save Changes
            </button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Upload Photo Dialog */}
      <Dialog open={showUploadPhoto} onOpenChange={setShowUploadPhoto}>
        <DialogContent className="max-w-[700px]">
          <DialogTitle>Upload Profile Photo</DialogTitle>
          <DialogDescription>Choose a photo and adjust the crop area</DialogDescription>
          
          <div className="space-y-6 py-4">
            {/* File Upload Button */}
            {!photoPreview && (
              <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-12 hover:border-[#8363f2] transition-colors">
                <Upload className="w-12 h-12 text-gray-400 mb-4" />
                <label htmlFor="photoFile" className="cursor-pointer">
                  <span className="px-6 py-3 bg-[#8363f2] text-white rounded-lg hover:bg-[#7050e0] inline-block">
                    Choose Photo
                  </span>
                  <input
                    id="photoFile"
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoFileChange}
                    className="hidden"
                  />
                </label>
                <p className="text-sm text-gray-500 mt-3">PNG, JPG, GIF up to 10MB</p>
              </div>
            )}
            
            {/* Crop Area */}
            {photoPreview && !croppedImage && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Adjust Crop Area</Label>
                  <button
                    onClick={() => {
                      setPhotoPreview('');
                      setCrop({ x: 0, y: 0 });
                      setZoom(1);
                    }}
                    className="text-sm text-red-600 hover:text-red-700 flex items-center gap-1"
                  >
                    <X className="w-4 h-4" />
                    Remove
                  </button>
                </div>
                <div className="relative w-full h-[400px] bg-gray-900 rounded-lg overflow-hidden">
                  <Cropper
                    image={photoPreview}
                    crop={crop}
                    zoom={zoom}
                    aspect={1}
                    cropShape="round"
                    showGrid={false}
                    onCropChange={setCrop}
                    onZoomChange={setZoom}
                    onCropComplete={onCropComplete}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zoom">Zoom</Label>
                  <input
                    id="zoom"
                    type="range"
                    min="1"
                    max="3"
                    step="0.1"
                    value={zoom}
                    onChange={(e) => setZoom(Number(e.target.value))}
                    className="w-full"
                  />
                </div>
                <button
                  onClick={handleApplyCrop}
                  className="w-full px-6 py-3 bg-[#8363f2] text-white rounded-lg hover:bg-[#7050e0]"
                >
                  Apply Crop
                </button>
              </div>
            )}

            {/* Cropped Preview */}
            {croppedImage && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Cropped Photo Preview</Label>
                  <button
                    onClick={() => {
                      setCroppedImage('');
                    }}
                    className="text-sm text-[#8363f2] hover:underline"
                  >
                    Adjust Crop
                  </button>
                </div>
                <div className="flex justify-center">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-200">
                    <img 
                      src={croppedImage} 
                      alt="Cropped Preview" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-end gap-3">
            <button
              onClick={handleCancelPhotoUpload}
              className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={handleSavePhoto}
              disabled={!croppedImage}
              className="px-6 py-2 bg-[#8363f2] text-white rounded-lg hover:bg-[#7050e0] disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Save Photo
            </button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Edit Bank Details Dialog */}
      <Dialog open={showBankDetails} onOpenChange={setShowBankDetails}>
        <DialogContent className="max-w-[600px]">
          <DialogTitle>Edit Billing Details</DialogTitle>
          <DialogDescription>Add or update your payment card information</DialogDescription>
          
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="cardholderName">Cardholder Name</Label>
              <Input
                id="cardholderName"
                placeholder="John Doe"
                value={editBankDetails.cardholderName}
                onChange={(e) => setEditBankDetails({ ...editBankDetails, cardholderName: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cardNumber">Card Number</Label>
              <Input
                id="cardNumber"
                placeholder="1234 5678 9012 3456"
                maxLength={19}
                value={editBankDetails.cardNumber}
                onChange={(e) => {
                  const value = e.target.value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
                  setEditBankDetails({ ...editBankDetails, cardNumber: value });
                }}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expiryDate">Expiry Date</Label>
                <Input
                  id="expiryDate"
                  placeholder="MM/YY"
                  maxLength={5}
                  value={editBankDetails.expiryDate}
                  onChange={(e) => {
                    let value = e.target.value.replace(/\D/g, '');
                    if (value.length >= 2) {
                      value = value.slice(0, 2) + '/' + value.slice(2, 4);
                    }
                    setEditBankDetails({ ...editBankDetails, expiryDate: value });
                  }}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvv">CVV</Label>
                <Input
                  id="cvv"
                  type="password"
                  placeholder="123"
                  maxLength={3}
                  value={editBankDetails.cvv}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, '');
                    setEditBankDetails({ ...editBankDetails, cvv: value });
                  }}
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <button
              onClick={() => setShowBankDetails(false)}
              className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={handleSaveBankDetails}
              className="px-6 py-2 bg-[#8363f2] text-white rounded-lg hover:bg-[#7050e0]"
            >
              Save Changes
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}