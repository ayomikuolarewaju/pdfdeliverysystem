import {
  AffiliateConfig,
  Testimonial,
  WhatsAppProof,
  ModuleItem,
  BonusItem,
  FAQItem,
} from '../types';

export const DEFAULT_AFFILIATE_CONFIG: AffiliateConfig = {
  whatsappLink: 'https://chat.whatsapp.com/KJBIA89IG0NDVAWLsWsFi8',
  whatsappNumber: '2347076981373',
  whatsappMessage:
    'Hello, I am interested in the Remote Work Masterclass. Please send me the registration details.',
  selarSingleUrl: 'https://selar.com/k27d4j',
  selarBundleUrl: 'https://selar.com/k665l3r989',
  affiliateName: 'Certified Affiliate Partner',
  affiliateCode: 'AF-REMOTE-2026',
};

export function getWhatsAppTargetUrl(
  config: AffiliateConfig,
  _customMessage?: string
): string {
  if (config.whatsappLink && config.whatsappLink.trim().length > 0) {
    return config.whatsappLink.trim();
  }
  return 'https://chat.whatsapp.com/KJBIA89IG0NDVAWLsWsFi8';
}

export const MASTERCLASS_META = {
  title: 'Remote Work Masterclass',
  subtitle: 'Learn How to Get High-Paying Remote Jobs',
  headline: 'MY SECRETS TO LANDING HIGH-PAYING REMOTE JOBS',
  tagline:
    'A Must-Attend Masterclass For Those Who Desire A Flexible & Profitable Work Life',
  badge: 'Live on Zoom • Interactive 3-Hour Clarity Workshop',
  instructor: 'Dr. Aderinsola Adio-Adepoju',
  instructorTitle:
    'Founder, iTrain Africa | Former UN Live Project Lead | Ex-NHM London',
  studentsEnrolled: '4,290+',
  nextDateText: 'Saturday, September 26, 2026 at 6:00 PM WAT',
  whatsappGroupUrl: 'https://chat.whatsapp.com/KJBIA89IG0NDVAWLsWsFi8',
  pricing: {
    single: {
      naira: '₦5,375',
      dollar: '$7',
      label: 'Single Seat Checkout',
      originalNaira: '₦25,000',
    },
    bundle: {
      naira: '₦8,600',
      dollar: '$11',
      label: 'Growth Partner Bundle (2 Seats)',
      savings: 'Save ₦2,150 (₦4,300 each)',
      originalNaira: '₦50,000',
    },
  },
  bankDetails: {
    bankName: 'Guaranty Trust Bank (GTB)',
    accountName: 'I-Train Africa',
    accountNumber: '0930052417',
    currency: 'NGN (Nigerian payments)',
    supportEmail: 'itrainafricaenrollment@gmail.com',
    whatsappSupport: '+2348053453099',
  },
  flyerImage:
    'https://itrainafricabucket.s3.af-south-1.amazonaws.com/wp-content/uploads/2026/08/12162045/September-819x1024.jpeg',
  heroBannerImage:
    'https://itrainafricabucket.s3.af-south-1.amazonaws.com/wp-content/uploads/2025/03/19114056/WhatsApp-Image-2025-01-31-at-3.31.26-PM-1024x576-1.jpeg',
  instructorHeadshot:
    'https://itrainafricabucket.s3.af-south-1.amazonaws.com/wp-content/uploads/2024/07/14071458/Dr-Aderinsola-Adio-Adepoju-headshot-5-scaled.jpg',
  instructorSpeakingImage:
    'https://itrainafricabucket.s3.af-south-1.amazonaws.com/wp-content/uploads/2024/07/14071357/Dr-Aderinsola-Adio-Adepoju-headshot-7-scaled.jpg',
  instructorAwardImage:
    'https://itrainafricabucket.s3.af-south-1.amazonaws.com/wp-content/uploads/2024/03/27113654/MET.jpeg',
  youtubeVideoId: '__EDETswVw0',
  youtubeEmbedUrl: 'https://www.youtube.com/embed/__EDETswVw0',
  googleReviewsCount: '280+',
  googleReviewsLink: 'https://g.co/kgs/8ABYVd2',
};

