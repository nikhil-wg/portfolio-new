"use client";

import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  image?: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <div className="space-y-4">
      {testimonials.map((testimonial, i) => (
        <div
          key={i}
          className="border border-[#e5e5e5] dark:border-white/10 rounded-xl p-5 bg-white dark:bg-white/5 transition-colors duration-300"
        >
          <Quote className="w-5 h-5 text-[#ccc] dark:text-gray-600 mb-3" />
          
          <p className="text-[14px] text-[#555] dark:text-gray-300 leading-relaxed mb-4 italic">
            "{testimonial.quote}"
          </p>
          
          <div className="flex items-center gap-3">
            {testimonial.image ? (
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-10 h-10 rounded-full object-cover"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center text-[#1a1a1a] dark:text-white font-semibold text-sm">
                {testimonial.name.split(' ').map(n => n[0]).join('')}
              </div>
            )}
            <div>
              <p className="text-[13px] font-semibold text-[#1a1a1a] dark:text-white">
                {testimonial.name}
              </p>
              <p className="text-[12px] text-[#666] dark:text-gray-400">
                {testimonial.role} @ {testimonial.company}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
