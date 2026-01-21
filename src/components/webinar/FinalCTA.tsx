export default function FinalCTA() {
  return (
    <section className="py-20 bg-green-700 text-white text-center">
      <h2 className="text-4xl font-bold mb-6">
        Don't Miss This Opportunity
      </h2>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="bg-white text-green-700 px-8 py-4 rounded font-bold"
      >
        Register Now – It's Free
      </a>
    </section>
  );
}
