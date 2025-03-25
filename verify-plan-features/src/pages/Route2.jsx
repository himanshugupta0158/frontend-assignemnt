import FeatureCard from '../components/FeatureCard';
import planFeatures from "../data/planData.json";

export default function Route2() {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Route 2</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <FeatureCard
          title="Feature 2"
          description="This is the description for Feature 2"
          hasAccess={planFeatures.features.feature2}
        />
        <FeatureCard
          title="Feature 3"
          description="This is the description for Feature 3"
          hasAccess={planFeatures.features.feature3}
        />
      </div>
    </div>
  );
}