"use client";
import "./page.css";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function GamingLocalizationPortfolio() {
  const glowRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const lastScrollTopRef = useRef(0);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      budget: formData.get("budget"),
      deadline: formData.get("deadline"),
      wordCount: formData.get("wordCount"),
      message: formData.get("message"),
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert("Message sent successfully!");
      form.reset(); // statt e.currentTarget.reset()
    } else {
      alert("Something went wrong.");
    }
  };

  const reviews = [
    {
      company: "Hotloop - The Last Flame",
      role: "Solo dev",
      quote:
        "Dave delivered an exceptional translation of The Last Flame from English to German. The game's complexity demands a deep understanding of nuance and carefully chosen keywords, and Dave approached every aspect of the work with precision! His translation was consistent and high-quality throughout, and even as the game evolved through multiple updates, he always delivered on time. On top of his translator's skill, his communication was clear and proactive all along the project. I highly recommend Dave! Here! let me know if you would like me to change something",
    },
    {
      company: "VSDeptor- Forage Wizard",
      role: "Lost Maxim Games",
      quote:
        "Dave translated Forage Wizard into German. 15% of our players were German in the first few weeks of release. That's 5,000 Germans! We never had a single complaint about the localization from any of those German players, only compliments. Dave was professional kind and helpful. He also tested our game and discovered multiple issues that we had missed ourselves. I couldn't recommend him more. Just DM me for a reference, @vsdebtor on discord (Lost Maxim Games).",
    },
    {
      company: "Bitstream - Cubetory",
      role: "Solo dev",
      quote:
        "Dave was fantastic to work with during my latest commercial game, Cubetory. Being a technical factory game, having the concepts translated accurately was critical for its success. Dave was very thorough in making sure that he understood every concept before translating them, asking the right questions to make sure everything was good. Translations were delivered on time, and regular updates kept me in the loop. Overall a 10/10 translation experience.",
    },
    {
      company: "Touko - Intersteller Esionage Inc.",
      role: "Fancy Raven Games",
      quote:
        "Working with Dave was super easy and he really cares about the quality of his service. Dave got the context for my game quickly and even handled the complex sci-fi terminology exceedingly well.  His communication was professional, he delivered ahead of schedule, and according to, the results are excellent. Without hesitation, I recommend him.",
    },
    {
      company: "Lucas - One Last Job, Another Round, Null State",
      role: "Triple Eye Games",
      quote:
        "Dave and I worked together on translations for several games. He was always quick and responsive to our last-minute requests and pings, plus he worked hard to make our games' silly, punny cultural references make sense to a German audience. He is a very competent contributor with a good fingerspitzengefühl for the idiosyncrasies of the German language! 😄",
    },
  ];

  const fadeLeft = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const fadeRight = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  useEffect(() => {
    if (window.innerWidth < 1024) return;
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
      const current = window.scrollY;

      if (current < 50) {
        setIsHeaderVisible(true);
      } else if (current > lastScrollTopRef.current) {
        // runter
        setIsHeaderVisible(false);
      } else {
        // hoch
        setIsHeaderVisible(true);
      }

      lastScrollTopRef.current = current;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      title: "The Last Flame",
      genre: "Roguelike Strategy Autobattler",
      type: "Full Game",
      image: "/images/the_last_flame_header.jpg",
      link: "https://store.steampowered.com/app/1830970/The_Last_Flame/",
    },
    {
      title: "A Gentlemen's Dispute",
      genre: "Multiplayer Action Party Brawler",
      type: "Full Game",
      image: "/images/gentlemens_dispute.jpg",
      link: "https://store.steampowered.com/app/2820700/A_Gentlemens_Dispute/",
    },
    {
      title: "Forage Wizard",
      genre: "Crafting Automation Builder",
      type: "Full Game",
      image: "/images/forage_wizard.jpg",
      link: "https://store.steampowered.com/app/3868320/Forage_Wizard/",
    },
    {
      title: "Sandcastle",
      genre: "Cozy Relaxing Sandbox Builder",
      type: "Steam Page",
      image: "/images/Sandcastle.jpg",
      link: "hhttps://store.steampowered.com/app/3216520/Sandcastle/",
    },
    {
      title: "Starvester",
      genre: "Incremental Space Automation ",
      type: "Demo",
      image: "/images/starvester.jpg",
      link: "https://store.steampowered.com/app/4194800/Starvester/",
    },
    {
      title: "Cubetory",
      genre: "Factory Automation Builder",
      type: "Full Game",
      image: "/images/cubetory.jpg",
      link: "https://store.steampowered.com/app/3027060/Cubetory/",
    },
    {
      title: "Reclaim The Sea",
      genre: "Roguelike Strategy Adventure",
      type: "Full Game",
      image: "/images/reclaim_the_sea.jpg",
      link: "https://store.steampowered.com/app/1830970/The_Last_Flame/",
    },
    {
      title: "Free as Birds : UAZO",
      genre: "Open World Survival Craft",
      type: "Steam Page",
      image: "/images/free_as_bird.jpg",
      link: "https://store.steampowered.com/app/3182050/Free_as_birds__UAZO/",
    },
    {
      title: "Interstellar Espionage Inc.",
      genre: "Economy Strategy Simulation",
      type: "Full Game",
      image: "/images/Interstellar.jpg",
      link: "https://store.steampowered.com/app/3563480/Interstellar_Espionage_Inc/",
    },
    {
      title: "King’s Well",
      genre: "Roguelite Poker Deckbuilder",
      type: "Steam Page",
      image: "/images/kingswell.jpg",
      link: "https://store.steampowered.com/app/4332200/Kings_Well/",
    },
    {
      title: "General Practice",
      genre: "Multiplayer Online-Koop Party Game",
      type: "Steam Page",
      image: "/images/generalPractice.jpg",
      link: "https://store.steampowered.com/app/3833730/General_Practice/",
    },
    {
      title: "Super Blood Hockey: Rogue Manager",
      genre: "Roguelike Deckbuilding Autobattler",
      type: "Steam Page",
      image: "/images/blood_hockey_rogue.jpg",
      link: "https://store.steampowered.com/app/3911400/Super_Blood_Hockey_Rogue_Manager/",
    },
    {
      title: "Timebound",
      genre: "Mystery Exploration Time Puzzle",
      type: "Demo",
      image: "/images/timebound.jpg",
      link: "https://store.steampowered.com/app/3220700/Timebound/",
    },
    {
      title: "Corner Quest",
      genre: "Idler Incremental Auto battler",
      type: "Steam Page",
      image: "/images/cornerquest.jpg",
      link: "https://store.steampowered.com/app/4254260/Corner_Quest/",
    },
    {
      title: "Sushi On Wheels",
      genre: "Cooking Management Simulation",
      type: "Steam Page",
      image: "/images/sushi.jpg",
      link: "https://store.steampowered.com/app/3749760/Sushi_On_Wheels/",
    },
    {
      title: "Danger World",
      genre: "Choose Your Own Adventure RPG",
      type: "Steam Page",
      image: "/images/danger_world.jpg",
      link: "https://store.steampowered.com/app/3229420/Danger_World/",
    },
    {
      title: "PRITTO PRISONER",
      genre: "Multiplayer Party Game",
      type: "Full Game",
      image: "/images/pritto.jpg",
      link: "https://store.steampowered.com/app/3036800/PRITTO_PRISONER/",
    },
    {
      title: "Marshals of War: Orcblood",
      genre: "Strategy Fantasy RTS",
      type: "Steam Page",
      image: "/images/marshals.jpg",
      link: "https://store.steampowered.com/app/3684360/Marshals_of_War_Orcblood/",
    },
    {
      title: "Another Round",
      genre: "Roguelike Deckbuilder",
      type: "Full Game",
      image: "/images/anotherround.jpg",
      link: "https://store.steampowered.com/app/2798690/Another_Round/",
    },
    {
      title: "Null State",
      genre: "Turn Based Hacking Game",
      type: "Full Game",
      image: "/images/nullstate.jpg",
      link: "https://store.steampowered.com/app/2166340/Null_State/#app_reviews_hash",
    },
    {
      title: "One Last Job",
      genre: "Turn Based CRPG",
      type: "Full Game",
      image: "/images/onelastjob.jpg",
      link: "https://store.steampowered.com/app/2798700/One_Last_Job/",
    },
  ];

  const midpoint = Math.ceil(projects.length / 2);
  const topProjects = projects.slice(0, midpoint);
  const bottomProjects = projects.slice(midpoint);

  return (
    <div className="min-h-screen text-white">
      <div className="bg-orb orb1" />
      <div className="bg-orb orb2" />
      <div className="bg-orb orb3" />
      <div className="bg-orb orb4" />

      {/* Cursor Glow */}
      <div ref={glowRef} className="cursor-glow hidden lg:block" />

      {/* Navbar */}
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-white/10 bg-black/40 transition-transform duration-300 ${
          isHeaderVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/transparent-logo.svg"
              alt="Locsmith Logo"
              className="h-14 w-14 md:h-24 md:w-24"
            />

            <div>
              <h1 className="text-base sm:text-xl md:text-xl font-bold tracking-wide leading-none">
                <span className="text-green-400">Locsmith </span>
                <span>Localization</span>
              </h1>

              <p className="text-xs text-white/60 mt-1">by David Becker</p>
            </div>
          </div>

          <nav className="hidden md:flex gap-8 text-xs md:text-sm uppercase tracking-wider text-white/70">
            <a
              href="#hero"
              className="hover:text-green-400 transition-colors text-base md:text-lg"
            >
              Back to Top
            </a>
            <a
              href="#projects"
              className="hover:text-green-400 transition-colors text-base md:text-lg"
            >
              Projects
            </a>
            <a
              href="#reviews"
              className="hover:text-green-400 transition-colors text-base md:text-lg"
            >
              Reviews
            </a>
            <a
              href="#contact"
              className="hover:text-green-400 transition-colors text-base md:text-lg"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section
        id="hero"
        className="hero-section relative max-w-7xl mx-auto px-4 sm:px-6 pt-16 md:pt-28 pb-16 md:pb-32"
      >
        <div className="hero-grid">
          <div className="hero-content">
            <h2 className="hero-title">
              <span className="hero-gradient">
                Forged by Hand. Built for Players.
              </span>
            </h2>

            <p className="hero-description">
              Professional video game localization focused on immersive
              storytelling, natural dialogue, and culturally adapted player
              experiences.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn-primary">
                View Projects
              </a>

              <a href="#contact" className="btn-secondary">
                Contact Me
              </a>
            </div>
          </div>

          <div className="hero-stats-wrapper">
            <div className="hero-stats-glow" />

            <div className="hero-stats-panel">
              <div className="hero-stats-grid">
                <div className="hero-stat-card">
                  <div className="hero-stat-number">1.5M+</div>
                  <div className="hero-stat-label">Words Translated</div>
                </div>

                <div className="hero-stat-card">
                  <div className="hero-stat-number">35+</div>
                  <div className="hero-stat-label">Projects Completed</div>
                </div>

                <div className="hero-stat-card">
                  <div className="hero-stat-number">80+</div>
                  <div className="hero-stat-label">Hours of LQA</div>
                </div>

                <div className="hero-specialization-card">
                  <div className="hero-specialization-title">
                    Specializations
                  </div>

                  <div className="hero-specialization-tags">
                    {[
                      "From AAA to Indie Games",
                      "Roguelites & Roguelikes",
                      "RPGs & JRPGs",
                      "Incremental Games",
                      "Strategy Games",
                      "Turn Based Strategy Games",
                      "Automation Games",
                      "Story Driven Games",
                      "Autobattler",
                      "And more...",
                    ].map((item) => (
                      <span key={item} className="hero-tag">
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
      {/* About heading*/}
      <section className="max-w-6xl mx-auto space-y-12">
        <div className=" uppercase tracking-[0.3em] text-sm mb-4">
          <p className="text-green-400 pb-4">About Me</p>
          <h3 className="text-xl md:text-2xl font-bold mb-8">
            What started as a passion project <br />
            turned into a growing localization business.
          </h3>
        </div>

        <div>
          {/* About content */}
          {/* Block 1*/}
          <div className="text-white/70 text-base md:text-lg leading-relaxed space-y-6">
            <h3 className="text-green-400 text-xl pb-4">
              The Legend of Locsmith Localization
            </h3>
            <motion.div
              className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <p>
                It all began as a daring endeavor, a one-time project for a game
                I held dear. With pen and heart, I translated the words of its
                creator, delving deep into their crafted world. Each line was
                carefully forged and honed, carrying not just meaning, but the
                very soul of the original. What began as a fan project grew into
                a calling: I founded Locsmith Localization, a forge where video
                games are masterfully translated and adapted for German-speaking
                gamers. My craft goes beyond mere words – I preserve emotional
                impact, gameplay clarity, and full immersion, so that every word
                and every story may reveal its true power.
              </p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/sushi.jpg"
                alt="About Me"
                className="w-full rounded-2xl object-cover"
              />
            </motion.div>

            {/* Block 2*/}
            <motion.div
              className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="order-1 lg:order-2">
                From humble indie titles to sprawling RPGs, I aid developers in
                crafting authentic, handcrafted experiences that feel truly
                native to their players. Every word is forged by my own hand. I
                take great joy in my work as a wordsmith and refuse to rely on
                AI, ensuring that the highest quality is maintained in every
                line.
                <br />
                <br />
                Each project is a new quest, where every sentence and phrase is
                carefully tempered to preserve the spirit of the original. My
                goal is to let players feel the story as if it were born in
                their own language, fully immersive and true.
              </p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/sushi.jpg"
                alt="About Me"
                className="hidden lg:block w-full rounded-2xl object-cover order-2 lg:order-1"
              />
            </motion.div>
            {/* Block 3*/}
            <motion.div
              className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <p>
                I still remember the first game that ever captured my heart: The
                Legend of Dragoon on the PSX back in 2001. I was only 7, perched
                at my older sister’s side, eyes wide as I watched her every
                move, gasping at every perilous creature. From that moment, my
                journey began. With countless RPGs from the old days, my love
                for gaming grew, and now, at 31, I finally forge a life around
                what I truly love—crafting adventures for others to experience.
              </p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/sushi.jpg"
                alt="About Me"
                className="w-full rounded-2xl object-cover"
              />
            </motion.div>
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

          <h3 className="text-2xl md:text-6xl font-bold max-w-3xl leading-tight">
            My Portfolio
          </h3>
        </div>

        <div className="full-bleed-wrapper">
          <div className="grid gap-8">
            <div className="project-marquee overflow-hidden relative">
              <div className="carousel-border-left" />
              <div className="carousel-border-right" />
              <div className="project-track track-left flex gap-6 py-6">
                {topProjects.concat(topProjects).map((project, index) => (
                  <div
                    key={`top-${project.title}-${index}`}
                    className="project-carousel-card min-w-[240px] md:min-w-[280px] flex-shrink-0 flex flex-col"
                  >
                    <div className="project-image">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.image}
                        alt={project.title}
                        className="object-cover"
                      />
                    </div>
                    <div className="project-card-body p-4 flex flex-col gap-3">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="font-bold text-white">
                          {project.title}
                        </h3>
                        <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/70 font-medium whitespace-nowrap">
                          {project.type}
                        </span>
                      </div>
                      <span className="text-xs uppercase tracking-[0.3em] text-green-400">
                        {project.genre}
                      </span>

                      <button
                        type="button"
                        className="steam-link-btn mt-auto"
                        onClick={(e) => {
                          e.stopPropagation();

                          if (project.link) {
                            window.open(
                              project.link,
                              "_blank",
                              "noopener,noreferrer",
                            );
                          }
                        }}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/images/steam.svg" alt="Steam" />
                        <span>View on Steam</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="project-marquee overflow-hidden relative">
              <div className="carousel-border-left" />
              <div className="carousel-border-right" />
              <div className="project-track track-right flex gap-6 py-6">
                {bottomProjects.concat(bottomProjects).map((project, index) => (
                  <div
                    key={`bottom-${project.title}-${index}`}
                    className="project-carousel-card min-w-[240px] md:min-w-[280px] flex-shrink-0 flex flex-col"
                  >
                    <div className="project-image">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={project.image} alt={project.title} />
                    </div>
                    <div className="project-card-body p-4 flex flex-col gap-3">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="font-bold text-white">
                          {project.title}
                        </h3>
                        <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/70 font-medium whitespace-nowrap">
                          {project.type}
                        </span>
                      </div>
                      <span className="text-xs uppercase tracking-[0.3em] text-green-400">
                        {project.genre}
                      </span>

                      <button
                        type="button"
                        className="steam-link-btn mt-auto"
                        onClick={(e) => {
                          e.stopPropagation();

                          if (project.link) {
                            window.open(
                              project.link,
                              "_blank",
                              "noopener,noreferrer",
                            );
                          }
                        }}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/images/steam.svg" alt="Steam" />
                        <span>View on Steam</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="site-divider"></div>
      {/* Reviews */}
      <section
        id="reviews"
        className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 relative"
      >
        <div className="mb-14">
          <div className="text-green-400 uppercase tracking-[0.3em] text-sm mb-4 text-center">
            Reviews
          </div>

          <h3 className="text-2xl md:text-5xl font-bold text-center">
            What my clients say
          </h3>
        </div>

        <div className="review-panel">
          <div key={reviewIndex} className="review-card">
            <div className="review-badge">
              <div>{reviews[reviewIndex].company}</div>
              <div className="text-white">{reviews[reviewIndex].role}</div>
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
      <section
        id="contact"
        className="max-w-5xl mx-auto px-4 sm:px-6 py-16 md:py-24"
      >
        <div className="text-center mb-14">
          <div className="text-green-400 uppercase tracking-[0.3em] text-sm mb-4">
            Contact
          </div>

          <h3 className="text-2xl md:text-6xl font-bold mb-6">
            Let’s Work Together
          </h3>

          <p className="text-white/65 text-base md:text-lg max-w-2xl mx-auto">
            Looking for high-quality and affordable game localization?
          </p>
          <p className="text-white/65 text-base md:text-lg max-w-2xl mx-auto">
            Let me know your project details below!
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs md:text-sm uppercase tracking-wider text-white/60 mt-3 mb-1 ml-2">
                Name
              </label>
              <input
                name="name"
                type="text"
                placeholder="Your name"
                className="form-input"
              />
            </div>

            <div>
              <label className="block text-xs md:text-sm uppercase tracking-wider text-white/60 mt-3 mb-1 ml-2">
                Email
              </label>
              <input
                name="email"
                type="email"
                placeholder="your@email.com"
                className="form-input"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs md:text-sm uppercase tracking-wider text-white/60 mt-3 mb-1 ml-2">
                Budget
              </label>
              <input
                name="budget"
                type="text"
                placeholder="Estimated budget"
                className="form-input"
              />
            </div>

            <div>
              <label className="block text-xs md:text-sm uppercase tracking-wider text-white/60 mt-3 mb-1 ml-2">
                Deadline
              </label>
              <input
                name="deadline"
                type="date"
                placeholder=""
                className="form-input"
              />
            </div>

            <div>
              <label className="block text-xs md:text-sm uppercase tracking-wider text-white/60 mt-3 mb-1 ml-2">
                Word Count
              </label>
              <input
                name="wordCount"
                type="text"
                placeholder="Approximate words"
                className="form-input"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs md:text-sm uppercase tracking-wider text-white/60 mt-3 mb-1 ml-2">
              Project Description
            </label>

            <textarea
              name="message"
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
