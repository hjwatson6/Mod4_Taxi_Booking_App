import './About.css';

function About() {
  return (
    <div className="about">
      <div className="about-hero">
        <h1>About Us</h1>
        <p>Your trusted transportation partner</p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2>Who We Are</h2>
          <p>
            TaxiApp is a modern, reliable taxi booking service committed to providing 
            safe, comfortable, and affordable transportation solutions. With years of 
            experience in the industry, we've built a reputation for excellence and 
            customer satisfaction.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to make transportation accessible, convenient, and stress-free 
            for everyone. We believe that getting from point A to point B should be 
            seamless, whether you're heading to work, the airport, or a special event.
          </p>
        </section>

        <section className="about-section">
          <h2>Why Choose Us</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚗</div>
              <h3>Fleet of Modern Vehicles</h3>
              <p>Well-maintained, clean, and comfortable vehicles for every occasion</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👨‍✈️</div>
              <h3>Professional Drivers</h3>
              <p>Licensed, experienced, and courteous drivers who prioritize your safety</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⏱️</div>
              <h3>24/7 Availability</h3>
              <p>Round-the-clock service, ready whenever you need us</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Fair Pricing</h3>
              <p>Transparent, competitive rates with no hidden fees</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Easy Booking</h3>
              <p>Simple online booking system that takes just minutes</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⭐</div>
              <h3>Customer Satisfaction</h3>
              <p>Dedicated to providing exceptional service every time</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Our Story</h2>
          <p>
            Founded with a vision to revolutionize urban transportation, TaxiApp started 
            as a small local service and has grown into a trusted name in the taxi industry. 
            We've served thousands of satisfied customers and continue to expand our 
            services to meet the evolving needs of our community.
          </p>
          <p>
            Every ride with us is backed by our commitment to safety, reliability, and 
            customer care. We're not just a taxi service—we're your transportation partner.
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;

