import { useState } from 'react';
import UpgradeModal from './UpgradeModal';

export default function FeatureCard({ title, description, hasAccess }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className={`relative rounded-lg shadow-md p-6 bg-white ${
          !hasAccess ? 'blur-sm cursor-pointer' : 'cursor-default'
        }`}
        onClick={!hasAccess ? () => setIsModalOpen(true) : undefined}
      >
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      <UpgradeModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </>
  );
}