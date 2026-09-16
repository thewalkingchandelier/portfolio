import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  ExternalLink, 
  TrendingUp, 
  Users, 
  Zap, 
  Layers, 
  Cpu, 
  Download,
  Terminal,
  Volume2
} from 'lucide-react';

const GameBorder = ({ children, color = 'bg-deep-night' }: { children: React.ReactNode, color?: string }) => (
  <div className={`jet-border p-6 ${color} relative overflow-hidden`}>
    <div className="absolute top-0 right-0 w-8 h-8 bg-black skew-x-[45deg] translate-x-4 -translate-y-4" />
    {children}
  </div>
);

export interface CaseStudy {
  id: string;
  title: string;
  category: 'PM' | 'UX' | 'ENG' | 'MULTI';
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  color: string;
}

interface CaseStudyProps {
  onBack: () => void;
  project?: CaseStudy;
}

// Fallback high-impact default project if none passed
const DEFAULT_PROJECT: CaseStudy = {
  id: 'metro-runner',
  title: 'METRO RUNNER STACK',
  category: 'PM',
  description: 'Roadmap to the streets: leading cross-functional urban solutions.',
  longDescription: 'As the lead Creative Engineer, I orchestrated the roadmap and deployment for Metro Runner Stack. Coordinate with municipal designers, graffiti taggers, and core signal architects to deploy high-accuracy telemetry systems on active city lines under intense timelines, decreasing telemetry sync delay dramatically.',
  tags: ['Product Strategy', 'WASM Core', 'Street Signal APIs', 'Agile'],
  image: 'https://picsum.photos/seed/cybermetro/1200/500',
  color: 'bg-cyber-yellow'
};

