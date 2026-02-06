import { useState, type FormEvent } from 'react';
import {
  FiMail,
  FiMapPin,
  FiSend,
  FiCheckCircle,
} from 'react-icons/fi';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import './Contact.scss';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="contact section" id="contact">
      <div className="section-header">
        <h2 className="section-title">
          Get In <span className="accent">Touch</span>
        </h2>
        <p className="section-subtitle">
          Have a project in mind? Let's work together to bring your ideas to life
        </p>
      </div>

      <div className="contact-content">
        <div className="contact-info animate-fade-in-up">
          <h3 className="info-title">Let's talk about everything!</h3>
          <p className="info-text">
            I'm always open to new opportunities, collaborations, and interesting
            conversations. Whether you have a question or just want to say hi,
            feel free to reach out.
          </p>

          <div className="info-items">
            <div className="info-item">
              <div className="info-icon">
                <FiMail />
              </div>
              <div className="info-details">
                <span className="info-label">Email</span>
                <span className="info-value">shuchintha@example.com</span>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">
                <FiMapPin />
              </div>
              <div className="info-details">
                <span className="info-label">Location</span>
                <span className="info-value">San Francisco, CA</span>
              </div>
            </div>
          </div>

          <div className="social-links">
            <a href="https://github.com/shuchintha" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/shuchintha" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="https://twitter.com/shuchintha" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
          </div>
        </div>

        <div className="contact-form-wrapper animate-fade-in-up stagger-2">
          {submitted ? (
            <div className="form-success">
              <FiCheckCircle className="success-icon" />
              <h4 className="success-title">Message Sent!</h4>
              <p className="success-text">
                Thank you for reaching out. I'll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="What's this about?"
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn-submit">
                <FiSend /> Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
