import { Award, Globe2, GraduationCap, Building2, Tv, ZoomIn } from 'lucide-react';
import { MASTERCLASS_META } from '../data/content';

interface InstructorBioSectionProps {
  onOpenLightbox: (imageUrl: string, title?: string, caption?: string) => void;
}

export default function InstructorBioSection({
  onOpenLightbox,
}: InstructorBioSectionProps) {
  const {
    instructorHeadshot,
    instructorSpeakingImage,
    instructorAwardImage,
  } = MASTERCLASS_META;

  const pressLogos = [
    'Channels TV',
    'Voice of Canada',
    'US InStyle Magazine',
    'Women Radio',
    'Tekedia',
    'TVC News',
    'The Punch',
  ];

  return (
    <section id="instructor" className="py-16 sm:py-24 bg-slate-900 border-b border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="inline-block rounded-full bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-400">
            Meet Your Facilitator
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Who Is Teaching Me?
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            A proven academic, international remote project lead, and global youth empowerment champion.
          </p>
        </div>

        {/* Bio Grid */}
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          
          {/* Images Gallery on Left */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative group overflow-hidden rounded-3xl border-2 border-amber-500/30 bg-slate-950 shadow-2xl">
              <img
                src={instructorHeadshot}
                alt="Dr. Aderinsola Adio-Adepoju Headshot"
                className="w-full aspect-[4/5] object-cover transition duration-300 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <button
                onClick={() =>
                  onOpenLightbox(
                    instructorHeadshot,
                    'Dr. Aderinsola Adio-Adepoju',
                    'Founder, iTrain Africa | Former UN Live Global Project Coordinator'
                  )
                }
                className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition duration-200 cursor-pointer"
              >
                <div className="flex items-center gap-2 rounded-full bg-amber-500 px-4 py-2 text-xs font-bold text-slate-950 shadow-lg">
                  <ZoomIn className="h-4 w-4" />
                  <span>Enlarge Photo</span>
                </div>
              </button>
            </div>

            {/* Sub-photos (Speaking & Global Conference) */}
            <div className="grid grid-cols-2 gap-3">
              <div
                onClick={() =>
                  onOpenLightbox(
                    instructorSpeakingImage,
                    'Dr. Aderinsola Speaking',
                    'Keynote address on employability & remote workforce integration'
                  )
                }
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-slate-700 bg-slate-950 aspect-[4/3]"
              >
                <img
                  src={instructorSpeakingImage}
                  alt="Dr. Aderinsola Adio-Adepoju Speaking"
                  className="h-full w-full object-cover transition group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <ZoomIn className="h-4 w-4 text-amber-400" />
                </div>
              </div>

              <div
                onClick={() =>
                  onOpenLightbox(
                    instructorAwardImage,
                    'Dr. Aderinsola - Global Recognition',
                    'Empowering African youths on global stages across 5 continents'
                  )
                }
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-slate-700 bg-slate-950 aspect-[4/3]"
              >
                <img
                  src={instructorAwardImage}
                  alt="Global Recognition and Conferencing"
                  className="h-full w-full object-cover transition group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <ZoomIn className="h-4 w-4 text-amber-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Bio Story on Right */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Dr. Aderinsola Adio-Adepoju
              </h3>
              <p className="text-sm font-semibold text-amber-400 mt-1">
                Founder, iTrain Africa • PhD in Chemistry • IFC Mini-MBA • Remote Work Strategist
              </p>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              <p>
                Hello, I’m <strong>Dr. Aderinsola Adio-Adepoju</strong>. I have helped professionals and youth secure over <strong>$700,000</strong> in earnings and scholarships, personally won/attracted <strong>35+ global opportunities worth over $35,000</strong> that took me to 5 continents, and shaped lives for a living.
              </p>

              <p>
                African youth are my passion, and my mission is to help <strong>10 million of them become skilled, relevant to the 21st-century workforce, and arrive at the global stage by 2030</strong>.
              </p>

              <p>
                In 2021 and 2023, I convened the Global Mentorship Conference (GMC), reaching over <strong>2.6 million people</strong> with participation from 54 countries and 41 international keynote speakers.
              </p>

              <p>
                As an academic with a <strong>BSc, MSc, and PhD in Chemistry</strong> and a university teacher, I understand both the academic world and modern entrepreneurship (14+ years). In 2022–2023, as Design Lead, I worked remotely internationally with the <strong>Natural History Museum of London (NHM)</strong> and served as the Global Project Coordinator at the <strong>Museum for the United Nations (U.N. Live)</strong>.
              </p>
            </div>

            {/* Quick credentials bullet cards */}
            <div className="grid grid-cols-2 gap-3 pt-2 text-xs sm:text-sm">
              <div className="rounded-xl bg-slate-950/80 border border-slate-800 p-3 flex items-center gap-2.5">
                <Globe2 className="h-4 w-4 text-amber-400 shrink-0" />
                <span>UN Live Project Lead</span>
              </div>
              <div className="rounded-xl bg-slate-950/80 border border-slate-800 p-3 flex items-center gap-2.5">
                <Building2 className="h-4 w-4 text-amber-400 shrink-0" />
                <span>NHM London Design Lead</span>
              </div>
              <div className="rounded-xl bg-slate-950/80 border border-slate-800 p-3 flex items-center gap-2.5">
                <GraduationCap className="h-4 w-4 text-amber-400 shrink-0" />
                <span>PhD Chemistry &amp; IFC Mini-MBA</span>
              </div>
              <div className="rounded-xl bg-slate-950/80 border border-slate-800 p-3 flex items-center gap-2.5">
                <Award className="h-4 w-4 text-amber-400 shrink-0" />
                <span>35+ Global Awards Won</span>
              </div>
            </div>

            {/* Media Mention Badges */}
            <div className="pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Featured In International &amp; National Press:
              </span>
              <div className="flex flex-wrap gap-2">
                {pressLogos.map((media) => (
                  <span
                    key={media}
                    className="rounded-lg bg-slate-800/90 border border-slate-700 px-3 py-1 text-xs font-medium text-slate-200"
                  >
                    {media}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
