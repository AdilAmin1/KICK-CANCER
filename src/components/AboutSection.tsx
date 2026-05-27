import { Heart, Users2 } from 'lucide-react';

export default function AboutSection() {
  return (
    <div className="max-w-4xl mx-auto space-y-16 py-4 px-4 sm:px-6">
      
      {/* About Us Header */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 border-b border-neutral-100 pb-3">
          <Heart className="w-5 h-5 text-amber-500" />
          <h2 className="text-2xl font-extrabold text-neutral-900">About Us</h2>
        </div>
        <div className="bg-white border border-neutral-200/60 rounded-3xl p-12 shadow-xs min-h-[120px]" />
      </section>

      {/* Meet the Team Header */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 border-b border-neutral-100 pb-3">
          <Users2 className="w-5 h-5 text-amber-500" />
          <h2 className="text-2xl font-extrabold text-neutral-900">Meet the Team</h2>
        </div>
        <div className="bg-white border border-neutral-200/60 rounded-3xl p-12 shadow-xs min-h-[120px]" />
      </section>

    </div>
  );
}
