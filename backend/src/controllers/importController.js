const { processCSV } = require("../services/csvImportService");

const importCSV = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        status: "error",
        message: "No CSV file uploaded",
      });
    }

    const rows = await processCSV(req.file.path);

    const anomalies = [];
    const seenExpenses = new Set();

    rows.forEach((row, index) => {
      // Missing Amount
      if (!row.amount || row.amount === "") {
        anomalies.push({
          row: index + 1,
          issue: "Missing Amount",
        });
      }

      // Missing Payer
      if (!row.paid_by || row.paid_by === "") {
        anomalies.push({
          row: index + 1,
          issue: "Missing Payer",
        });
      }

      // Negative Amount
      if (Number(row.amount) < 0) {
        anomalies.push({
          row: index + 1,
          issue: "Negative Amount Found",
        });
      }

      // Duplicate Detection
      const expenseKey =
        (row.description || "") +
        (row.amount || "") +
        (row.paid_by || "");

      if (seenExpenses.has(expenseKey)) {
        anomalies.push({
          row: index + 1,
          issue: "Duplicate Expense Found",
        });
      } else {
        seenExpenses.add(expenseKey);
      }
    });

    res.json({
      status: "success",
      totalRows: rows.length,
      totalAnomalies: anomalies.length,
      anomalies,
    });

  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

module.exports = { importCSV };