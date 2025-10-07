import { motion } from "motion/react";
import { Shield, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// Particle component
function Particle({ delay, duration, startX, startY }: { delay: number; duration: number; startX: string; startY: string }) {
  return (
    <motion.div
      className="absolute w-1 h-1 bg-[#38BDF8] rounded-full"
      style={{ left: startX, top: startY }}
      animate={{
        y: [0, -100, -200, -300],
        x: [0, Math.random() * 50 - 25],
        opacity: [0, 1, 1, 0],
        scale: [0, 1, 1, 0],
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
}

export function Hero() {
  // Generate particles
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 2,
    startX: `${Math.random() * 100}%`,
    startY: `${Math.random() * 100}%`,
  }));

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0F172A]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1660836814985-8523a0d713b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29yayUyMGRpZ2l0YWx8ZW58MXx8fHwxNzU5NjczMzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Cybersecurity network"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/90 via-[#0F172A]/80 to-[#0F172A]" />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {particles.map((particle) => (
          <Particle
            key={particle.id}
            delay={particle.delay}
            duration={particle.duration}
            startX={particle.startX}
            startY={particle.startY}
          />
        ))}
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#38BDF8]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#16A34A]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/30 mb-6"
            >
              <Shield className="w-4 h-4 text-[#38BDF8]" />
              <span className="text-sm text-[#38BDF8]">
                AI-Powered Protection
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight uppercase"
            >
              Protect Your Organization from{" "}
              <span className="text-[#38BDF8]">Phishing Attacks</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-gray-300 mb-8 max-w-xl"
            >
              Empower your team with real-time protection, training, and
              reporting tools.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-[#38BDF8] hover:bg-[#38BDF8]/90 text-[#0F172A] group transition-all duration-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] px-8 py-6 rounded-xl"
              >
                Start Free Simulation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#38BDF8]/50 text-black hover:text-white hover:bg-[#38BDF8]/10 hover:border-[#38BDF8] px-8 py-6 rounded-xl transition-all duration-300 bg-white"
              >
                Learn More
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12 flex items-center gap-8 text-sm text-gray-400"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#16A34A] rounded-full animate-pulse" />
                <span>99.9% Threat Detection</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#16A34A] rounded-full animate-pulse" />
                <span>500K+ Users Protected</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#38BDF8]/20 to-[#16A34A]/20 rounded-2xl blur-2xl" />
              
              {/* Dashboard Card */}
              <div className="relative bg-[#1E293B] rounded-2xl p-6 border border-[#38BDF8]/20 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <div className="w-3 h-3 bg-[#16A34A] rounded-full" />
                  </div>
                  <span className="text-xs text-gray-400">Real-time Dashboard</span>
                </div>

                {/* Alert Card */}
                <div className="bg-[#0F172A] rounded-lg p-4 border border-[#38BDF8]/30 mb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center">
                        <Shield className="w-5 h-5 text-red-500" />
                      </div>
                      <div>
                        <h4 className="text-white mb-1">Phishing Attempt Blocked</h4>
                        <p className="text-xs text-gray-400">2 minutes ago</p>
                      </div>
                    </div>
                    <span className="px-2 py-1 bg-red-500/10 text-red-400 text-xs rounded">
                      High Risk
                    </span>
                  </div>
                  <p className="text-sm text-gray-300">
                    Suspicious email from fake-support@example.com detected and quarantined.
                  </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#0F172A] rounded-lg p-3 border border-[#16A34A]/30">
                    <p className="text-xs text-gray-400 mb-1">Threats Blocked</p>
                    <p className="text-2xl text-[#16A34A]">127</p>
                  </div>
                  <div className="bg-[#0F172A] rounded-lg p-3 border border-[#38BDF8]/30">
                    <p className="text-xs text-gray-400 mb-1">Training Score</p>
                    <p className="text-2xl text-[#38BDF8]">94%</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
