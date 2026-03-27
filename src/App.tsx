/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { 
  CheckCircle2, 
  Star, 
  Play, 
  Users, 
  ShoppingBag, 
  Zap, 
  Layout, 
  Video, 
  Headphones, 
  Image as ImageIcon, 
  BookOpen, 
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Lock,
  Globe,
  CreditCard
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// --- Components ---

const Navbar = () => (
  <nav className="bg-black text-white py-4 border-b border-zinc-800">
    <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
      <div className="text-xl font-black tracking-tighter uppercase italic">Ecom Sites Design</div>
      <div className="hidden md:flex gap-6 text-xs font-semibold uppercase tracking-widest text-zinc-400">
        <a href="#what-you-get" className="hover:text-white transition-colors">What You Get</a>
        <a href="#results" className="hover:text-white transition-colors">Results</a>
        <a href="#why-us" className="hover:text-white transition-colors">Why Us</a>
        <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
      </div>
    </div>
  </nav>
);

const Hero = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "rehan132631@gmail.com",
    phone: "0307 3468786"
  });

  return (
    <section className="bg-black text-white pt-12 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-none mb-6 uppercase italic">
            8-FIGURE E-COM EXPERTS BUILD YOU A <br className="hidden md:block" />
            <span className="text-yellow-400">PROFIT-READY SHOPIFY STORE</span> IN 24 <br className="hidden md:block" />
            HRS—FOR JUST $20
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto font-medium">
            Expert-Built, Loaded With 30 Winning Products, And Backed By A 90-Day Profit-Or-We-Pay-Guarantee.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-xs font-bold uppercase tracking-widest text-zinc-400">
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <span>4.97/5 (1,438 reviews)</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={14} className="text-yellow-400" />
              <span>2,547+ stores delivered</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe size={14} className="text-yellow-400" />
              <span>Featured in major publications</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Video Section */}
          <div className="relative aspect-video bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl group cursor-pointer">
            <img 
              src="https://picsum.photos/seed/ecom-hero/1280/720" 
              alt="Expert building store" 
              className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-yellow-400 text-black rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                <Play size={32} fill="currentColor" />
              </div>
            </div>
            <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              Live Demo
            </div>
            <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest">
              <Zap size={12} className="text-yellow-400" />
              Enable sound
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-white text-black rounded-3xl overflow-hidden shadow-2xl">
            <div className="flex border-b">
              <button 
                onClick={() => setStep(1)}
                className={`flex-1 py-4 px-6 text-left flex items-center gap-3 transition-colors ${step === 1 ? 'bg-zinc-50' : 'bg-white'}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${step === 1 ? 'bg-black text-white' : 'bg-zinc-200 text-zinc-500'}`}>1</div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest">Contact Info</div>
                  <div className="text-[10px] text-zinc-500 uppercase">Name & Email</div>
                </div>
              </button>
              <button 
                onClick={() => setStep(2)}
                className={`flex-1 py-4 px-6 text-left flex items-center gap-3 transition-colors ${step === 2 ? 'bg-zinc-50' : 'bg-white'}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${step === 2 ? 'bg-black text-white' : 'bg-zinc-200 text-zinc-500'}`}>2</div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest">Choose Niche</div>
                  <div className="text-[10px] text-zinc-500 uppercase">& Your Products</div>
                </div>
              </button>
            </div>

            <div className="p-8">
              {step === 1 ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">First Name</label>
                      <input 
                        type="text" 
                        placeholder="abdullah"
                        className="w-full px-4 py-3 bg-zinc-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Last Name</label>
                      <input 
                        type="text" 
                        placeholder="Rehan"
                        className="w-full px-4 py-3 bg-zinc-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Email</label>
                    <input 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 bg-zinc-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Phone Number</label>
                    <div className="flex gap-2">
                      <div className="w-16 px-2 py-3 bg-zinc-100 rounded-xl flex items-center justify-center">🇵🇰</div>
                      <input 
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="flex-1 px-4 py-3 bg-zinc-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                      />
                    </div>
                  </div>
                  <button 
                    onClick={() => setStep(2)}
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-black py-5 rounded-2xl shadow-xl shadow-yellow-400/20 uppercase tracking-widest transition-all transform hover:-translate-y-1 mt-4"
                  >
                    Get Your $20 Store
                    <div className="text-[10px] opacity-70 font-bold">& MAKE YOUR FIRST SALE BY TOMORROW</div>
                  </button>
                  <p className="text-[10px] text-center text-zinc-400 mt-4">We Never Share Your Information With Anyone</p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest">Select Your Store Niche</label>
                    <div className="grid grid-cols-2 gap-3">
                      {['Home & Decor', 'Pet Supplies', 'Health & Beauty', 'Tech Gadgets'].map((niche) => (
                        <button key={niche} className="px-4 py-3 border-2 border-zinc-100 rounded-xl text-left text-sm font-bold hover:border-yellow-400 transition-colors">
                          {niche}
                        </button>
                      ))}
                    </div>
                  </div>
                  <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-black py-5 rounded-2xl shadow-xl shadow-yellow-400/20 uppercase tracking-widest transition-all transform hover:-translate-y-1">
                    Complete Your Order
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-black px-12 py-5 rounded-full shadow-2xl shadow-yellow-400/30 uppercase tracking-widest transition-all transform hover:scale-105">
            CLAIM YOUR $20 STORE
            <div className="text-[10px] opacity-70 font-bold">(FULL REFUND + $50 IF YOU DON'T PROFIT AFTER 90 DAYS)</div>
          </button>
        </div>
      </div>
    </section>
  );
};

