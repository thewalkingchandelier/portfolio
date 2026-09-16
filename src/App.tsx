//edit image sizing in this file 
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { eye, krissy, site, su, breadcrumbs } from './images/image.js';
import { 
  Terminal, 
  Layers, 
  Monitor, 
  Cpu, 
  Download, 
  Send, 
  ArrowRight, 
  X, 
  Menu,
  Github,
  Linkedin,
  Twitter,
  ExternalLink
} from 'lucide-react';
import CaseStudyComponent from './components/CaseStudy.tsx';
import resume from './images/resume.js';

// --- Types ---
interface CaseStudy {
  id: string;
  title: string;
  category: 'PM' | 'UX' | 'ENG' | 'MULTI';
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  color: string;
}

// --- Constants ---

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'breadcrumbs',
    title: 'SECONDARY NAVIGATION - "BREADCRUMBS"',
    category: 'PM',
    description: 'Implemented a new breadcrumbs navigation system for improved user experience.',
    longDescription: 'As the lead PM, I led the design, development, and continued iteration of the breadcrumbs navigation feature for a national news outlet.',
    tags: ['Product Strategy', 'Agile', 'Design Systems'],
    image: breadcrumbs,
    color: 'bg-cyber-yellow'
  },
    {id: 'site-banner',
    title: 'SITE BANNER REDESIGN',
    category: 'PM',
    description: 'Spearheaded the reimagining of a global website banner.',
    longDescription: 'As the lead PM, I led the design, development, and continued iteration of the breadcrumbs navigation feature for a national news outlet.',
    tags: ['Product Strategy', 'Agile', 'Design Systems'],
    image: site,
    color: 'bg-cyber-yellow'
  },
  {
    id: 'synth-ux',
    title: 'Physician\'s Assistant App Design',
    category: 'UX',
    description: 'A redesign of a university admissions and curriculum design system.',
    longDescription: 'NEON WAVE is a spatial UI experiment focusing on tactile feedback in digital environments. I designed a custom gesture library and a set of high-contrast components optimized for dim studio environments.',
    tags: ['UX Research', 'Design Systems', 'Figma'],
    image: 'https://picsum.photos/seed/neonwave/800/600',
    color: 'bg-neon-pink'
  },
  {
    id: 'pha',
    title: 'EYE TRACKING STUDY AND EDITORIAL REDESIGN',
    category: 'UX',
    description: 'An eye tracking study and information architecture redesign for a local housing authority.',
    longDescription: 'As a UX researcher, I led an eye tracking study with low literacy participants learning about a city housing program.',
    tags: ['UX Research', 'Design Systems', 'Illustrator', 'Acrobat'],
    image: eye,
    color: 'bg-neon-pink'
  },
  {
    id: 'hbcu',
    title: 'AR GAME',
    category: 'ENG',
    description: 'Placeholder text.',
    longDescription: 'A digital library of historically black colleges and universities, providing access to resources and information about these institutions. The project involved web development, database management, and user experience design to create an accessible and informative platform.',
    tags: ['JavaScript', 'Adobe CS'],
    image: 'https://picsum.photos/seed/void/800/600',
    color: 'bg-electric-teal'
  },
  {
    id: '',
    title: 'SOCIAL UNDERCARD',
    category: 'MULTI',
    description: 'Visual assets for an upcomingmedia brand.',
    longDescription: 'A custom-built generative art tool that transforms city sounds into dynamic graffiti patterns. This project explores the intersection of environmental acoustics and urban aesthetics.',
    tags: ['Premiere Pro', 'After Effects', 'DSLR', 'Film'],
    image: su,
    color: 'bg-punchy-orange'
  }
];

// --- Components ---

const GameBorder = ({ children, color = 'bg-deep-night' }: { children: React.ReactNode, color?: string }) => (
  <div className={`jet-border p-6 ${color} relative overflow-hidden`}>
    <div className="absolute top-0 right-0 w-8 h-8 bg-black skew-x-[45deg] translate-x-4 -translate-y-4" />
    {children}
  </div>
);

