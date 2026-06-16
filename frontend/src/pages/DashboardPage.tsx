import { Link } from "react-router-dom";

function DashboardPage() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>BrewSplit Dashboard</h1>

      <h2>Your Groups</h2>

      <div
        style={{
          border: "1px solid gray",
          padding: "15px",
          marginBottom: "10px",
        }}
      >
        <Link to="/group">
          <h3>🏠 Flat Expenses</h3>
        </Link>

        <p>Members: Aisha, Rohan, Priya, Meera</p>
        <p>Total Expenses: ₹12,500</p>
      </div>

      <div
        style={{
          border: "1px solid gray",
          padding: "15px",
          marginBottom: "10px",
        }}
      >
        <h3>🏖 Goa Trip</h3>

        <p>Members: Dev, Priya, Rohan</p>
        <p>Total Expenses: ₹18,700</p>
      </div>

      <br />

      <Link to="/import">
        <button>📂 Import CSV</button>
      </Link>

      <br />
      <br />

      <button>Create New Group</button>
    </div>
  );
}

export default DashboardPage;