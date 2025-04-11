import React, { useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Invalid email";
    if (!form.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length !== 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("🚀 Message sent successfully!", { position: "bottom-right" });
        setForm({ name: "", email: "", message: "" });
      } else {
        toast.error("❌ Failed to send message", { position: "bottom-right" });
      }
    } catch (err) {
      console.error("Error:", err);
      toast.error("⚠️ Something went wrong!", { position: "bottom-right" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      className="contact-section"
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-title">Contact Me</h2>
      <motion.form
        className="contact-form"
        onSubmit={handleSubmit}
        whileHover={{ scale: 1.01 }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className={errors.name ? "error-input" : ""}
        />
        {errors.name && <span className="error-text">{errors.name}</span>}

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className={errors.email ? "error-input" : ""}
        />
        {errors.email && <span className="error-text">{errors.email}</span>}

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          className={errors.message ? "error-input" : ""}
        ></textarea>
        {errors.message && <span className="error-text">{errors.message}</span>}

        <motion.button
          type="submit"
          className="send-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={loading}
        >
          {loading ? (
            <span className="loader"></span>
          ) : (
            "🚀 Send Message"
          )}
        </motion.button>
      </motion.form>

      <ToastContainer />
    </motion.section>
  );
};

export default Contact;
