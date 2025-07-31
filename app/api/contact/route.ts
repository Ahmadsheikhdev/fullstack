import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

// Validation schema for contact form
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the request body
    const validatedData = contactSchema.parse(body);
    
    // Create contact record in database
    const contact = await prisma.contact.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        subject: validatedData.subject || 'General Inquiry',
        message: validatedData.message,
      },
    });
    
    // Return success response
    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your message! We\'ll get back to you soon.',
        contactId: contact.id 
      },
      { status: 201 }
    );
    
  } catch (error) {
    console.error('Contact form error:', error);
    
    // Handle validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Invalid form data',
          errors: error.errors 
        },
        { status: 400 }
      );
    }
    
    // Handle other errors
    return NextResponse.json(
      { 
        success: false, 
        message: 'Something went wrong. Please try again.' 
      },
      { status: 500 }
    );
  }
}

// Optional: GET endpoint to retrieve contacts (for admin use)
export async function GET(request: NextRequest) {
  try {
    // Add authentication/authorization here for admin access
    const contacts = await prisma.contact.findMany({
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        name: true,
        email: true,
        subject: true,
        message: true,
        status: true,
        createdAt: true,
      },
    });
    
    return NextResponse.json({ contacts });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return NextResponse.json(
      { message: 'Failed to fetch contacts' },
      { status: 500 }
    );
  }
} 