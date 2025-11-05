import { useState, useEffect } from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    };
    
    // Set the initial value
    checkSize();

    // Add event listener
    window.addEventListener("resize", checkSize);

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", checkSize);
  }, [])

  return isMobile
}
