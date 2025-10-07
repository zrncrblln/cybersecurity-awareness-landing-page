import { motion } from "motion/react";
import { Shield, Mail, BarChart3, AlertTriangle } from "lucide-react";
import { Card } from "./ui/card";

const features = [
  {
    icon: Shield,
    title: "Phishing Simulation",
    description:
      "Test employee awareness safely with realistic phishing scenarios. Track who clicks and provide immediate feedback.",
    color: "#38BDF8",
    delay: 0.1,
  },
  {
    icon: Mail,
    title: "Real-Time Threat Detection",
    description:
      "AI-powered email scanning identifies and blocks phishing attempts before they reach your team's inbox.",
    color: "#16A34A",
    delay: 0.2,
  },
  {
    icon: BarChart3,
    title: "User Awareness Dashboard",
    description:
      "Track training completion, risk scores, and improvement metrics across your entire organization.",
    color: "#38BDF8",
    delay: 0.3,
  },
  {
    icon: AlertTriangle,
    title: "Incident Reporting Tool",
    description:
      "One-click reporting to security team. Empower employees to flag suspicious emails instantly.",
    color: "#16A34A",
    delay: 0.4,
  },
];

export function Features() {
  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #0F172A 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#0F172A] mb-4">
            Complete Protection Suite
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to build a security-first culture in your organization.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: feature.delay }}
              >
                <Card className="p-6 h-full border-2 border-transparent hover:border-[#38BDF8]/30 transition-all duration-300 hover:shadow-xl group cursor-pointer bg-white">
                  {/* Icon Container */}
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: `${feature.color}15`,
                    }}
                  >
                    <Icon
                      className="w-7 h-7"
                      style={{ color: feature.color }}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-[#0F172A] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover Effect Line */}
                  <div
                    className="h-1 w-0 group-hover:w-full transition-all duration-300 mt-4 rounded-full"
                    style={{ backgroundColor: feature.color }}
                  />
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
