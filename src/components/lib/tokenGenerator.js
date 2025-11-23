// utils/tokenGenerator.js
export function generateSecureToken(length = 32) {
  const array = new Uint8Array(length); // Create a typed array of the desired length
  crypto.getRandomValues(array); // Fill the array with cryptographically secure random values

  // Convert the array to a hexadecimal string
  return Array.from(array, (byte) => byte.toString(16).padStart(2, "0")).join(
    ""
  );
}
