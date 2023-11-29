'use client';

import { Button } from '@/components/ui/button';
import Logo from '@/components/ui/logo';
import OnboardUser from '@/components/ui/onboarding-modal';
import ProjectUploadModal from '@/components/ui/project-upload-modal';
import SignUpModal from '@/components/ui/sign-up-modal';
import { ThemeToggle } from '@/components/ui/toggle';
import { useAuth } from '@/hooks/user/auth';
import { useUserProfile } from '@/hooks/user/profile';
import { api } from '@/trpc/react';
import { LucideUpload } from 'lucide-react';
import Link from 'next/link';
import UserAuthButton from '../UserAuthButton';

const NavBar = () => {
  const { session, isLoaded } = useAuth();
  // const supabase = supabaseClientComponentClient();
  const userId = session?.user?.id;

  // ! DO THIS IN A BETTER WAY, DO NOT DELETE FOR NOW
  useUserProfile();

  const { data } = api.user.hello.useQuery(undefined, {
    onSuccess: (data) => {
      console.log(`Protected query came in:`, data);
    },
  });

  return (
    <nav className="sticky top-0 z-50 flex w-screen items-center justify-between bg-background/30 px-6 py-4 backdrop-blur-md md:px-10">
      <div className="flex w-full items-center justify-between space-x-4">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-semibold">
            <Logo />
          </Link>
        </div>
        <div className="flex h-10 items-center gap-6">
          <OnboardUser>
            <Button variant="outline" className="rounded-sm">
              Get Verified
            </Button>
          </OnboardUser>

          {userId && isLoaded && (
            <div className="flex items-center gap-4">
              <ProjectUploadModal>
                <Button variant="default" className="rounded-sm">
                  <LucideUpload className="mr-2 w-4" />
                  Upload Project
                </Button>
              </ProjectUploadModal>
              <UserAuthButton />
            </div>
          )}

          {!userId && isLoaded && (
            <SignUpModal>
              <Button variant="secondary">Sign In</Button>
            </SignUpModal>
          )}

          {!isLoaded && !userId && (
            <span className="inline-block aspect-square h-9 w-9 animate-pulse rounded-full bg-gray-300"></span>
          )}

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
