import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client with authentication required
export const base44 = createClient({
  appId: "68cfe7df0d39f29d6e4de1c0", 
  requiresAuth: true // Ensure authentication is required for all operations
});
