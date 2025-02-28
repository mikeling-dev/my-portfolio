"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold mb-4">Hi, I&apos;m Mike</h1>
        <p className="text-xl mb-6">
          A passionate self-taught developer excited to turn every project{" "}
          awesome
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold"
        >
          Explore My Work
        </motion.button>
      </motion.div>
    </section>
  );
}