const ValueSection = () => {
  const items = [
    { icon: <Layout className="text-yellow-400" />, title: "Custom Shopify Store", desc: "Premium design, clean brand styling, and a conversion-ready structure built by pros.", price: "$2,500 VALUE" },
    { icon: <ShoppingBag className="text-yellow-400" />, title: "30 Winning Products", desc: "Hand-picked SKUs with proven demand and clean media to start testing immediately.", price: "$500 VALUE" },
    { icon: <Zap className="text-yellow-400" />, title: "1-Click Supplier Integration", desc: "Private suppliers + fulfillment set up day one—no packing or negotiations.", price: "$300 VALUE" },
    { icon: <CheckCircle2 className="text-yellow-400" />, title: "High-Converting Product Pages", desc: "Benefit-driven copy, feature blocks, FAQs, and social proof arranged for momentum.", price: "$400 VALUE" },
    { icon: <Video className="text-yellow-400" />, title: "50+ Quick-Start Videos", desc: "Short, practical tutorials to get your first clicks and first sales faster.", price: "$1,000 VALUE" },
    { icon: <Headphones className="text-yellow-400" />, title: "Expert Support", desc: "Human help for setup and growth questions—fast answers, zero guesswork.", price: "$300 VALUE" },
    { icon: <ImageIcon className="text-yellow-400" />, title: "Bonus: Logo Design", desc: "Clean, versatile logo matched to your niche and storefront aesthetics.", price: "$199 VALUE" },
    { icon: <BookOpen className="text-yellow-400" />, title: "Bonus: A-Z Beginner Course", desc: "Built for true beginners—follow a clear checklist and launch confidently.", price: "$997 VALUE" },
    { icon: <ShieldCheck className="text-yellow-400" />, title: "90-Day Profit Guarantee", desc: "If you don't profit, we refund your $20 and pay you $50.", price: "INCLUDED" },
  ];

  return (
    <section id="what-you-get" className="bg-zinc-950 text-white py-24 px-4 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12 border-b border-zinc-800 pb-8">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-500 mb-2">Total Real Value</div>
            <div className="text-4xl font-black italic">$12,392</div>
          </div>
          <div className="text-right">
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-500 mb-2">Today Only</div>
            <div className="text-4xl font-black italic text-yellow-400">$20</div>
          </div>
        </div>

        <div className="text-center mb-16">
          <div className="text-xs font-bold uppercase tracking-[0.5em] text-zinc-500 mb-4">Delivered in 24 Hours</div>
          <h2 className="text-4xl md:text-5xl font-black italic uppercase">What You're Getting in the <br /><span className="text-yellow-400 underline decoration-4 underline-offset-8">Next 24 Hours</span></h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl hover:bg-zinc-900 transition-colors group"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">{item.desc}</p>
              <div className="inline-block px-3 py-1 bg-yellow-400/10 text-yellow-400 text-[10px] font-black rounded-full border border-yellow-400/20">
                {item.price}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 max-w-2xl mx-auto bg-zinc-900 border border-zinc-800 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
          <div className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-500 mb-8">Deal Comparison</div>
          <div className="space-y-4 mb-12">
            <div className="flex justify-between items-center text-zinc-400">
              <span className="font-bold uppercase tracking-widest text-[10px]">Normal Price</span>
              <span className="text-2xl font-black line-through">$12,392</span>
            </div>
            <div className="h-px bg-zinc-800" />
            <div className="flex justify-between items-center text-yellow-400">
              <span className="font-bold uppercase tracking-widest text-[10px]">Today Only</span>
              <span className="text-5xl font-black italic">$20.00</span>
            </div>
          </div>
          <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-black py-6 rounded-2xl shadow-2xl shadow-yellow-400/20 uppercase tracking-widest transition-all transform hover:-translate-y-1">
            Get My $20 Store Now
          </button>
        </div>
      </div>
    </section>
  );
};

