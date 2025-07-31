"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  GraduationCap, 
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function RoleSelection() {
  const [selectedRole, setSelectedRole] = useState<'STUDENT' | 'INSTRUCTOR' | null>(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const router = useRouter();

  const handleRoleSelect = (role: 'STUDENT' | 'INSTRUCTOR') => {
    setSelectedRole(role);
  };

  const handleContinue = async () => {
    if (!selectedRole) return;

    setIsUpdating(true);
    try {
      const response = await fetch('/api/user/role', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ role: selectedRole }),
      });

      if (response.ok) {
        // Redirect to appropriate dashboard
        if (selectedRole === 'INSTRUCTOR') {
          router.push('/dashboard/instructor');
        } else {
          router.push('/dashboard/student');
        }
      } else {
        console.error('Failed to update role');
      }
    } catch (error) {
      console.error('Error updating role:', error);
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Choose Your Role</h1>
          <p className="text-xl text-muted-foreground">
            Select how you&apos;d like to use ahmadsheikhdev
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Student Role */}
          <Card 
            className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
              selectedRole === 'STUDENT' 
                ? 'ring-2 ring-primary bg-primary/5' 
                : 'hover:bg-muted/50'
            }`}
            onClick={() => handleRoleSelect('STUDENT')}
          >
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-blue-500" />
              </div>
              <CardTitle className="text-2xl font-bold text-foreground">Student</CardTitle>
              <p className="text-muted-foreground">Learn from expert developers</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm">Access to premium courses</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm">Track your learning progress</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm">Earn certificates</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm">Join student community</span>
                </div>
              </div>
              {selectedRole === 'STUDENT' && (
                <Badge className="w-full justify-center bg-blue-500">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Selected
                </Badge>
              )}
            </CardContent>
          </Card>

          {/* Instructor Role */}
          <Card 
            className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
              selectedRole === 'INSTRUCTOR' 
                ? 'ring-2 ring-primary bg-primary/5' 
                : 'hover:bg-muted/50'
            }`}
            onClick={() => handleRoleSelect('INSTRUCTOR')}
          >
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-500" />
              </div>
              <CardTitle className="text-2xl font-bold text-foreground">Instructor</CardTitle>
              <p className="text-muted-foreground">Share your expertise</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm">Create and sell courses</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm">Earn from your knowledge</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm">Analytics and insights</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm">Build your brand</span>
                </div>
              </div>
              {selectedRole === 'INSTRUCTOR' && (
                <Badge className="w-full justify-center bg-purple-500">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Selected
                </Badge>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button 
            onClick={handleContinue}
            disabled={!selectedRole || isUpdating}
            size="lg"
            className="px-8 py-3 text-lg"
          >
            {isUpdating ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                Setting up...
              </>
            ) : (
              <>
                Continue
                <ArrowRight className="w-5 h-5 ml-2" />
              </>
            )}
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            You can change your role later in your profile settings
          </p>
        </div>
      </div>
    </div>
  );
} 