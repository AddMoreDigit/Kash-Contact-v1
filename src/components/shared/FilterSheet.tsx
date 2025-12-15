import { X } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Checkbox } from '../ui/checkbox';
import { serviceStorage } from '../../storage/serviceStorage';

interface FilterSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedCategories: string[];
  selectedLocations: string[];
  onCategoryChange: (category: string, checked: boolean) => void;
  onLocationChange: (location: string, checked: boolean) => void;
  onClearAll: () => void;
  onApply: () => void;
}

export function FilterSheet({
  open,
  onOpenChange,
  selectedCategories,
  selectedLocations,
  onCategoryChange,
  onLocationChange,
  onClearAll,
  onApply,
}: FilterSheetProps) {
  if (!open) return null;

  // Get unique categories and locations from centralized storage
  const categories = serviceStorage.getUniqueCategories();
  const locations = serviceStorage.getUniqueLocations();

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" 
      onClick={() => onOpenChange(false)}
    >
      <div 
        className="bg-white rounded-lg p-6 max-w-md w-full max-h-[80vh] overflow-y-auto m-4" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-gray-900">Filters</h2>
          <button 
            onClick={() => onOpenChange(false)}
            className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={20} className="text-gray-600" />
          </button>
        </div>

        {/* Categories */}
        <div className="mb-6">
          <h3 className="text-gray-900 mb-3">Categories</h3>
          <div className="space-y-3">
            {categories.map((category) => (
              <label 
                key={category} 
                className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
              >
                <Checkbox
                  checked={selectedCategories.includes(category)}
                  onCheckedChange={(checked) => onCategoryChange(category, checked as boolean)}
                />
                <span className="text-gray-700">{category}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Locations */}
        <div className="mb-6">
          <h3 className="text-gray-900 mb-3">Locations</h3>
          <div className="space-y-3">
            {locations.map((location) => (
              <label 
                key={location} 
                className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
              >
                <Checkbox
                  checked={selectedLocations.includes(location)}
                  onCheckedChange={(checked) => onLocationChange(location, checked as boolean)}
                />
                <span className="text-gray-700">{location}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4 border-t border-gray-200">
          <Button
            variant="outline"
            onClick={onClearAll}
            className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            Clear All
          </Button>
          <Button
            onClick={onApply}
            className="flex-1 bg-purple-600 hover:bg-purple-700 text-white"
          >
            Apply Filters
          </Button>
        </div>
      </div>
    </div>
  );
}
