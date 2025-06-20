import {
  SignInButton,
  SignUpButton,
  UserButton,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";

export default function AuthButtons({ isMobile = false }: { isMobile?: boolean }) {
  return (
    <div className={isMobile ? "flex flex-col items-center py-2" : "flex items-center space-x-2"}>
      <SignedOut>
        <SignInButton mode="modal" fallbackRedirectUrl="/">
          <button
            className={
              isMobile
                ? "text-black text-sm px-4 py-2 rounded-lg mb-2 hover:bg-gray-200 transition cursor-pointer w-32"
                : "text-black text-sm px-4 py-2 rounded-lg mr-2 hover:bg-gray-200 transition cursor-pointer"
            }
          >
            Login
          </button>
        </SignInButton>
        <SignUpButton mode="modal" fallbackRedirectUrl="/">
          <button
            className={
              isMobile
                ? "bg-purple-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-purple-700 transition cursor-pointer w-32"
                : "bg-purple-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-purple-700 transition cursor-pointer"
            }
          >
            Sign Up
          </button>
        </SignUpButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}
