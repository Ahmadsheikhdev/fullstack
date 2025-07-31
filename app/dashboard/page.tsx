import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import RoleSelection from "@/components/RoleSelection";

export default async function DashboardPage() {
  const { userId } = await auth();
  
  if (!userId) {
    redirect("/sign-in");
  }

  // Get user from database
  const user = await prisma.user.findUnique({
    where: { clerkId: userId },
  });

  // If user doesn't exist in database, create them
  if (!user) {
    const clerkUser = await currentUser();
    if (!clerkUser) {
      redirect("/sign-in");
    }

    const newUser = await prisma.user.create({
      data: {
        clerkId: userId,
        email: clerkUser.emailAddresses[0]?.emailAddress,
        name: clerkUser.fullName,
        image: clerkUser.imageUrl,
        role: "STUDENT", // Default role
      },
    });

    // Show role selection for new users
    return <RoleSelection />;
  }

  // If user exists but hasn't set a role (shouldn't happen with default role, but just in case)
  if (!user.role) {
    return <RoleSelection />;
  }

  // Redirect based on user role
  if (user.role === "INSTRUCTOR") {
    redirect("/dashboard/instructor");
  } else {
    redirect("/dashboard/student");
  }
} 