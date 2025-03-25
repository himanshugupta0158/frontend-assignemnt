import FeatureCard from '../components/FeatureCard';
import planFeatures from "../data/planData.json";

export default function Route3() {
    return (
        <div className="max-w-7xl mx-auto py-8 px-4">
            <h1 className="text-2xl font-bold mb-6">Route 3</h1>
            <div className="grid gap-6 md:grid-cols-3">
                <FeatureCard
                    title="Feature 4"
                    description="This is the description for Feature 4"
                    hasAccess={planFeatures.features.feature4}
                />
                <FeatureCard
                    title="Feature 5"
                    description="This is the description for Feature 5"
                    hasAccess={planFeatures.features.feature5}
                />
                <FeatureCard
                    title="Feature 6"
                    description="This is the description for Feature 6"
                    hasAccess={planFeatures.features.feature6}
                />
            </div>
        </div>
    );
}