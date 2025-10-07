import { motion } from "motion/react";
import { Rocket, Users, Zap, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Rocket,
    title: "Launch Simulation",
    description:
      "Deploy realistic phishing campaigns to test your team's awareness without any risk.",
    color: "#38BDF8",
  },
  {
    number: "02",
    icon: Users,
    title: "Measure Responses",
    description:
      "Track who clicks, who reports, and identify vulnerable team members in real-time.",
    color: "#16A34A",
  },
  {
    number: "03",
    icon: Zap,
    title: "Instant Micro-Training",
    description:
      "Deliver targeted training the moment an employee clicks a simulated phishing link.",
    color: "#38BDF8",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Monitor Progress",
    description:
      "Watch your organization's security posture improve with detailed analytics and reports.",
    color: "#16A34A",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 lg:py-32 bg-[#0F172A] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-[#38BDF8]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-[#16A34A]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Four simple steps to transform your team into a human firewall.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="mb-12 lg:mb-16 last:mb-0"
              >
                <div className={`flex flex-col lg:flex-row items-center gap-8 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`flex-1 ${isEven ? 'lg:text-right' : 'lg:text-left'} text-center lg:text-left`}>
                    <div className={`inline-flex items-center gap-3 mb-4 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                      <span
                        className="text-6xl opacity-20"
                        style={{ color: step.color }}
                      >
                        {step.number}
                      </span>
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${step.color}20` }}
                      >
                        <Icon className="w-6 h-6" style={{ color: step.color }} />
                      </div>
                    </div>
                    <h3 className="text-white text-2xl mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-lg max-w-md mx-auto lg:mx-0">
                      {step.description}
                    </p>
                  </div>

                  {/* Connecting Line */}
                  <div className="hidden lg:block relative">
                    <div
                      className="w-24 h-0.5"
                      style={{
                        background: `linear-gradient(90deg, ${step.color}00, ${step.color}, ${step.color}00)`,
                      }}
                    />
                    <motion.div
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
                      style={{ backgroundColor: step.color }}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [1, 0.5, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </div>

                  {/* Visual Element */}
                  <div className="flex-1 flex justify-center">
                    <motion.div
                      className="w-48 h-48 rounded-2xl border-2 flex items-center justify-center relative"
                      style={{
                        borderColor: `${step.color}40`,
                        backgroundColor: `${step.color}10`,
                      }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="w-20 h-20" style={{ color: step.color }} />
                      <motion.div
                        className="absolute inset-0 rounded-2xl"
                        style={{
                          border: `2px solid ${step.color}`,
                          opacity: 0.3,
                        }}
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0.3, 0.1, 0.3],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
