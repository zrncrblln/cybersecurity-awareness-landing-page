import { motion } from "motion/react";
import { Calendar, ArrowRight, Shield, Lock } from "lucide-react";
import { Button } from "./ui/button";

export function CTAFooter() {
  return (
    <section className="relative py-20 lg:py-32 bg-[#0F172A] overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#38BDF8]/10 to-[#16A34A]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#38BDF8 1px, transparent 1px), linear-gradient(90deg, #38BDF8 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#16A34A]/10 border border-[#16A34A]/30 mb-6"
          >
            <Shield className="w-4 h-4 text-[#16A34A]" />
            <span className="text-sm text-[#16A34A]">
              Enterprise-Grade Security
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl text-white mb-6 leading-tight"
          >
            Take the First Step Toward a{" "}
            <span className="text-[#38BDF8]">Phish-Free Workplace</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto"
          >
            Join thousands of organizations that trust our platform to protect
            their teams. Get started with a personalized demo today.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button
              size="lg"
              className="bg-[#38BDF8] hover:bg-[#38BDF8]/90 text-[#0F172A] group transition-all duration-300 hover:shadow-[0_0_40px_rgba(56,189,248,0.6)] px-8 py-6 rounded-xl"
            >
              <Calendar className="mr-2 w-5 h-5" />
              Schedule a Demo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#16A34A]/50 text-black hover:text-white hover:bg-[#16A34A]/10 hover:border-[#16A34A] px-8 py-6 rounded-xl transition-all duration-300 bg-white"
            >
              Start Free Trial
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400"
          >
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#16A34A]" />
              <span>SOC 2 Certified</span>
            </div>
            <div className="w-1 h-1 bg-gray-600 rounded-full hidden sm:block" />
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#16A34A]" />
              <span>GDPR Compliant</span>
            </div>
            <div className="w-1 h-1 bg-gray-600 rounded-full hidden sm:block" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#16A34A] rounded-full animate-pulse" />
              <span>No Credit Card Required</span>
            </div>
          </motion.div>

          {/* Footer Bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-20 pt-8 border-t border-gray-800"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
              <p>© 2025 PhishGuard. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-[#38BDF8] transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-[#38BDF8] transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-[#38BDF8] transition-colors">
                  Contact
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
