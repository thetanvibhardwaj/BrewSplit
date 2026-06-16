import { useState } from "react";

function ImportPage() {
  const [file, setFile] = useState<File | null>(null);
  const [report, setReport] = useState<any[]>([]);

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a CSV file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(
        "http://localhost:5000/api/import",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      setReport(data.anomalies || []);

      alert("CSV Imported Successfully!");
    } catch (error) {
      console.error(error);
      alert("Import Failed");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>📂 Import Expenses CSV</h1>

      <input
        type="file"
        accept=".csv"
        onChange={(e) => {
          if (e.target.files) {
            setFile(e.target.files[0]);
          }
        }}
      />

      <br />
      <br />

      <button onClick={handleUpload}>
        Upload CSV
      </button>

      <br />
      <br />

      <h2>Import Report</h2>

      <ul>
        {report.map((item, index) => (
          <li key={index}>
            Row {item.row}: {item.issue}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ImportPage;