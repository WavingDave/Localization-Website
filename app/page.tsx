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

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 80,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: [0.43, 0.13, 0.23, 0.96] as const,
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
      const currentScrollTop = window.scrollY;
      const scrollThreshold = 50;

      if (currentScrollTop > lastScrollTopRef.current + scrollThreshold) {
        // Scrolling down significantly
        setIsHeaderVisible(false);
      } else if (
        currentScrollTop <
        lastScrollTopRef.current - scrollThreshold
      ) {
        // Scrolling up significantly
        setIsHeaderVisible(true);
      }

      lastScrollTopRef.current = currentScrollTop;
    };

    window.addEventListener("scroll", handleScroll, false);

    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, []);

  const projects = [
    {
      title: "The Last Flame",
      genre: "Roguelike Strategy Autobattler",
      type: "Full Game",
      description:
        "Recruit a party of unique heroes, fight deadly encounters, loot and craft powerful gear, discover and create thousands of synergetic builds! The Last Flame is an endless roguelike auto-battler in which you guide a righteous party of heroes through many challenges. ",
      image: "/images/the_last_flame_header.jpg",
      link: "https://store.steampowered.com/app/1830970/The_Last_Flame/",
    },
    {
      title: "A Gentlemen's Dispute",
      genre: "Multiplayer Action Party Brawler",
      type: "Full Game",
      description:
        "A fancy party brawler for proper scoundrels! Sling traps, swing bats, and fire cannons in destructible arenas as you scramble for absurd perks and weapons. Outlast your so-called peers by any gentlemanly means necessary - all in the name of good sport, of course. ",
      image: "/images/gentlemens_dispute.jpg",
      link: "https://store.steampowered.com/app/2820700/A_Gentlemens_Dispute/",
    },
    {
      title: "Forage Wizard",
      genre: "Crafting Automation Builder",
      type: "Full Game",
      description:
        "Click, craft and collect your way to alchemical mastery. Progress through a branching skill tree and explore the forbidden woods. Collect resources and build machines of magic. Slay monsters, farm crops and automate your production to become the all-powerful Forage Wizard! ",
      image: "/images/forage_wizard.jpg",
      link: "https://store.steampowered.com/app/3868320/Forage_Wizard/",
    },
    {
      title: "Sandcastle",
      genre: "Cozy Relaxing Sandbox Builder",
      type: "Steam Page",
      description:
        "On a sun-warmed tropical shore, quietly craft a mighty sandcastle. Carve moats, raise towers and walls, then embellish with driftwood, pebbles, shells and seaweed. Gentle tides, soft surf and a calming color palette turn every build into a peaceful, relaxing moment. ",
      image: "/images/Sandcastle.jpg",
      link: "hhttps://store.steampowered.com/app/3216520/Sandcastle/",
    },
    {
      title: "Starvester",
      genre: "Incremental Space Automation ",
      type: "Demo",
      description:
        "A short incremental game about expanding a star-system wide factory to build giant megastructures in space. Deploy swarms of drones, mine resources, unlock upgrades and harvest the power of the stars! ",
      image: "/images/starvester.jpg",
      link: "https://store.steampowered.com/app/4194800/Starvester/",
    },
    {
      title: "Cubetory",
      genre: "Factory Automation Builder",
      type: "Full Game",
      description:
        "Build a huge factory on a tiny island! Resources are scarce and unique - tweak and optimize everything for peak efficiency. Start with simple painted cubes, unlock tons of upgrades, and scale up to complex production chains. No enemies, just satisfying spaghetti. ",
      image: "/images/cubetory.jpg",
      link: "https://store.steampowered.com/app/3027060/Cubetory/",
    },
    {
      title: "Reclaim The Sea",
      genre: "Roguelike Strategy Adventure",
      type: "Full Game",
      description:
        "Reclaim the Sea is a roguelike strategy game set in a pirate fantasy world. Fight your way through randomly generated maps and text events. Command your pirate crew, upgrade your ship and make tactical decisions to beat the boss and save the world… or die trying. ",
      image: "/images/reclaim_the_sea.jpg",
      link: "https://store.steampowered.com/app/1830970/The_Last_Flame/",
    },
    {
      title: "Free as Birds : UAZO",
      genre: "Open World Survival Craft",
      type: "Steam Page",
      description:
        "Soar as a curious bird on a mysterious island filled with secrets, ancient ruins, and hidden wonders. Explore with your friends, gather resources, build, survive and uncover the island’s story in this serene adventure. ",
      image: "/images/free_as_bird.jpg",
      link: "https://store.steampowered.com/app/3182050/Free_as_birds__UAZO/",
    },
    {
      title: "Interstellar Espionage Inc.",
      genre: "Economy Strategy Simulation",
      type: "Full Game",
      description:
        "Manage an interstellar spy business in this strategy game with lunchbreak-length runs. Release your inner math-nerd to manipulate statistical odds for stealing data and technology. Build a galaxy-wide espionage network, partner with megacorporations or sell their secrets to bankrupt them. Profit! ",
      image: "/images/Interstellar.jpg",
      link: "https://store.steampowered.com/app/3563480/Interstellar_Espionage_Inc/",
    },
    {
      title: "King’s Well",
      genre: "Roguelite Poker Deckbuilder",
      type: "Steam Page",
      description:
        "Feed rusty steampunk machines with cards to trigger powerful attacks and combos in this roguelite poker deckbuilder. Demo available now. ",
      image: "/images/kingswell.jpg",
      link: "https://store.steampowered.com/app/4332200/Kings_Well/",
    },
    {
      title: "General Practice",
      genre: "Multiplayer Online-Koop Party Game",
      type: "Steam Page",
      description:
        "Diagnose and (mis)treat patients to meet tight deadlines and high expectations in this wacky medical co-op adventure. Wear many hats, master numerous tools, multitask, manage the chaos: all while trying to do no harm! Play solo or enjoy the tomfoolery with up to 4 players, locally or online.",
      image: "/images/generalPractice.jpg",
      link: "https://store.steampowered.com/app/3833730/General_Practice/",
    },
    {
      title: "Super Blood Hockey: Rogue Manager",
      genre: "Roguelike Deckbuilding Autobattler",
      type: "Steam Page",
      description:
        "A sports game where you don't control the players, instead play as a shady coach and use your deck of dirty tricks to become season champion. A unique hybrid of roguelike deckbuilder, auto-battler, and high action arcade hockey. ",
      image: "/images/blood_hockey_rogue.jpg",
      link: "https://store.steampowered.com/app/3911400/Super_Blood_Hockey_Rogue_Manager/",
    },
    {
      title: "Timebound",
      genre: "Mystery Exploration Time Puzzle",
      type: "Demo",
      description:
        "An exploration puzzle adventure in mystical ruins. Explore a world filled with puzzles, uncover the magic left behind, discover what's hidden in plain sight, learn the rules and break them. ",
      image: "/images/timebound.jpg",
      link: "https://store.steampowered.com/app/3220700/Timebound/",
    },
    {
      title: "Corner Quest",
      genre: "Idler Incremental Auto battler",
      type: "Steam Page",
      description:
        "An idle auto-battler that sits in the corner of your screen while you do other things. ",
      image: "/images/cornerquest.jpg",
      link: "https://store.steampowered.com/app/4254260/Corner_Quest/",
    },
    {
      title: "Sushi On Wheels",
      genre: "Cooking Management Simulation",
      type: "Steam Page",
      description:
        "Run your dream sushi truck in Sushi On Wheels! Prep ingredients, customize your truck, and serve handmade sushi to hungry locals. Upgrade your gear, discover new recipes, and build your reputation in this cozy management game set in a charming Japanese town. ",
      image: "/images/sushi.jpg",
      link: "https://store.steampowered.com/app/3749760/Sushi_On_Wheels/",
    },
    {
      title: "Danger World",
      genre: "Choose Your Own Adventure RPG",
      type: "Steam Page",
      description:
        "Explore an epic fantasy world alongside three heroes on a quest to recover a stolen jewel. Guide your party to victory in turn-based battles, make decisions that will determine the events of the story, and uncover the ancient secrets of Eldora as you race to catch the mechanical thief. ",
      image: "/images/danger_world.jpg",
      link: "https://store.steampowered.com/app/3229420/Danger_World/",
    },
    {
      title: "PRITTO PRISONER",
      genre: "Multiplayer Party Game",
      type: "Full Game",
      description:
        "You're the world's softest criminals in an island prison with mandatory nap rooms. Your escape plan? Eat bread, poop until the gates open, and pee on the robots chasing you. Break out with three friends, or play the robots tucking them back in. A wacky 4v2 prison break in quick 10-minute matches. ",
      image: "/images/pritto.jpg",
      link: "https://store.steampowered.com/app/3036800/PRITTO_PRISONER/",
    },
    {
      title: "Marshals of War: Orcblood",
      genre: "Strategy Fantasy RTS",
      type: "Steam Page",
      description:
        "Command powerful heroes and epic armies in Marshals of War: Orcblood, a stylized fantasy action Real Time Strategy game. Cast spells, defeat bosses, loot treasure, build defenses, and lead men, dwarves and elves to victory, in solo, or co-op against the orcs and their masters. ",
      image: "/images/marshals.jpg",
      link: "https://store.steampowered.com/app/3684360/Marshals_of_War_Orcblood/",
    },
    {
      title: "Another Round",
      genre: "Roguelike Deckbuilder",
      type: "Full Game",
      description:
        "Welcome to The Old Fashioned, the local spot for off-the-books biz. We’re neutral ground for folks from all walks - pink mohawks, black trenchcoats, mirrorshades, even corpo suits. If you've got money & intel to share, you've got a seat here. Can I get you another round? ",
      image: "/images/anotherround.jpg",
      link: "https://store.steampowered.com/app/2798690/Another_Round/",
    },
    {
      title: "Null State",
      genre: "Turn Based Hacking Game",
      type: "Full Game",
      description:
        "You are a hacker - a rarity in a world nearly destroyed by a cascading global systems failure. Prowl through networks node by node, disabling their security in risky turn-based combat, as you explore branching storylines to uncover what caused Obsidian Wednesday.",
      image: "/images/nullstate.jpg",
      link: "https://store.steampowered.com/app/2166340/Null_State/#app_reviews_hash",
    },
    {
      title: "One Last Job",
      genre: "Turn Based CRPG",
      type: "Full Game",
      description:
        "Being a world-class fixer is about who you know: clients need discreet solutions, and crews want to see retirement. Then there's you, stuck in the middle with your rep on the line. Yeah, you're quitting the biz -- after one last job.",
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
        className={`sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 bg-black/40 transition-transform duration-300 ${
          isHeaderVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="/images/transparent-logo.svg"
              alt="Locsmith Logo"
              className="h-14 w-14 md:h-24 md:w-24"
            />

            <div>
              <h1 className="text-base md:text-lg sm:text-xl md:text-xl md:text-2xl font-bold tracking-wide leading-none">
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
        className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-16 md:pt-28 pb-16 md:pb-32"
      >
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-8 lg:gap-16 items-center">
          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6">
              <span className="hero-gradient">
                Forged by Hand. Built for Players.
              </span>
            </h2>

            <p className="text-base md:text-base md:text-lg text-white/70 max-w-xl leading-relaxed mb-10">
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
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-4 md:p-6">
                <div className="bg-black/40 border border-white/10 rounded-2xl p-4 md:p-6">
                  <div className="text-2xl md:text-4xl font-black text-green-300">
                    1.5M+
                  </div>
                  <div className="text-white/60 mt-2">Words Translated</div>
                </div>

                <div className="bg-black/40 border border-white/10 rounded-2xl p-4 md:p-6">
                  <div className="text-2xl md:text-4xl font-black text-green-300">
                    35+
                  </div>
                  <div className="text-white/60 mt-2">Projects Completed</div>
                </div>
                <div className="bg-black/40 border border-white/10 rounded-2xl p-4 md:p-6">
                  <div className="text-2xl md:text-4xl font-black text-green-300">
                    80+
                  </div>
                  <div className="text-white/60 mt-2">Hours of LQA</div>
                </div>

                <div className="bg-black/40 border border-white/10 rounded-2xl p-4 md:p-6 col-span-3">
                  <div className="text-xl md:text-2xl font-bold mb-3 text-green-300">
                    Specializations
                  </div>
                  <div className="flex flex-wrap gap-2">
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

          <h3 className="text-2xl md:text-4xl md:text-6xl font-bold max-w-3xl leading-tight">
            My Portfolio
          </h3>
        </div>

        <motion.div
          className="space-y-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="full-bleed-wrapper">
            <div className="grid gap-8">
              <div className="project-marquee overflow-hidden bg-black/40 relative">
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
                      <div className="project-card-body p-4 flex flex-col gap-3 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs uppercase tracking-[0.3em] text-green-400">
                            {project.genre}
                          </span>
                          <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/70 font-medium whitespace-nowrap">
                            {project.type}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-white">
                          {project.title}
                        </h3>
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
                          <img src="/images/steam.svg" alt="Steam" />
                          <span>View on Steam</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="project-marquee overflow-hidden bg-black/40 relative">
                <div className="carousel-border-left" />
                <div className="carousel-border-right" />
                <div className="project-track track-right flex gap-6 py-6">
                  {bottomProjects
                    .concat(bottomProjects)
                    .map((project, index) => (
                      <div
                        key={`bottom-${project.title}-${index}`}
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
                        <div className="project-card-body p-4 flex flex-col gap-3 flex-1">
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-xs uppercase tracking-[0.3em] text-green-400">
                              {project.genre}
                            </span>
                            <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/70 font-medium whitespace-nowrap">
                              {project.type}
                            </span>
                          </div>
                          <h3 className="text-lg font-bold text-white">
                            {project.title}
                          </h3>
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
        </motion.div>
      </section>
      <div className="site-divider"></div>
      {/* Reviews */}
      <section
        id="reviews"
        className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 relative"
      >
        <div className="mb-14">
          <div className="text-green-400 uppercase tracking-[0.3em] text-sm mb-4">
            Reviews
          </div>

          <h3 className="text-2xl md:text-4xl md:text-5xl font-bold">
            What my clients say
          </h3>
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
      <section
        id="contact"
        className="max-w-5xl mx-auto px-4 sm:px-6 py-16 md:py-24"
      >
        <div className="text-center mb-14">
          <div className="text-green-400 uppercase tracking-[0.3em] text-sm mb-4">
            Contact
          </div>

          <h3 className="text-2xl md:text-4xl md:text-6xl font-bold mb-6">
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
          <div className="grid md:grid-cols-2 gap-4 md:p-6">
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

          <div className="grid md:grid-cols-3 gap-4 md:p-6">
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
