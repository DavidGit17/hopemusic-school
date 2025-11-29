import {
  SignInButton,
  UserButton,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";

export default function AuthButtons({ isMobile = false }: { isMobile?: boolean }) {
  return (
    <div className={isMobile ? "flex flex-col items-center py-2" : "flex items-center space-x-2"}>
      <SignedOut>
        {/* <SignInButton mode="modal" fallbackRedirectUrl="/">
          <button
            className={
              isMobile
                ? "text-black text-sm px-4 py-2 rounded-lg mb-2 hover:bg-gray-200 transition cursor-pointer w-32"
                : "text-black text-sm px-4 py-2 rounded-lg mr-2 hover:bg-gray-200 transition cursor-pointer"
            }
          >
            Login
          </button>
        </SignInButton> */}
        <SignInButton mode="modal" fallbackRedirectUrl="/">
          <button
            className={
              isMobile
                ? " text-white bg-[#EC622D]  text-sm px-6 py-2 rounded-lg hover:bg-[#263238] hover:brightness-110 transition cursor-pointer w-32"
                : " text-white bg-[#EC622D]  text-sm px-6 py-2 rounded-lg font-semibold font-inter hover:bg-[#be491a] hover:brightness-110 transition cursor-pointer"
            }
          >
            LOGIN
          </button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}
