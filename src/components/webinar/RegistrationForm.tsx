import { useState } from "react";
import { submitToSheet } from "../utils/submitToSheet";
export default function RegistrationForm() {
   const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await submitToSheet({
      formName: "Webinar Registration Form",
      ...data,
    });

    alert("✅ Spot Reserved!");

    setData({ name: "", email: "", phone: "" });
  };
  return (
    <form className="bg-white p-8 rounded-xl shadow-lg text-gray-800" onSubmit={handleSubmit}>
      <h3 className="text-2xl font-bold mb-6 text-center">
        Register Free
      </h3>

       <input
        placeholder="Full Name"
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
        required
        className="w-full mb-4 p-3 border rounded"
      />

      <input
        placeholder="Email"
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
        className="w-full mb-4 p-3 border rounded"
      />

      <input
        placeholder="Phone"
        value={data.phone}
        onChange={(e) => setData({ ...data, phone: e.target.value })}
        className="w-full mb-6 p-3 border rounded"
      />

      <button className="w-full bg-green-600 text-white py-3 rounded font-bold">
        Reserve My Spot ✅
      </button>
    </form>
  );
}
