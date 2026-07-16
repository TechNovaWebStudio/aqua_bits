import React, { useState } from 'react';
import styles from './AddressInfo.module.css'; 

// Added cartItems as a prop to receive product details
export default function AddressInfo({ handleConfirmOrder, cartItems = [], onBack }) {
  // Static shipping cost (defaults to FREE) since selection is removed
  const shippingCost = 0.00; 
  
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

  const executeWhatsAppRedirect = (event) => {
    event.preventDefault(); 

    if (handleConfirmOrder) {
      handleConfirmOrder(event);
    }

    const shopPhoneNumber = "919074906624"; 
    const fullName = `${address.firstName} ${address.lastName}`.trim() || "N/A";

    let itemsSubtotal = 0;
    let itemsListText = '';

    if (cartItems && cartItems.length > 0) {
      cartItems.forEach((item, index) => {
        const name = item.name || "Product";
        const qty = item.quantity || 1;
        const price = item.price || 0;
        const lineTotal = price * qty;
        
        itemsSubtotal += lineTotal;
        itemsListText += `${index + 1}. 🛍️ ${name} (x${qty}) - $${lineTotal.toFixed(2)}\n`;
      });
    } else {
      itemsListText = "No items in cart\n";
    }

    const grandTotal = itemsSubtotal + shippingCost;

    const messageText = `Hello! I'd like to confirm my order. Here are my details:\n\n` +
                        `👤 *Customer Details:* \n` +
                        `Name: ${fullName}\n` +
                        `Phone: ${address.phone || "N/A"}\n` +
                        `Address: ${address.street}${address.apartment ? `, ${address.apartment}` : ''}\n` +
                        `City: ${address.city || "N/A"} - ${address.pincode || "N/A"}\n\n` +
                        `📦 *Order Summary:* \n` +
                        `${itemsListText}\n` +
                        `🚚 *Shipping:* FREE Standard Courier\n` +
                        `💵 *Grand Total:* **$${grandTotal.toFixed(2)}**`;

    const encodedMessage = encodeURIComponent(messageText);
    const whatsAppUrl = `https://wa.me/${shopPhoneNumber}?text=${encodedMessage}`;

    window.open(whatsAppUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={styles.checkoutContainerWrapper}>
      <section className={styles.deliveryFormSection}>
        
        {/* New Header Container with Back Icon, Title, and Description */}
        <div className={styles.checkoutHeader}>
          <div className={styles.titleRow} onClick={onBack}>
            <i className="fa-solid fa-arrow-left" style={{ fontSize: '18px', cursor: 'pointer' }}></i>
            <h2>Checkout</h2>
          </div>
          <p className={styles.headerDescription}>
            Please fill in your delivery details below. Once submitted, your order details will be generated and confirmed with us directly over WhatsApp.
          </p>
        </div>

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

          {/* Form Action Button Centered/Full-width inside card */}
          <div className={styles.submitButtonContainer}>
            <button type="submit" className={styles.btnContinueCheckout}>
              Confirm Order via WhatsApp
            </button>
          </div>

        </form>
      </section>
    </div>
  );
}