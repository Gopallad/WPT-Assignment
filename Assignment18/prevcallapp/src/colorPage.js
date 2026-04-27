import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
function ColorPage({ color }) {
  const navigate = useNavigate();
  return (
    <div style={{ backgroundColor: color, height: "100vh" }}>
      <h1>Background: {color}</h1>
      <button onClick={() => navigate("/")}>Default</button>
      <button onClick={() => navigate("/red")}>Red</button>
      <button onClick={() => navigate("/yellow")}>Yellow</button>
      <button onClick={() => navigate("/green")}>Green</button>
      <button onClick={() => navigate("/blue")}>Blue</button>
      <button onClick={() => navigate("/orange")}>Orange</button>
    </div>
  );
}
export default ColorPage;