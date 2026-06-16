import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Login</h1>

      <input
        type="email"
        placeholder="Email"
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
      />

      <br /><br />

      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default LoginPage;