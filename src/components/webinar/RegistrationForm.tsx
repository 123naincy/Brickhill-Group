export default function RegistrationForm() {
  return (
    <form className="bg-white p-8 rounded-xl shadow-lg text-gray-800">
      <h3 className="text-2xl font-bold mb-6 text-center">
        Register Free
      </h3>

      <input className="w-full mb-4 p-3 border rounded" placeholder="Full Name" />
      <input className="w-full mb-4 p-3 border rounded" placeholder="Email" />
      <input className="w-full mb-6 p-3 border rounded" placeholder="Phone" />

      <button className="w-full bg-green-600 text-white py-3 rounded font-bold hover:bg-green-700">
        Reserve My Spot
      </button>
    </form>
  );
}
