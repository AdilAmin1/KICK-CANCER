import { Heart } from 'lucide-react';

export default function AboutSection() {
  return (
    <div className="max-w-4xl mx-auto space-y-16 py-4 px-4 sm:px-6">
      
      {/* Our Shared Mission Header */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 border-b border-neutral-100 pb-3">
          <Heart className="w-5 h-5 text-yellow-500" />
          <h2 className="text-2xl font-extrabold text-neutral-900">Our Shared Mission</h2>
        </div>
        <div className="bg-white border border-neutral-200/60 rounded-3xl min-h-[160px] shadow-xs" />
      </section>

      {/* Meet the Team - Empty Outline */}
      <section className="space-y-6">
        <div className="bg-white border border-neutral-200/60 rounded-3xl min-h-[160px] shadow-xs" />
      </section>

    </div>
  );
}