export default function CaseStudy({ onBack, project }: CaseStudyProps) {
  const currentProject = project || DEFAULT_PROJECT;

  // Derive dynamic color schemes matching JSR style
  const styleConfig = {
    PM: { text: "text-cyber-yellow", bg: "bg-cyber-yellow", border: "border-cyber-yellow" },
    UX: { text: "text-neon-pink", bg: "bg-neon-pink", border: "border-neon-pink" },
    ENG: { text: "text-electric-teal", bg: "bg-electric-teal", border: "border-electric-teal" },
    MULTI: { text: "text-punchy-orange", bg: "bg-punchy-orange", border: "border-punchy-orange" }
  }[currentProject.category] || { text: "text-cyber-yellow", bg: "bg-cyber-yellow", border: "border-cyber-yellow" };

  return (
    <div className="min-h-screen bg-deep-night relative text-white pb-24">
      {/* Background Matrix/Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#2a2a2a_1px,transparent_1px),linear-gradient(to_bottom,#2a2a2a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-20" />

      {/* Control Header */}
      <div className="sticky top-0 z-30 bg-black/90 backdrop-blur-md p-4 border-b-4 border-black flex justify-between items-center">
        <button 
          onClick={onBack}
          className="bg-cyber-yellow text-black font-display font-black text-lg px-6 py-2 border-4 border-black skew-x-[-10deg] shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:bg-white active:translate-y-1 transition-all flex items-center gap-2 cursor-pointer"
        >
          <ArrowLeft size={18} className="unskew-content" />
          <span className="unskew-content">RETURN TO HOME</span>
        </button>

        <div className="bg-black border-4 border-white px-4 py-2 font-display font-black uppercase text-sm italic tracking-widest text-[#FFD700] skew-x-[-10deg]">
          <span className="unskew-content inline-block">LAUNCH ZONE: {currentProject.category}</span>
        </div>
      </div>

      {/* Slanted Hero Header */}
      <div className="relative h-[380px] md:h-[480px] border-b-8 border-black overflow-hidden flex items-end">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-700 brightness-75 scale-105"
          style={{ backgroundImage: `url(${currentProject.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        

        <div className="relative z-10 w-full max-w-7xl mx-auto p-6 md:p-12 mb-4">
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className={`inline-block ${styleConfig.bg} text-black font-display font-black text-3xl md:text-6xl uppercase italic tracking-tighter px-8 py-3 skew-x-[-10deg] border-4 border-black shadow-[8px_8px_0_rgba(0,0,0,1)]`}
          >
            <span className="inline-block unskew-content">{currentProject.title}</span>
          </motion.div>
          <p className="mt-4 text-cyber-yellow font-display font-black tracking-normal text-lg md:text-2xl drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
            {currentProject.description}
          </p>
        </div>
      </div>

      {/* Grid container layout */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Main Side (8 Columns) */}
        <div className="lg:col-span-8 space-y-12">
          
          {/* Executive Overview & Highlights */}
          <section className="bg-black border-4 border-black border-r-8 border-b-8 p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative">
            <h3 className="font-display font-black text-2xl uppercase tracking-widest italic text-cyber-yellow border-b-4 border-cyber-yellow inline-block pb-1 mb-6">
              EXECUTIVE SPECS
            </h3>

            {/* Static high-impact spec dashboards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-zinc-900 border-4 border-black p-4 relative overflow-hidden">
                <Zap className="text-cyber-yellow mb-2" size={28} />
                <div className="text-sm font-bold text-gray-400 uppercase tracking-wider">RECIRCULATION RATE INCREASE</div>
                <div className="font-display font-black text-3xl md:text-4xl text-cyber-yellow mt-1">
                  -45%
                </div>
              </div>
              <div className="bg-zinc-900 border-4 border-black p-4 relative overflow-hidden">
                <Users className="text-neon-pink mb-2" size={28} />
                <div className="text-sm font-bold text-gray-400 uppercase tracking-wider">ACQUISITION</div>
                <div className="font-display font-black text-3xl md:text-4xl text-neon-pink mt-1">
                  1.2M+
                </div>
              </div>
              <div className="bg-zinc-900 border-4 border-black p-4 relative overflow-hidden">
                <TrendingUp className="text-electric-teal mb-2" size={28} />
                <div className="text-sm font-bold text-gray-400 uppercase tracking-wider">ROI RUSH</div>
                <div className="font-display font-black text-3xl md:text-4xl text-electric-teal mt-1">
                  180%
                </div>
              </div>
            </div>
          </section>

          {/* Deep Case narrative breakdown */}
          <section className="space-y-8 bg-zinc-900 p-8 border-4 border-black">
            
            {/* The Challenge */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-1">
                <h4 className={`font-display font-black text-xl italic tracking-tighter uppercase p-2 border-l-8 ${styleConfig.border} bg-black text-white`}>
                  THE SITCH
                </h4>
                <span className="text-xs font-mono uppercase text-gray-500 block mt-2">CHALLENGE</span>
              </div>
              <div className="md:col-span-3">
                <p className="text-lg text-white/90 leading-relaxed font-semibold">
                  Users frequently encountered difficulties navigating the complex information architecture, leading to increased bounce rates and decreased engagement.
                </p>
              </div>
            </div>

            <hr className="border-2 border-black" />

            {/* The Solution */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-1">
                <h4 className={`font-display font-black text-xl italic tracking-tighter uppercase p-2 border-l-8 ${styleConfig.border} bg-black text-white`}>
                  THE WORK
                </h4>
                <span className="text-xs font-mono uppercase text-gray-500 block mt-2">EXECUTION</span>
              </div>
              <div className="md:col-span-3">
                <p className="text-lg text-white/90 leading-relaxed font-semibold">
                  {currentProject.longDescription}
                </p>
              </div>
            </div>

            <hr className="border-2 border-black" />

            {/* The Outcome */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-1">
                <h4 className={`font-display font-black text-xl italic tracking-tighter uppercase p-2 border-l-8 ${styleConfig.border} bg-black text-white`}>
                  RESULTS
                </h4>
                <span className="text-xs font-mono uppercase text-gray-500 block mt-2">OUTCOME</span>
              </div>
              <div className="md:col-span-3">
                <p className="text-lg text-white/90 leading-relaxed font-semibold">
                  Achieved frictionless urban user experience pipeline with 100% test coverage outputs. Reduced memory profile to 4.2MB, preserving beautiful color saturation levels.
                </p>
              </div>
            </div>

          </section>

          {/* Minimalist interactive simulator for play value */}
          <section className="bg-black border-4 border-neon-pink p-8 relative">
            <div className="absolute -top-4 left-6 bg-neon-pink text-black font-display font-black text-sm px-4 py-1 uppercase tracking-tighter italic">
              LIVE SIGNAL PULSE (AUDIO OVER DRIVE)
            </div>
            
            <div className="space-y-4 pt-2">
              <h4 className="font-display font-black text-2xl uppercase tracking-tight text-white">
                STREET ECHO TRANSMITTER
              </h4>
              <p className="text-gray-400 text-sm font-semibold">
                Tap to hear the raw synthetic waveform frequencies mapping this dynamic technical case study execution.
              </p>
              <button 
                onClick={() => {
                  try {
                    const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
                    const osc = audioCtx.createOscillator();
                    const gain = audioCtx.createGain();
                    osc.type = 'triangle';
                    osc.frequency.setValueAtTime(150, audioCtx.currentTime);
                    gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.35);
                    osc.connect(gain);
                    gain.connect(audioCtx.destination);
                    osc.start();
                    osc.stop(audioCtx.currentTime + 0.4);
                  } catch(e) {
                    console.log("Audio contexts blocked in browser", e);
                  }
                }}
                className="bg-punchy-orange text-white font-display font-black px-6 py-3 border-4 border-black hover:bg-white hover:text-black transition-colors skew-x-[-10deg] flex items-center gap-2 cursor-pointer"
              >
                <Volume2 className="unskew-content" /> <span className="unskew-content">EMIT FRESH BEEP</span>
              </button>
            </div>
          </section>

        </div>

        {/* Sidebar Info (4 Columns) */}
        <aside className="lg:col-span-4 space-y-8">
          
          {/* Metadata */}
          <GameBorder color="bg-zinc-900 border-neon-pink">
            <h4 className="font-display font-black text-xl text-white uppercase italic tracking-tighter mb-4 border-b-2 border-black pb-2">
              PROJECT INTEL
            </h4>
            <div className="space-y-4 text-sm font-semibold">
              <div>
                <span className="block text-xs uppercase font-mono text-gray-500">ROLE</span>
                <span className="text-white text-base">Lead Product Manager</span>
              </div>
              <hr className="border-black" />
              <div>
                <span className="block text-xs uppercase font-mono text-gray-500">TIMELINE</span>
                <span className="text-white text-base">Q3 - Q1 (Production Ready)</span>
              </div>
              <hr className="border-black" />
              <div>
                <span className="block text-xs uppercase font-mono text-gray-500">ENGINE TOKENS</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {currentProject.tags.map(t => (
                    <span key={t} className="bg-black text-cyber-yellow font-black text-[10px] uppercase p-1 px-2 border border-black">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </GameBorder>

          {/* Quote */}
          <div className="bg-cyber-yellow text-black p-6 border-4 border-black relative rotate-1 shadow-[6px_6px_0px_rgba(0,0,0,1)]">
            <h5 className="font-display font-black uppercase text-lg italic leading-tight">
              "THE ULTIMATE EXPERIMENT BRIDGING ROBUSTRY PM WITH HIGH PERFORMANCE SOUND DESIGN LAYOUTS!"
            </h5>
            <span className="block mt-4 text-xs font-mono font-bold uppercase text-right">— STREET LEVEL REVIEW</span>
          </div>

          {/* Links */}
          <GameBorder color="bg-black border-cyber-yellow text-white">
            <h4 className="font-display font-black text-xl uppercase italic tracking-tighter text-cyber-yellow mb-4">
              REEL ACCESS
            </h4>
            <div className="space-y-4">
              <button className="w-full bg-cyber-yellow text-black font-display font-black text-base py-3 uppercase italic hover:bg-white transition-all border-4 border-black flex items-center justify-center gap-2 cursor-pointer">
                <span>DOWNLOAD CASE SCHEMATIC</span>
              </button>
            </div>
          </GameBorder>

        </aside>
      </div>

    </div>
  );
}
