// DEVLY Global Realtime Cloud Database Configuration
// This enables instant live synchronization between Mobile Phones (Riders) and Laptops (Admin).

window.DEVLY_CONFIG = {
  // Cloud Database REST Endpoint
  // You can use a free Google Firebase Realtime Database URL, Supabase, or Google Apps Script Webhook.
  cloudDbUrl: localStorage.getItem('devly_custom_cloud_url') || 'https://devly-partner-registry-default-rtdb.firebaseio.com/applications',
  
  // Realtime Polling Interval (in ms)
  pollIntervalMs: 10000,
  
  // Enable sound chime when a new rider registers from their phone
  enableAudioAlert: true,
  
  // Set custom cloud database URL
  setCloudUrl: function(url) {
    if (url && url.trim()) {
      localStorage.setItem('devly_custom_cloud_url', url.trim());
      this.cloudDbUrl = url.trim();
    } else {
      localStorage.removeItem('devly_custom_cloud_url');
      this.cloudDbUrl = 'https://devly-partner-registry-default-rtdb.firebaseio.com/applications';
    }
  }
};
