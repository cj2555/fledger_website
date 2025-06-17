// Cookie utility functions

/**
 * Set a cookie in the browser
 * 
 * @param name The name of the cookie
 * @param value The value of the cookie
 * @param days Number of days until the cookie expires
 */
export const setCookie = (name: string, value: string, days: number = 365) => {
  if (typeof document === 'undefined') return; // Only run on client side
  
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = `; expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value}${expires}; path=/; SameSite=Lax`;
};

/**
 * Get a cookie value by name
 * 
 * @param name The name of the cookie to retrieve
 * @returns The cookie value or an empty string if not found
 */
export const getCookie = (name: string): string => {
  if (typeof document === 'undefined') return ''; // Only run on client side
  
  const nameEQ = `${name}=`;
  const cookies = document.cookie.split(';');
  
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1, cookie.length);
    }
    if (cookie.indexOf(nameEQ) === 0) {
      return cookie.substring(nameEQ.length, cookie.length);
    }
  }
  
  return '';
};

/**
 * Delete a cookie by name
 * 
 * @param name The name of the cookie to delete
 */
export const deleteCookie = (name: string): void => {
  if (typeof document === 'undefined') return; // Only run on client side
  document.cookie = `${name}=; Max-Age=-99999999; path=/`;
};

/**
 * Check if a cookie exists
 * 
 * @param name The name of the cookie to check
 * @returns True if the cookie exists, false otherwise
 */
export const cookieExists = (name: string): boolean => {
  return getCookie(name) !== '';
}; 