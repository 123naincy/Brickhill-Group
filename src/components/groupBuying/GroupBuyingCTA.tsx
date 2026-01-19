import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function GroupBuyingCTA() {
  return (
    <section className="py-24 text-center bg-gradient-to-r from-[#0f4b40] to-[#08362f]">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-[#fffbba] mb-6"
      >
        Buy Property Together. Save Lakhs.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-[#fffbba]/80 max-w-2xl mx-auto mb-10"
      >
        Join our group buying program and unlock special bulk discounts directly from builders.
        Transparent process. Verified projects. End-to-end support.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Link
          to="/contact"
          className="inline-block bg-[#fffbba] text-[#0f4b40] px-12 py-4 rounded-full font-semibold text-lg hover:scale-105 transition"
        >
          Join Group Buying Now
        </Link>
      </motion.div>
    </section>
  );
}
