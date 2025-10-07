import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Mail,
  Shield,
  BarChart3,
  Users,
  AlertCircle,
  CheckCircle,
  Play,
  X,
} from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

const tourSteps = [
  {
    id: 1,
    title: "Email Phishing Simulation",
    description:
      "Create and deploy realistic phishing campaigns to test your team's awareness. Our AI generates authentic-looking emails that mirror real-world threats.",
    icon: Mail,
    color: "#38BDF8",
    demo: {
      type: "email",
      from: "IT-Support@company-internal.com",
      subject: "URGENT: Password Reset Required",
      preview:
        "Your password will expire in 24 hours. Click here to reset immediately to avoid account suspension...",
      status: "suspicious",
    },
  },
  {
    id: 2,
    title: "Real-Time Threat Detection",
    description:
      "AI-powered scanning analyzes every incoming email for phishing indicators, malicious links, and social engineering tactics.",
    icon: Shield,
    color: "#16A34A",
    demo: {
      type: "detection",
      threats: [
        { name: "Spoofed sender domain", severity: "high" },
        { name: "Suspicious link detected", severity: "critical" },
        { name: "Urgent language pattern", severity: "medium" },
      ],
    },
  },
  {
    id: 3,
    title: "Training Progress Dashboard",
    description:
      "Monitor your organization's security posture with comprehensive analytics, risk scores, and training completion metrics.",
    icon: BarChart3,
    color: "#38BDF8",
    demo: {
      type: "dashboard",
      stats: {
        clickRate: 12,
        reportRate: 76,
        trainedUsers: 234,
        totalUsers: 250,
      },
    },
  },
  {
    id: 4,
    title: "Employee Reporting Tool",
    description:
      "Empower your team to become the first line of defense. One-click reporting sends suspicious emails directly to your security team.",
    icon: Users,
    color: "#16A34A",
    demo: {
      type: "reporting",
      reported: 156,
      today: 12,
    },
  },
];

