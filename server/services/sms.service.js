const twilio = require('twilio');

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

/**
 * Send low stock alert SMS
 */
const sendLowStockSMS = async (phoneNumber, productName, quantity) => {
  try {
    await client.messages.create({
      body: `StockSync Alert: ${productName} is low on stock (${quantity} remaining). Restock soon!`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phoneNumber,
    });
    console.log(`✅ SMS sent to ${phoneNumber}`);
  } catch (error) {
    console.error('❌ SMS sending failed:', error.message);
  }
};

/**
 * Send expiry alert SMS
 */
const sendExpirySMS = async (phoneNumber, productName, daysLeft) => {
  try {
    await client.messages.create({
      body: `StockSync Alert: ${productName} expires in ${daysLeft} days. Take action!`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phoneNumber,
    });
    console.log(`✅ SMS sent to ${phoneNumber}`);
  } catch (error) {
    console.error('❌ SMS sending failed:', error.message);
  }
};

module.exports = {
  sendLowStockSMS,
  sendExpirySMS,
};
