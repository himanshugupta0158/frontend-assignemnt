import FeatureCard from '../components/FeatureCard';
import planFeatures from "../data/planData.json";

export default function Route1() {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Route 1</h1>
      <div className="grid gap-6">
        <FeatureCard
          title="Feature 1"
          description="This is the description for Feature 1"
          hasAccess={planFeatures.features.feature1}
        />
      </div>
    </div>
  );
}