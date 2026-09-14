"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [formData, setFormData] = useState({ userEmail: "", password: "" });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (res.ok) {
      router.push("/admin");
    } else {
      setError(data.message);
    }
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ccc",
      }}
    >
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            required
            value={formData.userEmail}
            onChange={(e) =>
              setFormData({ ...formData, userEmail: e.target.value })
            }
            style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            required
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
          />
        </div>
        <button type="submit" style={{ width: "100%", padding: "10px" }}>
          Login
        </button>
      </form>
    </div>
  );
}