const SectionTitle = ({ children, number }: { children: string, number: string }) => (
  <div className="relative mb-12">
    <motion.div 
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      className="flex items-end gap-4"
    >
      <span className="font-display font-black text-6xl md:text-8xl text-cyber-yellow leading-none italic">{number}</span>
      <h2 className="font-display font-black text-4xl md:text-6xl uppercase italic tracking-tighter leading-none border-b-8 border-neon-pink pb-2">
        {children}
      </h2>
    </motion.div>
  </div>
);

export default function App() {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [view, setView] = useState<'home' | 'template'>('home');
  const [templateCategory, setTemplateCategory] = useState<'PM' | 'UX' | 'ENG' | 'MULTI'>('PM');

  if (view === 'template') {
    const foundProject = CASE_STUDIES.find(cs => cs.category === templateCategory) || CASE_STUDIES[0];
    return (
      <CaseStudyComponent 
        onBack={() => setView('home')} 
        project={foundProject}
      />
    );
  }

  return (
    <div className="min-h-screen selection:bg-neon-pink selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 p-4 flex justify-between items-center pointer-events-none">
        <motion.div 
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          className="pointer-events-auto bg-black border-4 border-cyber-yellow p-2 skew-x-[-15deg]"
        >
          <a href="/" className="unskew-content inline-block font-display font-black text-2xl px-4 tracking-tighter italic">
            KRISSY<span className="text-neon-pink">SNEAUX</span>
          </a>
        </motion.div>
        
        <div className="pointer-events-auto flex gap-4">
          <button 
            onClick={() => setIsNavOpen(!isNavOpen)}
            className="bg-black border-4 border-electric-teal p-3 text-electric-teal hover:bg-electric-teal hover:text-black transition-colors"
          >
            {isNavOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Fullscreen Nav Overlay */}
      <AnimatePresence>
        {isNavOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-neon-pink z-40 flex flex-col items-center justify-center p-8"
          >
            <div className="flex flex-col gap-6 text-center">
              {['WORK', 'ABOUT', 'RESUME', 'CONTACT'].map((item, idx) => {
                const isTemplate = item === 'TEMPLATE';
                return (
                  <motion.a
                    key={item}
                    href={isTemplate ? undefined : `#${item.toLowerCase()}`}
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    onClick={() => {
                      setIsNavOpen(false);
                      if (isTemplate) {
                        setView('template');
                      }
                    }}
                    className="font-display font-black text-6xl md:text-8xl text-black hover:text-cyber-yellow transition-colors italic tracking-tighter cursor-pointer"
                  >
                    {item}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/urban/1920/1080?grayscale')] bg-cover bg-center mix-blend-overlay opacity-30" /> */}
        <div className="absolute inset-0 bg-linear-to-br from-deep-night via-transparent to-deep-night" />
        
        <div className="relative z-10 text-center px-4 w-full max-w-6xl">
          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
            animate={{ scale: 1, opacity: 1, rotate: -2 }}
            transition={{ type: 'spring', damping: 10 }}
            className="mb-8"
          >
            <div className="inline-block bg-cyber-yellow text-black font-display font-black text-xl md:text-3xl px-6 py-2 uppercase tracking-tight mb-4">
              CREATIVE TECHNOLOGIST
            </div>
            <h1 className="font-display font-black text-7xl md:text-[10rem] leading-none uppercase italic tracking-tighter drop-shadow-[10px_10px_0px_rgba(255,0,255,0.7)]">
              KRISTINA <br /> <span className="text-electric-teal">OUSLEY</span>
            </h1>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <motion.div className="flex flex-wrap justify-center gap-6" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}>
              <div className="bg-black/50 backdrop-blur-md border-4 border-white inline-flex items-center gap-4 px-6 py-3 font-bold uppercase italic text-sm md:text-lg">
                <Terminal className="text-cyber-yellow" /> Product Management
              </div>
              <div className="bg-black/50 backdrop-blur-md border-4 border-white inline-flex items-center gap-4 px-6 py-3 font-bold uppercase italic text-sm md:text-lg">
                <Layers className="text-neon-pink" /> UX Design
              </div>
              <div className="bg-black/50 backdrop-blur-md border-4 border-white inline-flex items-center gap-4 px-6 py-3 font-bold uppercase italic text-sm md:text-lg">
                <Cpu className="text-electric-teal" /> Engineering
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-16"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
             <a href="#work" className="jet-button">
               LATEST WORK <ArrowRight className="inline ml-2" />
             </a>
          </motion.div>
        </div>

        {/* Geometric Decor */}
        <div className="absolute top-1/4 -left-20 w-80 h-20 bg-neon-pink/20 -rotate-45 blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-20 bg-electric-teal/20 -rotate-45 blur-3xl" />
      </header>

      {/* Case Studies Section */}
      <section id="work" className="py-24 px-4 container mx-auto">
        <SectionTitle number="01">THE REEL</SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {CASE_STUDIES.map((cs, idx) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedCase(cs)}
              className="cursor-pointer"
            >
              <GameBorder color={`${cs.color} hover:brightness-110 transition-all`}>
                <div className="relative aspect-video mb-6 overflow-hidden border-4 border-black">
                  <img 
                    src={cs.image} 
                    alt={cs.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-black text-white px-4 py-1 font-black text-sm italic border-2 border-white">
                    {cs.category}
                  </div>
                </div>
                <h3 className="font-display font-black text-4xl text-black uppercase italic tracking-tighter mb-2">
                  {cs.title}
                </h3>
                <p className="text-black font-bold text-lg mb-4 opacity-80">
                  {cs.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cs.tags.map(tag => (
                    <span key={tag} className="bg-black text-white px-2 py-1 text-xs font-black uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>
              </GameBorder>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About / About the Creator Section */}
      <section id="about" className="py-24 bg-black relative overflow-hidden">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <motion.div 
               initial={{ rotate: -10, scale: 0.9 }}
               whileInView={{ rotate: -5, scale: 1 }}
               className="relative z-10 jet-border p-4 bg-cyber-yellow"
            >
              <img 
                src={krissy} 
                alt="Krissy Sneaux" 
                className="w-full grayscale h-[600px] object-cover border-4 border-black"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -right-8 bg-neon-pink p-6 border-4 border-black font-display font-black text-3xl uppercase italic shadow-[8px_8px_0px_rgba(0,0,0,1)]">
                KRISSY SNEAUX
              </div>
            </motion.div>
            <div className="absolute top-0 -left-10 w-full h-full bg-electric-teal rotate-6 -z-10 border-4 border-black" />
          </div>

          <div>
            <SectionTitle number="02">About the Creator</SectionTitle>
            <div className="space-y-6">
              <p className="font-display text-2xl md:text-3xl font-bold leading-tight uppercase italic text-cyber-yellow">
                I DON'T JUST BUILD <span className="text-neon-pink">PRODUCTS</span>. I BUILD <span className="text-electric-teal">EXPERIENCES</span> THAT HIT LIKE A HIGH-SPEED RAIL.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                As a Creative Technologist, I occupy the nexus of strategy, design, and code. My goal is to bridge the gap between "cool ideas" and "production-ready impact." Whether I'm leading a redesign or working on a new feature, I bring a high-energy, user-first perspective to everything I touch.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                I've spent a decade balancing strategic foresight with creative experimentation. If you're looking for someone who can talk roadmap to stakeholders and then roll up their sleeves to build something amazing—we should talk.
              </p>
              
              <div className="pt-8 flex flex-wrap gap-4">
                <a href= {resume} className="jet-button" target="_blank" rel="noopener noreferrer">
                  RESUME <Download className="inline ml-2" />
                </a>
                <a href="#contact" className="bg-black text-electric-teal border-4 border-electric-teal px-8 py-4 font-black uppercase text-xl italic hover:bg-electric-teal hover:text-black transition-all">
                  LET'S WORK <ArrowRight className="inline ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 container mx-auto mb-24">
        <SectionTitle number="03">TAG ME</SectionTitle>
        <div className="max-w-4xl mx-auto">
          <GameBorder color="bg-electric-teal">
            <form className="space-y-8 p-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="font-display font-black uppercase text-black italic tracking-tighter text-xl">CALLSIGN</label>
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    className="w-full bg-black border-4 border-black text-electric-teal p-4 font-bold placeholder:text-electric-teal/30 focus:outline-none focus:bg-white focus:text-black"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-display font-black uppercase text-black italic tracking-tighter text-xl">EMAIL</label>
                  <input 
                    type="email" 
                    placeholder="your_email@gmail.com"
                    className="w-full bg-black border-4 border-black text-electric-teal p-4 font-bold placeholder:text-electric-teal/30 focus:outline-none focus:bg-white focus:text-black"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-display font-black uppercase text-black italic tracking-tighter text-xl">THE GOAL</label>
                <textarea 
                  rows={4}
                  placeholder="Tell me about the mission..."
                  className="w-full bg-black border-4 border-black text-electric-teal p-4 font-bold placeholder:text-electric-teal/30 focus:outline-none focus:bg-white focus:text-black"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-black text-cyber-yellow font-display font-black text-3xl py-6 uppercase italic hover:bg-neon-pink hover:text-black transition-all flex items-center justify-center gap-4 group"
              >
                LET'S WORK <Send className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
              </button>
            </form>
          </GameBorder>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 px-4 border-t-8 border-cyber-yellow">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="font-display font-black text-4xl italic tracking-tighter mb-2">
              KRISSY<span className="text-neon-pink">SNEAUX</span> <span className="text-electric-teal">2026</span>
            </div>
            <p className="text-white/50 text-sm font-bold tracking-widest uppercase">
              Every idea gets a fresh coat of sneaux.
            </p>
          </div>
          <div className="flex gap-6">
            <a href="https://github.com/thewalkingchandelier/" className="text-white hover:text-cyber-yellow transition-colors" target="_blank"><Github size={32} /></a>
            <a href="https://linkedin.com/in/kristinacousley" className="text-white hover:text-neon-pink transition-colors" target="_blank"><Linkedin size={32} /></a>
            <a href="#" className="text-white hover:text-electric-teal transition-colors" target="_blank"><Twitter size={32} /></a>
          </div>xs
        </div>
      </footer>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedCase && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedCase(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 50, rotate: -2 }}
              animate={{ scale: 1, y: 0, rotate: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto jet-border text-black p-0"
              onClick={e => e.stopPropagation()}
            >
              <div className={`p-8 ${selectedCase.color} border-b-8 border-black sticky top-0 z-10 flex justify-between items-center`}>
                <h2 className="font-display font-black text-4xl md:text-6xl italic tracking-tighter uppercase leading-none">
                  {selectedCase.title}
                </h2>
                <button 
                  onClick={() => setSelectedCase(null)}
                  className="bg-black text-white p-2 border-4 border-black hover:bg-white hover:text-black transition-colors"
                >
                  <X size={32} />
                </button>
              </div>
              <div className="p-8 space-y-8">
                <div className="aspect-video border-4 border-black overflow-hidden bg-black/10">
                  <img src={selectedCase.image} alt={selectedCase.title} className="w-full h-full object-cover" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-6">
                    <h3 className="font-display font-black text-2xl uppercase italic border-b-4 border-black inline-block">THE MISSION</h3>
                    <p className="text-xl leading-relaxed font-bold">
                      {selectedCase.longDescription}
                    </p>
                    <div className="pt-4 flex gap-4">
                      <button className="jet-button !text-base !px-6 !py-3">
                         LIVE DEMO <ExternalLink className="inline ml-2" size={18} />
                      </button>
                      <button 
                        onClick={() => {
                          setTemplateCategory(selectedCase.category);
                          setView('template');
                          setSelectedCase(null);
                        }}
                        className="bg-neon-pink text-white px-6 py-3 font-display font-black uppercase italic border-4 border-black hover:bg-white hover:text-black hover:scale-105 transition-all text-base cursor-pointer"
                      >
                         FULL EXPERIMENTAL SPECS ⚡
                      </button>
                    </div>
                  </div>
                  <div className="space-y-6 border-l-4 border-black/10 pl-8">
                    <div>
                      <h4 className="font-display font-black uppercase italic text-xs tracking-widest text-black/40 mb-2">CATEGORY</h4>
                      <div className="font-black text-xl italic">{selectedCase.category}</div>
                    </div>
                    <div>
                      <h4 className="font-display font-black uppercase italic text-xs tracking-widest text-black/40 mb-2">ENGINE</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedCase.tags.map(tag => (
                          <span key={tag} className="bg-black text-cyber-yellow px-2 py-1 text-xs font-black uppercase">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
