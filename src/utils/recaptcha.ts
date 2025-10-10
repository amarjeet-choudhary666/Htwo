// Utility functions for reCAPTCHA handling

export const verifyRecaptcha = async (token: string): Promise<boolean> => {
  try {
    const response = await fetch('/api/verify-recaptcha', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),
    });

    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error('reCAPTCHA verification failed:', error);
    return false;
  }
};

export const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || '6LeCH-MrAAAAABDwoorWabto4QP8qm80PW_H2ABZ';
export const RECAPTCHA_SECRET_KEY = import.meta.env.VITE_RECAPTCHA_SECRET_KEY || '6LeCH-MrAAAAAC9IOvsULj8zAuU5Jqe3gF-yJJ_h';