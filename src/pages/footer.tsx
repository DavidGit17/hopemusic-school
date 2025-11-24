import { Link } from "react-router-dom";
import ImageHI from "/PT-W.png"

function footer() {
  return (
    <footer className="border-t bg-white md:px-16  w-full flex justify-center">
      <div className="container flex flex-col items-center gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <img className="h-6 w-6 text-[#EC622D]" src={ImageHI} />
            <span>Hope Music School</span>
          </Link>
          <p className="text-sm text-muted-foreground text-center md:text-left">
            Inspiring musicians since 2005. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 md:flex-row md:items-center md:gap-4">
          <Link
            to="/privacy"
            className="text-sm text-muted-foreground hover:underline"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms"
            className="text-sm text-muted-foreground hover:underline"
          >
            Terms of Service
          </Link>
          <Link
            to="/contact"
            className="text-sm text-muted-foreground hover:underline"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default footer;
