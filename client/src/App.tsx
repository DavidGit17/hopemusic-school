import { Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/home";
import Gallery from "./pages/gallery";
import Navbar from "./components/navbar";
import { useEffect } from "react";
import { useAuth, useUser } from "@clerk/clerk-react"; // ✅ added useUser
import { callProtectedAPI } from "./utils/callProtectedApi";

function App() {
  const { isSignedIn, getToken } = useAuth();
  const { user } = useUser(); // ✅ fetch Clerk user data

  useEffect(() => {
    const syncUser = async () => {
      if (!isSignedIn || !user) return;

      try {
        const token = await getToken();
        console.log("🔐 Clerk Token:", token);

        if (!token) {
          console.error("❌ No token received from Clerk.");
          return;
        }

        const userData = {
          clerkId: user.id,
          username: user.username || user.firstName || "Guest",
          email:
            user.primaryEmailAddress?.emailAddress || "noemail@example.com",
          createdAt: user.createdAt,
        };

        await callProtectedAPI("users", token, "POST", userData);
      } catch (error) {
        console.error("❌ Failed to sync user:", error);
      }
    };

    syncUser();
  }, [isSignedIn, user, getToken]);

  return (
    <div className="bg-[#faf5ff] min-h-screen pt-20 md:pt-24">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
}

export default App;
