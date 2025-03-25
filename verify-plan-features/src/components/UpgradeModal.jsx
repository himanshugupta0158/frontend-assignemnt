export default function UpgradeModal({ isOpen, setIsOpen }) {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
          <h2 className="text-xl font-bold mb-4">Upgrade Required</h2>
          <p className="text-gray-600 mb-6">
            To access this feature, please upgrade your plan.
          </p>
          <div className="flex justify-end space-x-4">
            <button
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 text-gray-600 rounded-md hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Upgrade Plan
            </button>
          </div>
        </div>
      </div>
    );
  }