import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function GroupBuyingCTA() {
  return (
    <section className="relative py-28 text-center bg-gradient-to-r from-[#073762] via-[#0b5394] to-[#073762] overflow-hidden">

      {/* Subtle overlay glow */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-xl"></div>

      <div className="relative max-w-4xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-extrabold mb-6"
          style={{
            background: "linear-gradient(90deg,#9fc5e9,#6fa8dd)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Buy Property Together. Save Lakhs.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-[#cfe3f8] max-w-2xl mx-auto mb-12 text-lg leading-relaxed"
        >
          Join our group buying program and unlock exclusive bulk discounts
          directly from verified developers. Transparent process.
          Strategic negotiations. End-to-end advisory support.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link
            to="/contact"
            className="inline-block px-12 py-4 rounded-full text-lg font-semibold text-white shadow-2xl transition duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(90deg,#3d85c5,#6fa8dd)",
            }}
          >
            Join Group Buying Now
          </Link>
        </motion.div>

      </div>
    </section>
  );
}