export const CORE_MODULES: ModuleItem[] = [
  {
    number: '01',
    title: 'Find High-Paying Remote Jobs',
    summary:
      'Discover where legitimate, well-paying remote work opportunities are posted and how to filter out low-paying freelance gigs.',
    details: [
      'Uncover hidden global job boards and specialized talent marketplaces.',
      'How to spot verified dollar-paying international contracts.',
      'Filter roles based on your desired timezone and lifestyle flexibility.',
    ],
    icon: 'Search',
  },
  {
    number: '02',
    title: 'Skills Mapping Framework',
    summary:
      'Map the exact 21st-century high-demand skills employers look for and connect them directly to your existing background.',
    details: [
      'Identify high-demand remote skills (project coordination, operations, digital management, communication).',
      'Bridge the gap between your university degree and practical employability.',
      'Pinpoint your unique competitive advantage for international hiring managers.',
    ],
    icon: 'Layers',
  },
  {
    number: '03',
    title: 'Career Clarity & Positioning',
    summary:
      'Define your ideal global career path with absolute clarity so you stop applying randomly and start getting interview invites.',
    details: [
      'Stop wasting months on courses that do not lead to income.',
      'Define whether full-time remote, contract, or hybrid fits your lifestyle.',
      'Understand what it truly takes to get your first remote job offer.',
    ],
    icon: 'Compass',
  },
  {
    number: '04',
    title: 'Direct Access & Interactive Q&A',
    summary:
      'Get direct, live strategic answers from Dr. Aderinsola during the workshop to audit your career plan in real time.',
    details: [
      'Ask specific questions about your current industry and background.',
      'Receive personalized strategic critique from someone who has broken into global organizations.',
      'Overcome mental roadblocks around African applicants competing globally.',
    ],
    icon: 'MessageSquare',
  },
  {
    number: '05',
    title: 'Experience Leverage',
    summary:
      'Turn your past offline or local work experience into compelling proof of high workplace value for international recruiters.',
    details: [
      'Reposition local roles into globally recognized competencies and job titles.',
      'Use the Proven Positioning Protocol (PPP) that landed past attendees roles at global companies.',
      'Frame outcomes and impact instead of mundane daily duties.',
    ],
    icon: 'TrendingUp',
  },
  {
    number: '06',
    title: 'Career Transition Roadmap',
    summary:
      'Build a step-by-step transition roadmap so you can transition confidently without feeling overwhelmed or leaving your security behind.',
    details: [
      'A practical weekly execution blueprint for landing remote roles.',
      'How to navigate interviews, asynchronous work culture, and remote pay.',
      'Maintain accountability and momentum with proven tools.',
    ],
    icon: 'Map',
  },
];

