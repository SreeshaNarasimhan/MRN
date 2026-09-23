import React from 'react';
import { Sparkles, Compass, Flame, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';

export const ServiceHighlights: React.FC = () => {
  const highlights = [
    {
      title: 'ASTROLOGY',
      subtitle: 'Understand Your Future',
      desc: 'Horoscope readings, birth chart calculations, and planetary guidance.',
      icon: Sparkles,
      link: '/services',
    },
    {
      title: 'VASTU & POOJA',
      subtitle: 'Harmonious Spaces & Sacred Beginnings',
      desc: 'Residential/commercial Vastu guidance, Griha Pravesh, homam rites, and pooja rituals.',
      icon: Flame,
      link: '/vastu-pooja',
    },
    {
      title: 'PERSONAL GUIDANCE',
      subtitle: 'For Major Life Decisions',
      desc: 'Considered advice on marriage timing, career choices, and personal milestone decisions.',
      icon: Compass,
      link: '/services',
    },
  ];

  return (
    <Section bg="cream-100" className="border-b border-gold-400/20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
        {highlights.map((item, index) => {
          const IconComp = item.icon;
          return (
            <Reveal key={index} delay={index * 0.08}>
              <Link
                to={item.link}
                className="group bg-cream-50 border border-gold-400/30 rounded-2xl p-7 shadow-sm hover:shadow-md hover:border-gold-400/60 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-maroon-700/10 text-maroon-700 flex items-center justify-center mb-5 group-hover:bg-maroon-700 group-hover:text-cream-50 transition-colors">
                    <IconComp className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <span className="text-[11px] font-semibold tracking-widest text-gold-600 uppercase block mb-1">
                    {item.title}
                  </span>
                  <h3 className="text-lg font-serif font-semibold text-ink-900 mb-2 group-hover:text-maroon-700 transition-colors">
                    {item.subtitle}
                  </h3>
                  <p className="text-sm text-ink-700 font-sans leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-gold-400/20 flex items-center text-xs font-semibold uppercase tracking-wider text-maroon-700 group-hover:text-gold-600 gap-1">
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
};
