import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigate from './components/Navigate';
import NavigationBar from './components/NavigationBar';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    birthDate: '',
    streetAddress: '',
    country: '',
    city: '',
    region: '',
    postalCode: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can do whatever you need with the form data here
    console.log('Submitted Data:', formData);
  };

  return (
    <Router>
      <div>
        <NavigationBar />
        <div className="container">
          <Switch>
            <Route path="/" exact>
              <h1>Home</h1>
              <p>Welcome to the Home Page!</p>
            </Route>
            <Route path="/form">
              <h1>Form</h1>
              <form onSubmit={handleSubmit} className="form">
                <div className="input-box">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Enter full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input-box">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="column">
                  <div className="input-box">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      placeholder="Enter phone number"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-box">
                    <label>Birth Date</label>
                    <input
                      type="date"
                      name="birthDate"
                      placeholder="Enter birth date"
                      value={formData.birthDate}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="input-box address">
                  <label>Address</label>
                  <input
                    type="text"
                    name="streetAddress"
                    placeholder="Enter street address"
                    value={formData.streetAddress}
                    onChange={handleChange}
                    required
                  />

                  <div className="column">
                    <div className="select-box">
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                      >
                        <option value="" hidden>Country</option>
                        <option value="America">America</option>
                        <option value="Japan">Japan</option>
                        <option value="India">India</option>
                        <option value="Nepal">Nepal</option>
                      </select>
                    </div>
                    <input
                      type="text"
                      name="city"
                      placeholder="Enter your city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="column">
                    <input
                      type="text"
                      name="region"
                      placeholder="Enter your region"
                      value={formData.region}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="text"
                      name="postalCode"
                      placeholder="Enter postal code"
                      value={formData.postalCode}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <button type="submit">Submit</button>
              </form>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
