import React, { useState } from "react";
import { Phone, Mail, MapPin, ExternalLink, MessageSquare, Clock, Send, CheckCircle } from "lucide-react";
import { PRODUCTS_DATA } from "../data/products";

interface ContactSectionProps {
  prefilledProduct?: string;
  onClearPrefilledProduct?: () => void;
}

export default function ContactSection({ prefilledProduct, onClearPrefilledProduct }: ContactSectionProps) {
  // Enquiry form fields
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    phone: "",
    email: "",
    product: prefilledProduct || "",
    quantity: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync prefilled product if it changes externally
  useState(() => {
    if (prefilledProduct) {
      setFormData((prev) => ({ ...prev, product: prefilledProduct }));
    }
  });

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = "Full name is required";
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^\+?[0-9\s-]{8,15}$/.test(formData.phone.trim())) {
      errors.phone = "Enter a valid phone number";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Enter a valid email address";
    }
    if (!formData.product) errors.product = "Please select a product";
    if (!formData.quantity.trim()) {
      errors.quantity = "Quantity is required";
    } else if (isNaN(Number(formData.quantity)) || Number(formData.quantity) <= 0) {
      errors.quantity = "Must be a positive number";
    }
    return errors;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);

    // Simulate database write / mail submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onClearPrefilledProduct) {
        onClearPrefilledProduct();
      }
    }, 1500);
  };

  const handleResetForm = () => {
    setFormData({
      name: "",
      companyName: "",
      phone: "",
      email: "",
      product: "",
      quantity: "",
      message: "",
    });
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Direct Plant Info & Google Maps Embed */}
          <div className="lg:col-span-5 text-left space-y-8">
            <div className="space-y-3">
              <span className="text-accent-500 font-extrabold uppercase tracking-widest text-xs block">
                CONTACT INFORMATION
              </span>
              <h2 className="font-display font-bold text-3xl text-primary-900 uppercase tracking-tight">
                Connect Directly With Our Sizing Facility
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-accent-500 to-amber-500 rounded-full"></div>
            </div>

            <p className="text-slate-500 text-sm font-light leading-relaxed">
              Have unique diameter requirements, high-tensile wire profiles, or custom diamond requests? Settle your specifications with our management team or schedule a physical plant visit.
            </p>

            {/* Quick Contacts cards */}
            <div className="space-y-4">
              {/* Plant Location */}
              <div className="flex gap-4 p-4 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors bg-slate-50/50">
                <div className="w-10 h-10 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-xs">
                  <h4 className="font-bold text-primary-900 uppercase">PLANT ADDRESS</h4>
                  <p className="text-slate-600 leading-relaxed mt-1">
                    4/50 Gautam Gali, New Vishwas Nagar, Shahdara, New Delhi – 110032, India
                  </p>
                </div>
              </div>

              {/* Direct Calls */}
              <div className="flex gap-4 p-4 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors bg-slate-50/50">
                <div className="w-10 h-10 rounded-lg bg-[#ffe9d4] text-accent-600 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-xs">
                  <h4 className="font-bold text-primary-900 uppercase">TELEPHONE & MOBILE</h4>
                  <a href="tel:+919810934082" className="block text-accent-600 font-bold hover:underline mt-1 text-sm">
                    +91 9810934082
                  </a>
                </div>
              </div>

              {/* Emails */}
              <div className="flex gap-4 p-4 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors bg-slate-50/50">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-xs text-left">
                  <h4 className="font-bold text-primary-900 uppercase">EMAIL DESK</h4>
                  <a href="mailto:chandawirediesandtools@gmail.com" className="block text-slate-600 font-medium hover:underline mt-1 word-break truncate max-w-[250px] sm:max-w-xs">
                    chandawirediesandtools@gmail.com
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4 p-4 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors bg-slate-50/50">
                <div className="w-10 h-10 rounded-lg bg-green-50 text-[#25D366] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="text-xs text-left">
                  <h4 className="font-bold text-primary-900 uppercase">WORKING HOURS</h4>
                  <p className="text-slate-600 mt-1 leading-relaxed">
                    Monday – Saturday: 09:00 AM – 07:00 PM <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Real Google Maps Iframe */}
            <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-md aspect-video relative group">
              <iframe
                title="Chanda Wire Dies Facility Location"
                src="https://maps.google.com/maps?q=4%2F50%20Gautam%20Gali%2C%20New%20Vishwas%20Nagar%2C%20Shahdara%2C%20New%20Delhi%20%E2%80%93%20110032&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="filter contrast-105"
              ></iframe>
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href="https://maps.google.com/maps?q=4%2F50%20Gautam%20Gali%2C%20New%20Vishwas%20Nagar%2C%20Shahdara%2C%20New%20Delhi%20%E2%80%93%20110032"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/95 text-primary-900 text-[10px] font-bold px-3 py-1.5 rounded-md shadow-md flex items-center gap-1.5 border border-slate-200"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* IndiaMART Button */}
            <div className="pt-2 text-left">
              <a
                href="https://m.indiamart.com/chanda-dies-works/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#ff7a00]/10 hover:bg-[#ff7a00]/15 text-[#ff7a00] font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl border border-[#ff7a00]/30 transition-colors"
                id="contact-indiamart-link"
              >
                <span>Visit Our IndiaMART Verified Profile</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Premium "Tell Us What Are You Looking For?" Enquiry Form */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-100 p-8 sm:p-10 rounded-3xl shadow-sm text-left">
            
            {/* If Form is NOT Submitted */}
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6" id="enquiry-form">
                <div className="space-y-1.5">
                  <h3 className="font-display font-extrabold text-2xl text-primary-900 uppercase tracking-tight">
                    Tell Us What Are You Looking For?
                  </h3>
                  <p className="text-slate-400 text-xs font-light">
                    Settle details, quantities and sizes. Our engineers will reply within 2 business hours.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-primary-900 uppercase tracking-wide block">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Vikram Yadav"
                      className={`w-full bg-white border rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none transition-colors ${
                        formErrors.name ? "border-red-500 focus:ring-1 focus:ring-red-500" : "border-slate-200 focus:border-accent-500"
                      }`}
                      id="form-field-name"
                    />
                    {formErrors.name && <span className="text-[10px] text-red-500 block font-medium">{formErrors.name}</span>}
                  </div>

                  {/* Company Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-primary-900 uppercase tracking-wide block">Company Name</label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      placeholder="e.g. Singhal Cables Ltd."
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-accent-500"
                      id="form-field-company"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-primary-900 uppercase tracking-wide block">Mobile / Phone *</label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +91 9810934082"
                      className={`w-full bg-white border rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none transition-colors ${
                        formErrors.phone ? "border-red-500 focus:ring-1 focus:ring-red-500" : "border-slate-200 focus:border-accent-500"
                      }`}
                      id="form-field-phone"
                    />
                    {formErrors.phone && <span className="text-[10px] text-red-500 block font-medium">{formErrors.phone}</span>}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-primary-900 uppercase tracking-wide block">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. contact@yourcompany.com"
                      className={`w-full bg-white border rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none transition-colors ${
                        formErrors.email ? "border-red-500 focus:ring-1 focus:ring-red-500" : "border-slate-200 focus:border-accent-500"
                      }`}
                      id="form-field-email"
                    />
                    {formErrors.email && <span className="text-[10px] text-red-500 block font-medium">{formErrors.email}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Product selection dropdown */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-primary-900 uppercase tracking-wide block">Product of Interest *</label>
                    <select
                      name="product"
                      value={formData.product}
                      onChange={handleInputChange}
                      className={`w-full bg-white border rounded-xl px-4 py-3 text-xs focus:outline-none transition-colors ${
                        formErrors.product ? "border-red-500 focus:ring-1 focus:ring-red-500" : "border-slate-200 focus:border-accent-500"
                      }`}
                      id="form-field-product"
                    >
                      <option value="">Select a Category</option>
                      {PRODUCTS_DATA.map((prod) => (
                        <option key={prod.id} value={prod.name}>
                          {prod.name}
                        </option>
                      ))}
                    </select>
                    {formErrors.product && <span className="text-[10px] text-red-500 block font-medium">{formErrors.product}</span>}
                  </div>

                  {/* Quantity */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-primary-900 uppercase tracking-wide block">Target Quantity (Units) *</label>
                    <input
                      type="text"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      placeholder="e.g. 50"
                      className={`w-full bg-white border rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none transition-colors ${
                        formErrors.quantity ? "border-red-500 focus:ring-1 focus:ring-red-500" : "border-slate-200 focus:border-accent-500"
                      }`}
                      id="form-field-quantity"
                    />
                    {formErrors.quantity && <span className="text-[10px] text-red-500 block font-medium">{formErrors.quantity}</span>}
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-primary-900 uppercase tracking-wide block">Detailed Sizing Specifications</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Provide details: Target inlet & outlet diameters (e.g. 1.20mm to 0.18mm), wire material, casing dimensions, or any specialized specifications."
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-accent-500 resize-none"
                    id="form-field-message"
                  ></textarea>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 disabled:opacity-50 text-white font-bold tracking-wider uppercase text-xs py-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  id="form-submit-btn"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Verifying Sizing Parameters...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Sizing Enquiry</span>
                    </>
                  )}
                </button>
              </form>
            ) : (
              /* Success Screen */
              <div className="py-12 text-center space-y-6 animate-fade-in" id="form-success-message">
                <div className="w-16 h-16 bg-green-50 text-[#25D366] rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display font-extrabold text-2xl text-primary-900 uppercase tracking-tight">
                    Enquiry Logged Successfully!
                  </h3>
                  <p className="text-slate-500 text-sm font-light max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. Your requirement parameters for <strong>{formData.product}</strong> ({formData.quantity} units) have been recorded in our Shahdara plant queue.
                  </p>
                  <p className="text-accent-500 font-bold text-xs uppercase tracking-wider">
                    Our sizing engineer will call you back shortly on {formData.phone}.
                  </p>
                </div>
                <div className="pt-4">
                  <button
                    onClick={handleResetForm}
                    className="bg-primary-500 hover:bg-primary-600 text-white font-semibold text-xs uppercase tracking-widest px-6 py-3 rounded-xl transition-all cursor-pointer"
                    id="success-reset-btn"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}