export function ProductTour() {
  const [activeStep, setActiveStep] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  const currentStep = tourSteps[activeStep];
  const Icon = currentStep.icon;

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #38BDF8 1px, transparent 0)`,
            backgroundSize: "40px 40px",
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#0F172A] mb-4">
            Interactive Product Tour
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            See how PhishGuard protects your organization in real-time.
          </p>

          {/* Video Demo Button */}
          <Button
            onClick={() => setShowVideo(true)}
            size="lg"
            className="bg-[#0F172A] hover:bg-[#1E293B] text-white group"
          >
            <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
            Watch 2-Minute Demo
          </Button>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Step Navigation */}
            <div className="space-y-4">
              {tourSteps.map((step, index) => {
                const StepIcon = step.icon;
                const isActive = index === activeStep;

                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card
                      onClick={() => setActiveStep(index)}
                      className={`p-6 cursor-pointer transition-all duration-300 ${
                        isActive
                          ? "border-2 border-[#38BDF8] bg-[#38BDF8]/5 shadow-lg"
                          : "border-2 border-transparent hover:border-gray-200"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                            isActive ? "scale-110" : ""
                          }`}
                          style={{
                            backgroundColor: isActive
                              ? `${step.color}20`
                              : "#f3f4f6",
                          }}
                        >
                          <StepIcon
                            className="w-6 h-6"
                            style={{ color: isActive ? step.color : "#9ca3af" }}
                          />
                        </div>
                        <div className="flex-1">
                          <h3
                            className={`mb-2 ${
                              isActive ? "text-[#0F172A]" : "text-gray-700"
                            }`}
                          >
                            {step.title}
                          </h3>
                          <p
                            className={`text-sm ${
                              isActive ? "text-gray-700" : "text-gray-500"
                            }`}
                          >
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* Right Side - Interactive Demo */}
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#0F172A] rounded-2xl p-8 border-2 border-[#38BDF8]/30 shadow-2xl relative overflow-hidden"
                >
                  {/* Glow Effect */}
                  <div
                    className="absolute -inset-1 rounded-2xl blur-xl opacity-30"
                    style={{
                      background: `linear-gradient(135deg, ${currentStep.color}, transparent)`,
                    }}
                  />

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <Icon className="w-8 h-8" style={{ color: currentStep.color }} />
                        <h3 className="text-white text-xl">
                          {currentStep.title}
                        </h3>
                      </div>
                      <Badge
                        variant="outline"
                        className="border-[#16A34A] text-[#16A34A]"
                      >
                        Live Demo
                      </Badge>
                    </div>

                    {/* Demo Content */}
                    {currentStep.demo.type === "email" && (
                      <div className="space-y-4">
                        <div className="bg-[#1E293B] rounded-lg p-4">
                          <div className="flex items-center gap-2 mb-3">
                            <AlertCircle className="w-5 h-5 text-red-500" />
                            <span className="text-red-400">
                              Phishing Detected
                            </span>
                          </div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between text-gray-400">
                              <span>From:</span>
                              <span className="text-red-400">
                                {currentStep.demo.from}
                              </span>
                            </div>
                            <div className="flex justify-between text-gray-400">
                              <span>Subject:</span>
                              <span className="text-white">
                                {currentStep.demo.subject}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="bg-[#1E293B] rounded-lg p-4">
                          <p className="text-gray-300 text-sm">
                            {currentStep.demo.preview}
                          </p>
                        </div>
                        <div className="flex gap-3">
                          <Button
                            size="sm"
                            className="flex-1 bg-red-500/20 text-red-400 hover:bg-red-500/30 border border-red-500/50"
                          >
                            Quarantine
                          </Button>
                          <Button
                            size="sm"
                            className="flex-1 bg-[#16A34A]/20 text-[#16A34A] hover:bg-[#16A34A]/30 border border-[#16A34A]/50"
                          >
                            Report
                          </Button>
                        </div>
                      </div>
                    )}

                    {currentStep.demo.type === "detection" && (
                      <div className="space-y-3">
                        {currentStep.demo.threats?.map((threat, idx) => (
                          <div
                            key={idx}
                            className="bg-[#1E293B] rounded-lg p-4 flex items-center justify-between"
                          >
                            <div className="flex items-center gap-3">
                              <AlertCircle
                                className={`w-5 h-5 ${
                                  threat.severity === "critical"
                                    ? "text-red-500"
                                    : threat.severity === "high"
                                    ? "text-orange-500"
                                    : "text-yellow-500"
                                }`}
                              />
                              <span className="text-gray-300">{threat.name}</span>
                            </div>
                            <Badge
                              className={
                                threat.severity === "critical"
                                  ? "bg-red-500/20 text-red-400"
                                  : threat.severity === "high"
                                  ? "bg-orange-500/20 text-orange-400"
                                  : "bg-yellow-500/20 text-yellow-400"
                              }
                            >
                              {threat.severity}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    )}

                    {currentStep.demo.type === "dashboard" && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-[#1E293B] rounded-lg p-4">
                            <p className="text-gray-400 text-sm mb-1">
                              Click Rate
                            </p>
                            <p className="text-3xl text-red-400">
                              {currentStep.demo.stats?.clickRate}%
                            </p>
                          </div>
                          <div className="bg-[#1E293B] rounded-lg p-4">
                            <p className="text-gray-400 text-sm mb-1">
                              Report Rate
                            </p>
                            <p className="text-3xl text-[#16A34A]">
                              {currentStep.demo.stats?.reportRate}%
                            </p>
                          </div>
                        </div>
                        <div className="bg-[#1E293B] rounded-lg p-4">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-400 text-sm">
                              Training Progress
                            </span>
                            <span className="text-[#38BDF8]">
                              {currentStep.demo.stats?.trainedUsers}/
                              {currentStep.demo.stats?.totalUsers}
                            </span>
                          </div>
                          <div className="w-full bg-[#0F172A] rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-[#38BDF8] to-[#16A34A] h-2 rounded-full transition-all duration-500"
                              style={{
                                width: `${
                                  ((currentStep.demo.stats?.trainedUsers || 0) /
                                    (currentStep.demo.stats?.totalUsers || 1)) *
                                  100
                                }%`,
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {currentStep.demo.type === "reporting" && (
                      <div className="space-y-4">
                        <div className="bg-[#1E293B] rounded-lg p-6 text-center">
                          <CheckCircle className="w-12 h-12 text-[#16A34A] mx-auto mb-3" />
                          <p className="text-gray-300 mb-2">
                            Suspicious Email Reported
                          </p>
                          <p className="text-sm text-gray-400">
                            Your security team has been notified
                          </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-[#1E293B] rounded-lg p-4 text-center">
                            <p className="text-2xl text-[#38BDF8] mb-1">
                              {currentStep.demo.reported}
                            </p>
                            <p className="text-xs text-gray-400">
                              Total Reports
                            </p>
                          </div>
                          <div className="bg-[#1E293B] rounded-lg p-4 text-center">
                            <p className="text-2xl text-[#16A34A] mb-1">
                              {currentStep.demo.today}
                            </p>
                            <p className="text-xs text-gray-400">Today</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Step Indicator Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {tourSteps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === activeStep
                        ? "w-8 bg-[#38BDF8]"
                        : "w-2 bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setShowVideo(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-[#0F172A] rounded-2xl overflow-hidden border-2 border-[#38BDF8]/30"
            >
              <button
                onClick={() => setShowVideo(false)}
                className="absolute top-4 right-4 z-10 text-white hover:text-[#38BDF8] p-2 bg-black/50 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Video Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-[#0F172A] to-[#1E293B] flex items-center justify-center">
                <div className="text-center">
                  <Play className="w-20 h-20 text-[#38BDF8] mx-auto mb-4" />
                  <p className="text-white text-lg mb-2">Demo Video</p>
                  <p className="text-gray-400 text-sm">
                    Product walkthrough would play here
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
