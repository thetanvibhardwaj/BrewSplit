import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>☕ BrewSplit</h1>
      <h2>Split Expenses, Not Friendships</h2>

      <button onClick={() => navigate("/login")}>
        Get Started
      </button>
    </div>
  );
}

export default LandingPage;