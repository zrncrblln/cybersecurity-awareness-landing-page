import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";
import { Card } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const testimonials = [
  {
    quote:
      "This platform reduced our phishing vulnerability by 85% in just three months. The simulation campaigns are incredibly realistic and the training is spot-on.",
    author: "Sarah Chen",
    role: "IT Security Manager",
    company: "TechCorp Industries",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbnxlbnwxfHx8fDE3NTk2NTA1Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    initials: "SC",
  },
  {
    quote:
      "Our security culture has completely transformed. Employees now actively report suspicious emails and our incident response time has improved dramatically.",
    author: "Michael Rodriguez",
    role: "Chief Information Officer",
    company: "Global Finance Group",
    rating: 5,
    avatar: "",
    initials: "MR",
  },
  {
    quote:
      "The real-time threat detection caught several sophisticated phishing attempts that would have bypassed our previous security measures. Worth every penny.",
    author: "Emily Watson",
    role: "Director of IT Operations",
    company: "HealthSecure Systems",
    rating: 5,
    avatar: "",
    initials: "EW",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent opacity-30" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#0F172A] mb-4">
            Trusted by Security Leaders
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how organizations are building stronger security cultures.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 lg:p-8 h-full bg-white border-2 border-gray-100 hover:border-[#38BDF8]/30 transition-all duration-300 hover:shadow-xl group relative overflow-hidden">
                {/* Background Quote Icon */}
                <Quote className="absolute top-4 right-4 w-16 h-16 text-[#38BDF8]/5 group-hover:text-[#38BDF8]/10 transition-colors" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#16A34A] text-[#16A34A]"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 mb-6 leading-relaxed relative z-10">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <Avatar className="w-12 h-12 border-2 border-[#38BDF8]/20">
                    {testimonial.avatar ? (
                      <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                    ) : null}
                    <AvatarFallback className="bg-[#38BDF8]/10 text-[#38BDF8]">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-[#0F172A]">
                      {testimonial.author}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-[#38BDF8]">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
        >
          {[
            { value: "500K+", label: "Users Protected" },
            { value: "99.9%", label: "Detection Rate" },
            { value: "85%", label: "Risk Reduction" },
            { value: "24/7", label: "Monitoring" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl text-[#38BDF8] mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