const ResultsSection = () => (
  <section id="results" className="bg-black text-white py-24 px-4">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black italic uppercase mb-4">Our Students Are Winning</h2>
        <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs">Real Results From Real Stores Delivered This Week</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="aspect-[4/5] bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 relative group">
            <img 
              src={`https://picsum.photos/seed/result-${i}/400/500`} 
              alt="Shopify Result" 
              className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black to-transparent">
              <div className="text-[10px] font-bold uppercase tracking-widest text-yellow-400 mb-1">Store #{2450 + i}</div>
              <div className="text-lg font-black italic">$1,240.50</div>
              <div className="text-[8px] font-bold uppercase tracking-widest text-zinc-400">Past 24 Hours</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-black px-12 py-5 rounded-full shadow-2xl shadow-yellow-400/30 uppercase tracking-widest transition-all transform hover:scale-105">
          JOIN THE WINNERS
          <div className="text-[10px] opacity-70 font-bold">(FULL REFUND + $50 IF YOU DON'T PROFIT AFTER 90 DAYS)</div>
        </button>
      </div>
    </div>
  </section>
);

const ComparisonSection = () => (
  <section className="bg-zinc-950 text-white py-24 px-4 border-y border-zinc-900">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black italic uppercase mb-4">Before <span className="text-zinc-600">→</span> After: $20 Stores That Print</h2>
        <p className="text-zinc-500 max-w-2xl mx-auto text-sm">We take your product from cluttered AliExpress to a conversion-engineered PDP—delivered in 24 hours, ready to run traffic.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800">
            <div className="p-4 border-b border-zinc-800 flex justify-between items-center">
              <div className="text-[10px] font-bold uppercase tracking-widest">Home: Neckly Contour Pillow</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Niche: Home / Sleep</div>
            </div>
            <div className="relative aspect-[4/5]">
              <img 
                src="https://picsum.photos/seed/pdp-after/800/1000" 
                alt="After Design" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-[10px] font-black uppercase">After</div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-zinc-900 p-4 rounded-2xl border border-zinc-800">
              <div className="text-xs font-bold text-zinc-500 uppercase mb-1">AOV</div>
              <div className="text-xl font-black text-green-400">+28%</div>
            </div>
            <div className="bg-zinc-900 p-4 rounded-2xl border border-zinc-800">
              <div className="text-xs font-bold text-zinc-500 uppercase mb-1">CR</div>
              <div className="text-xl font-black text-green-400">+81%</div>
            </div>
            <div className="bg-zinc-900 p-4 rounded-2xl border border-zinc-800">
              <div className="text-xs font-bold text-zinc-500 uppercase mb-1">LCP</div>
              <div className="text-xl font-black text-green-400">-38%</div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800">
            <div className="p-4 border-b border-zinc-800 flex justify-between items-center">
              <div className="text-[10px] font-bold uppercase tracking-widest">Outdoors: Hydro Waterbottle</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Niche: Outdoors / Fitness</div>
            </div>
            <div className="relative aspect-[4/5]">
              <img 
                src="https://picsum.photos/seed/pdp-before/800/1000" 
                alt="Before Design" 
                className="w-full h-full object-cover opacity-40 grayscale"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 bg-zinc-700 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase">Before</div>
            </div>
          </div>
          <p className="text-zinc-500 text-xs italic text-center">We reduced clutter, led with benefits, and added trust layers (UGC + guarantees). Results in week 1 on cold traffic.</p>
        </div>
      </div>
    </div>
  </section>
);

const WhyTrustUs = () => (
  <section id="why-us" className="bg-black text-white py-24 px-4">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black italic uppercase mb-4">Why Trust Your $20 Store To Me?</h2>
        <div className="flex justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-yellow-400">
          <Star size={12} fill="currentColor" />
          Two Comma Club Award - $1,000,000+ funnel revenue
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-8 mb-20">
        <div className="text-center">
          <div className="text-4xl font-black italic text-yellow-400 mb-2">$10M+</div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Online revenue generated</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-black italic text-yellow-400 mb-2">2</div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Brands sold for 7-figure exits</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-black italic text-yellow-400 mb-2">1,400+</div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Stores launched</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-black italic text-yellow-400 mb-2">7 yrs</div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Full-time Shopify expert</div>
        </div>
      </div>

      <div className="bg-zinc-900 rounded-3xl p-8 md:p-12 border border-zinc-800 flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-1/3">
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/founder/600/800" 
              alt="Hassan Farhat" 
              className="rounded-2xl w-full aspect-[3/4] object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-black p-4 rounded-2xl shadow-xl">
              <div className="text-[10px] font-black uppercase tracking-widest">Awarded for generating</div>
              <div className="text-xl font-black italic">$1,000,000+</div>
              <div className="text-[8px] font-bold uppercase tracking-widest opacity-70">with ClickFunnels</div>
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-6">
          <p className="text-lg leading-relaxed text-zinc-300">
            I'm <span className="text-white font-bold">Hassan Farhat</span>—a former civil engineer who turned two Shopify side-hustles into multi-million-dollar exits. After helping 1,400+ beginners land their first sale, I saw the same bottleneck: <span className="italic text-yellow-400">a store that converts.</span>
          </p>
          <p className="text-lg leading-relaxed text-zinc-300">
            My system now delivers a sales-ready store in 24 hours for just $20—backed by a <span className="text-white font-bold">90-day profit guarantee + $50 cash</span> if it doesn't earn. I only win when <span className="text-yellow-400 italic">you</span> win.
          </p>
          <div className="flex gap-6 pt-4 grayscale opacity-50">
            <ShoppingBag size={32} />
            <Zap size={32} />
            <Globe size={32} />
            <ShieldCheck size={32} />
          </div>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-black px-8 py-4 rounded-xl shadow-xl shadow-yellow-400/20 uppercase tracking-widest transition-all transform hover:-translate-y-1">
            Build My $20 Store Now →
          </button>
        </div>
      </div>
    </div>
  </section>
);

const LongCopy = () => (
  <section className="bg-zinc-950 text-white py-24 px-4">
    <div className="max-w-3xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-black italic uppercase">So Why Am I Building These Stores For Only $20?</h2>
        <p className="text-zinc-500 italic">The answer might surprise you...</p>
      </div>

      <div className="space-y-8 text-lg leading-relaxed text-zinc-300">
        <p>
          As a certified Shopify Partner, people often ask me why we're offering fully-built professional stores for just <span className="text-yellow-400 font-bold">$20</span> when others charge $1,000+.
        </p>
        <p>
          The answer is simple: <span className="text-white font-bold italic underline decoration-yellow-400 underline-offset-4">We only win if you win.</span> We're building long-term partnerships, not just selling stores.
        </p>
        
        <div className="space-y-6">
          <h3 className="text-2xl font-black uppercase italic text-white">1. We're Official Shopify Partners</h3>
          <p>
            Unlike most "store builders" out there, we work directly with Shopify as certified partners. This isn't just a fancy title—it means:
          </p>
          <ul className="space-y-3 list-disc pl-6 text-zinc-400">
            <li>Access to premium features others can't offer</li>
            <li>Direct support from Shopify's partner team</li>
            <li>Ability to build stores at insider rates</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-black uppercase italic text-white">2. We're Playing the Long Game</h3>
          <p>
            Here's something most people don't know: Each store actually costs us significantly more than $20 to build. We're investing in:
          </p>
          <ul className="space-y-3 list-disc pl-6 text-zinc-400">
            <li>Professional design work</li>
            <li>Custom coding</li>
            <li>Premium apps and features</li>
            <li>Dedicated support team</li>
          </ul>
          <p>
            And here's the boldest part: If you're not completely satisfied, we'll not only refund your $20—we'll give you an <span className="text-yellow-400 font-bold">additional $50 for wasting your time.</span>
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-black uppercase italic text-white">3. The Numbers Tell Our Partnership Story</h3>
          <ul className="space-y-3 list-disc pl-6 text-zinc-400">
            <li>97% of store owners stay past their first month</li>
            <li>Over 10,000+ successful stores launched</li>
            <li>Average store setup time: under 24 hours</li>
            <li>82% of clients work with us on advanced services later</li>
          </ul>
        </div>

        <p className="text-center font-bold text-white pt-8">
          Think about it: We only succeed if YOU succeed. That means:
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
            <div className="text-yellow-400 font-black mb-2 uppercase tracking-widest text-xs">No hidden fees</div>
            <p className="text-sm">No surprise charges. Just pure value backed by Shopify's most trusted partner program.</p>
          </div>
          <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
            <div className="text-yellow-400 font-black mb-2 uppercase tracking-widest text-xs">Our Reputation</div>
            <p className="text-sm">This $20 offer is our way of proving we're worth being your long-term ecommerce partner.</p>
          </div>
        </div>
      </div>

      <div className="text-center pt-12">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-black px-12 py-5 rounded-full shadow-2xl shadow-yellow-400/30 uppercase tracking-widest transition-all transform hover:scale-105">
          CLAIM YOUR $20 STORE
          <div className="text-[10px] opacity-70 font-bold">(FULL REFUND + $50 IF YOU DON'T PROFIT AFTER 90 DAYS)</div>
        </button>
      </div>
    </div>
  </section>
);

const GuaranteeSection = () => (
  <section className="bg-black text-white py-24 px-4 border-t border-zinc-900">
    <div className="max-w-4xl mx-auto bg-zinc-900 rounded-[3rem] p-12 md:p-20 border border-zinc-800 text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-yellow-400" />
      <h2 className="text-5xl md:text-7xl font-black italic uppercase mb-12">The Ultimate <br /><span className="text-yellow-400">Guarantee</span></h2>
      
      <div className="space-y-8 text-left max-w-2xl mx-auto mb-16">
        <p className="text-xl font-bold text-zinc-400">If you don't make your $20 back within 90 days:</p>
        <div className="space-y-6">
          <div className="flex gap-4 items-start">
            <div className="w-8 h-8 rounded-full bg-yellow-400 text-black flex items-center justify-center font-black shrink-0">1</div>
            <p className="text-lg font-bold">Get a <span className="text-white underline decoration-yellow-400">FULL refund</span></p>
          </div>
          <div className="flex gap-4 items-start">
            <div className="w-8 h-8 rounded-full bg-yellow-400 text-black flex items-center justify-center font-black shrink-0">2</div>
            <p className="text-lg font-bold">Keep the <span className="text-white underline decoration-yellow-400">$997 course</span></p>
          </div>
          <div className="flex gap-4 items-start">
            <div className="w-8 h-8 rounded-full bg-yellow-400 text-black flex items-center justify-center font-black shrink-0">3</div>
            <p className="text-lg font-bold">Receive <span className="text-white underline decoration-yellow-400">an extra $50</span> for wasting your time</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="text-xs font-bold uppercase tracking-[0.5em] text-zinc-500">Why such a bold guarantee?</div>
        <p className="text-lg font-black italic uppercase">Because we know our stores work when you follow our systems.</p>
      </div>
    </div>
  </section>
);

const SpecialOffer = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTimeLeft({
        hours: 23 - now.getHours(),
        minutes: 59 - now.getMinutes(),
        seconds: 59 - now.getSeconds()
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pricingItems = [
    { label: "Premium Store Build", price: "$997" },
    { label: "Product Research", price: "$497" },
    { label: "Supplier Integration", price: "$197" },
    { label: "Logo Design", price: "$199" },
    { label: "Marketing Guide", price: "$97" },
  ];

  return (
    <section className="bg-zinc-950 text-white py-24 px-4">
      <div className="max-w-4xl mx-auto bg-zinc-900 rounded-[3rem] p-8 md:p-16 border border-zinc-800 shadow-2xl relative">
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-8 py-3 rounded-full font-black uppercase tracking-widest shadow-xl">
          Special Offer
        </div>

        <div className="space-y-6 mb-12">
          {pricingItems.map((item, i) => (
            <div key={i} className="flex justify-between items-center border-b border-zinc-800 pb-4">
              <span className="font-bold uppercase tracking-widest text-xs text-zinc-400">{item.label}</span>
              <span className="font-black italic">{item.price}</span>
            </div>
          ))}
          <div className="flex justify-between items-center pt-4">
            <span className="text-2xl font-black uppercase italic">Total Value:</span>
            <span className="text-2xl font-black italic">$1,987</span>
          </div>
        </div>

        <div className="bg-black rounded-3xl p-12 text-center border border-zinc-800 mb-8">
          <div className="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-500 mb-4">Your Price Today:</div>
          <div className="text-7xl font-black italic text-yellow-400 mb-6">JUST $20</div>
          <div className="inline-block bg-yellow-400/10 text-yellow-400 px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest border border-yellow-400/20">
            SAVE $1,967 (99% OFF) TODAY ONLY!
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Offer expires in:</div>
            <div className="flex gap-2 font-black italic text-xl">
              <span>{String(timeLeft.hours).padStart(2, '0')}</span>:
              <span>{String(timeLeft.minutes).padStart(2, '0')}</span>:
              <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
            </div>
          </div>
          <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
            <div className="flex items-center gap-2"><Lock size={12} /> Secure Checkout</div>
            <div className="flex items-center gap-2"><Zap size={12} /> Instant Access</div>
            <div className="flex items-center gap-2"><CreditCard size={12} /> All Cards Accepted</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: "How are you doing this for only $20? Is it a scam?", a: "No scam. As Shopify Partners, we earn a small commission from Shopify when you stay on their platform. We'd rather give you an incredible store for $20 and earn your long-term trust than charge $1,000 upfront." },
    { q: "Do I need to have a Shopify account to use the websites?", a: "We will build the store for you on a new Shopify account. You'll just need to pick a plan (Shopify often has $1/month promos) to go live." },
    { q: "What if I already have a Shopify store?", a: "We can still build a new, high-converting store for you on a fresh account which you can then use as your primary store." },
    { q: "How many products will I get on my store?", a: "We load your store with 30 hand-picked, high-demand winning products in your chosen niche, complete with descriptions and images." },
    { q: "Are there any other fees associated with this?", a: "Just the $20 one-time fee to us. You'll need a Shopify subscription (usually $1/month for the first 3 months) and your own domain (approx $14/year) to launch." },
    { q: "Do you advertise the store for me?", a: "We build the conversion machine. We provide a 50+ video course on how to run ads, but you are responsible for your own ad spend." },
    { q: "What if I have my own products?", a: "You can easily add your own products! The store structure we build is perfect for any product in that niche." },
    { q: "Can I get a refund if I don't like my store?", a: "Absolutely. We have a 90-day profit guarantee. If you don't make money, we refund your $20 and pay you $50 for your time." },
    { q: "How will I receive my store?", a: "Within 24 hours of your order, we'll send you an invitation to your new Shopify store via email. Just accept, and it's yours!" },
  ];

  return (
    <section id="faq" className="bg-black text-white py-24 px-4 border-t border-zinc-900">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-5xl font-black italic uppercase text-center mb-16">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-zinc-800 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 flex justify-between items-center text-left hover:bg-zinc-900 transition-colors"
              >
                <span className="font-bold uppercase tracking-widest text-sm">{faq.q}</span>
                {openIndex === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-zinc-400 text-sm leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-black px-12 py-5 rounded-full shadow-2xl shadow-yellow-400/30 uppercase tracking-widest transition-all transform hover:scale-105">
            CLAIM YOUR $20 STORE
            <div className="text-[10px] opacity-70 font-bold">(FULL REFUND + $50 IF YOU DON'T PROFIT AFTER 90 DAYS)</div>
          </button>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-zinc-950 text-zinc-500 py-20 px-4 border-t border-zinc-900">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <div className="text-2xl font-black tracking-tighter uppercase italic text-white mb-8">EcomSites.Design</div>
        <div className="flex flex-wrap justify-center gap-8 text-[10px] font-bold uppercase tracking-widest mb-12">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
          <a href="#" className="hover:text-white transition-colors">Help Center</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-[10px] leading-relaxed text-center space-y-6 opacity-50">
        <p>Copyright © Hassan Farhat Enterprises LTD © 2026 All Rights Reserved</p>
        <p>
          You recognize and agree that we \"Hassan Farhat Enterprises LTD\" have made no implications, warranties, promises, suggestions, projections, representations or guarantees whatsoever to you about future sales or results, or that you will earn any money and that we have not authorized any such projection, promise, or representation by others. You must obtain advice from taxes (affiliate marketing taxes, sales tax, income tax, business tax, etc.) from a tax professional. You must obtain formation, legal and patent advice from a legal professional. We take no responsibility for any information given that falls under those categories. You accept that we are not tax or legal professionals. You must consult a legal professional for advice on these topics. We make absolutely NO guarantee of success, monetary or otherwise, and we take no responsibility for any time or money spent in relation to this service, course, products, advertising, our assistance, or otherwise. Only one person may access our products per purchase. If a user is seen allowing others to use his account to access the course, that person will be removed from the course without a refund. You may not share this information with others not enrolled in the course. If you are found uploading these videos or sharing information anywhere else, you will be removed without refund. Results may vary. You Accept that although you use our services & Products, you may not receive the sales or income desired. we are not responsible for your well-being or your income. Please be aware of this.
        </p>
        <p>
          By Purchasing our stores you are acknowledging that you are receiving a prebuilt store(s). These are stores that were built prior to purchase which means multiple customers could receive the same design. These are stepping stones for a store design and should NOT be considered a \"business\" you are simply purchasing a design of your store on the Shopify platform. You can build your own store for free at Shopify.com Please do not consider this a \"make money\" opportunity, we're simply designing a store for you.
        </p>
        <p>
          WE DO NOT CLAIM THAT YOU WILL MAKE ANY INCOME ON YOUR WEBSITE. WE ARE NOT A BUSINESS OPPORTUNITY, WE ARE A WEBSITE DESIGN AGENCY.
        </p>
        <p>
          H.Farhat Enterprises LTD is a participant in the Shopify Affiliate Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Shopify.com. As an affiliate, H.Farhat Enterprises LTD earns commissions on qualified purchases made through links on this website and services that are delivered to our clients. The commissions earned help to support the operation of this website and provide valuable content to our users. H.Farhat Enterprises LTD only recommends products and services that we have personally used and believe in the quality of.
        </p>
        <p>
          This site is not part of the Facebook website or Facebook Inc. Additionally, this site is NOT endorsed by Facebook in any way. Facebook is a trademark of FACEBOOK, INC.
        </p>
        <p>H.Farhat Enterprises LTD</p>
      </div>

      <div className="mt-12 flex justify-center gap-12 text-[10px] font-bold uppercase tracking-widest opacity-50">
        <div className="flex items-center gap-2"><Lock size={12} /> 256-Bit SSL Security</div>
        <div className="flex items-center gap-2"><ShieldCheck size={12} /> Verified Business</div>
        <div className="flex items-center gap-2"><ShieldCheck size={12} /> Privacy Protected</div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-black font-sans selection:bg-yellow-400 selection:text-black">
      <Navbar />
      <Hero />
      <ValueSection />
      <ResultsSection />
      <ComparisonSection />
      <WhyTrustUs />
      <LongCopy />
      <GuaranteeSection />
      <SpecialOffer />
      <FAQ />
      <Footer />
    </div>
  );
}
