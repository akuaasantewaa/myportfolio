import React, { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

const ContactForm = ({ isVisible }) => {
  console.log(isVisible);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    budget: "",
    timeline: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitted(true);
    setIsSubmitting(false);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        budget: "",
        timeline: "",
      });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (errors[e.target.name]) {
      setErrors((prev) => ({
        ...prev,
        [e.target.name]: "",
      }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-16">
        <CheckCircle
          className="mx-auto text-green-500 mb-4 animate-bounce"
          size={80}
        />
        <h3 className="text-3xl font-bold text-gray-800 mb-4">Thank You!</h3>
        <p className="text-gray-600 text-lg">
          Your message has been sent successfully. I'll get back to you soon!
        </p>
      </div>
    );
  }

  return (
    <section
      id="contact"
      className={`py-20 px-6 lg:px-8 bg-gradient-to-br from-purple-50/30 to-rose-50/30 ${
        isVisible.contact
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      } transition-all duration-1000`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Contact
          </h2>
          <p className="text-gray-600 text-lg lg:text-xl max-w-2xl mx-auto">
            Have a project or idea? Let's connect and bring it to life!
          </p>
        </div>
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8 w-full">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-3">
                Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-6 py-4 rounded-xl border-2 focus:outline-none transition-all duration-300 text-lg ${
                  errors.name
                    ? "border-red-300 focus:border-red-500"
                    : "border-gray-200 focus:border-rose-400"
                } bg-white hover:border-gray-300`}
                placeholder="Your full name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-2">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-3">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-6 py-4 rounded-xl border-2 focus:outline-none transition-all duration-300 text-lg ${
                  errors.email
                    ? "border-red-300 focus:border-red-500"
                    : "border-gray-200 focus:border-rose-400"
                } bg-white hover:border-gray-300`}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-2">{errors.email}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-3">
              Subject *
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={`w-full px-6 py-4 rounded-xl border-2 focus:outline-none transition-all duration-300 text-lg ${
                errors.subject
                  ? "border-red-300 focus:border-red-500"
                  : "border-gray-200 focus:border-rose-400"
              } bg-white hover:border-gray-300`}
              placeholder="Project inquiry, collaboration, etc."
            />
            {errors.subject && (
              <p className="text-red-500 text-sm mt-2">{errors.subject}</p>
            )}
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-3">
                Budget Range
              </label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-rose-400 focus:outline-none transition-all duration-300 bg-white hover:border-gray-300 text-lg"
              >
                <option value="">Select budget range</option>
                <option value="Under $5K">Under $5,000</option>
                <option value="$5K - $10K">$5,000 - $10,000</option>
                <option value="$10K - $25K">$10,000 - $25,000</option>
                <option value="$25K+">$25,000+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-3">
                Timeline
              </label>
              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-rose-400 focus:outline-none transition-all duration-300 bg-white hover:border-gray-300 text-lg"
              >
                <option value="">Select timeline</option>
                <option value="ASAP">ASAP</option>
                <option value="1-2 months">1-2 months</option>
                <option value="3-6 months">3-6 months</option>
                <option value="6+ months">6+ months</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-3">
              Message *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className={`w-full px-6 py-4 rounded-xl border-2 focus:outline-none transition-all duration-300 resize-none text-lg ${
                errors.message
                  ? "border-red-300 focus:border-red-500"
                  : "border-gray-200 focus:border-rose-400"
              } bg-white hover:border-gray-300`}
              placeholder="Tell me about your project, ideas, or questions..."
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-2">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto px-8 py-4 lg:py-5 bg-gradient-to-r from-rose-500 to-purple-600 text-white rounded-xl font-bold hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-lg mx-auto block"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                Sending Message...
              </>
            ) : (
              <>
                <Send size={20} />
                Send Message
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
