import { useState } from 'react';
import './Home.css';

function Home() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickup: '',
    destination: '',
    date: '',
    time: '',
    passengers: '1'
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.pickup.trim()) {
      newErrors.pickup = 'Pickup location is required';
    }

    if (!formData.destination.trim()) {
      newErrors.destination = 'Destination is required';
    }

    if (!formData.date) {
      newErrors.date = 'Date is required';
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.date = 'Date cannot be in the past';
      }
    }

    if (!formData.time) {
      newErrors.time = 'Time is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', formData);
      setSubmitted(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          phone: '',
          pickup: '',
          destination: '',
          date: '',
          time: '',
          passengers: '1'
        });
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div className="home">
      <div className="hero-section">
        <h1>Book Your Ride Today</h1>
        <p>Fast, reliable, and comfortable taxi service at your fingertips</p>
      </div>

      <div className="booking-container">
        <div className="booking-card">
          <h2>Book a Taxi</h2>
          {submitted ? (
            <div className="success-message">
              <h3>✅ Booking Successful!</h3>
              <p>We've received your booking request. Our driver will contact you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="booking-form">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'error' : ''}
                  placeholder="Enter your full name"
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone ? 'error' : ''}
                  placeholder="Enter your phone number"
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="pickup">Pickup Location *</label>
                <input
                  type="text"
                  id="pickup"
                  name="pickup"
                  value={formData.pickup}
                  onChange={handleChange}
                  className={errors.pickup ? 'error' : ''}
                  placeholder="Enter pickup address"
                />
                {errors.pickup && <span className="error-message">{errors.pickup}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="destination">Destination *</label>
                <input
                  type="text"
                  id="destination"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  className={errors.destination ? 'error' : ''}
                  placeholder="Enter destination address"
                />
                {errors.destination && <span className="error-message">{errors.destination}</span>}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="date">Date *</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className={errors.date ? 'error' : ''}
                  />
                  {errors.date && <span className="error-message">{errors.date}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="time">Time *</label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className={errors.time ? 'error' : ''}
                  />
                  {errors.time && <span className="error-message">{errors.time}</span>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="passengers">Number of Passengers</label>
                <select
                  id="passengers"
                  name="passengers"
                  value={formData.passengers}
                  onChange={handleChange}
                >
                  <option value="1">1 Passenger</option>
                  <option value="2">2 Passengers</option>
                  <option value="3">3 Passengers</option>
                  <option value="4">4 Passengers</option>
                  <option value="5">5+ Passengers</option>
                </select>
              </div>

              <button type="submit" className="submit-btn">Book Now</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;

