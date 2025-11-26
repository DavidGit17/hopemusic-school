import { Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/home";
import { useEffect } from "react";
import { useAuth, useUser } from "@clerk/clerk-react";
import { callProtectedAPI } from "./utils/callProtectedApi";
import Layout from "./components/Layout";
import Instruments from "./pages/instruments";
import Instructors from "./pages/instructors";
import About from "./pages/about";
import Contact from "./pages/contact";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const { isSignedIn, getToken } = useAuth();
  const { user } = useUser();

  useEffect(() => {
    const syncUser = async () => {
      if (!isSignedIn || !user) return;

      try {
        const token = await getToken();

        if (!token) {
          console.error("❌ No token received from Clerk.");
          return;
        }

        const userData = {
          clerkId: user.id,
          username: user.username || user.firstName || "Guest",
          email: user.primaryEmailAddress?.emailAddress || "noemail@example.com",
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
    <>
      <ScrollToTop />

      <Routes>
        {/* 👇 Layout wrapper for all routes */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/instruments" element={<Instruments />} />
          <Route path="/instructors" element={<Instructors />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

