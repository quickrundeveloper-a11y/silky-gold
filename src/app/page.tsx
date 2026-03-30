"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";

const HERO_BACKGROUND_IMAGE_URL =
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=2400&q=80";

const BOTTLE_BACKGROUND_IMAGES = [
  "https://images.unsplash.com/photo-1514361892635-eae32c0b3b2f?auto=format&fit=crop&w=2400&q=80",
  "https://images.unsplash.com/photo-1510626176961-4b37d0c92e8b?auto=format&fit=crop&w=2400&q=80",
  "https://images.unsplash.com/photo-1541976076758-347942db1970?auto=format&fit=crop&w=2400&q=80",
  "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=2400&q=80",
];

export default function HomePage() {
  const afterHeroSentinelRef = useRef<HTMLDivElement | null>(null);
  const bottleSectionRef = useRef<HTMLElement | null>(null);
  const [showFixedNav, setShowFixedNav] = useState(false);
  const [isBottleActive, setIsBottleActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [bottleBgUrl, setBottleBgUrl] = useState(
    () => BOTTLE_BACKGROUND_IMAGES[0],
  );

  useEffect(() => {
    const index = Math.floor(Math.random() * BOTTLE_BACKGROUND_IMAGES.length);
    const nextUrl = BOTTLE_BACKGROUND_IMAGES[index] ?? BOTTLE_BACKGROUND_IMAGES[0];
    const frame = window.requestAnimationFrame(() => {
      setBottleBgUrl(nextUrl);
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const sentinel = afterHeroSentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowFixedNav(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
        rootMargin: "-10px 0px 0px 0px",
      },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const bottleSection = bottleSectionRef.current;
    if (!bottleSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsBottleActive(entry.isIntersecting);
      },
      { threshold: 0 },
    );

    observer.observe(bottleSection);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add(styles.revealVisible);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    for (const el of elements) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const heroStyle = {
    ["--hero-bg-url" as never]: `url("${HERO_BACKGROUND_IMAGE_URL}")`,
  } as React.CSSProperties;

  const bottleStyle = {
    ["--bottle-bg-url" as never]: `url("${bottleBgUrl}")`,
  } as React.CSSProperties;

  return (
    <div className={styles.page}>
      <div
        className={`${styles.fixedNav} ${showFixedNav ? styles.fixedNavVisible : styles.fixedNavHidden}`}
        role="navigation"
        aria-label="Where to buy navigation"
      >
        <div className={styles.basicsPill}>
          <Link className={styles.pillLink} href="/#where-to-buy">
            WHERE TO BUY?
          </Link>
          <div className={styles.pillMark} aria-hidden />
          <button
            className={styles.pillMenu}
            type="button"
            onClick={() => setIsMenuOpen(true)}
          >
            <span>MENU</span>
            <span className={styles.hamburger} aria-hidden />
          </button>
        </div>
      </div>

      <section className={styles.heroSection} style={heroStyle}>
        <div className={styles.bg} aria-hidden />
        <div className={styles.bgOverlay} aria-hidden />

        <header className={styles.header}>
          <nav className={styles.navLeft} aria-label="Primary">
            <Link href="/#philosophy">PHILOSOPHY</Link>
            <Link href="/#bottle">THE BOTTLE</Link>
            <Link href="/#vodka">VODKA</Link>
            <Link href="/#seltzers">SELTZERS</Link>
          </nav>

          <div className={styles.brand} aria-label="Brand">
            <div className={styles.brandText}>
              SILKY
              <br />
              GOLD
            </div>
            <div className={styles.brandMark} aria-hidden />
          </div>

          <nav className={styles.navRight} aria-label="Secondary">
            <Link href="/#mocktails">MOCKTAILS</Link>
            <Link href="/#creators">CREATORS</Link>
            <Link href="/#where-to-buy">WHERE TO BUY?</Link>
            <span className={styles.language}>ENGLISH</span>
          </nav>
        </header>

        <main className={styles.main}>
          <h1 className={styles.heroTitle}>
            <span className={styles.heroBorn}>Born From</span>
            <span className={styles.heroThe}>The</span>
            <span className={styles.heroUntouched}>Untouched</span>
            <span className={styles.heroWilderness}>Wilderness.</span>
          </h1>

          <div className={styles.bottomLeft}>
            <div className={styles.filmCard}>
              <div className={styles.filmPreview} aria-hidden />
              <div className={styles.filmMeta}>
                <div className={styles.filmTitle}>WATCH THE FILM</div>
                <div className={styles.filmFooter}>
                  <span className={styles.play}>(PLAY)</span>
                  <span className={styles.duration}>2MIN 26S</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.bottomRight}>
            <p className={styles.storyText}>
              FROM THE SILENCE OF CANADA&apos;S NORTHERN VALLEYS, A CLARITY
              EMERGES. SILKY GOLD IS BORN FROM PLACES WHERE NATURE STILL DECIDES
              THE RULES.
            </p>
            <Link className={styles.storyLink} href="/#story">
              DISCOVER OUR STORY
            </Link>
          </div>
        </main>
      </section>

      <div className={styles.afterHero}>
        <div ref={afterHeroSentinelRef} className={styles.fixedNavSentinel} />

        <section className={styles.basicsSection} id="philosophy">
          <div className={`${styles.basicsContent} ${styles.reveal}`} data-reveal>
            <div className={styles.basicsImageLeft} aria-hidden />

            <div className={styles.basicsCenter}>
              <h2 className={styles.basicsTitle}>
                We go back to <em>basics</em>, only real ingredients.
              </h2>
            </div>

            <div className={styles.basicsImageRight} aria-hidden />
          </div>

          <div className={`${styles.basicsFooter} ${styles.reveal}`} data-reveal>
            <div className={styles.basicsKicker}>NO ADDITIVE. NO ARTIFICE.</div>
            <p className={styles.basicsBody}>
              IN A WORLD OF SHORTCUTS, WE CHOOSE RESTRAINT. NO ADDITIVES. NO
              ARTIFICE. FEWER, BETTER ELEMENTS HANDLED WITH CARE. IT&apos;S NOT
              ABOUT ADDING MORE. IT&apos;S ABOUT LEAVING ASIDE REMOVING WHAT
              ISN&apos;T NECESSARY AND LETTING NATURE DO WHAT IT ALREADY DOES BEST.
            </p>
          </div>
        </section>

        <section className={styles.natureSection} id="where-to-buy">
          <div className={styles.natureBg} aria-hidden />

          <div className={`${styles.natureContent} ${styles.reveal}`} data-reveal>
            <div className={styles.natureCardLeft}>
              <div className={styles.natureMediaLeft} aria-hidden />
              <div className={styles.natureCaption}>
                SILKY GOLD EXISTS NOT TO REINVENT,
                <br />
                BUT TO RESPECT.
              </div>
            </div>

            <div className={styles.natureCenter}>
              <div className={styles.natureOval} aria-hidden />
              <h2 className={styles.natureTitle}>
                When nature
                <br />
                perfects
                <br />
                something,
                <br />
                we don&apos;t alter
                <br />
                it, we reveal it.
              </h2>
            </div>

            <div className={styles.natureCardRight}>
              <div className={styles.natureMediaRight} aria-hidden />
              <div className={styles.natureCaptionSmall}>
                PURITY IS NOT CREATED. IT&apos;S PRESERVED.
              </div>
            </div>
          </div>

          <div className={styles.natureBottomTile} aria-hidden />
        </section>

        <section
          className={styles.bottleScrollSection}
          id="bottle"
          style={bottleStyle}
          ref={bottleSectionRef}
        >
          <div className={styles.bottleBgSpacer} aria-hidden />
          <div
            className={`${styles.bottleStickyBg} ${isBottleActive ? styles.bottleStickyBgActive : styles.bottleStickyBgHidden}`}
            aria-hidden
          />

          <div className={styles.bottlePanels}>
            <div className={styles.bottlePanel}>
              <h2 className={`${styles.bottleHeroHeadline} ${styles.reveal}`} data-reveal>
                The bottle is our <em>tribute</em> to the source.
              </h2>
            </div>

            <div className={styles.bottlePanel}>
              <div className={`${styles.bottlePanelSplit} ${styles.reveal}`} data-reveal>
                <div className={styles.bottleLeft}>
                  <div className={styles.bottleLabel}>THE NAME</div>
                  <div className={styles.bottleName}>Silky Gold</div>
                  <p className={styles.bottleBody}>
                    AURORA MEETS OPAL, OCTOBER&apos;S BIRTHSTONE AND THE MONTH
                    SILKY GOLD WAS BORN. BOTH SHARE THE SAME GREEN IRIDESCENCE
                    THAT ANCHORS OUR IDENTITY.
                  </p>
                </div>

                <div className={styles.bottleRight}>
                  <div className={styles.bottleLabel}>THE CLOSURE</div>
                  <div className={styles.bottleStackTitle}>
                    Nature&apos;s
                    <br />
                    Dancing
                    <br />
                    Lights
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.bottlePanel}>
              <div className={`${styles.bottlePanelSplit} ${styles.reveal}`} data-reveal>
                <div className={styles.bottleCenterTop}>
                  <div className={styles.bottleLabel}>THE BOTTLE</div>
                  <div className={styles.bottleStackTitle}>
                    Modern
                    <br />
                    Classic
                  </div>
                  <p className={styles.bottleBodySmall}>
                    INSPIRED BY EARLY VODKA CRAFT AND ITS FIRST BOTTLE
                    SILHOUETTES, WE KEPT THE ESSENCE BUT GAVE A MODERN TWIST TO
                    THE RECIPE AND THE DESIGN.
                  </p>
                </div>

                <div className={styles.bottleRightBottom}>
                  <div className={styles.bottleLabel}>THE BASE</div>
                  <div className={styles.bottleStackTitle}>
                    The Flow of
                    <br />
                    Water
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.companySection} id="good-company">
          <div className={styles.companyBg} aria-hidden />
          <div className={styles.companyTopo} aria-hidden />

          <div className={styles.companyImages} aria-hidden>
            <div className={styles.companyImgLeft} />
            <div className={styles.companyImgBottomLeft} />
            <div className={styles.companyImgTopRight} />
            <div className={styles.companyImgRight} />
          </div>

          <h2 className={`${styles.companyTitle} ${styles.reveal}`} data-reveal>
            In
            <br />
            Good
            <br />
            Company
          </h2>
        </section>

        <section className={styles.leaveSection} id="leave-no-trace">
          <div className={styles.leaveBg} aria-hidden />
          <div className={styles.leaveTopo} aria-hidden />

          <div className={`${styles.leaveInner} ${styles.reveal}`} data-reveal>
            <h2 className={styles.leaveTitle}>
              <span className={styles.leaveLeave}>Leave</span>
              <span className={styles.leaveNo}>No</span>
              <span className={styles.leaveTrace}>Trace</span>
            </h2>

            <div className={styles.leaveMedia} aria-hidden />

            <p className={styles.leaveBody}>
              OUR COMMITMENT EXTENDS BEYOND PURITY. IT&apos;S A MATTER OF
              RESPONSIBILITY. WE USE RECYCLED MATERIALS, UPCYCLED FRUITS, AND
              DESIGN PROCESSES THAT RESPECT THE LAND THAT INSPIRES US.
            </p>
          </div>
        </section>

        <section className={styles.brandSection} id="vodka">
          <div className={styles.brandBg} aria-hidden />
          <div className={styles.brandTopo} aria-hidden />

          <div className={`${styles.brandInner} ${styles.reveal}`} data-reveal>
            <h2 className={styles.brandTitle}>
              SILKY
              <br />
              GOLD
            </h2>
            <div className={styles.brandSeal} aria-hidden />
          </div>
        </section>

        <footer className={styles.footerSection}>
          <div className={styles.footerBg} aria-hidden />
          <div className={styles.footerTopo} aria-hidden />

          <div className={styles.footerWatermark} aria-hidden>
            <div className={styles.footerWatermarkTrack}>
              <span className={styles.footerWatermarkText}>Purity Taste</span>
              <span className={styles.footerWatermarkText} aria-hidden>
                Purity Taste
              </span>
              <span className={styles.footerWatermarkText} aria-hidden>
                Purity Taste
              </span>
            </div>
          </div>

          <a className={`${styles.footerCta} ${styles.reveal}`} data-reveal href="#where-to-buy">
            <span>WHERE TO BUY?</span>
            <span className={styles.footerCtaArrow} aria-hidden>
              ↗
            </span>
          </a>

          <div className={styles.footerBar}>
            <div className={styles.footerLinks}>
              <span className={styles.footerLinkLeft}>
                © COPYRIGHT SILKY GOLD 2026 ALL RIGHTS RESERVED.
              </span>
              <Link className={styles.footerLink} href="/#terms">
                TERMS AND CONDITIONS
              </Link>
              <button className={styles.footerLang} type="button">
                <span>ENGLISH</span>
                <span className={styles.footerLangCaret} aria-hidden>
                  ˅
                </span>
              </button>
              <span className={styles.footerLinkRight}>
                WEBSITE BY LOCOMOTIVE
              </span>
            </div>
          </div>
        </footer>
      </div>

      <div
        className={`${styles.menuOverlay} ${isMenuOpen ? styles.menuOverlayVisible : styles.menuOverlayHidden}`}
        aria-hidden={!isMenuOpen}
        aria-modal="true"
        role="dialog"
      >
        <button
          className={`${styles.menuBackdrop} ${isMenuOpen ? styles.menuBackdropVisible : styles.menuBackdropHidden}`}
          type="button"
          aria-label="Close menu"
          onClick={() => setIsMenuOpen(false)}
        ></button>

        <div
          className={`${styles.menuTopRow} ${isMenuOpen ? styles.menuTopRowVisible : styles.menuTopRowHidden}`}
          aria-hidden
        >
          <div className={styles.menuTopLeft}>
            <div className={styles.menuTopLabel}>
              SIGN UP FOR NEW RELEASES, COLLABORATIONS AND EVENTS.
            </div>
            <form
              className={styles.menuSubscribe}
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                className={styles.menuInput}
                placeholder="YOUR EMAIL"
                aria-label="Your email"
              />
              <button className={styles.menuSubscribeBtn} type="submit">
                SUBSCRIBE
              </button>
            </form>
          </div>

          <div className={styles.menuTopRight}>
            <Link href="/#facebook">FACEBOOK</Link>
            <Link href="/#instagram">INSTAGRAM</Link>
          </div>
        </div>

        <div
          className={`${styles.menuPanel} ${isMenuOpen ? styles.menuPanelVisible : styles.menuPanelHidden}`}
          role="document"
        >
          <div className={styles.menuPanelHeader}>
            <Link className={styles.menuWhere} href="/#where-to-buy">
              WHERE TO BUY?
            </Link>

            <div className={styles.menuBrand} aria-label="Brand">
              <div className={styles.menuBrandText}>
                SILKY
                <br />
                GOLD
              </div>
              <div className={styles.menuBrandMark} aria-hidden />
            </div>

            <button
              className={styles.menuClose}
              type="button"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>MENU</span>
              <span aria-hidden>×</span>
            </button>
          </div>

          <nav className={styles.menuLinks} aria-label="Menu">
            <Link href="/#philosophy" onClick={() => setIsMenuOpen(false)}>
              Philosophy
            </Link>
            <Link href="/#bottle" onClick={() => setIsMenuOpen(false)}>
              The bottle
            </Link>
            <Link href="/#vodka" onClick={() => setIsMenuOpen(false)}>
              Vodka
            </Link>
            <Link href="/#seltzers" onClick={() => setIsMenuOpen(false)}>
              Seltzers
            </Link>
            <Link href="/#mocktails" onClick={() => setIsMenuOpen(false)}>
              Mocktails
            </Link>
            <Link href="/#creators" onClick={() => setIsMenuOpen(false)}>
              Creators
            </Link>
          </nav>

          <div className={styles.menuPanelFooter}>
            <select className={styles.menuSelect} aria-label="Language">
              <option>ENGLISH</option>
              <option>FRENCH</option>
            </select>

            <Link
              className={styles.menuPanelCta}
              href="/#where-to-buy"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>WHERE TO BUY?</span>
              <span className={styles.menuPanelCtaArrow} aria-hidden>
                ↗
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
