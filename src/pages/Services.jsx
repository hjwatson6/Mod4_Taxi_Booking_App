import './Services.css';

function Services() {
  const services = [
    {
      icon: '🚕',
      title: 'Standard Taxi',
      description: 'Perfect for everyday travel. Comfortable and affordable rides for individuals and small groups.',
      features: ['Up to 4 passengers', 'Air conditioning', 'GPS navigation', 'Cash & card payment']
    },
    {
      icon: '🚙',
      title: 'Premium Service',
      description: 'Luxury vehicles with premium amenities for a more comfortable and stylish travel experience.',
      features: ['Luxury vehicles', 'Premium interiors', 'Complimentary water', 'Professional chauffeur']
    },
    {
      icon: '✈️',
      title: 'Airport Transfer',
      description: 'Reliable airport transfers with flight tracking to ensure you never miss your flight.',
      features: ['Flight monitoring', 'Meet & greet service', 'Luggage assistance', 'Fixed pricing']
    },
    {
      icon: '👥',
      title: 'Group Transport',
      description: 'Spacious vehicles perfect for group outings, corporate events, or family gatherings.',
      features: ['Up to 8 passengers', 'Large luggage space', 'Group discounts', 'Flexible scheduling']
    },
    {
      icon: '🌙',
      title: 'Night Service',
      description: 'Safe and reliable transportation during late hours. Available 24/7 for your convenience.',
      features: ['24/7 availability', 'Safe night travel', 'Experienced drivers', 'Quick response']
    },
    {
      icon: '💼',
      title: 'Corporate Service',
      description: 'Dedicated corporate transportation solutions with invoicing and account management.',
      features: ['Corporate accounts', 'Monthly invoicing', 'Dedicated fleet', 'Priority booking']
    }
  ];

  return (
    <div className="services">
      <div className="services-hero">
        <h1>Our Services</h1>
        <p>Comprehensive transportation solutions for every need</p>
      </div>

      <div className="services-content">
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>✓ {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pricing-section">
          <h2>Pricing</h2>
          <div className="pricing-info">
            <div className="pricing-card">
              <h3>Standard Rates</h3>
              <p>Base fare: $3.00</p>
              <p>Per mile: $2.50</p>
              <p>Per minute: $0.50</p>
            </div>
            <div className="pricing-card">
              <h3>Premium Rates</h3>
              <p>Base fare: $5.00</p>
              <p>Per mile: $4.00</p>
              <p>Per minute: $0.75</p>
            </div>
            <div className="pricing-card">
              <h3>Special Services</h3>
              <p>Airport transfer: Fixed rates</p>
              <p>Group transport: Volume discounts</p>
              <p>Corporate: Custom pricing</p>
            </div>
          </div>
          <p className="pricing-note">
            * All rates are estimates. Final fare may vary based on distance, time, and traffic conditions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;