export const MASTERCLASS_BONUSES: BonusItem[] = [
  {
    number: 'Bonus 01',
    title: 'Private Remote Work Community Access',
    value: 'Worth ₦20,000',
    description:
      'Access to our private global remote jobs community network, where you will receive preparatory workshop materials, networking, and peer support.',
    tag: 'Community Access',
  },
  {
    number: 'Bonus 02',
    title: 'Curated Guide With 10 Open Remote Roles',
    value: 'Worth ₦15,000',
    description:
      'Receive a curated post-workshop guide detailing 10 currently open, verified remote roles and exact links to apply right away.',
    tag: 'Exclusive Resource',
  },
  {
    number: 'Bonus 03',
    title: 'Career Transition Worksheet & Templates',
    value: 'Worth ₦15,000',
    description:
      'Step-by-step worksheets and profile revamp templates designed to organise your goals, audit skill gaps, and position your profile for global scouts.',
    tag: 'Action Blueprint',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Sandra Sampor',
    role: 'Intern & Professional',
    image:
      'https://itrainafricabucket.s3.af-south-1.amazonaws.com/wp-content/uploads/2024/03/11112435/Sandra-Sampor.png',
    quote:
      'After taking a break from my sales executive job to care for my baby, I struggled to reintegrate into the workforce. Despite earning an MBA, I lacked confidence and 21st-century skills. I realized that skills, not certificates, are now the priority. Employers seek efficient and productive individuals. Luckily, I found I-Train Africa’s skills program, which provided me with the practical skills and experience I needed to thrive in the modern workforce.',
    highlight: 'Reintegrated into modern workforce with an MBA + practical skills',
    badge: 'Career Re-entry',
  },
  {
    name: 'Tayo',
    role: 'Tech Personnel & Digital Marketer',
    image:
      'https://itrainafricabucket.s3.af-south-1.amazonaws.com/wp-content/uploads/2022/09/22192018/WhatsApp-Image-2022-09-20-at-13.08.44.jpeg',
    quote:
      'I thought a computer science degree was the key to a tech career. But Dr. Derin opened my eyes to the reality that skills, not certificates, are what matter. I joined I-Train Africa and gained practical skills in digital marketing, automation, and more. In just 5 months, I’ve become proficient in setting up landing pages, funnels, and automation for digital products. I’ve even progressed from apprentice to intern, earning an allowance, and have ideas for using my new skills to work virtually.',
    highlight: 'From Computer Science graduate to paid remote intern in 5 months',
    badge: 'Digital Skills',
  },
  {
    name: 'Ganiat Arogundade',
    role: 'Program Coordinator & Product Manager',
    image:
      'https://itrainafricabucket.s3.af-south-1.amazonaws.com/wp-content/uploads/2024/03/11173015/Ganiat.jpg',
    quote:
      'I had an 8-year-old master’s degree with no skills or job title. But after joining I-Train Africa, I gained highly sought-after skills and landed two global job roles: Program Coordinator for a global conference and Product Manager for an employability academy. Within 5 months, I was managing 65+ volunteers and shortly after, secured a paid product manager role. I achieved in 11 months what I couldn’t in 8+ years with my degrees!',
    highlight: 'Landed 2 global roles after 8 years of stagnant degrees',
    badge: 'Global Role',
  },
  {
    name: 'Rasak Muinat',
    role: 'Relationship Manager & Communication Lead',
    image:
      'https://itrainafricabucket.s3.af-south-1.amazonaws.com/wp-content/uploads/2024/03/21143645/WhatsApp-Image-2024-03-21-at-14.32.54.jpeg',
    quote:
      'I was a microbiology graduate struggling to find a job, lacking essential skills like effective communication and digital knowledge. Luckily, my mentor introduced me to Dr. Aderinsola Adio-Adepoju, who helped me gain clarity, find purpose, and acquire relevant skills through I-Train Africa. I acquired soft skills, emotional intelligence, and practical communication skills, transforming me into a confident professional. I’m now the Communication Lead!',
    highlight: 'Microbiology graduate transformed into confident Communication Lead',
    badge: 'Promotion & Leadership',
  },
  {
    name: 'Olukunle Akinborewa',
    role: 'Cardiac Physiologist & Global Scholar',
    image:
      'https://itrainafricabucket.s3.af-south-1.amazonaws.com/wp-content/uploads/2022/02/02211734/IMG_20210507_173919_944.jpg',
    quote:
      'I’ll never forget the day I visited Dr. Derin in 2018. I asked for money, but instead, she shared her secret to traveling the world on research grants. She mentored me, showing me how to leverage my academics for opportunities. With her guidance, I applied for the iSI scholarship, and she served as my referee. On May 2, I received the email saying I won! Dr. Derin’s mentorship transformed my life, and I’m forever grateful.',
    highlight: 'Won competitive international scholarship and global opportunities',
    badge: 'International Grant Winner',
  },
  {
    name: 'Augusta Heavens Ikevuje',
    role: 'Oil & Gas Business Expert',
    image:
      'https://itrainafricabucket.s3.af-south-1.amazonaws.com/wp-content/uploads/2021/09/24190921/augustaheavens.jpeg',
    quote:
      'I wondered how people got noticed and landed their desired opportunities. Dr. Derin revealed the secret: having the right profile and strategic positioning. After a 3-hour profile revamp, I was shocked when industry leaders in oil and gas, whom I had previously admired, reached out to me to join their teams. Dr. Derin’s expertise transformed my online presence, opening doors to new opportunities and turning the tables in my favor.',
    highlight: 'Industry leaders reached out directly after strategic profile revamp',
    badge: 'Headhunted by Executives',
  },
  {
    name: 'Ivie Osobase',
    role: 'Marketing and Communications Professional',
    image:
      'https://itrainafricabucket.s3.af-south-1.amazonaws.com/wp-content/uploads/2022/02/03000756/WhatsApp-Image-2022-02-03-at-00.06.00.jpeg',
    quote:
      'Within 2 weeks of joining Dr. Derin’s program, I received interview messages from international organizations like Netflix, without even applying! Her PPP framework helped me gain clarity, design a compelling profile, and position myself strategically. The results were astonishing: recruiters reached out, and I even landed a dream job paying in dollars. I’ve also monetized my newfound skills, charging friends $200 to write their profiles.',
    highlight: 'Interview requests from Netflix and dollar-paying dream role',
    badge: 'Hired in Dollars',
  },
  {
    name: 'Azeez Mujib',
    role: 'Electrical Engineer & Artisan Entrepreneur',
    image:
      'https://itrainafricabucket.s3.af-south-1.amazonaws.com/wp-content/uploads/2024/04/08092921/WhatsApp-Image-2024-04-08-at-09.23.52.jpeg',
    quote:
      'As an electrician, I thought technology wasn’t relevant to my job. But after acquiring digital skills, I can now create content, run Facebook Ads, and attract ideal clients. I’ve gone from hoping for clients to leveraging social media and digital marketing to grow my business. Anyone can master tech skills, regardless of age, gender, or background. I’m proof! Technology fuels growth, automates tasks, and connects you with customers.',
    highlight: 'Artisan leveraged digital skills to automate client acquisition',
    badge: 'Entrepreneurial Growth',
  },
];

