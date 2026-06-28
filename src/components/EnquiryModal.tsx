import React, { useState, useEffect } from "react";
import { X, Send, CheckCircle, ShieldAlert } from "lucide-react";
import { PRODUCTS_DATA } from "../data/products";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledProduct?: string;
}

export default function EnquiryModal({ isOpen, onClose, prefilledProduct }: EnquiryModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    phone: "",
    email: "",
    product: "",
    quantity: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Synchronize prefilled product on modal open
  useEffect(() => {
    if (isOpen) {
      setFormData({
        name: "",
        companyName: "",
        phone: "",
        email: "",
        product: prefilledProduct || "",
        quantity: "",
        message: "",
      });
      setErrors({});
      setIsSubmitted(false);
    }
  }, [isOpen, prefilledProduct]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Your name is required";
    if (!formData.phone.trim()) {
      errs.phone = "Phone is required";
    } else if (!/^\+?[0-9\s-]{8,15}$/.test(formData.phone.trim())) {
      errs.phone = "Enter a valid phone number";
    }
    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Enter a valid email";
    }
    if (!formData.product) errs.product = "Please select a product";
    if (!formData.quantity.trim()) {
      errs.quantity = "Quantity is required";
    } else if (isNaN(Number(formData.quantity)) || Number(formData.quantity) <= 0) {
      errs.quantity = "Must be a positive number";
    }
    return errs;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <div
      className="fixed inset-0 bg-primary-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
      id="enquiry-modal-overlay"
    >
      <div
        className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 max-w-lg w-full relative p-6 sm:p-8 text-left"
        onClick={(e) => e.stopPropagation()}
        id="enquiry-modal-content"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
          id="modal-close-btn"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1 pr-6">
              <span className="text-accent-500 font-extrabold text-[10px] tracking-widest uppercase block">
                FACTORY-DIRECT QUOTE
              </span>
              <h3 className="font-display font-extrabold text-xl text-primary-900 uppercase tracking-tight">
                Tell Us What Are You Looking For?
              </h3>
              <p className="text-slate-400 text-xs font-light">
                Fill the sizing matrix below. Our engineers will reply within 2 hours.
              </p>
            </div>

            {/* Name */}
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-primary-900 uppercase tracking-wider block">Your Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="e.g. Vikram Yadav"
                className={`w-full bg-slate-50 border rounded-xl px-4 py-2.5 text-xs sm:text-sm focus:outline-none transition-colors ${
                  errors.name ? "border-red-500 focus:ring-1 focus:ring-red-500" : "border-slate-200 focus:border-accent-500"
                }`}
                id="modal-field-name"
              />
              {errors.name && <span className="text-[9px] text-red-500 block font-medium">{errors.name}</span>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Phone */}
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-primary-900 uppercase tracking-wider block">Phone *</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+91 9810934082"
                  className={`w-full bg-slate-50 border rounded-xl px-4 py-2.5 text-xs sm:text-sm focus:outline-none transition-colors ${
                    errors.phone ? "border-red-500 focus:ring-1 focus:ring-red-500" : "border-slate-200 focus:border-accent-500"
                  }`}
                  id="modal-field-phone"
                />
                {errors.phone && <span className="text-[9px] text-red-500 block font-medium">{errors.phone}</span>}
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-primary-900 uppercase tracking-wider block">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="name@company.com"
                  className={`w-full bg-slate-50 border rounded-xl px-4 py-2.5 text-xs sm:text-sm focus:outline-none transition-colors ${
                    errors.email ? "border-red-500 focus:ring-1 focus:ring-red-500" : "border-slate-200 focus:border-accent-500"
                  }`}
                  id="modal-field-email"
                />
                {errors.email && <span className="text-[9px] text-red-500 block font-medium">{errors.email}</span>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Product */}
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-primary-900 uppercase tracking-wider block">Product *</label>
                <select
                  name="product"
                  value={formData.product}
                  onChange={handleInputChange}
                  className={`w-full bg-slate-50 border rounded-xl px-4 py-2.5 text-xs focus:outline-none transition-colors ${
                    errors.product ? "border-red-500 focus:ring-1 focus:ring-red-500" : "border-slate-200 focus:border-accent-500"
                  }`}
                  id="modal-field-product"
                >
                  <option value="">Select category</option>
                  {PRODUCTS_DATA.map((prod) => (
                    <option key={prod.id} value={prod.name}>
                      {prod.name}
                    </option>
                  ))}
                </select>
                {errors.product && <span className="text-[9px] text-red-500 block font-medium">{errors.product}</span>}
              </div>

              {/* Quantity */}
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-primary-900 uppercase tracking-wider block">Qty (Units) *</label>
                <input
                  type="text"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  placeholder="e.g. 10"
                  className={`w-full bg-slate-50 border rounded-xl px-4 py-2.5 text-xs sm:text-sm focus:outline-none transition-colors ${
                    errors.quantity ? "border-red-500 focus:ring-1 focus:ring-red-500" : "border-slate-200 focus:border-accent-500"
                  }`}
                  id="modal-field-quantity"
                />
                {errors.quantity && <span className="text-[9px] text-red-500 block font-medium">{errors.quantity}</span>}
              </div>
            </div>

            {/* Message */}
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-primary-900 uppercase tracking-wider block">Sizing details & comments</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={3}
                placeholder="Target diameters, materials, drawing machine layout details, etc."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-accent-500 resize-none"
                id="modal-field-message"
              ></textarea>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 disabled:opacity-50 text-white font-bold tracking-wider uppercase text-xs py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              id="modal-submit-btn"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4.5 h-4.5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Transmitting parameters...</span>
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Sizing Enquiry</span>
                </>
              )}
            </button>
          </form>
        ) : (
          /* Success message block */
          <div className="py-8 text-center space-y-5" id="modal-success-screen">
            <div className="w-14 h-14 bg-green-50 text-[#25D366] rounded-full flex items-center justify-center mx-auto shadow-md">
              <CheckCircle className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h3 className="font-display font-extrabold text-lg text-primary-900 uppercase tracking-tight">
                Requirement Recorded!
              </h3>
              <p className="text-slate-500 text-xs font-light max-w-sm mx-auto leading-relaxed">
                Thank you, <strong>{formData.name}</strong>. Your requirement for <strong>{formData.product}</strong> ({formData.quantity} units) has been logged in our New Delhi production queue.
              </p>
              <p className="text-accent-500 font-bold text-[11px] uppercase tracking-wider">
                We will call you back shortly on {formData.phone}.
              </p>
            </div>
            <div className="pt-2">
              <button
                onClick={onClose}
                className="bg-primary-500 hover:bg-primary-600 text-white font-semibold text-xs uppercase tracking-widest px-6 py-2.5 rounded-xl transition-all cursor-pointer"
                id="modal-success-close-btn"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
