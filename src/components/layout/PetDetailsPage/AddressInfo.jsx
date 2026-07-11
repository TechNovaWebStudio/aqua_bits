import React, { useState } from 'react';
import styles from './AddressInfo.module.css'; 

// Added cartItems as a prop to receive product details
export default function AddressInfo({ handleConfirmOrder, cartItems = [] }) {
  const [shippingCost, setShippingCost] = useState(0.00);
  
  const [address, setAddress] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    street: '',
    apartment: '',
    city: '',
    country: '',
    pincode: '',
    state: ''
  });

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    const stateKeyMap = {
      inputEmailAddress: 'email',
      inputPhoneNumber: 'phone',
      inputFirstName: 'firstName',
      inputLastName: 'lastName',
      inputStreetAddress: 'street',
      inputApartmentSuite: 'apartment',
      inputCityName: 'city',
      inputCountryRegion: 'country',
      inputPostalZipCode: 'pincode',
      inputStateProvince: 'state'
    };

    const targetKey = stateKeyMap[id];
    if (targetKey) {
      setAddress(prev => ({
        ...prev,
        [targetKey]: value
      }));
    }
  };

  const handleShippingChange = (cost) => {
    setShippingCost(cost);
  };

  const executeWhatsAppRedirect = (event) => {
    event.preventDefault(); 

    if (handleConfirmOrder) {
      handleConfirmOrder(event);
    }

    const shopPhoneNumber = "919074906624"; 
    const fullName = `${address.firstName} ${address.lastName}`.trim() || "N/A";

    // 1. Calculate items subtotal and format the item list text
    let itemsSubtotal = 0;
    let itemsListText = '';

    if (cartItems && cartItems.length > 0) {
      cartItems.forEach((item, index) => {
        // Fallback names/prices if keys differ in your project (e.g., item.title or item.rate)
        const name = item.name || "Product";
        const qty = item.quantity || 1;
        const price = item.price || 0;
        const lineTotal = price * qty;
        
        itemsSubtotal += lineTotal;
        
        // Formats each line: "1. 🛍️ Product Name (x2) - $30.00"
        itemsListText += `${index + 1}. 🛍️ ${name} (x${qty}) - $${lineTotal.toFixed(2)}\n`;
      });
    } else {
      itemsListText = "No items in cart\n";
    }

    const grandTotal = itemsSubtotal + shippingCost;

    // 2. Structural text breakdown payload sequence
    const messageText = `Hello! I'd like to confirm my order. Here are my details:\n\n` +
                        `👤 *Customer Details:* \n` +
                        `Name: ${fullName}\n` +
                        `Phone: ${address.phone || "N/A"}\n` +
                        `Address: ${address.street}${address.apartment ? `, ${address.apartment}` : ''}\n` +
                        `City: ${address.city || "N/A"} - ${address.pincode || "N/A"}\n\n` +
                        `📦 *Order Summary:* \n` +
                        `${itemsListText}\n` +
                        `🚚 *Shipping:* ${shippingCost === 0 ? 'FREE Standard Courier' : `$${shippingCost.toFixed(2)} Priority Express`}\n` +
                        `💵 *Grand Total:* **$${grandTotal.toFixed(2)}**`;

    const encodedMessage = encodeURIComponent(messageText);
    const whatsAppUrl = `https://wa.me/${shopPhoneNumber}?text=${encodedMessage}`;

    window.open(whatsAppUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={styles.checkoutContainerWrapper}>
      <section className={styles.deliveryFormSection}>
        <form id="deliveryDetailsForm" onSubmit={executeWhatsAppRedirect}>
          
          {/* Contact Information */}
          <div className={styles.formBlockGroup}>
            <h3 className={styles.formBlockTitle}>
              <i className="fa-regular fa-envelope" style={{ color: '#0095f6' }}></i> Contact Information
            </h3>
            <div className={styles.formFieldsGrid}>
              <div className={`${styles.floatingInputField} ${styles.spanTwoColumns}`}>
                <input 
                  type="email" 
                  id="inputEmailAddress" 
                  placeholder=" " 
                  required 
                  autoComplete="email" 
                  value={address.email}
                  onChange={handleInputChange}
                />
                <label htmlFor="inputEmailAddress">Email Address</label>
              </div>
              <div className={`${styles.floatingInputField} ${styles.spanTwoColumns}`}>
                <input 
                  type="tel" 
                  id="inputPhoneNumber" 
                  placeholder=" " 
                  required 
                  autoComplete="tel" 
                  value={address.phone}
                  onChange={handleInputChange}
                />
                <label htmlFor="inputPhoneNumber">Phone Number (For delivery notification)</label>
              </div>
            </div>
          </div>

          {/* Shipping Address */}
          <div className={styles.formBlockGroup}>
            <h3 className={styles.formBlockTitle}>
              <i className="fa-regular fa-compass" style={{ color: '#0095f6' }}></i> Shipping Address
            </h3>
            <div className={styles.formFieldsGrid}>
              <div className={styles.floatingInputField}>
                <input 
                  type="text" 
                  id="inputFirstName" 
                  placeholder=" " 
                  required 
                  autoComplete="given-name" 
                  value={address.firstName}
                  onChange={handleInputChange}
                />
                <label htmlFor="inputFirstName">First Name</label>
              </div>
              <div className={styles.floatingInputField}>
                <input 
                  type="text" 
                  id="inputLastName" 
                  placeholder=" " 
                  required 
                  autoComplete="family-name" 
                  value={address.lastName}
                  onChange={handleInputChange}
                />
                <label htmlFor="inputLastName">Last Name</label>
              </div>
              <div className={`${styles.floatingInputField} ${styles.spanTwoColumns}`}>
                <input 
                  type="text" 
                  id="inputStreetAddress" 
                  placeholder=" " 
                  required 
                  autoComplete="shipping street-address" 
                  value={address.street}
                  onChange={handleInputChange}
                />
                <label htmlFor="inputStreetAddress">Street Address</label>
              </div>
              <div className={`${styles.floatingInputField} ${styles.spanTwoColumns}`}>
                <input 
                  type="text" 
                  id="inputApartmentSuite" 
                  placeholder=" " 
                  value={address.apartment}
                  onChange={handleInputChange}
                />
                <label htmlFor="inputApartmentSuite">Apartment, suite, unit (optional)</label>
              </div>
              <div className={styles.floatingInputField}>
                <input 
                  type="text" 
                  id="inputCityName" 
                  placeholder=" " 
                  required 
                  autoComplete="shipping address-level2" 
                  value={address.city}
                  onChange={handleInputChange}
                />
                <label htmlFor="inputCityName">City</label>
              </div>
              <div className={styles.floatingInputField}>
                <select 
                  id="inputCountryRegion" 
                  required 
                  value={address.country}
                  onChange={handleInputChange}
                >
                  <option value="" disabled hidden></option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="UK">United Kingdom</option>
                  <option value="AU">Australia</option>
                </select>
                <label htmlFor="inputCountryRegion">Country / Region</label>
              </div>
              <div className={styles.floatingInputField}>
                <input 
                  type="text" 
                  id="inputPostalZipCode" 
                  placeholder=" " 
                  required 
                  autoComplete="shipping postal-code" 
                  value={address.pincode}
                  onChange={handleInputChange}
                />
                <label htmlFor="inputPostalZipCode">Postal / ZIP Code</label>
              </div>
              <div className={styles.floatingInputField}>
                <input 
                  type="text" 
                  id="inputStateProvince" 
                  placeholder=" " 
                  required 
                  autoComplete="shipping address-level1" 
                  value={address.state}
                  onChange={handleInputChange}
                />
                <label htmlFor="inputStateProvince">State / Province</label>
              </div>
            </div>
          </div>

          {/* Shipping Method */}
          <div className={styles.formBlockGroup}>
            <h3 className={styles.formBlockTitle}>
              <i className="fa-solid fa-truck-fast" style={{ color: '#0095f6' }}></i> Shipping Method
            </h3>
            
            <div 
              className={`${styles.shippingSpeedOption} ${shippingCost === 0.00 ? styles.selected : ''}`} 
              onClick={() => handleShippingChange(0.00)}
            >
              <div className={styles.speedLabelLeft}>
                <div className={styles.speedRadioBullet}></div>
                <div className={styles.speedText}>
                  <h4>Standard Courier Delivery</h4>
                  <p>Estimated tracking delivery windows span 3-5 business days</p>
                </div>
              </div>
              <div className={styles.speedCostRight}>FREE</div>
            </div>

            <div 
              className={`${styles.shippingSpeedOption} ${shippingCost === 15.00 ? styles.selected : ''}`} 
              onClick={() => handleShippingChange(15.00)}
            >
              <div className={styles.speedLabelLeft}>
                <div className={styles.speedRadioBullet}></div>
                <div className={styles.speedText}>
                  <h4>Priority Express Dispatch</h4>
                  <p>Guaranteed priority overnight distribution pipeline. 1-2 business days</p>
                </div>
              </div>
              <div className={styles.speedCostRight}>$15.00</div>
            </div>
          </div>

          {/* Form Action Footer Row */}
          <div className={styles.formActionFooterRow}>
            <span className={styles.backNavLink}>
              <i className="fa-solid fa-chevron-left" style={{ fontSize: '12px' }}></i> Return to Cart
            </span>
            <button type="submit" className={styles.btnContinueCheckout}>
              Confirm Order via WhatsApp
            </button>
          </div>

        </form>
      </section>
    </div>
  );
}