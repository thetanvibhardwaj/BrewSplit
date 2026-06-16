function GroupPage() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>🏠 Flat Expenses</h1>

      <h2>Members</h2>

      <ul>
        <li>Aisha</li>
        <li>Rohan</li>
        <li>Priya</li>
        <li>Meera</li>
      </ul>

      <h2>Expenses</h2>

      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>Description</th>
            <th>Paid By</th>
            <th>Amount</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Electricity Bill</td>
            <td>Aisha</td>
            <td>₹2000</td>
          </tr>

          <tr>
            <td>Groceries</td>
            <td>Priya</td>
            <td>₹3500</td>
          </tr>
        </tbody>
      </table>

      <br />

      <h2>Balances</h2>

      <p>Rohan owes ₹500</p>
      <p>Priya owes ₹300</p>
      <p>Aisha should receive ₹800</p>

      <br />

      <button>Add Expense</button>
      <button style={{ marginLeft: "10px" }}>
        Settle Payment
      </button>
    </div>
  );
}

export default GroupPage;