export const WHATSAPP_PROOFS: WhatsAppProof[] = [
  {
    id: 'proof-1',
    title: 'Attendee Breakthrough & Dollar Earnings',
    src: 'https://itrainafricabucket.s3.af-south-1.amazonaws.com/wp-content/uploads/2025/03/19180927/WhatsApp-Image-2025-03-19-at-18.07.19.jpeg',
    caption: 'Participant feedback celebrating direct clarity and global application outcomes.',
  },
  {
    id: 'proof-2',
    title: 'Recruiter Outreach Without Cold Applications',
    src: 'https://itrainafricabucket.s3.af-south-1.amazonaws.com/wp-content/uploads/2026/01/25225101/WhatsApp-Image-2026-01-25-at-10.15.46-PM.jpeg',
    caption: 'LinkedIn positioning causing international recruiters to reach out directly.',
  },
  {
    id: 'proof-3',
    title: 'Job Offer & Interview Invitations',
    src: 'https://itrainafricabucket.s3.af-south-1.amazonaws.com/wp-content/uploads/2026/01/25225105/WhatsApp-Image-2026-01-25-at-9.08.30-PM.jpeg',
    caption: 'Alumni celebrating multiple international interviews booked in 1 week.',
  },
  {
    id: 'proof-4',
    title: 'Masterclass Direct Impact',
    src: 'https://itrainafricabucket.s3.af-south-1.amazonaws.com/wp-content/uploads/2026/03/30164037/Remote-Work-Masterclass-Tstimonial.jpeg',
    caption: 'Live feedback during the 3-hour Zoom session praising Dr. Derin’s insights.',
  },
  {
    id: 'proof-5',
    title: 'First International Contract Signed',
    src: 'https://itrainafricabucket.s3.af-south-1.amazonaws.com/wp-content/uploads/2026/01/24215537/WhatsApp-Image-2026-01-24-at-9.44.43-PM.jpeg',
    caption: 'From zero remote experience to securing an ongoing monthly dollar retainer.',
  },
  {
    id: 'proof-6',
    title: 'Profile Optimization Results',
    src: 'https://itrainafricabucket.s3.af-south-1.amazonaws.com/wp-content/uploads/2026/03/30164303/RWM.jpeg',
    caption: 'Real attendee chats sharing immediate reactions after attending RWM.',
  },
  {
    id: 'proof-7',
    title: 'Career Clarity Revelation',
    src: 'https://itrainafricabucket.s3.af-south-1.amazonaws.com/wp-content/uploads/2026/03/30164537/Remote-Work-Masterclass-2.jpeg',
    caption: 'Clear roadmap replaces years of confusion and random certificate collection.',
  },
  {
    id: 'proof-8',
    title: 'Remote Work Success Story',
    src: 'https://itrainafricabucket.s3.af-south-1.amazonaws.com/wp-content/uploads/2026/03/30164757/Remote-work-testimonial.jpeg',
    caption: 'Participant appreciation for practical, actionable guidance without fluff.',
  },
  {
    id: 'proof-9',
    title: 'International Opportunity Confirmed',
    src: 'https://itrainafricabucket.s3.af-south-1.amazonaws.com/wp-content/uploads/2026/01/24215526/WhatsApp-Image-2026-01-24-at-7.37.55-PM-1.jpeg',
    caption: 'Securing a remote gig with a European and US-based organization.',
  },
];

