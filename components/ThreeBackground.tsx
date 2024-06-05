"use client";

import useThree from "./clients/hooks/useThree";
import DynamicBackground from "./scenes/DynamicBackground";

const ThreeBackground: React.FC = () => {
  const canvasRef = useThree(DynamicBackground);

  return (
    <div
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        backgroundColor: "Background",
      }}
    />
  );
};

export default ThreeBackground;
