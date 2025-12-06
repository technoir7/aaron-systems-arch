import React, { useState } from 'react';
import { 
  Terminal, 
  Cpu, 
  Brain, 
  Eye, 
  ArrowUpRight, 
  Zap, 
  GitBranch, 
  BookOpen,
  Mail,
  ExternalLink,
  ChevronRight,
  Database 
} from 'lucide-react';

// --- CONFIGURATION & AESTHETICS ---
const DYNAMISM_ACCENT = "#3B82F6"; // Electric Blue for "High Voltage" / "Intellectual Capital"
const BG_DARK = "#0a0a0a"; // True Black for OLED/High Contrast
const TEXT_MAIN = "#e5e5e5";
const TEXT_MUTED = "#a3a3a3";

// --- DATA ASSETS (From your Portfolio) ---
const PORTFOLIO_PREVIEW = [
  // IMPORTANT: Ensure these image files exist in your /public/images directory!
  { id: 1, src: "/images/fung_boots_2024_oil_18x24in_web.jpg", alt: "After Van Gogh's Boots", title: "Boots" },
  { id: 2, src: "/images/fung_portrait-noa_2024_graphite_18x24in_web.jpg", alt: "As If Remembered", title: "Noa" },
  { id: 3, src: "/images/fung_repin-masterstudy-dragomirova_oil_18x24in_web.jpg", alt: "Repin Study", title: "Repin" }
];

const WRITING_LINKS = [
  { title: "Formal Systems & The Limits of Representation", year: "2025", type: "Essay", tag: "Gödel/Logic" },
  { title: "The Image as an Epistemic System", year: "2025", type: "Essay", tag: "Kant/AI" },
  { title: "The Architecture of the Extended Mind", year: "Active", type: "System", tag: "Knowledge Ops" }
];

