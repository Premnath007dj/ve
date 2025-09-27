import React, { useState } from 'react';
// Make sure this path is correct for your project structure
import { GOOGLE_SHEETS_CONFIG } from '../config/googleSheets';

// Sub-component for displaying contact information items
const ContactInfoItem = ({ icon, title, value, href }) => (
    <div className="flex items-start space-x-4 group">
        <div className="flex-shrink-0 h-14 w-14 flex items-center justify-center rounded-sm bg-paper-white/5 border border-paper-white/10 text-saffron-yellow group-hover:bg-saffron-yellow/10 transition-all duration-300">
            <div className="transform transition-transform duration-300 group-hover:scale-110">
                {icon}
            </div>
        </div>
        <div>
            <h4 className="text-lg font-semibold font-display text-heading-text">{title}</h4>
            <a href={href} className="text-slate-text hover:text-saffron-yellow transition-colors break-all" target="_blank" rel="noopener noreferrer">{value}</a>
        </div>
    </div>
);

// Main Contact Page Component
const ContactPage = () => {
    // State for form data, now including phone and subject
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '', // Optional field
        subject: '',
        message: ''
    });

    // State for validation errors and submission status
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Handles changes in form inputs
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear the error for the field being edited
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    // Validates the form data
    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Full name is required';
        if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        if (!formData.message.trim()) newErrors.message = 'A message is required';
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handles the form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsSubmitting(true);
        try {
            const scriptURL = GOOGLE_SHEETS_CONFIG.WEB_APP_URL;
            
            // CRITICAL FIX: Send data as a JSON string, which the Google Apps Script expects.
            await fetch(scriptURL, {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: { 'Content-Type': 'application/json' },
                mode: 'no-cors' // Use 'no-cors' for basic requests to Google Scripts to avoid CORS errors
            });
            
            setIsSubmitted(true); // Show success message
            // Reset form fields
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        } catch (error) {
            console.error('Form submission error:', error);
            alert('Sorry, there was an error submitting your form. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    // If the form is submitted successfully, show the confirmation message
    if (isSubmitted) {
        return (
            <section id="contact-success" className="py-24 bg-charcoal-bg flex items-center justify-center min-h-screen">
                 <div className="max-w-2xl mx-auto px-6 text-center">
                    <div className="bg-paper-white/5 border border-paper-white/10 rounded-sm p-12 animate-unfold">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-saffron-yellow mx-auto mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                           <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h2 className="text-4xl font-bold font-display text-heading-text mb-4">Message Sent!</h2>
                        <p className="text-slate-text text-lg mb-8">Thank you for your inquiry. We'll get back to you shortly.</p>
                        <button 
                            onClick={() => setIsSubmitted(false)}
                            className="inline-block clip-parallelogram bg-saffron-yellow text-charcoal-bg font-bold py-3 px-10 rounded-sm text-base hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-md hover:shadow-lg"
                        >
                            Send Another Message
                        </button>
                    </div>
                </div>
            </section>
        );
    }
    
    // Default view: The contact form
    return (
        <section id="contact" className="py-24 bg-charcoal-bg">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold font-display text-heading-text">Let's <span className="text-saffron-yellow">Construct</span> Your Solution</h2>
                    <p className="text-lg text-slate-text mt-4 max-w-2xl mx-auto">Reach out to see how our expertise can accelerate your path to a high-performance, validated electric motor.</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 max-w-6xl mx-auto">
                    {/* Left side: Contact Info */}
                    <div className="space-y-8 flex flex-col justify-center">
                        <ContactInfoItem 
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                            title="Email Us"
                            value="projects@yourdomain.com"
                            href="mailto:projects@yourdomain.com"
                        />
                        <ContactInfoItem 
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}
                            title="Call Us"
                            value="+91 123 456 7890"
                            href="tel:+911234567890"
                        />
                         <ContactInfoItem 
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
                            title="Find Us"
                            value="Hyderabad, Telangana, India"
                            href="https://www.google.com/maps/search/?api=1&query=Hyderabad+Telangana+India"
                        />
                    </div>

                    {/* Right side: The Form with Floating Labels */}
                    <div className="bg-paper-white/5 p-8 sm:p-10 border border-paper-white/10 rounded-sm">
                        <h3 className="text-2xl font-bold text-heading-text mb-6 font-display">Structured Project Inquiry</h3>
                        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                            {/* Input Fields with Floating Labels */}
                            <div className="relative">
                               <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} className="peer w-full bg-transparent pt-3 pb-2 text-heading-text border-b border-paper-white/20 focus:border-saffron-yellow focus:outline-none placeholder-transparent" placeholder="Full Name *" />
                               <label htmlFor="name" className="absolute left-0 -top-3.5 text-slate-text text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-text/80 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-saffron-yellow peer-focus:text-sm">Full Name *</label>
                               {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                            </div>
                            <div className="relative">
                               <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="peer w-full bg-transparent pt-3 pb-2 text-heading-text border-b border-paper-white/20 focus:border-saffron-yellow focus:outline-none placeholder-transparent" placeholder="Email Address *" />
                               <label htmlFor="email" className="absolute left-0 -top-3.5 text-slate-text text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-text/80 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-saffron-yellow peer-focus:text-sm">Email Address *</label>
                               {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                            </div>
                            <div className="relative">
                               <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} className="peer w-full bg-transparent pt-3 pb-2 text-heading-text border-b border-paper-white/20 focus:border-saffron-yellow focus:outline-none placeholder-transparent" placeholder="Phone (Optional)" />
                               <label htmlFor="phone" className="absolute left-0 -top-3.5 text-slate-text text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-text/80 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-saffron-yellow peer-focus:text-sm">Phone (Optional)</label>
                            </div>
                            <div className="relative">
                               <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleInputChange} className="peer w-full bg-transparent pt-3 pb-2 text-heading-text border-b border-paper-white/20 focus:border-saffron-yellow focus:outline-none placeholder-transparent" placeholder="Subject *" />
                               <label htmlFor="subject" className="absolute left-0 -top-3.5 text-slate-text text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-text/80 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-saffron-yellow peer-focus:text-sm">Subject *</label>
                               {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                            </div>
                            <div className="relative">
                               <textarea id="message" name="message" rows={3} value={formData.message} onChange={handleInputChange} className="peer w-full bg-transparent pt-3 pb-2 text-heading-text border-b border-paper-white/20 focus:border-saffron-yellow focus:outline-none placeholder-transparent" placeholder="Project Message *"></textarea>
                               <label htmlFor="message" className="absolute left-0 -top-3.5 text-slate-text text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-text/80 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-saffron-yellow peer-focus:text-sm">Project Message *</label>
                               {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                            </div>

                            <div className="text-right pt-2">
                                <button type="submit" disabled={isSubmitting} className="inline-block clip-parallelogram bg-saffron-yellow text-charcoal-bg font-bold py-3 px-10 rounded-sm text-base hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-md hover:shadow-lg disabled:bg-gray-500 disabled:cursor-not-allowed">
                                    {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;
