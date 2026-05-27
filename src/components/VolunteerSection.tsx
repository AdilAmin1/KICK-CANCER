import { Heart, Send, Sparkles, User, Mail, Phone, MessageSquare } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function VolunteerSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [reason, setReason] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phone.trim() || !reason.trim()) return;
    
    // Self-contained client storage submission status
    setIsSubmitted(true);
    setName('');
    setEmail('');
    setPhone('');
    setReason('');
    
    setTimeout(() => {
      setIsSubmitted(false);
    }, 6000);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6">
      
      {/* Framed Volunteer Application Section */}
      <div className="bg-white border border-neutral-150 rounded-3xl p-8 sm:p-14 space-y-8 shadow-xs relative overflow-hidden">
        {/* Decorative backdrop glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative text-center space-y-4 max-w-2xl mx-auto">
          <div className="mx-auto w-14 h-14 rounded-full bg-yellow-400/15 flex items-center justify-center text-yellow-500 mb-4">
            <Heart className="w-7 h-7 fill-yellow-300" />
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
            Volunteer Program
          </h1>
          
          <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">
            We are deeply grateful for your willingness to dedicate your heart, time, and energy. We are putting in place our preliminary support structures, hospital activities, and safety guidelines.
          </p>
        </div>

        {/* Action Form Grid */}
        <div className="max-w-xl mx-auto relative z-10">
          {isSubmitted ? (
            <div className="bg-yellow-400/20 border border-yellow-300/40 p-6 rounded-2xl text-yellow-800 font-semibold text-sm animate-fade-in flex flex-col items-center justify-center text-center gap-3">
              <Sparkles className="w-8 h-8 text-yellow-600 animate-bounce" />
              <div>
                <p className="font-extrabold text-base mb-1">Application Submitted Successfully!</p>
                <p className="text-xs text-neutral-500 leading-relaxed font-normal">
                  Thank you so much. If not contacted within three to four days, our program is full or are not accepting any applicants.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name field */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="volunteer-name" className="text-xs font-bold text-neutral-700 uppercase tracking-wider block">
                    Name
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400">
                      <User className="w-4 h-4" />
                    </span>
                    <input
                      id="volunteer-name"
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-800 placeholder-neutral-400 text-sm focus:outline-hidden focus:ring-2 focus:ring-yellow-400 focus:bg-white transition-all font-medium"
                    />
                  </div>
                </div>

                {/* Phone field */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="volunteer-phone" className="text-xs font-bold text-neutral-700 uppercase tracking-wider block">
                    Phone Number
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400">
                      <Phone className="w-4 h-4" />
                    </span>
                    <input
                      id="volunteer-phone"
                      type="tel"
                      required
                      placeholder="(555) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-800 placeholder-neutral-400 text-sm focus:outline-hidden focus:ring-2 focus:ring-yellow-400 focus:bg-white transition-all font-medium"
                    />
                  </div>
                </div>
              </div>

              {/* Email field */}
              <div className="space-y-1.5 text-left">
                <label htmlFor="volunteer-email" className="text-xs font-bold text-neutral-700 uppercase tracking-wider block">
                  Email
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400">
                    <Mail className="w-4 h-4" />
                  </span>
                  <input
                    id="volunteer-email"
                    type="email"
                    required
                    placeholder="jane@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-800 placeholder-neutral-400 text-sm focus:outline-hidden focus:ring-2 focus:ring-yellow-400 focus:bg-white transition-all font-medium"
                  />
                </div>
              </div>

              {/* Reason field */}
              <div className="space-y-1.5 text-left">
                <div className="flex justify-between items-center">
                  <label htmlFor="volunteer-reason" className="text-xs font-bold text-neutral-700 uppercase tracking-wider block">
                    Why do you want to join this program?
                  </label>
                  <span className={`text-[11px] font-bold ${
                    reason.trim() === '' ? 'text-neutral-400' : (reason.trim().split(/\s+/).length > 140 ? 'text-rose-500' : 'text-yellow-600')
                  }`}>
                    {reason.trim() === '' ? 0 : reason.trim().split(/\s+/).length} / 150 words limit
                  </span>
                </div>
                <div className="relative">
                  <span className="absolute left-3.5 top-4 text-neutral-400">
                    <MessageSquare className="w-4 h-4" />
                  </span>
                  <textarea
                    id="volunteer-reason"
                    required
                    placeholder="Share a little bit about your inspiration, skills, or why you'd love to help us kick cancer..."
                    value={reason}
                    onChange={(e) => {
                      const text = e.target.value;
                      const words = text.trim() === '' ? [] : text.trim().split(/\s+/);
                      if (words.length <= 150) {
                        setReason(text);
                      } else {
                        const truncated = text.split(/\s+/).slice(0, 150).join(' ');
                        setReason(truncated);
                      }
                    }}
                    rows={4}
                    className="w-full pl-10 pr-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-800 placeholder-neutral-400 text-sm focus:outline-hidden focus:ring-2 focus:ring-yellow-400 focus:bg-white transition-all font-medium resize-none"
                  />
                </div>
              </div>

              {/* Submit button & disclaimer note */}
              <div className="pt-2 space-y-4">
                <button
                  type="submit"
                  id="volunteer-submit-btn"
                  className="w-full py-4 rounded-xl text-base font-bold bg-neutral-900 text-yellow-400 hover:bg-neutral-800 hover:text-yellow-300 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>Submit Application</span>
                  <Send className="w-4 h-4 text-yellow-400" />
                </button>

                {/* Custom warning disclaimer */}
                <p className="text-neutral-400 text-[11px] leading-relaxed text-center font-normal">
                  *Disclaimer: If not contacted within three to four days, our program is full or are not accepting any applicants.
                </p>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
}
