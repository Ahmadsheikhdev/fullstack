import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const roleUpdateSchema = z.object({
  role: z.enum(['STUDENT', 'INSTRUCTOR']),
});

export async function PATCH(request: NextRequest) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const validatedData = roleUpdateSchema.parse(body);

    // Update user role
    const updatedUser = await prisma.user.update({
      where: { clerkId: userId },
      data: { role: validatedData.role },
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Role updated successfully',
        user: {
          id: updatedUser.id,
          role: updatedUser.role,
          name: updatedUser.name,
        }
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Role update error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Invalid role data',
          errors: error.issues 
        },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Something went wrong. Please try again.' 
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { clerkId: userId },
      select: {
        id: true,
        role: true,
        name: true,
        email: true,
      },
    });

    if (!user) {
      return NextResponse.json(
        { success: false, message: 'User not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        user 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Get user error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Something went wrong. Please try again.' 
      },
      { status: 500 }
    );
  }
} 