export default function App() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="min-h-screen font-mono selection:bg-blue-500 selection:text-white pb-12" style={{ backgroundColor: BG_DARK, color: TEXT_MAIN }}>
      
      {/* --- HEADER: THE SIGNAL --- */}
      <header className="px-6 py-8 border-b border-gray-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-neutral-900/20 backdrop-blur-sm sticky top-0 z-50">
        <div>
          <h1 className="text-xl font-bold tracking-tighter uppercase flex items-center gap-2">
            <Zap size={20} color={DYNAMISM_ACCENT} fill={DYNAMISM_ACCENT} />
            Aaron Fung
          </h1>
          <div className="flex flex-wrap items-center gap-3 mt-1">
             <span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-[0.2em] font-semibold">
               Systems Engineer
             </span>
             <span className="text-gray-700 text-[10px]">•</span>
             <span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-[0.2em] font-semibold">
               Classically Trained Artist
             </span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-[10px] font-bold uppercase tracking-widest">
          <span className="flex items-center gap-2 text-green-500 bg-green-900/10 px-3 py-1 rounded border border-green-900/30">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
            Open for Opportunities
          </span>
          <span className="text-gray-600 border border-gray-800 px-3 py-1 rounded flex items-center gap-1">
            <div className="w-1.5 h-1.5 bg-gray-600 rounded-full" />
            SF / Bay Area
          </span>
        </div>
      </header>

      {/* --- MAIN GRID: THE BENTO BOX --- */}
      <main className="p-4 md:p-6 max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[minmax(180px,auto)]">

          {/* 1. HERO CARD: THE AGENT (Span 8) */}
          <div 
            className="md:col-span-8 bg-neutral-900/40 border border-neutral-800 p-6 md:p-8 flex flex-col justify-between hover:border-blue-500/40 transition-all duration-300 group relative overflow-hidden"
            onMouseEnter={() => setHoveredCard('agent')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,black,transparent)] pointer-events-none" />
            
            <div className="flex justify-between items-start z-10">
              <div className="bg-blue-500/10 text-blue-400 p-2 rounded mb-4 inline-flex border border-blue-500/20">
                <Cpu size={24} />
              </div>
              <span className="text-[9px] uppercase text-blue-400/80 tracking-widest border border-blue-900/30 bg-blue-900/10 px-2 py-1 rounded shadow-[0_0_10px_rgba(59,130,246,0.1)]">
                Active Build
              </span>
            </div>
            
            <div className="z-10 mt-2">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                "Analyst" Agent (MCP Architecture)
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed max-w-2xl border-l-2 border-gray-800 pl-4">
                A multi-agent autonomous due diligence system built on the <span className="text-gray-200 font-semibold">Model Context Protocol</span>. 
                Features a "Failure Lattice" for fault-tolerant scraping and strict Pydantic enforcement 
                to prevent context pollution.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 z-10">
              <Badge text="Python" />
              <Badge text="FastAPI" />
              <Badge text="Anthropic MCP" />
              <Badge text="Agentic Workflows" />
            </div>
          </div>

          {/* 2. STATUS CARD: CHESS (Span 4) */}
          <div className="md:col-span-4 bg-neutral-900/40 border border-neutral-800 p-6 md:p-8 flex flex-col justify-between hover:border-white/20 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute -top-6 -right-6 p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 rotate-12">
              <Brain size={180} />
            </div>
            <div className="z-10">
              <h3 className="text-[10px] font-bold uppercase text-gray-500 mb-2 tracking-widest flex items-center gap-2">
                <div className="w-1 h-1 bg-gray-500 rounded-full" />
                Competitive Chess
              </h3>
              <div className="text-5xl font-bold text-white mb-2 tracking-tighter">1/2 - 1/2</div>
              <p className="text-sm text-gray-400 leading-snug">
                Simultaneous Exhibition Draw vs. <br/>
                <span className="text-white font-semibold border-b border-gray-700 pb-0.5">Grandmaster Alexander Baburin</span>
              </p>
            </div>
            <div className="mt-8 text-[10px] text-gray-600 font-mono border-t border-gray-800 pt-4 z-10">
              // "You have to calculate the failure lattice before you make the move."
            </div>
          </div>

          {/* 3. TECHNICAL CARD: COMPILERS (Span 4) */}
          <div className="md:col-span-4 bg-neutral-900/40 border border-neutral-800 p-6 flex flex-col hover:border-white/20 transition-colors group">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-neutral-800 w-8 h-8 flex items-center justify-center rounded border border-neutral-700">
                 <Terminal size={16} className="text-gray-300" />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Systems & Compilers</h3>
            </div>
            
            <ul className="space-y-3 text-xs text-gray-400 font-mono flex-grow">
              <li className="flex items-start gap-3 group/item">
                <span className="text-blue-500 mt-0.5 group-hover/item:translate-x-1 transition-transform">&gt;&gt;</span> 
                <div>
                  <span className="text-gray-300">Genetic Chess Engine</span>
                  <span className="block text-[10px] text-gray-600">Evolutionary heuristics, self-optimizing</span>
                </div>
              </li>
              <li className="flex items-start gap-3 group/item">
                <span className="text-blue-500 mt-0.5 group-hover/item:translate-x-1 transition-transform">&gt;&gt;</span> 
                <div>
                  <span className="text-gray-300">Lisp Interpreter</span>
                  <span className="block text-[10px] text-gray-600">Python implementation, lexical scope</span>
                </div>
              </li>
              <li className="flex items-start gap-3 group/item">
                <span className="text-blue-500 mt-0.5 group-hover/item:translate-x-1 transition-transform">&gt;&gt;</span> 
                <div>
                  <span className="text-gray-300">C Compiler</span>
                  <span className="block text-[10px] text-gray-600">Custom runtime, memory mgmt</span>
                </div>
              </li>
              <li className="flex items-start gap-3 group/item">
                <span className="text-blue-500 mt-0.5 group-hover/item:translate-x-1 transition-transform">&gt;&gt;</span> 
                <div>
                  <span className="text-gray-300">Git Clone</span>
                  <span className="block text-[10px] text-gray-600">Java implementation from scratch</span>
                </div>
              </li>
            </ul>
          </div>

          {/* 4. VISUAL EPISTEMOLOGY / ART (Span 5) */}
          <div className="md:col-span-5 bg-neutral-900/40 border border-neutral-800 p-6 flex flex-col justify-between hover:border-white/20 transition-colors group">
             <div>
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-neutral-800 p-2 rounded border border-neutral-700 text-gray-300">
                      <Eye size={16} />
                    </div>
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">Visual Epistemology</h3>
                  </div>
                  <a href="/art-index" className="text-[10px] uppercase flex items-center gap-1 text-gray-500 hover:text-white transition-colors group/link">
                    Full Index <ArrowUpRight size={10} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
                
                <p className="text-xs text-gray-400 leading-relaxed mb-6 border-l border-gray-800 pl-3">
                  Training a neural net (my brain) on raw, 3D ground truth without photographic compression.
                  A study in how images structure knowledge.
                </p>
             </div>
             
             {/* Mini Art Gallery Grid - Using aspect-[3/4] for portrait ratio */}
             <div className="grid grid-cols-3 gap-2 mt-auto">
                {PORTFOLIO_PREVIEW.map((img) => (
                  <div key={img.id} className="aspect-[3/4] bg-neutral-800 relative group/img overflow-hidden rounded-sm border border-neutral-800">
                    <div className="absolute inset-0 bg-neutral-800 animate-pulse" /> {/* Placeholder loading state */}
                    <img 
                      src={img.src} 
                      alt={img.alt}
                      className="w-full h-full object-cover grayscale opacity-60 group-hover/img:grayscale-0 group-hover/img:opacity-100 group-hover/img:scale-110 transition-all duration-500"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-1 transform translate-y-full group-hover/img:translate-y-0 transition-transform duration-300">
                      <p className="text-[8px] text-white text-center truncate">{img.title}</p>
                    </div>
                  </div>
                ))}
             </div>
          </div>

          {/* 5. RESEARCH & KNOWLEDGE (Span 3) - Updated Icon and Title */}
          <div className="md:col-span-3 bg-neutral-900/40 border border-neutral-800 p-6 flex flex-col hover:border-white/20 transition-colors">
            <div className="mb-6 flex items-center gap-3">
              <div className="bg-neutral-800 p-2 rounded border border-neutral-700 text-gray-300">
                 <Database size={16} /> {/* Database icon for System/Knowledge Ops */}
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Knowledge Systems</h3>
            </div>
            
            <div className="space-y-4 flex-grow">
              {WRITING_LINKS.map((link, i) => (
                <a key={i} href="#" className="block group/item p-3 -mx-3 rounded hover:bg-neutral-800/50 transition-colors">
                  <div className="flex justify-between items-center mb-1">
                    <p className="text-[9px] text-gray-500 uppercase tracking-widest">{link.year} • {link.type}</p>
                    <span className="text-[9px] bg-neutral-800 text-gray-400 px-1.5 rounded border border-neutral-700">{link.tag}</span>
                  </div>
                  <div className="text-xs text-gray-300 group-hover/item:text-blue-400 leading-tight font-medium flex items-start justify-between gap-2">
                    {link.title}
                    <ExternalLink size={10} className="mt-0.5 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                  </div>
                </a>
              ))}
            </div>
            
            <a href="#" className="text-[10px] text-gray-500 hover:text-white flex items-center gap-1 uppercase tracking-wider mt-4 pt-4 border-t border-gray-800">
              Read all notes <ChevronRight size={10} />
            </a>
          </div>

          {/* 6. CONTACT / FOOTER (Span 12) */}
          <div className="md:col-span-12 bg-neutral-950 border border-dashed border-gray-800 p-4 md:p-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
             <div className="flex flex-col md:flex-row gap-6 font-mono w-full md:w-auto text-center md:text-left">
                <a href="mailto:aaronfung@systems-arch.app" className="hover:text-white flex items-center justify-center md:justify-start gap-2 transition-colors">
                  <Mail size={14}/> aaronfung@systems-arch.app
                </a>
                <a href="https://github.com/technoir7" className="hover:text-white flex items-center justify-center md:justify-start gap-2 transition-colors">
                  <GitBranch size={14}/> technoir7
                </a>
                <a href="#" className="hover:text-white flex items-center justify-center md:justify-start gap-2 transition-colors">
                  <ExternalLink size={14}/> LinkedIn
                </a>
             </div>
             <div className="flex items-center gap-2 uppercase tracking-widest opacity-50 text-[10px]">
                <div className="w-2 h-2 bg-green-900 rounded-full" />
                System Status: Online
             </div>
          </div>

        </div>
      </main>
    </div>
  );
}

// Simple Badge Component
function Badge({ text }) {
  return (
    <span className="px-3 py-1 bg-neutral-800/80 border border-neutral-700 rounded text-[10px] uppercase tracking-wider text-gray-300 hover:text-white hover:border-gray-500 transition-colors cursor-default">
      {text}
    </span>
  );
}