"use client";
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
  const headerRef = useRef<HTMLDivElement>(null);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [openProjects, setOpenProjects] = useState<number[]>([]);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const lastScrollTopRef = useRef(0);

  const toggleProject = (index: number) => {
    setOpenProjects((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  const reviews = [
    {
      company: "Hotloop - The Last Flame",
      role: "Solo dev",
      quote:
        "Dave delivered an exceptional translation of The Last Flame from English to German. The game's complexity demands a deep understanding of nuance and carefully chosen keywords, and Dave approached every aspect of the work with precision! His translation was consistent and high-quality throughout, and even as the game evolved through multiple updates, he always delivered on time. On top of his translator's skill, his communication was clear and proactive all along the project. I highly recommend Dave! Here! let me know if you would like me to change something",
      link: "https://store.steampowered.com/app/1830970/The_Last_Flame/#app_reviews_hash",
    },
    {
      company: "Publisher Placeholder B",
      role: "Localization Lead",
      quote:
        "A professional partner who understood our narrative and preserved the soul of the game in every line.",
    },
    {
      company: "Developer Placeholder C",
      role: "Narrative Designer",
      quote:
        "Excellent communication and quality. The adapted text kept the original character voice without sounding translated.",
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

  useEffect(() => {
    const orbs = document.querySelectorAll(".bg-orb");

    const updateOrbPosition = (orb: Element) => {
      const randomLeft = Math.random() * 100;
      const randomTop = Math.random() * 100;

      (orb as HTMLElement).style.left = `${randomLeft}%`;
      (orb as HTMLElement).style.top = `${randomTop}%`;
    };

    const listeners: (() => void)[] = [];

    orbs.forEach((orb) => {
      // Startposition
      updateOrbPosition(orb);

      // Neue Position erst nach einem kompletten Fade-Zyklus
      const handleIteration = () => {
        updateOrbPosition(orb);
      };

      orb.addEventListener("animationiteration", handleIteration);

      listeners.push(() => {
        orb.removeEventListener("animationiteration", handleIteration);
      });
    });

    return () => {
      listeners.forEach((cleanup) => cleanup());
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;

      if (currentScrollTop > lastScrollTopRef.current) {
        // Scrolling down
        setIsHeaderVisible(false);
      } else {
        // Scrolling up
        setIsHeaderVisible(true);
      }

      lastScrollTopRef.current = currentScrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const projects = [
    {
      title: "The Last Flame",
      genre: "Roguelike Strategy Autobattler",
      description:
        "Recruit a party of unique heroes, fight deadly encounters, loot and craft powerful gear, discover and create thousands of synergetic builds! The Last Flame is an endless roguelike auto-battler in which you guide a righteous party of heroes through many challenges. ",
      image: "/images/the_last_flame_header.jpg",
      link: "https://store.steampowered.com/app/1830970/The_Last_Flame/",
    },
    {
      title: "A Gentlemen's Dispute",
      genre: "Multiplayer Action Party Brawler",
      description:
        "A fancy party brawler for proper scoundrels! Sling traps, swing bats, and fire cannons in destructible arenas as you scramble for absurd perks and weapons. Outlast your so-called peers by any gentlemanly means necessary - all in the name of good sport, of course. ",
      image: "/images/gentlemens_dispute.jpg",
      link: "https://store.steampowered.com/app/2820700/A_Gentlemens_Dispute/",
    },
    {
      title: "Forage Wizard",
      genre: "Incremental Crafting Automation Builder",
      description:
        "Click, craft and collect your way to alchemical mastery. Progress through a branching skill tree and explore the forbidden woods. Collect resources and build machines of magic. Slay monsters, farm crops and automate your production to become the all-powerful Forage Wizard! ",
      image: "/images/forage_wizard.jpg",
      link: "https://store.steampowered.com/app/3868320/Forage_Wizard/",
    },
    {
      title: "Sandcastle",
      genre: "Cozy Relaxing Sandbox Builder",
      description:
        "On a sun-warmed tropical shore, quietly craft a mighty sandcastle. Carve moats, raise towers and walls, then embellish with driftwood, pebbles, shells and seaweed. Gentle tides, soft surf and a calming color palette turn every build into a peaceful, relaxing moment. ",
      image: "/images/Sandcastle.jpg",
      link: "hhttps://store.steampowered.com/app/3216520/Sandcastle/",
    },
    {
      title: "Starvester",
      genre: "Incremental Space Automation ",
      description:
        "A short incremental game about expanding a star-system wide factory to build giant megastructures in space. Deploy swarms of drones, mine resources, unlock upgrades and harvest the power of the stars! ",
      image: "/images/starvester.jpg",
      link: "https://store.steampowered.com/app/4194800/Starvester/",
    },
    {
      title: "Cubetory",
      genre: "Factory Automation Builder",
      description:
        "Build a huge factory on a tiny island! Resources are scarce and unique - tweak and optimize everything for peak efficiency. Start with simple painted cubes, unlock tons of upgrades, and scale up to complex production chains. No enemies, just satisfying spaghetti. ",
      image: "/images/cubetory.jpg",
      link: "https://store.steampowered.com/app/3027060/Cubetory/",
    },
    {
      title: "Reclaim The Sea",
      genre: "Roguelike Strategy Adventure",
      description:
        "Reclaim the Sea is a roguelike strategy game set in a pirate fantasy world. Fight your way through randomly generated maps and text events. Command your pirate crew, upgrade your ship and make tactical decisions to beat the boss and save the world… or die trying. ",
      image: "/images/reclaim_the_sea.jpg",
      link: "https://store.steampowered.com/app/1830970/The_Last_Flame/",
    },
    {
      title: "The Last Flame",
      genre: "Roguelike Fantasy Autobattler",
      description: "",
      image: "/images/the_last_flame_header.jpg",
      link: "https://store.steampowered.com/app/1830970/The_Last_Flame/",
    },
    {
      title: "Interstellar Espionage Inc.",
      genre: "Economy Strategy Simulation",
      description:
        "Manage an interstellar spy business in this strategy game with lunchbreak-length runs. Release your inner math-nerd to manipulate statistical odds for stealing data and technology. Build a galaxy-wide espionage network, partner with megacorporations or sell their secrets to bankrupt them. Profit! ",
      image: "/images/Interstellar.jpg",
      link: "https://store.steampowered.com/app/3563480/Interstellar_Espionage_Inc/",
    },
    {
      title: "King’s Well",
      genre: "Roguelite Poker Deckbuilder",
      description:
        "Feed rusty steampunk machines with cards to trigger powerful attacks and combos in this roguelite poker deckbuilder. Demo available now. ",
      image: "/images/kingswell.jpg",
      link: "https://store.steampowered.com/app/4332200/Kings_Well/",
    },
    {
      title: "Super Blood Hockey: Rogue Manager",
      genre: "Roguelike Deckbuilding Autobattler",
      description:
        "A sports game where you don't control the players, instead play as a shady coach and use your deck of dirty tricks to become season champion. A unique hybrid of roguelike deckbuilder, auto-battler, and high action arcade hockey. ",
      image: "/images/blood_hockey_rogue.jpg",
      link: "https://store.steampowered.com/app/3911400/Super_Blood_Hockey_Rogue_Manager/",
    },
    {
      title: "",
      genre: "",
      description: "",
      image: "",
      link: "",
    },
    {
      title: "",
      genre: "",
      description: "",
      image: "",
      link: "",
    },
    {
      title: "",
      genre: "",
      description: "",
      image: "",
      link: "",
    },
  ];

  return (
    <div className="min-h-screen text-white">
      <div className="bg-orb orb1 ease-in-out transition" />
      <div className="bg-orb orb2 ease-in-out transition" />
      <div className="bg-orb orb3 ease-in-out transition" />
      <div className="bg-orb orb4 ease-in-out transition" />

      {/* Cursor Glow */}
      <div ref={glowRef} className="cursor-glow" />

      {/* Navbar */}
      <header
        ref={headerRef}
        className={`sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 bg-black/40 transition-transform duration-300 ${
          isHeaderVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl md:text-2xl font-bold tracking-wide">
            <span className="text-green-400">Locsmith </span>
            <span>Localization</span>
            <p className="text-xs">by David Becker</p>
          </h1>

          <div className="hero-badge">EN → DE Game Localization</div>

          <nav className="hidden md:flex gap-8 text-sm uppercase tracking-wider text-white/70">
            <a
              href="#hero"
              className="hover:text-green-400 transition-colors text-lg"
            >
              Back to Top
            </a>
            <a
              href="#projects"
              className="hover:text-green-400 transition-colors text-lg"
            >
              Projects
            </a>
            <a
              href="#reviews"
              className="hover:text-green-400 transition-colors text-lg"
            >
              Reviews
            </a>
            <a
              href="#contact"
              className="hover:text-green-400 transition-colors text-lg"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section
        id="hero"
        className="relative max-w-7xl mx-auto px-6 pt-28 pb-32"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              <span className="hero-gradient">Forging Interactive Words</span>
            </h2>

            <p className="text-lg text-white/70 max-w-xl leading-relaxed mb-10">
              Professional video game localization focused on immersive
              storytelling, natural dialogue, and culturally adapted player
              experiences.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary">
                View Projects
              </a>

              <a href="#contact" className="btn-secondary">
                Contact Me
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl rounded-3xl" />

            <div className="relative backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-black/40 border border-white/10 rounded-2xl p-6">
                  <div className="text-4xl font-black text-green-300">
                    1.5M+
                  </div>
                  <div className="text-white/60 mt-2">Words Translated</div>
                </div>

                <div className="bg-black/40 border border-white/10 rounded-2xl p-6">
                  <div className="text-4xl font-black text-green-300">35+</div>
                  <div className="text-white/60 mt-2">Projects Completed</div>
                </div>

                <div className="bg-black/40 border border-white/10 rounded-2xl p-6 col-span-2">
                  <div className="text-2xl font-bold mb-3 text-green-300">
                    Specializations
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "AA and Indie Games",
                      "Roguelites & Roguelikes",
                      "RPGs",
                      "Incremental Games",
                      "Strategy Games",
                      "Turn based strategy Games",
                      "Automation Games",
                      "Story driven Games",
                      "And more...",
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
            <div className="text-green-400 uppercase tracking-[0.3em] text-sm mb-4">
              About Me
            </div>

            <h3 className="text-4xl md:text-3xl font-bold mb-8">
              What started as a passion project turned into a growing
              localization business.
            </h3>
          </div>

          <div className="text-white/70 text-lg leading-relaxed space-y-6">
            <p>
              It once started as a one time project for a game i love with
              fan-translation. I really got into translating and handcrafting
              the words from the dev and made a business of what i love. I
              specialize in translating and adapting video games for
              German-speaking audiences. My focus is not only linguistic
              accuracy, but preserving emotional impact, gameplay clarity, and
              immersion.
            </p>

            <p>
              From indie titles to large-scale RPGs, I help developers create
              authentic, handcreafted experiences that feel native to players. I
              love what i do and stricly work without AI to keep a high quality
              all the time.
            </p>
          </div>
          <div className="text-white/70 text-lg leading-relaxed space-y-6">
            <p>
              It once started as a one time project for a game i love with
              fan-translation. I really got into translating and handcrafting
              the words from the dev and made a business of what i love. I
              specialize in translating and adapting video games for
              German-speaking audiences. My focus is not only linguistic
              accuracy, but preserving emotional impact, gameplay clarity, and
              immersion.
            </p>

            <p>
              From indie titles to large-scale RPGs, I help developers create
              authentic, handcreafted experiences that feel native to players. I
              love what i do and stricly work without AI to keep a high quality
              all the time.
            </p>
          </div>
        </div>
      </section>
      <div className="site-divider"></div>
      {/* Projects */}
      <section id="projects" className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-16">
          <div className="text-green-400 uppercase tracking-[0.3em] text-sm mb-4">
            Featured Projects
          </div>

          <h3 className="text-4xl md:text-6xl font-bold max-w-3xl leading-tight">
            My Portfolio
          </h3>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`project-card ${
                openProjects.includes(index) ? "open" : ""
              }`}
              onClick={() => toggleProject(index)}
            >
              <div className="project-image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm uppercase tracking-widest text-green-400">
                    {project.genre}
                  </span>
                </div>

                <h3 className="hero-gradient text-2xl font-bold">
                  {project.title}
                </h3>

                <div
                  className={`project-content ${
                    openProjects.includes(index) ? "open" : ""
                  }`}
                >
                  <p className="text-white/65 leading-relaxed mt-4">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="site-divider"></div>
      {/* Reviews */}
      <section id="reviews" className="max-w-7xl mx-auto px-6 py-24 relative">
        <div className="mb-14">
          <div className="text-green-400 uppercase tracking-[0.3em] text-sm mb-4">
            What it&apos;s like working with me
          </div>

          <h3 className="text-4xl md:text-5xl font-bold">Words from Clients</h3>
        </div>

        <div className="review-panel">
          <div key={reviewIndex} className="review-card">
            <div className="review-badge">
              <div>{reviews[reviewIndex].company}</div>
              <div className="text-white/50">{reviews[reviewIndex].role}</div>
            </div>
            <div className="text-sm text-white/50"></div>
            <p className="text-white/75 leading-relaxed mb-6">
              “{reviews[reviewIndex].quote}”
            </p>
          </div>

          <div className="review-actions">
            <button
              type="button"
              className="review-action-btn"
              onClick={() =>
                setReviewIndex(
                  (prev) => (prev - 1 + reviews.length) % reviews.length,
                )
              }
            >
              Previous
            </button>
            <button
              type="button"
              className="review-action-btn"
              onClick={() =>
                setReviewIndex((prev) => (prev + 1) % reviews.length)
              }
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
      <section id="contact" className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <div className="text-green-400 uppercase tracking-[0.3em] text-sm mb-4">
            Contact
          </div>

          <h3 className="text-4xl md:text-6xl font-bold mb-6">
            Let’s Work Together
          </h3>

          <p className="text-white/65 text-lg max-w-2xl mx-auto">
            Looking for high-quality game localization? Send your project
            details below.
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
              <input type="date" className="form-input" />
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

          <button type="submit" className="submit-btn">
            Send Project Inquiry
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 px-6 text-center text-white/40 text-sm">
        © 2026 Locsmith Localization. All rights reserved.
      </footer>
    </div>
  );
}
