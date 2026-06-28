import { Phone, Mail, MapPin, ExternalLink, MessageSquare } from "lucide-react";

export default function Header() {
  return (
    <div id="top-header" className="bg-primary-900 text-slate-300 text-xs py-2.5 px-4 sm:px-6 lg:px-8 border-b border-primary-800/40 hidden md:block">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-3">
        {/* Contact Info */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <a
            href="tel:+919810934082"
            className="flex items-center gap-2 hover:text-accent-500 transition-colors"
            id="header-phone-link"
          >
            <Phone className="w-3.5 h-3.5 text-accent-500" />
            <span>+91 9810934082</span>
          </a>
          <a
            href="https://wa.me/919810934082"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#25D366] transition-colors"
            id="header-whatsapp-link"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
            <span>WhatsApp Chat</span>
          </a>
          <a
            href="mailto:chandawirediesandtools@gmail.com"
            className="flex items-center gap-2 hover:text-accent-500 transition-colors"
            id="header-email-link"
          >
            <Mail className="w-3.5 h-3.5 text-accent-500" />
            <span>chandawirediesandtools@gmail.com</span>
          </a>
        </div>

        {/* Address & IndiaMART */}
        <div className="flex items-center gap-x-6">
          <div className="flex items-center gap-2 text-slate-400 hidden xl:flex">
            <MapPin className="w-3.5 h-3.5 text-accent-500 shrink-0" />
            <span className="truncate max-w-[320px]">Shahdara, New Delhi – 110032</span>
          </div>
          <a
            href="https://m.indiamart.com/chanda-dies-works/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-accent-500 hover:bg-accent-600 text-white font-medium px-3 py-1 rounded-sm transition-all duration-200 text-[11px] uppercase tracking-wider shadow-sm"
            id="header-indiamart-link"
          >
            <span>IndiaMART Verified</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
