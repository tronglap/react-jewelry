import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AutoTop = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [navigate]);
  return null;
};

export default AutoTop;
