import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-20 lg:py-28 animate__animated animate__fadeIn">
      <div className="container">
        {/* Wrapper div for className animation */}
        <div className="animate__animated animate__fadeIn animate__delay-1s">
          <SectionTitle
            title="Main Features"
            paragraph="Explore our range of premium spiritual products, including natural camphor, handcrafted candles, eco-friendly light wickles, divine offerings, and organic food items. Each product is made with devotion, ensuring purity, long-lasting fragrance, and sustainability, perfect for rituals, relaxation, and gifting."
            center
          />
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature, index) => (
            <div
              key={feature.title || `feature-${index}`}
              className="feature-card animate__animated animate__fadeInUp animate__delay-2s transform hover:scale-105 transition-all duration-300"
            >
              <SingleFeature feature={feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
