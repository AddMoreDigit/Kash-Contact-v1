import { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus, Minus } from 'lucide-react';
import { toast } from 'sonner';

interface RoomBookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  roomName: string;
  roomPrice: string;
  onBookingComplete: (checkIn?: string, checkOut?: string, quantity?: number) => void;
  bookingType: 'room' | 'food' | 'transport' | 'activity';
}

interface DateInfo {
  date: number;
  status: 'available' | 'booked' | 'reserved' | 'disabled';
}

export function RoomBookingDialog({ open, onOpenChange, roomName, roomPrice, onBookingComplete, bookingType }: RoomBookingDialogProps) {
  const [currentMonth, setCurrentMonth] = useState(2); // March (0-indexed)
  const [currentYear, setCurrentYear] = useState(2025);
  const [checkInDate, setCheckInDate] = useState<number | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<number | null>(null);
  const [step, setStep] = useState<'calendar' | 'confirmation'>('calendar');
  const [quantity, setQuantity] = useState(1);

  if (!open) return null;

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Calendar dates with status - only showing existing bookings
  const calendarDates: DateInfo[] = [
    // Previous month dates (27, 28)
    { date: 27, status: 'disabled' },
    { date: 28, status: 'disabled' },
    // Current month
    { date: 1, status: 'available' },
    { date: 2, status: 'available' },
    { date: 3, status: 'available' },
    { date: 4, status: 'available' },
    { date: 5, status: 'booked' },
    { date: 6, status: 'booked' },
    { date: 7, status: 'booked' },
    { date: 8, status: 'reserved' },
    { date: 9, status: 'available' },
    { date: 10, status: 'available' },
    { date: 11, status: 'booked' },
    { date: 12, status: 'reserved' },
    { date: 13, status: 'available' },
    { date: 14, status: 'booked' },
    { date: 15, status: 'reserved' },
    { date: 16, status: 'available' },
    { date: 17, status: 'booked' },
    { date: 18, status: 'booked' },
    { date: 19, status: 'available' },
    { date: 20, status: 'available' },
    { date: 21, status: 'available' },
    { date: 22, status: 'available' },
    { date: 23, status: 'booked' },
    { date: 24, status: 'booked' },
    { date: 25, status: 'available' },
    { date: 26, status: 'available' },
    { date: 27, status: 'available' },
    { date: 28, status: 'available' },
    { date: 29, status: 'booked' },
    { date: 30, status: 'reserved' },
    { date: 31, status: 'available' },
    // Next month dates (1, 2, 3)
    { date: 1, status: 'disabled' },
    { date: 2, status: 'disabled' },
    { date: 3, status: 'disabled' },
  ];

  const handleDateClick = (dateInfo: DateInfo) => {
    // Allow clicking on any date except disabled ones (previous/next month)
    if (dateInfo.status === 'disabled') {
      return;
    }

    if (!checkInDate) {
      setCheckInDate(dateInfo.date);
      setCheckOutDate(null);
    } else if (!checkOutDate) {
      if (dateInfo.date > checkInDate) {
        setCheckOutDate(dateInfo.date);
      } else {
        setCheckInDate(dateInfo.date);
        setCheckOutDate(null);
      }
    } else {
      // Reset and start new selection
      setCheckInDate(dateInfo.date);
      setCheckOutDate(null);
    }
  };

  const isDateInRange = (date: number) => {
    if (!checkInDate || !checkOutDate) return false;
    return date > checkInDate && date < checkOutDate;
  };

  const isDateSelected = (date: number) => {
    return date === checkInDate || date === checkOutDate;
  };

  const getDateBackground = (dateInfo: DateInfo) => {
    // First check if it's part of user's selection
    if (isDateSelected(dateInfo.date)) {
      return 'bg-[#2D1B69]'; // Dark purple for selected dates
    }
    if (isDateInRange(dateInfo.date)) {
      return 'bg-purple-200'; // Light purple for dates in range
    }
    
    // Then check the booking status (existing bookings)
    if (dateInfo.status === 'disabled') {
      return 'bg-gray-100 opacity-20';
    }
    if (dateInfo.status === 'booked') {
      return 'bg-purple-600';
    }
    if (dateInfo.status === 'reserved') {
      return 'bg-amber-500';
    }
    // Available dates
    return 'bg-gray-100 hover:bg-gray-200';
  };

  const getDateTextColor = (dateInfo: DateInfo) => {
    // First check if it's part of user's selection
    if (isDateSelected(dateInfo.date) || isDateInRange(dateInfo.date)) {
      return 'text-white';
    }
    
    // Then check the booking status
    if (dateInfo.status === 'disabled') {
      return 'text-black opacity-20';
    }
    if (dateInfo.status === 'booked' || dateInfo.status === 'reserved') {
      return 'text-white';
    }
    return 'text-black';
  };

  const handlePreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleSelectDate = () => {
    if (checkInDate && checkOutDate) {
      setStep('confirmation');
    } else {
      toast.error('Please select both check-in and check-out dates');
    }
  };

  const handleConfirmBooking = () => {
    if (checkInDate && checkOutDate) {
      const checkInStr = `${monthNames[currentMonth]} ${checkInDate}, ${currentYear}`;
      const checkOutStr = `${monthNames[currentMonth]} ${checkOutDate}, ${currentYear}`;
      onBookingComplete(checkInStr, checkOutStr, quantity);
      // Reset state
      setCheckInDate(null);
      setCheckOutDate(null);
      setStep('calendar');
      setQuantity(1);
    } else {
      toast.error('Please select both check-in and check-out dates');
    }
  };

  const handleBackToCalendar = () => {
    setStep('calendar');
  };

  const handleCancel = () => {
    onOpenChange(false);
    setCheckInDate(null);
    setCheckOutDate(null);
    setStep('calendar');
    setQuantity(1);
  };

  const getServiceTypeLabel = () => {
    return 'Room';
  };

  const handleIncreaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const calculateTotalPrice = () => {
    if (!checkInDate || !checkOutDate) return 0;
    const nights = checkOutDate - checkInDate;
    const pricePerNight = parseFloat(roomPrice.replace('R', '').replace(/\s/g, ''));
    return pricePerNight * nights * quantity;
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-45 z-40"
        onClick={handleCancel}
      />

      {/* Dialog */}
      <div 
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg w-[440px] max-h-[85vh] overflow-y-auto z-50 rounded-lg"
        role="dialog"
        aria-labelledby="booking-dialog-title"
        aria-describedby="booking-dialog-description"
      >
        {step === 'calendar' && (
          <>
            {/* Hidden accessibility elements */}
            <h2 id="booking-dialog-title" className="sr-only">Select Booking Dates</h2>
            <p id="booking-dialog-description" className="sr-only">Choose your check-in and check-out dates from the calendar</p>
            
            {/* Calendar */}
            <div className="p-4">
              <div className="bg-white rounded-lg p-3">
                {/* Month/Year header with navigation */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <p className="text-black tracking-[0.45px] text-base">{monthNames[currentMonth]}</p>
                    <p className="text-black tracking-[0.75px] text-base">{currentYear}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={handlePreviousMonth}
                      className="p-1.5 hover:bg-gray-100 rounded"
                    >
                      <ChevronLeft size={18} className="text-black" />
                    </button>
                    <button 
                      onClick={handleNextMonth}
                      className="p-1.5 hover:bg-gray-100 rounded"
                    >
                      <ChevronRight size={18} className="text-black" />
                    </button>
                  </div>
                </div>

                {/* Calendar grid */}
                <div className="grid grid-cols-7 gap-1.5 mb-2">
                  {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                    <div key={i} className="w-[32px] h-[32px] flex items-center justify-center">
                      <p className="text-gray-500 text-xs">{day}</p>
                    </div>
                  ))}
                </div>
                
                <div className="grid grid-cols-7 gap-1.5">
                  {calendarDates.map((dateInfo, index) => (
                    <button
                      key={index}
                      onClick={() => handleDateClick(dateInfo)}
                      disabled={dateInfo.status === 'disabled'}
                      className={`w-[32px] h-[32px] flex items-center justify-center rounded ${getDateBackground(dateInfo)} ${
                        dateInfo.status !== 'disabled'
                          ? 'cursor-pointer hover:opacity-90'
                          : 'cursor-not-allowed'
                      }`}
                    >
                      <p className={`font-['Poppins'] font-medium text-sm tracking-[0.45px] ${getDateTextColor(dateInfo)}`}>
                        {dateInfo.date}
                      </p>
                    </button>
                  ))}
                </div>

                {/* Legend */}
                <div className="flex items-center gap-3 mt-3 text-xs text-gray-700">
                  <div className="flex items-center gap-1">
                    <div className="w-[10px] h-[10px] rounded bg-purple-600" />
                    <span>Booked</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-[10px] h-[10px] rounded bg-amber-500" />
                    <span>Reserved</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-[10px] h-[10px] rounded bg-[#2D1B69]" />
                    <span>Selected</span>
                  </div>
                </div>
              </div>

              {/* Selected Dates Display */}
              {(checkInDate || checkOutDate) && (
                <div className="mt-3 p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex-1">
                      <p className="text-xs text-gray-600 mb-0.5">Check-in</p>
                      <p className="text-sm text-purple-700">
                        {checkInDate ? `${monthNames[currentMonth]} ${checkInDate}, ${currentYear}` : 'Not selected'}
                      </p>
                    </div>
                    <div className="text-gray-400 text-sm">→</div>
                    <div className="flex-1">
                      <p className="text-xs text-gray-600 mb-0.5">Check-out</p>
                      <p className="text-sm text-purple-700">
                        {checkOutDate ? `${monthNames[currentMonth]} ${checkOutDate}, ${currentYear}` : 'Not selected'}
                      </p>
                    </div>
                  </div>
                  {checkInDate && checkOutDate && (
                    <div className="mt-2 pt-2 border-t border-purple-200">
                      <p className="text-xs text-gray-900">
                        Duration: <span className="text-purple-600">{checkOutDate - checkInDate} {checkOutDate - checkInDate === 1 ? 'night' : 'nights'}</span>
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Action buttons */}
            <div className="px-4 pb-4 space-y-2">
              <button
                onClick={handleSelectDate}
                disabled={!checkInDate || !checkOutDate}
                className={`w-full h-[44px] text-sm rounded-md transition-colors ${
                  checkInDate && checkOutDate
                    ? 'bg-purple-600 hover:bg-purple-700 text-white'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {checkInDate && checkOutDate ? 'Continue to Confirmation →' : 'Select Available Date'}
              </button>
              <button
                onClick={handleCancel}
                className="w-full text-black h-[44px] text-sm hover:bg-gray-100 rounded-md transition-colors"
              >
                Cancel
              </button>
            </div>
          </>
        )}

        {step === 'confirmation' && (
          <>
            {/* Header */}
            <div className="p-4 border-b">
              <h2 id="booking-dialog-title" className="text-center text-gray-900 text-lg">Confirm Your Booking</h2>
              <p id="booking-dialog-description" className="sr-only">Review your booking details before confirming</p>
            </div>

            {/* Booking Summary */}
            <div className="p-4 space-y-3">
              <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
                <h3 className="text-gray-900 text-sm mb-1">{getServiceTypeLabel()}</h3>
                <p className="text-gray-700 text-sm mb-2">{roomName}</p>
                <p className="text-purple-600 text-sm">{roomPrice} Per Night</p>
              </div>

              {/* Room Quantity Selector */}
              <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                <div className="flex items-center justify-between">
                  <p className="text-gray-900 text-sm">Number of Rooms</p>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleDecreaseQuantity}
                      disabled={quantity <= 1}
                      className={`w-7 h-7 rounded-full flex items-center justify-center ${
                        quantity <= 1 
                          ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                          : 'bg-purple-600 text-white hover:bg-purple-700'
                      }`}
                    >
                      <Minus size={14} />
                    </button>
                    <span className="text-gray-900 min-w-[2rem] text-center text-sm">{quantity}</span>
                    <button
                      onClick={handleIncreaseQuantity}
                      className="w-7 h-7 rounded-full bg-purple-600 text-white hover:bg-purple-700 flex items-center justify-center"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              </div>

              {checkInDate && checkOutDate && (
                <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div>
                      <p className="text-gray-600 text-xs mb-0.5">Check-in</p>
                      <p className="text-gray-900 text-sm">{monthNames[currentMonth]} {checkInDate}, {currentYear}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-xs mb-0.5">Check-out</p>
                      <p className="text-gray-900 text-sm">{monthNames[currentMonth]} {checkOutDate}, {currentYear}</p>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-gray-300 space-y-1.5 text-sm">
                    <div className="flex justify-between">
                      <p className="text-gray-700">Duration:</p>
                      <p className="text-gray-900">{checkOutDate - checkInDate} {checkOutDate - checkInDate === 1 ? 'night' : 'nights'}</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-gray-700">Price per night:</p>
                      <p className="text-gray-900">{roomPrice}</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-gray-700">Rooms:</p>
                      <p className="text-gray-900">{quantity}</p>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-gray-300">
                      <p className="text-gray-900">Total Price:</p>
                      <p className="text-purple-600">R{calculateTotalPrice().toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="bg-yellow-50 rounded-lg p-3 border border-yellow-200">
                <p className="text-gray-700 text-xs">
                  <strong>Note:</strong> This booking will be added to your cart. You can add more services before adding to a campaign.
                </p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="px-4 pb-4 space-y-2">
              <button
                onClick={handleConfirmBooking}
                className="w-full bg-[#2D1B69] hover:bg-[#1f1349] text-white h-[44px] text-sm rounded-md transition-colors"
              >
                ✓ Confirm Booking
              </button>
              <button
                onClick={handleBackToCalendar}
                className="w-full h-[44px] text-sm border border-gray-300 hover:bg-gray-100 rounded-md transition-colors"
              >
                ← Back to Calendar
              </button>
              <button
                onClick={handleCancel}
                className="w-full text-black h-[44px] text-sm hover:bg-gray-100 rounded-md transition-colors"
              >
                Cancel
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}