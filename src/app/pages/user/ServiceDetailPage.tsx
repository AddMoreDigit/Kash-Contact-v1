import { useState, useEffect } from 'react';
//import { Star } from 'lucide-react';
import { UserSidebar } from '../../components/layout/UserSidebar';
import { RoomBookingDialog } from '../../components/dialogs/RoomBookingDialog';
import { CartDialog } from '../../components/dialogs/CartDialog';
import { toast } from 'sonner';
import svgPaths from '../../../imports/svg-ogzm8o1tic';
//import imgRectangle115 from 'figma:asset/0e961f9582aec77a34bf07fab9ef41a1b7c868ad.png';
//import imgRectangle148 from 'figma:asset/2d90d1ffe99df5817a38c395c08ec5116a7be340.png';
//import imgRectangle150 from 'figma:asset/50b9941bb18b04433a8da878785acb0358877f72.png';
import type { Page } from '../../types/navigation';
//type Page = 'dashboard' | 'campaigns' | 'vouchers' | 'transactions' | 'profile' | 'overview' | 'draft' | 'howItWorks' | 'campaignDetail' | 'viewCampaign' | 'messaging' | 'serviceDetail' | 'selectedServices' | 'createCampaign' | 'manageCampaign' | 'contributors' | 'contributorDetail' | 'campaignSchedule' | 'campaignsHistory' | 'contribute' | 'selectServices' | 'viewCampaignDetail' | 'helpSupport';

interface ServiceProvider {
  id: number;
  name: string;
  location: string;
  category: string;
  image: string;
}

interface ServiceDetailPageProps {
  onNavigate: (page: Page) => void;
  onShowSelectCampaign?: () => void;
  service?: ServiceProvider | null;
  cartItems?: BookedItem[];
  onUpdateCart?: (items: BookedItem[]) => void;
  onShowNotifications?: () => void;
  hasUnreadNotifications?: boolean;
  onShowCart?: () => void;
  onLogout?: () => void;
}

interface Room {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

interface ServiceItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

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

export function ServiceDetailPage({ 
  onNavigate, 
  onShowSelectCampaign, 
  service, 
  cartItems = [], 
  onUpdateCart, 
  onShowNotifications, 
  hasUnreadNotifications, 
  onShowCart,
  onLogout
}: ServiceDetailPageProps) {
  const [activeTab, setActiveTab] = useState<'rooms' | 'food' | 'transport' | 'activities' | 'terms'>('rooms');
  const [bookedItems, setBookedItems] = useState<BookedItem[]>(cartItems);
  const [showBookingDialog, setShowBookingDialog] = useState(false);
  const [showCartDialog, setShowCartDialog] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  // Use service data or default values
  const serviceName = service?.name || 'Cape Town Gateway Weekend';
  const serviceLocation = service?.location || 'Cape Town';
  const serviceCategory = service?.category || 'Accommodation';
  const serviceImage = service?.image || '/assets/0e961f9582aec77a34bf07fab9ef41a1b7c868ad.png';

  const rooms: Room[] = [
    {
      id: 1,
      name: 'Standard Room',
      description: 'Spacious Double room\nwith garden view',
      price: 'R1 500',
      image: '/assets/2d90d1ffe99df5817a38c395c08ec5116a7be340.png',
    },
    {
      id: 2,
      name: 'Deluxe Room',
      description: 'Spacious Double room\nwith garden view',
      price: 'R2 500',
      image: '/assets/50b9941bb18b04433a8da878785acb0358877f72.png',
    },
  ];

  const handleBookRoom = (room: Room) => {
    setSelectedRoom(room);
    setShowBookingDialog(true);
  };

  const handleBookingComplete = (checkIn?: string, checkOut?: string, quantity?: number) => {
    if (selectedRoom && checkIn && checkOut && quantity) {
      // Calculate nights
      const checkInDate = new Date(checkIn);
      const checkOutDate = new Date(checkOut);
      const nights = Math.ceil((checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24));
      
      // Calculate total price
      const pricePerNight = parseFloat(selectedRoom.price.replace('R', '').replace(/\s/g, ''));
      const totalPrice = pricePerNight * nights * quantity;
      
      const newBooking: BookedItem = {
        id: Date.now(),
        type: 'room',
        name: selectedRoom.name,
        price: selectedRoom.price,
        checkIn,
        checkOut,
        provider: serviceName,
        image: selectedRoom.image,
        quantity,
        nights,
        totalPrice,
      };
      
      const updatedItems = [...bookedItems, newBooking];
      setBookedItems(updatedItems);
      if (onUpdateCart) {
        onUpdateCart(updatedItems);
      }
      
      toast.success(`Booked ${quantity} ${selectedRoom.name}${quantity > 1 ? 's' : ''} for ${nights} ${nights === 1 ? 'night' : 'nights'}!`);
      setShowBookingDialog(false);
      setSelectedRoom(null);
    }
  };

  const handleRemoveItem = (itemId: number) => {
    const updatedItems = bookedItems.filter(item => item.id !== itemId);
    setBookedItems(updatedItems);
    if (onUpdateCart) {
      onUpdateCart(updatedItems);
    }
    toast.success('Item removed from cart');
  };

  const handleEditItem = (itemId: number) => {
    const item = bookedItems.find(i => i.id === itemId);
    if (item && item.type === 'room') {
      // Find the room and reopen the booking dialog
      const room = rooms.find(r => r.name === item.name);
      if (room) {
        // Remove the item first
        handleRemoveItem(itemId);
        // Then open the booking dialog
        setSelectedRoom(room);
        setShowBookingDialog(true);
      }
    }
  };

  const handleNavigateToTerms = () => {
    setShowCartDialog(false);
    setActiveTab('terms');
  };

  const handleCreateCampaign = () => {
    setShowCartDialog(false);
    onNavigate('createCampaign');
  };

  const handleViewCart = () => {
    if (bookedItems.length > 0) {
      setShowCartDialog(true);
    } else {
      toast.info('Your cart is empty');
    }
  };

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      {/* Sidebar */}
      <UserSidebar activePage="dashboard" onNavigate={onNavigate} onLogout={onLogout} />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* Header */}
        <div className="px-8 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h1 className="font-['Inter',sans-serif] text-[20px] font-medium text-black tracking-[-0.2px]\">Select Services</h1>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                <path d={svgPaths.p280fe110} fill="#414040" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="px-8 py-6">
          {/* Hero Image */}
          <div className="mb-4 rounded-lg overflow-hidden">
            <img
              src={serviceImage}
              alt={serviceName}
              className="w-full h-[200px] object-cover"
            />
          </div>

