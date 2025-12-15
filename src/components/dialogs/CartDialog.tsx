import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../../../components/ui/dialog';
import { Button } from '../../../components/ui/button';
import { Trash2, MapPin, Edit2 } from 'lucide-react';
import { Badge } from '../../../components/ui/badge';
import { useState, useEffect } from 'react';

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

interface CartDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  items: BookedItem[];
  onRemoveItem: (itemId: number) => void;
  onEditItem?: (itemId: number) => void;
  onContinue: () => void;
  serviceName?: string;
  onNavigateToTerms?: () => void;
}

export function CartDialog({ open, onOpenChange, items, onRemoveItem, onEditItem, onContinue, serviceName = 'Seaview lodge', onNavigateToTerms }: CartDialogProps) {
  // Load terms acceptance from localStorage
  const [termsAccepted, setTermsAccepted] = useState(() => {
    const saved = localStorage.getItem('termsAccepted');
    return saved === 'true';
  });

  // Save terms acceptance to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('termsAccepted', termsAccepted.toString());
  }, [termsAccepted]);

  const handleNavigateToTerms = () => {
    onOpenChange(false);
    if (onNavigateToTerms) {
      onNavigateToTerms();
    }
  };

  const getCategoryColor = (type: string) => {
    switch (type) {
      case 'room':
        return 'bg-purple-100 text-purple-700';
      case 'food':
        return 'bg-blue-100 text-blue-700';
      case 'transport':
        return 'bg-green-100 text-green-700';
      case 'activity':
        return 'bg-orange-100 text-orange-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getCategoryLabel = (type: string) => {
    switch (type) {
      case 'room':
        return 'Accommodation';
      case 'food':
        return 'Food';
      case 'transport':
        return 'Transport';
      case 'activity':
        return 'Activities';
      default:
        return type;
    }
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => {
      // Use totalPrice if available (for rooms with quantity and nights), otherwise use price
      if (item.totalPrice) {
        return total + item.totalPrice;
      }
      const price = parseFloat(item.price.replace('R', '').replace(/\s/g, ''));
      return total + price;
    }, 0);
  };

  const getItemDisplayPrice = (item: BookedItem) => {
    if (item.totalPrice) {
      return `R${item.totalPrice.toFixed(2)}`;
    }
    return item.price;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Selected Services</DialogTitle>
          <DialogDescription>
            Selected from our trusted partners for accommodation, food, activities and more
          </DialogDescription>
        </DialogHeader>

        {items.length === 0 ? (
          <div className="py-12 text-center">
            <p className="text-gray-600 mb-4">No services selected yet</p>
            <p className="text-sm text-gray-500">Add services from the tabs above to get started</p>
          </div>
        ) : (
          <div className="space-y-4 py-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="border border-gray-200 rounded-lg p-4 flex gap-4"
              >
                {/* Service Image */}
                {item.image && (
                  <div className="w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Service Details */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-gray-900 mb-1">{item.name}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                        <MapPin className="w-4 h-4" />
                        <span>Cape Town | {item.provider || serviceName}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-gray-400 hover:text-red-600 p-2"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>

                  {/* Category Badge */}
                  <Badge className={`${getCategoryColor(item.type)} mb-3`}>
                    {getCategoryLabel(item.type)}
                  </Badge>

                  {/* Date Range and Details for Rooms */}
                  {item.type === 'room' && item.checkIn && item.checkOut && (
                    <div className="space-y-2 mb-3">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span>{item.checkIn} - {item.checkOut}</span>
                      </div>
                      {item.nights && (
                        <div className="text-sm text-gray-600">
                          <span>{item.nights} {item.nights === 1 ? 'night' : 'nights'}</span>
                          {item.quantity && item.quantity > 1 && (
                            <span> × {item.quantity} {item.quantity === 1 ? 'room' : 'rooms'}</span>
                          )}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-gray-900">{getItemDisplayPrice(item)}</span>
                      {item.type === 'room' && item.totalPrice && (
                        <span className="text-xs text-gray-500">{item.price} per night</span>
                      )}
                    </div>
                    {item.type === 'room' && onEditItem && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-purple-600 hover:text-purple-700 hover:bg-purple-50"
                        onClick={() => onEditItem(item.id)}
                      >
                        <Edit2 size={16} className="mr-1" />
                        Edit
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Total Section */}
            <div className="border-t border-gray-200 pt-4 mt-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-700">Total</span>
                <span className="text-gray-900">
                  R{getTotalPrice().toFixed(2)}
                </span>
              </div>

              {/* Terms and Conditions Checkbox */}
              <div className="mb-4 flex items-start gap-2">
                <input
                  type="checkbox"
                  id="cart-terms-agree"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  className="w-4 h-4 text-purple-600 border-gray-300 rounded cursor-pointer mt-0.5"
                />
                <label htmlFor="cart-terms-agree" className="text-gray-700 cursor-pointer text-sm">
                  I agree with{' '}
                  <button
                    onClick={handleNavigateToTerms}
                    className="text-purple-600 hover:text-purple-700 underline"
                  >
                    terms and services T&Cs
                  </button>
                </label>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50"
                  onClick={() => onOpenChange(false)}
                >
                  Continue Shopping
                </Button>
                <Button
                  onClick={onContinue}
                  disabled={!termsAccepted}
                  className={`flex-1 ${
                    termsAccepted
                      ? 'bg-purple-600 hover:bg-purple-700'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Create Campaign
                </Button>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
