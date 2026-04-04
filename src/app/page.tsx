"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";

const HERO_BACKGROUND_IMAGE_URL = "/2.png";
const BOTTLE_BACKGROUND_IMAGE_URL = "/2.png";
const WHERE_TO_BUY_URL =
  "https://www.quickrunfast.com/category/silky-gold-products";

export default function HomePage() {
  const afterHeroSentinelRef = useRef<HTMLDivElement | null>(null);
  const bottleSectionRef = useRef<HTMLElement | null>(null);
  const [showFixedNav, setShowFixedNav] = useState(false);
  const [isBottleActive, setIsBottleActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen && !isVideoOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        setIsVideoOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen, isVideoOpen]);

  useEffect(() => {
    const sentinel = afterHeroSentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show only when we have scrolled past the hero section
        setShowFixedNav(entry.boundingClientRect.top <= 0);
      },
      {
        root: null,
        threshold: 0,
        rootMargin: "0px",
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
    ["--bottle-bg-url" as never]: `url("${BOTTLE_BACKGROUND_IMAGE_URL}")`,
  } as React.CSSProperties;

  return (
    <div className={styles.page}>
      <div
        className={`${styles.fixedNav} ${showFixedNav ? styles.fixedNavVisible : styles.fixedNavHidden}`}
        role="navigation"
        aria-label="Where to buy navigation"
      >
        <div className={styles.basicsPill}>
          <a
            className={styles.pillLink}
            href={WHERE_TO_BUY_URL}
            target="_blank"
            rel="noreferrer"
          >
            WHERE TO BUY?
          </a>
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
            <Link href="/#serum">THE SERUM</Link>
            <Link href="/#products">PRODUCTS</Link>
            <Link href="/#ingredients">INGREDIENTS</Link>
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
            <Link href="/#philosophy">SKINCARE</Link>
            <a href={WHERE_TO_BUY_URL} target="_blank" rel="noreferrer">
              WHERE TO BUY?
            </a>
            <span className={styles.language}>ENGLISH</span>
          </nav>
        </header>

        <main className={styles.main}>
          <h1 className={styles.heroTitle}>
            <span className={styles.heroBorn}>Rice Face</span>
            <span className={styles.heroThe}>Serum</span>
            <span className={styles.heroUntouched}>Purely</span>
            <span className={styles.heroWilderness}>Natural.</span>
          </h1>

          <div className={styles.bottomLeft}>
            <div className={styles.filmCard} onClick={() => setIsVideoOpen(true)} role="button" tabIndex={0}>
              <div className={styles.filmPreview} aria-hidden />
              <div className={styles.filmMeta}>
                <div className={styles.filmTitle}>WATCH THE PROCESS</div>
                <div className={styles.filmFooter}>
                  <span className={styles.play}>(PLAY)</span>
                  <span className={styles.duration}>2MIN 26S</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.bottomRight}>
            <p className={styles.storyText}>
              FROM THE PURITY OF WHITE RICE AND NATURE&apos;S FINEST EXTRACTS, A
              GLOW EMERGES. SILKY GOLD SERUMS ARE BORN FROM PLACES WHERE NATURE
              DECIDES THE RULES.
            </p>
            <Link className={styles.storyLink} href="/#philosophy">
              DISCOVER OUR SCIENCE
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
                We go back to <em>basics</em>, with white rice extracts.
              </h2>
            </div>

            <div className={styles.basicsImageRight} aria-hidden />
          </div>

          <div className={`${styles.basicsFooter} ${styles.reveal}`} data-reveal>
            <div className={styles.basicsKicker}>NO HARSH CHEMICALS. NO ARTIFICE.</div>
            <p className={styles.basicsBody}>
              IN A WORLD OF COMPLEX SKINCARE, WE CHOOSE SIMPLICITY. OUR SERUMS
              USE WHITE RICE, NIACINAMIDE, AND VITAMIN B5. FEWER, BETTER
              INGREDIENTS HANDLED WITH CARE. IT&apos;S NOT ABOUT ADDING MORE.
              IT&apos;S ABOUT REVEALING YOUR NATURAL GLOW.
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
          id="serum"
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
                The serum is our <em>tribute</em> to your skin.
              </h2>
            </div>

            <div className={styles.bottlePanel} id="products">
              <div className={`${styles.bottlePanelSplit} ${styles.reveal}`} data-reveal>
                <div className={styles.bottleLeft}>
                  <div
                    className={`${styles.productVisual} ${styles.productVisualRose}`}
                    aria-hidden
                  />
                  <div className={styles.bottleLabel}>ROSE SERUM</div>
                  <div className={styles.bottleName}>Rose White Rice</div>
                  <p className={styles.bottleBody}>
                    ENRICHED WITH ROSE EXTRACT, NIACINAMIDE, AND VITAMIN B5.
                    PERFECT FOR CALMING AND HYDRATING YOUR SKIN WHILE REVEALING
                    A NATURAL ROSY GLOW.
                  </p>
                </div>

                <div className={styles.bottleRight}>
                  <div
                    className={`${styles.productVisual} ${styles.productVisualAloe}`}
                    aria-hidden
                  />
                  <div className={styles.bottleLabel}>ALOEVERA SERUM</div>
                  <div className={styles.bottleName}>Aloevera White Rice</div>
                  <p className={styles.bottleBody}>
                    INFUSED WITH ALOEVERA EXTRACT AND XYLITOL. DESIGNED TO
                    SOOTHE IRRITATION AND PROVIDE INTENSE MOISTURE FOR A
                    REFRESHED FEEL.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.bottlePanel}>
              <div className={`${styles.bottlePanelSplit} ${styles.reveal}`} data-reveal>
                <div className={styles.bottleLeft}>
                  <div
                    className={`${styles.productVisual} ${styles.productVisualHoney}`}
                    aria-hidden
                  />
                  <div className={styles.bottleLabel}>HONEY SERUM</div>
                  <div className={styles.bottleName}>Honey White Rice</div>
                  <p className={styles.bottleBody}>
                    FEATURING HONEY EXTRACT FOR NOURISHMENT. RICH IN ANTIOXIDANTS
                    TO HELP PROTECT AND SOFTEN YOUR SKIN FOR A SUPPLE TEXTURE.
                  </p>
                </div>

                <div className={styles.bottleRight}>
                  <div
                    className={`${styles.productVisual} ${styles.productVisualBeetroot}`}
                    aria-hidden
                  />
                  <div className={styles.bottleLabel}>BEETROOT SERUM</div>
                  <div className={styles.bottleName}>Beetroot White Rice</div>
                  <p className={styles.bottleBody}>
                    POWERED BY BEETROOT EXTRACT. PACKED WITH VITAMINS TO
                    BRIGHTEN DULL SKIN AND PROVIDE A HEALTHY, RADIANT
                    COMPLEXION.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.bottlePanel} id="ingredients">
              <div className={`${styles.reveal}`} data-reveal>
                <div className={styles.bottleLabel}>CORE INGREDIENTS</div>
                <div className={styles.bottleName}>The Science</div>
                <p className={styles.bottleBody} style={{ maxWidth: '800px', margin: '0 auto' }}>
                  WATER, SODIUM GLUTANATE, GLYCERIN, VITAMIN B5, XANTHAN GUM,
                  NIACINAMIDE, PROPYLENE GLYCOL, PROPENEDIOL, SODIUM HYDROXIDE,
                  XYLITOL, FRAGRANCE, PHENOXY ETHANOL, ETHYL HEXYL GLYCERIN,
                  BUTYLENE GLYCOL.
                </p>
                <div className={styles.ingredientsGallery} aria-hidden>
                  <div
                    className={`${styles.ingredientsVisual} ${styles.ingredientsVisualFeature}`}
                  />
                  <div
                    className={`${styles.ingredientsVisual} ${styles.ingredientsVisualBlend}`}
                  />
                  <div
                    className={`${styles.ingredientsVisual} ${styles.ingredientsVisualRose}`}
                  />
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
              <span className={styles.leaveLeave}>Clean</span>
              <span className={styles.leaveNo}>Skin</span>
              <span className={styles.leaveTrace}>Care</span>
            </h2>

            <div className={styles.leaveMedia} aria-hidden />

            <p className={styles.leaveBody}>
              OUR COMMITMENT EXTENDS BEYOND BEAUTY. IT&apos;S A MATTER OF
              RESPONSIBILITY. WE USE RECYCLED MATERIALS, UP-CYCLED RICE HUSKS,
              AND DESIGN PROCESSES THAT RESPECT THE LAND THAT INSPIRES US.
            </p>
          </div>
        </section>

        <section className={styles.brandSection} id="products">
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
              <span className={styles.footerWatermarkText}>Radiance Glow</span>
              <span className={styles.footerWatermarkText} aria-hidden>
                Radiance Glow
              </span>
              <span className={styles.footerWatermarkText} aria-hidden>
                Radiance Glow
              </span>
            </div>
          </div>

          <a
            className={`${styles.footerCta} ${styles.reveal}`}
            data-reveal
            href={WHERE_TO_BUY_URL}
            target="_blank"
            rel="noreferrer"
          >
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
                WEBSITE BY Nexen Bloom
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
            <a
              className={styles.menuWhere}
              href={WHERE_TO_BUY_URL}
              target="_blank"
              rel="noreferrer"
            >
              WHERE TO BUY?
            </a>

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
            <Link href="/#serum" onClick={() => setIsMenuOpen(false)}>
              The serum
            </Link>
            <Link href="/#products" onClick={() => setIsMenuOpen(false)}>
              Products
            </Link>
            <Link href="/#ingredients" onClick={() => setIsMenuOpen(false)}>
              Ingredients
            </Link>
          </nav>

          <div className={styles.menuPanelFooter}>
            <select className={styles.menuSelect} aria-label="Language">
              <option>ENGLISH</option>
            </select>

            <Link
              className={styles.menuPanelCta}
              href={WHERE_TO_BUY_URL}
              target="_blank"
              rel="noreferrer"
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

      <div
        className={`${styles.videoOverlay} ${isVideoOpen ? styles.videoOverlayVisible : styles.videoOverlayHidden}`}
        aria-hidden={!isVideoOpen}
        aria-modal="true"
        role="dialog"
      >
        <button
          className={styles.videoClose}
          type="button"
          onClick={() => setIsVideoOpen(false)}
          aria-label="Close video"
        >
          <span>CLOSE</span>
          <span aria-hidden>×</span>
        </button>

        <div className={styles.videoContainer}>
          {isVideoOpen && (
            <video
              className={styles.videoPlayer}
              src="/rosevideo.mp4"
              controls
              autoPlay
              playsInline
            />
          )}
        </div>
      </div>
    </div>
  );
}
