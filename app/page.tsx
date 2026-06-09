"use client"
import "./page.css";
import { useEffect, useRef, useState } from "react";

/* Slogans:
Unlocking Global Markets.
The Key to Global Communication.
Precision Localization, Worldwide.
Your Trusted Key to Every Market.
Forging Connections Across Languages.
The Master Key to Localization.
Unlock New Markets.
*/

export default function GamingLocalizationPortfolio() {
  const glowRef = useRef<HTMLDivElement>(null);
  const [reviewIndex, setReviewIndex] = useState(0);

  const reviews = [
    {
      company: "Hotloop",
      role: "Solo dev",
      quote:
        "Dave delivered an exceptional translation of The Last Flame from English to German. The game's complexity demands a deep understanding of nuance and carefully chosen keywords, and Dave approached every aspect of the work with precision! His translation was consistent and high-quality throughout, and even as the game evolved through multiple updates, he always delivered on time. On top of his translator's skill, his communication was clear and proactive all along the project. I highly recommend Dave! Here! let me know if you would like me to change something",
highlight: "Subtle, engaging, fast turnaround",
      tags: ["Tone", "Speed", "Native German"],
    },
    {
      company: "Publisher Placeholder B",
      role: "Localization Lead",
      quote:
        "A professional partner who understood our narrative and preserved the soul of the game in every line.",
      highlight: "Story-driven localization",
      tags: ["Narrative", "Consistency", "Game Feel"],
    },
    {
      company: "Developer Placeholder C",
      role: "Narrative Designer",
      quote:
        "Excellent communication and quality. The adapted text kept the original character voice without sounding translated.",
      highlight: "Voice and tone fidelity",
      tags: ["Voice", "Emotion", "Polish"],
    },
  ];

  useEffect(() => {
      if (!glowRef.current) return;

      const glow = glowRef.current;

      const handleMouseMove = (e: MouseEvent) => {
        glow.style.left = `${e.clientX}px`;
        glow.style.top = `${e.clientY}px`;
        glow.style.opacity = "1";
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, []);

  const projects = [
    {
      title: "Project Eclipse",
      genre: "Sci‑Fi RPG",
      languages: "EN → DE",
      description:
        "Narrative localization and UI adaptation for an atmospheric sci‑fi RPG with branching dialogue systems.",
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1400&auto=format&fit=crop",
    },
    {
      title: "Steel Horizon",
      genre: "Action Adventure",
      languages: "EN → DE",
      description:
        "Gameplay text localization, subtitle adaptation, and terminology consistency management.",
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1400&auto=format&fit=crop",
    },
    {
      title: "Mythborne",
      genre: "Fantasy MMO",
      languages: "EN → DE",
      description:
        "Quest translation and lore adaptation focused on immersion and cultural nuance.",
      image:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1400&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* Cursor Glow */}
      <div ref={glowRef} className="cursor-glow" />

      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 bg-black/40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl md:text-2xl font-bold tracking-wide">
            <span className="text-green-400">Locsmith </span><span >Localization</span>
            <p className="text-xs">by David Becker</p>
          </h1>

          <div className="hero-badge">
              EN → DE Game Localization
            </div>

          <nav className="hidden md:flex gap-8 text-sm uppercase tracking-wider text-white/70">
            <a href="#hero" className="hover:text-green-400 transition-colors text-lg">
              Back to Top
            </a>
              <a href="#projects" className="hover:text-green-400 transition-colors text-lg">
              Projects
            </a>
            <a href="#reviews" className="hover:text-green-400 transition-colors text-lg">
              Reviews
            </a>
            <a href="#contact" className="hover:text-green-400 transition-colors text-lg">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="hero" className="relative max-w-7xl mx-auto px-6 pt-28 pb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>


            <h2 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              <span>Translating</span><br />
              <span className="hero-gradient">
                Interactive Worlds
              </span>
            </h2>

            <p className="text-lg text-white/70 max-w-xl leading-relaxed mb-10">
              Professional video game localization focused on immersive storytelling,
              natural dialogue, and culturally adapted player experiences.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="btn-primary"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="btn-secondary"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl rounded-3xl" />

            <div className="relative backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-black/40 border border-white/10 rounded-2xl p-6">
                  <div className="text-4xl font-black text-green-300">1M+</div>
                  <div className="text-white/60 mt-2">Words Translated</div>
                </div>

                <div className="bg-black/40 border border-white/10 rounded-2xl p-6">
                  <div className="text-4xl font-black text-green-300">25+</div>
                  <div className="text-white/60 mt-2">Projects Completed</div>
                </div>

                <div className="bg-black/40 border border-white/10 rounded-2xl p-6 col-span-2">
                  <div className="text-2xl font-bold mb-3 text-green-300">Specializations</div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "AA and Indie Games",
                      "Roguelites & Roguelikes",
                      "RPGs",
                      "Incremental Games",
                      "Strategy Games",
                      "Automation Games",
                      "And many more...",
                    ].map((item) => (
                      <span
                        key={item}
                        className="px-3 py-2 rounded-full bg-white/10 text-sm text-white/70"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="site-divider"></div>
      {/* About */}
      <section className="max-w-6xl mx-auto py-24">

        <div className="grid lg:grid-cols-2 items-center">

          <div>
            <div className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
              About
            </div>

            <h3 className="text-4xl md:text-5xl font-bold mb-8">
              Localization Built for Players
            </h3>
          </div>

          <div className="text-white/70 text-lg leading-relaxed space-y-6">
            <p>
              It once started as a one time project for a game i love with fan-translation.
              I really got into translating and handcrafting the words from the dev and made a business of what i love.
              I specialize in translating and adapting video games for German-speaking audiences.
              My focus is not only linguistic accuracy, but preserving emotional impact,
              gameplay clarity, and immersion.
            </p>

            <p>
              From indie titles to large-scale RPGs, I help developers create authentic, handcreafted
              experiences that feel native to players.
              I love what i do and stricly work without AI to keep a high quality all the time.
            </p>
          </div>
        </div>
      </section>
      <div className="site-divider"></div>
      {/* Projects */}
      <section id="projects" className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-16">
          <div className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
            Featured Projects
          </div>

          <h3 className="text-4xl md:text-6xl font-bold max-w-3xl leading-tight">
            Selected Localization Work
          </h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="project-card"
            >
              <div className="overflow-hidden h-72">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm uppercase tracking-widest text-cyan-400">
                    {project.genre}
                  </span>

                  <span className="text-sm text-white/50">{project.languages}</span>
                </div>

                <h4 className="text-2xl font-bold mb-4">{project.title}</h4>

                <p className="text-white/65 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="site-divider"></div>
      {/* Reviews */}
      <section id="reviews" className="max-w-7xl mx-auto px-6 py-24 relative">
        <div className="mb-14">
          <div className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
            Developer Reviews
          </div>

          <h3 className="text-4xl md:text-5xl font-bold">
            What Developers Say
          </h3>
        </div>

        <div className="review-panel">
          <div key={reviewIndex} className="review-card">
            <div className="review-badge">{reviews[reviewIndex].company}</div>
            <p className="text-white/75 leading-relaxed mb-6">“{reviews[reviewIndex].quote}”</p>
            <div className="review-meta">
              <div className="text-xl font-semibold">{reviews[reviewIndex].company}</div>
              <div className="text-sm text-white/50">{reviews[reviewIndex].role}</div>
            </div>
            <div className="review-tags">
              {reviews[reviewIndex].tags.map((tag) => (
                <span key={tag} className="review-chip">
                  {tag}
                </span>
              ))}
            </div>
            <div className="review-highlight">{reviews[reviewIndex].highlight}</div>
          </div>

          <div className="review-actions">
            <button
              type="button"
              className="review-action-btn"
              onClick={() => setReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length)}
            >
              Previous
            </button>
            <button
              type="button"
              className="review-action-btn"
              onClick={() => setReviewIndex((prev) => (prev + 1) % reviews.length)}
            >
              Next
            </button>
          </div>

          <div className="review-dots">
            {reviews.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`review-dot ${reviewIndex === index ? "active" : ""}`}
                onClick={() => setReviewIndex(index)}
                aria-label={`Show review ${index + 1}`}
              />
            ))}
          </div>
        </div>

      </section>
      <div className="site-divider"></div>
      {/* Contact */}
      <section
        id="contact"
        className="max-w-5xl mx-auto px-6 py-24"
      >
        <div className="text-center mb-14">
          <div className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
            Contact
          </div>

          <h3 className="text-4xl md:text-6xl font-bold mb-6">
            Let’s Work Together
          </h3>

          <p className="text-white/65 text-lg max-w-2xl mx-auto">
            Looking for high-quality game localization? Send your project details below.
          </p>
        </div>

        <form className="contact-form">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm uppercase tracking-wider text-white/60 mt-3 mb-1 ml-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="form-input"
              />
            </div>

            <div>
              <label className="block text-sm uppercase tracking-wider text-white/60 mt-3 mb-1 ml-2">
                Email
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="form-input"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm uppercase tracking-wider text-white/60 mt-3 mb-1 ml-2">
                Budget
              </label>
              <input
                type="text"
                placeholder="Estimated budget"
                className="form-input"
              />
            </div>

            <div>
              <label className="block text-sm uppercase tracking-wider text-white/60 mt-3 mb-1 ml-2">
                Deadline
              </label>
              <input
                type="date"
                className="form-input"
              />
            </div>

            <div>
              <label className="block text-sm uppercase tracking-wider text-white/60 mt-3 mb-1 ml-2">
                Word Count
              </label>
              <input
                type="text"
                placeholder="Approximate words"
                className="form-input"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm uppercase tracking-wider text-white/60 mt-3 mb-1 ml-2">
              Project Description
            </label>

            <textarea
              rows={6}
              placeholder="Tell me about your game, languages, requirements, and timeline..."
              className="form-input"
            />
          </div>

          <button
            type="submit"
            className="submit-btn"
          >
            Send Project Inquiry
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 px-6 text-center text-white/40 text-sm">
        © 2026 Locksmith Localization. All rights reserved.
      </footer>
    </div>
  );
}