          {/* Service Title and Info */}
          <div className="mb-6">
            <div className="flex items-start justify-between mb-1">
              <h2 className="font-['Inter',sans-serif] text-[20px] font-medium text-black tracking-[-0.2px]">{serviceName}</h2>
              <div className="flex items-center gap-0.5">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p1577e200} fill="#FFB62D" />
                </svg>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p1577e200} fill="#FFB62D" />
                </svg>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p1577e200} fill="#FFB62D" />
                </svg>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#E5E7EB" />
                </svg>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#E5E7EB" />
                </svg>
                <span className="ml-1 font-['Inter',sans-serif] text-[12px] text-[#6b7280]">(12 Reviews)</span>
              </div>
            </div>

            <p className="font-['Inter',sans-serif] text-[12px] text-[#6b7280] mb-3">{serviceLocation} | {serviceCategory}</p>
          </div>

          {/* Tab Navigation */}
          <div className="border-b border-gray-200 mb-6">
            <div className="flex items-center gap-6">
              <button
                onClick={() => setActiveTab('rooms')}
                className={`pb-2 relative font-['Inter',sans-serif] text-[14px] transition-colors ${
                  activeTab === 'rooms'
                    ? 'text-[#2d1b69] font-medium'
                    : 'text-[#6b7280]'
                }`}
              >
                Rooms
                {activeTab === 'rooms' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2d1b69]" />
                )}
              </button>
              <button
                onClick={() => setActiveTab('food')}
                className={`pb-2 relative font-['Inter',sans-serif] text-[14px] transition-colors ${
                  activeTab === 'food'
                    ? 'text-[#2d1b69] font-medium'
                    : 'text-[#6b7280]'
                }`}
              >
                Food
                {activeTab === 'food' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2d1b69]" />
                )}
              </button>
              <button
                onClick={() => setActiveTab('transport')}
                className={`pb-2 relative font-['Inter',sans-serif] text-[14px] transition-colors ${
                  activeTab === 'transport'
                    ? 'text-[#2d1b69] font-medium'
                    : 'text-[#6b7280]'
                }`}
              >
                Transport
                {activeTab === 'transport' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2d1b69]" />
                )}
              </button>
              <button
                onClick={() => setActiveTab('activities')}
                className={`pb-2 relative font-['Inter',sans-serif] text-[14px] transition-colors ${
                  activeTab === 'activities'
                    ? 'text-[#2d1b69] font-medium'
                    : 'text-[#6b7280]'
                }`}
              >
                Activities
                {activeTab === 'activities' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2d1b69]" />
                )}
              </button>
              <button
                onClick={() => setActiveTab('terms')}
                className={`pb-2 relative font-['Inter',sans-serif] text-[14px] transition-colors ${
                  activeTab === 'terms'
                    ? 'text-[#2d1b69] font-medium'
                    : 'text-[#6b7280]'
                }`}
              >
                Terms & Conditions
                {activeTab === 'terms' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2d1b69]" />
                )}
              </button>
            </div>
          </div>

          {/* Tab Content - Rooms */}
          {activeTab === 'rooms' && (
            <div className="space-y-4">
              {rooms.map((room) => (
                <div
                  key={room.id}
                  className="bg-white rounded-lg border border-gray-200 overflow-hidden flex"
                >
                  <div className="w-[120px] h-[100px] flex-shrink-0">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 p-3 flex items-center justify-between">
                    <div>
                      <h3 className="font-['Inter',sans-serif] text-[14px] font-semibold text-black mb-1">{room.name}</h3>
                      <p className="font-['Inter',sans-serif] text-[11px] text-[#6b7280] whitespace-pre-line leading-[14px]">
                        {room.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 ml-4">
                      <div>
                        <span className="font-['Inter',sans-serif] text-[12px] text-black">From </span>
                        <span className="font-['Inter',sans-serif] text-[12px] font-semibold text-black">{room.price}</span>
                      </div>
                      <button
                        onClick={() => handleBookRoom(room)}
                        className="bg-[#8363f2] hover:bg-[#7354e1] text-white px-4 py-2 rounded-md font-['Inter',sans-serif] text-[12px] font-medium transition-colors"
                      >
                        Book
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tab Content - Activities */}
          {activeTab === 'activities' && (
            <div className="space-y-4">
              {rooms.map((room) => (
                <div
                  key={room.id}
                  className="bg-white rounded-lg border border-gray-200 overflow-hidden flex"
                >
                  <div className="w-[120px] h-[100px] flex-shrink-0">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 p-3 flex items-center justify-between">
                    <div>
                      <h3 className="font-['Inter',sans-serif] text-[14px] font-semibold text-black mb-1">{room.name}</h3>
                      <p className="font-['Inter',sans-serif] text-[11px] text-[#6b7280] whitespace-pre-line leading-[14px]">
                        {room.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 ml-4">
                      <div>
                        <span className="font-['Inter',sans-serif] text-[12px] text-black">From </span>
                        <span className="font-['Inter',sans-serif] text-[12px] font-semibold text-black">{room.price}</span>
                      </div>
                      <button
                        onClick={() => handleBookRoom(room)}
                        className="bg-[#8363f2] hover:bg-[#7354e1] text-white px-4 py-2 rounded-md font-['Inter',sans-serif] text-[12px] font-medium transition-colors"
                      >
                        Book
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Other tabs - Empty states for now */}
          {activeTab === 'food' && (
            <div className="text-center py-12 text-gray-500">
              <p className="font-['Inter',sans-serif] text-[14px]">No food services available</p>
            </div>
          )}

          {activeTab === 'transport' && (
            <div className="text-center py-12 text-gray-500">
              <p className="font-['Inter',sans-serif] text-[14px]">No transport services available</p>
            </div>
          )}

          {activeTab === 'terms' && (
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <p className="font-['Inter',sans-serif] text-[11px] text-[#374151] leading-[16px]">
                Nestled in the heart of {serviceLocation} with breathtaking views of the ocean and Table Mountain,
                Seaview Lodge offers premium comfort and modern amenities for travelers. Guests can enjoy
                elegantly furnished rooms, private balconies, an outdoor pool, and world-class hospitality.
                Whether you're here for a relaxing getaway or a business trip, Seaview Lodge ensures a memorable
                stay with easy access to the beach, local attractions, and fine dining.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Room Booking Dialog */}
      {selectedRoom && (
        <RoomBookingDialog
          open={showBookingDialog}
          onOpenChange={setShowBookingDialog}
          roomName={selectedRoom.name}
          roomPrice={selectedRoom.price}
          onBookingComplete={handleBookingComplete}
          bookingType="room"
        />
      )}

      {/* Floating Campaigns Button */}
      <div className="fixed bottom-6 right-6">
        <button
          onClick={handleViewCart}
          className="bg-[#8363f2] hover:bg-[#7354e1] text-white shadow-lg rounded-lg px-6 py-3 flex items-center gap-2 relative transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 32 32">
            <path d={svgPaths.p56fa00} fill="white" />
          </svg>
          <span className="font-['Inter',sans-serif] text-[14px] font-medium">Campaigns</span>
          {bookedItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white w-5 h-5 rounded-full flex items-center justify-center font-['Inter',sans-serif] text-[11px]">
              {bookedItems.length}
            </span>
          )}
        </button>
      </div>

      {/* Cart Dialog */}
      <CartDialog
        open={showCartDialog}
        onOpenChange={setShowCartDialog}
        items={bookedItems}
        onRemoveItem={handleRemoveItem}
        onEditItem={handleEditItem}
        onContinue={handleCreateCampaign}
        serviceName={serviceName}
        onNavigateToTerms={handleNavigateToTerms}
      />
    </div>
  );
}