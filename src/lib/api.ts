export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  message: string;
}

export class APIService {
  private static baseUrl = process.env.NEXT_PUBLIC_API_URL || '/api';

  static async submitContactForm(data: ContactFormData): Promise<{ success: boolean; message?: string }> {
    try {
      const response = await fetch(`${this.baseUrl}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      return { success: true };
    } catch (error) {
      console.error('Contact form submission error:', error);
      return {
        success: false,
        message: 'Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.'
      };
    }
  }

  static async subscribeNewsletter(email: string): Promise<{ success: boolean; message?: string }> {
    try {
      const response = await fetch(`${this.baseUrl}/newsletter`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Failed to subscribe');
      }

      return { success: true };
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      return {
        success: false,
        message: 'Une erreur est survenue lors de l\'inscription. Veuillez réessayer.'
      };
    }
  }
}