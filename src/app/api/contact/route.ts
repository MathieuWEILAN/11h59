import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    const { firstName, lastName, email, company, message } = body;

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Tous les champs obligatoires doivent être renseignés.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Adresse email invalide.' },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Integrate with CRM

    // For now, just log the contact form data
    console.log('Contact form submission:', {
      firstName,
      lastName,
      email,
      company,
      message,
      timestamp: new Date().toISOString(),
    });

    // TODO: Implement email sending logic
    // await sendContactNotification({
    //   firstName,
    //   lastName,
    //   email,
    //   company,
    //   message,
    // });

    return NextResponse.json(
      { message: 'Votre message a été envoyé avec succès. Nous vous recontacterons rapidement.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Une erreur interne est survenue. Veuillez réessayer plus tard.' },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 });
}