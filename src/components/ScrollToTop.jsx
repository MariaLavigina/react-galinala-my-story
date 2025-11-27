// this code is to make sure when clicking on the navigation buttons the next page will start from the very top
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // scroll to top whenever route changes
  }, [pathname]);

  return null;
}