export const FAQS: FAQItem[] = [
  {
    question: 'When & Where Is The Masterclass?',
    answer:
      'The masterclass takes place on Saturday, September 26, 2026 at 6:00 PM (West Africa Time) live online on Zoom. It is an interactive 3-hour session designed for direct engagement and clarity.',
    category: 'Logistics',
  },
  {
    question: 'How Can I Access The Masterclass After Payment?',
    answer:
      'Upon registration, you will receive an email with full instructions on how to access the masterclass. After making payment, please do not close the final page—on that page you will find the direct link to join our exclusive WhatsApp cohort group! A few days before the event, we will also send calendar invites and your unique Zoom access credentials.',
    category: 'Access',
  },
  {
    question: 'Would There Be A Replay Available?',
    answer:
      'Yes, you will receive access to the replay of the masterclass. However, it is strongly recommended that you attend live on Zoom to participate in the interactive exercises and ask Dr. Aderinsola your specific questions during the dedicated Q&A session.',
    category: 'Content',
  },
  {
    question: 'Is This A Full Technical Skills Training Program?',
    answer:
      'No, this is a 3-Hour Career Clarity & Positioning Masterclass. It is a high-impact roadmap workshop designed to help you identify the exact skills required for high-paying remote roles, where to locate legitimate openings, and how to position your profile for global hiring managers. If you later wish to acquire 6-week in-depth technical skills, iTrain Africa also offers the SKILLEDFORWORK academy programs.',
    category: 'Content',
  },
  {
    question: 'Can I Pay Via Direct Bank Transfer Instead Of A Card?',
    answer:
      'Yes! You can transfer directly to Guaranty Trust Bank (GTB), Account Name: I-Train Africa, Account Number: 0930052417. After transferring ₦5,375 (Single Seat) or ₦8,600 (Growth Partner Bundle), simply send your payment receipt to itrainafricaenrollment@gmail.com along with your name and WhatsApp phone number, or click the WhatsApp button on this page.',
    category: 'Payment',
  },
  {
    question: 'What Is The Growth Partner Bundle?',
    answer:
      'The Growth Partner Bundle gives you 2 seats for only ₦8,600 (saving you over ₦2,100 compared to buying two individual tickets). Growth sticks better when you learn with someone. Invite a colleague, friend, spouse, or team member to attend the 3-hour session with you so you can reflect, execute, and keep each other accountable afterwards.',
    category: 'Pricing',
  },
  {
    question: 'Who Should Attend This Masterclass?',
    answer:
      'This masterclass is designed for: (1) Experienced professionals who want flexible, international income; (2) Graduates and job seekers struggling with generic CV advice; (3) Academics and founders seeking global market entry; (4) Career changers who want a realistic transition plan without quitting their current job.',
    category: 'Audience',
  },
  {
    question: 'What Is The Refund Policy?',
    answer:
      'Due to the high-value downloadable resources, community access, and limited seat allocations on Zoom, fees for the masterclass are non-refundable. If you have any questions before enrolling, you can chat with our team directly via WhatsApp.',
    category: 'Policy',
  },
];
