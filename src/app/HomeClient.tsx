  "use client";

  import { useEffect, useState, useRef } from "react";
  import { motion, useScroll, useTransform } from "framer-motion";

  function SkincareSection() {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const skincareRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: skincareRef,
      offset: ["start end", "end start"]
    });


const imageY = useTransform(scrollYProgress, [0, 1], [150, -50]);
const innerImageY = useTransform(scrollYProgress, [0, 1], [120, -120]);

const cardY1 = useTransform(scrollYProgress, [0, 1], [150, -150]);
const cardY2 = useTransform(scrollYProgress, [0, 1], [180, -180]);
const cardY3 = useTransform(scrollYProgress, [0, 1], [200, -200]);
const cardY4 = useTransform(scrollYProgress, [0, 1], [220, -220]);

const containerY = useTransform(scrollYProgress, [0, 1], [100, -150]);

    return (
      <section className="skincare-section" ref={skincareRef} id="skincare">
        <div className="skincare-header">
          <div className="skincare-title-group">
            <h2 className="skincare-title">
              CLEAN, CONSCIOUS,
              <br />
              PERFORMANCE
            </h2>
            <div className="skincare-subtitle-italic">
              <span className="italic">skincare.</span>
              <div className="underline"></div>
            </div>
          </div>
          <p className="skincare-header-text">
            Unreservedly honest products that truly work, be
            <br />
            kind to skin and the planet – no exceptions!
          </p>
          
          <svg className="curved-line" width="300" height="300" viewBox="0 0 300 300" fill="none">
            <path d="M280 20 C 250 150, 100 250, 20 280" stroke="#1a1a1a" strokeWidth="0.5" strokeDasharray="2 2" />
            <path d="M20 280 L 25 270 M 20 280 L 32 278" stroke="#1a1a1a" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="features-container">
          <motion.div style={{ y: isMobile ? 0 : containerY }} className="parallax-bg-shape"></motion.div>
          <motion.div style={{ y: isMobile ? 0 : imageY }} className="central-image-wrapper">
            <div className="blob-shape reveal-mask">
              <div className="blob-inner">
                {isMobile ? (
                  <img
                    src="/skincare.jpeg"
                    alt="Featured Skincare"
                    className="woman-image"
                  />
                ) : (
                  <motion.img
                    style={{ y: innerImageY }}
                    src="/skincare.jpeg"
                    alt="Featured Skincare"
                    className="woman-image"
                  />
                )}
              </div>
            </div>
          </motion.div>

          <motion.div style={{ y: isMobile ? 0 : cardY1 }} className="feature-card transparency">
            <div className="icon-circle">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </div>
            <h3>Radical Transparency</h3>
            <p>No black boxes, nothing to hide, we disclose our full formulas, so you will never have to guess what&apos;s in it and how much.</p>
          </motion.div>

          <motion.div style={{ y: isMobile ? 0 : cardY2 }} className="feature-card approach">
            <div className="icon-circle">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8a8 8 0 0 1-8 8Z"/><path d="M13 18c.67 0 1.33 0 2-1"/></svg>
            </div>
            <h3>Clean, Beyond Reproach</h3>
            <p>Truly clean with only verified ingredients; and free from over 1800 questionable ingredients. Because what you put on your skin matters.</p>
          </motion.div>

          <motion.div style={{ y: isMobile ? 0 : cardY3 }} className="feature-card conscious">
            <div className="icon-circle">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.82 2.96 0"/><path d="m12 5 2.96 2.96c.82.82.82 2.14 0 2.96a2.17 2.17 0 0 1-3.08 0L12 5Z"/></svg>
            </div>
            <h3>Conscious & Responsible</h3>
            <p>Peta Certified Vegan and Cruelty Free. Our products are always housed in responsible packaging and made sustainably.</p>
          </motion.div>

          <motion.div style={{ y: isMobile ? 0 : cardY4 }} className="feature-card potent">
            <div className="icon-circle">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 3h15"/><path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3"/><path d="M6 14h12"/></svg>
            </div>
            <h3>Potent & Multi Tasking</h3>
            <p>Our formulas are chock-a-block with actives, anti-oxidants, skin restoring agents backed by dermal science that aim to deliver real results.</p>
          </motion.div>

        
        </div>
      </section>
    );
  }

  function ExplorePotencySection() {
    return (
      <section className="explore-potency-section">
        <div className="horizontal-line"></div>
        <div className="explore-content">
          <h2 className="explore-text">
            <span className="bold">EXPLORE</span>
            <br />
            <span className="italic">pure active blend</span>
          </h2>
          <div className="side-arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 7h12v11" />
              <path d="m14 14 4 4 4-4" />
            </svg>
          </div>
        </div>
      </section>
    );
  }

 

  function PureBrillianceSection() {
    const sliderRef = useRef<HTMLDivElement>(null);

    const scrollNext = () => {
      if (sliderRef.current) {
        const container = sliderRef.current;
        const scrollAmount = 340; // Card width (310) + gap (1.5rem ≈ 24px) + some buffer
        const maxScroll = container.scrollWidth - container.clientWidth;
        
        if (container.scrollLeft >= maxScroll - 10) {
          // If at the end, scroll back to beginning
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      }
    };

    const products = [
      {
        id: 1,
        name: "ALOEVERA WHITE RICE FACE SERUM",
        price: "₹498",
        image: "/aloeverawr.png",
        tag: "WHITE RICE",
        link: "https://www.meesho.com/s/p/fqe6zs?utm_source=s_wb",
        clickable: true
      },
      {
        id: 2,
        name: "ROSE WHITE RICE FACE SERUM",
        price: "coming soon",
        image: "/rosewr.png",
        tag: "WHITE RICE",
        clickable: false
      },
      {
        id: 3,
        name: "HONEY WHITE RICE FACE SERUM",
        price: "coming soon",
        image: "/honeywr.png",
        tag: "WHITE RICE",
        clickable: false
      },
      {
        id: 4,
        name: "BETROOT WHITE RICE FACE SERUM",
        price: "coming soon",
        image: "/beetrootwr.png",
        tag: "WHITE RICE",
        clickable: false
      }
    ];

    return (
      <section className="pure-brilliance-section" id="shop">
        <div className="brilliance-left">
          <img src="/luminosity2.jpeg" alt="Pure Brilliance Hero" className="brilliance-hero-img" />
        </div>
        <div className="brilliance-right">
          <div className="brilliance-header">
            <h2 className="brilliance-title">
              Skin
              <br />
              <span className="italic">Luminosity</span>
            </h2>
            <button className="round-arrow-btn" onClick={scrollNext}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className="product-slider" ref={sliderRef}>
            {products.map((product) => {
              const CardWrapper = product.clickable ? 'a' : 'div';
              const wrapperProps = product.clickable 
                ? { href: product.link, target: "_blank", rel: "noopener noreferrer" } 
                : { style: { cursor: 'default' } };
                
              return (
                <CardWrapper 
                  key={product.id} 
                  {...wrapperProps}
                  className="product-card-brilliance"
                >
                  <div className="card-top">
                    <span className="product-tag-white">{product.tag}</span>
                    <div className="bag-icon-circle">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" />
                      </svg>
                    </div>
                  </div>
                  <div className="product-img-wrapper">
                    <img src={product.image} alt={product.name} className="product-img" />
                    <div className="product-shadow"></div>
                  </div>
                  <div className="card-footer-brilliance">
                    <p className="product-name-brilliance">{product.name}</p>
                    <span className="product-price-brilliance">{product.price}</span>
                  </div>
                </CardWrapper>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  function VarnayaBlendsSection() {
    const sliderRef = useRef<HTMLDivElement>(null);

    const scrollNext = () => {
      if (sliderRef.current) {
        const container = sliderRef.current;
        const scrollAmount = 340; 
        const maxScroll = container.scrollWidth - container.clientWidth;
        
        if (container.scrollLeft >= maxScroll - 10) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      }
    };

const products = [
      {
        id: 1,
        name: "ALOEVERA WHITE RICE FACE SERUM",
        price: "₹498",
        image: "/aloeverawr.png",
        tag: "WHITE RICE",
        link: "https://www.meesho.com/s/p/fqe6zs?utm_source=s_wb",
        clickable: true
      },
      {
        id: 2,
        name: "ROSE WHITE RICE FACE SERUM",
        price: "coming soon",
        image: "/rosewr.png",
        tag: "WHITE RICE",
        clickable: false
      },
      {
        id: 3,
        name: "HONEY WHITE RICE FACE SERUM",
        price: "coming soon",
        image: "/honeywr.png",
        tag: "WHITE RICE",
        clickable: false
      },
      {
        id: 4,
        name: "BETROOT WHITE RICE FACE SERUM",
        price: "coming soon",
        image: "/beetrootwr.png",
        tag: "WHITE RICE",
        clickable: false
      }
    ];

    return (
      <section className="varnaya-blends-section">
        <div className="varnaya-left">
          <div className="varnaya-header">
            <h2 className="varnaya-title">
              Natural
              <br />
              <span className="italic">Radiance</span>
            </h2>
            <button className="round-arrow-btn" onClick={scrollNext}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className="product-slider-varnaya" ref={sliderRef}>
            {products.map((product) => {
              const CardWrapper = product.clickable ? 'a' : 'div';
              const wrapperProps = product.clickable 
                ? { href: product.link, target: "_blank", rel: "noopener noreferrer" } 
                : { style: { cursor: 'default' } };
                
              return (
                <CardWrapper 
                  key={product.id} 
                  {...wrapperProps}
                  className="product-card-varnaya"
                >
                  <div className="card-top">
                    <span className="product-tag-white">{product.tag}</span>
                    <div className="bag-icon-circle">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" />
                      </svg>
                    </div>
                  </div>
                  <div className="product-img-wrapper">
                    <img src={product.image} alt={product.name} className="product-img" />
                    <div className="product-shadow-varnaya"></div>
                  </div>
                  <div className="card-footer-brilliance">
                    <p className="product-name-brilliance">{product.name}</p>
                    <span className="product-price-brilliance">{product.price}</span>
                  </div>
                </CardWrapper>
              );
            })}
          </div>
        </div>
        <div className="varnaya-right">
         
          <img src="/radiance2.jpeg" alt="Varnaya Blends Hero" className="varnaya-hero-img" />
        </div>
         {/* <div className="varnaya-info-text">
            STAY GLOWING AND HEALTHY WITHOUT
            <br />
            HAVING TO THINK ABOUT IT.
          </div> */}
      </section>
    );
  }

  function TransparencySection() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: sectionRef,
      offset: ["start end", "center start"]
    });

    const textureY = useTransform(scrollYProgress, [0, 1], [400, -400]);

    return (
      <section className="transparency-section" ref={sectionRef} id="philosophy">
        <div className="transparency-container">
          {/* Ethos Tag */}
          <div className="ethos-wrapper">
            <span className="ethos-pill">ETHOS</span>
          </div>

          {/* Text Rows */}
          <div className="transparency-text-content">
            <h2 className="row-radical">RADICAL</h2>
            <h2 className="row-transparency">TRANSPARENCY.</h2>
            
            <div className="row-hide-wrapper">
              <div className="philosophy-cta">
                <div className="round-arrow-btn small">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M17 17V7H7" />
                  </svg>
                </div>
                <div className="philosophy-label">
                  OUR<br/><span className="underline">PHILOSOPHY</span>
                </div>
              </div>
              <h2 className="row-hide">HIDE</h2>
            </div>

            <h2 className="row-nothing">NOTHING.</h2>
          </div>

          {/* Texture Overlay */}
          <motion.div style={{ y: textureY }} className="texture-parallax-wrapper">
            <img src="/texture.png" alt="Lipstick Texture" className="texture-img" />
          </motion.div>

          {/* Features Bottom Right */}
          <div className="transparency-features-box">
            <div className="feature-item-mini">
              <div className="feature-header-mini">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                <span>100% Transparent<br/>Formulas</span>
              </div>
              <div className="feature-body-mini">
                <strong>Highest Standards.</strong>
                <p>We formulate to the highest standards of efficacy and safety – using only proven, verified ingredients in bio-compatible bases; and free from over 1800 questionable ingredients.</p>
              </div>
            </div>

            <div className="feature-item-mini">
              <div className="feature-header-mini">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                <span>Only Verified<br/>Ingredients</span>
              </div>
              <div className="feature-body-mini">
                <strong>Real Results.</strong>
                <p>Skin care packed with anti oxidants, skin replenishing and skin restoring agents instable pH levels that don&apos;t promise miracles, but deliver real results.</p>
              </div>
            </div>
          </div>

          <div className="philosophy-cta-mobile">
            <div className="round-arrow-btn small">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M17 17V7H7" />
              </svg>
            </div>
            <div className="philosophy-label">
              OUR<br/><span className="underline">PHILOSOPHY</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  function OffersQualitySection() {
    return (
      <section className="offers-quality-section">
        {/* Left 50% - Quality */}
        <div className="quality-left">
          <div className="quality-content-wrapper">
            <div className="dropper-image-container">
              <img src="/offerleft2.jpeg" alt="Quality Ingredients" className="dropper-img" />
              <svg className="curved-arrow-quality" width="300" height="150" viewBox="0 0 300 150" fill="none">
                <path d="M10 80 Q 150 150, 290 20" stroke="#333" strokeWidth="1" fill="none" strokeDasharray="4 2" />
                <path d="M290 20 L 280 25 M 290 20 L 285 32" stroke="#333" strokeWidth="1" />
              </svg>
            </div>
            <div className="quality-text-box">
              <span className="quality-pill">QUALITY</span>
              <h2 className="quality-heading">
                Only proven Ingredients,
                <br />
                quality over quantity
                <br />
                always!
              </h2>
            </div>
          </div>
        </div>

        {/* Right 50% - Offers */}
        <div className="offers-right">
          <div className="offers-background-shapes">
            <div className="purple-curve"></div>
          </div>
          <div className="offers-content-wrapper">
            <div className="offers-header">
              <h2 className="offers-title">
                EXCITING
                <br />
                OFFERS <span className="italic">awaits</span>
              </h2>
              <div className="shop-now-group">
                <button className="round-arrow-btn black">
                  <a href="https://www.meesho.com/s/p/fqe6zs?utm_source=s_wb" target="_blank">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M17 17V7H7" />
                  </svg></a>
                </button>
                <span className="shop-now-text">SHOP NOW</span>
              </div>
            </div>
            <p className="offers-desc">
              Shop now to get a chance to win 2 extra products.
              <br />
              Grab the offer before it ends.
            </p>
            <div className="product-display-box">
              <img src="/serumdrop.webp" alt="Product Offer" className="offer-product-img" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  function ConnectInstagramSection() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: sectionRef,
      offset: ["start end", "end start"]
    });

    const bottomImageY = useTransform(scrollYProgress, [0, 1], [150, -150]);

    return (
      <section className="connect-instagram-section" ref={sectionRef} id="gallery">
        <div className="connect-container">
          {/* Top Header */}
          <div className="connect-top-header">
            <h2 className="connect-title">CONNECT WITH US</h2>
          </div>

          {/* Main Content Area */}
          <div className="connect-content-grid">
            {/* Top Left Fix Image */}
            <div className="fix-img-left">
              <img src="/left.jpeg" alt="Connect Left" />
            </div>

            {/* Center Main Fix Image */}
            <div className="main-center-img">
              <img src="/middle.jpeg" alt="Connect Center" />
            </div>

            {/* Bottom Left Info Text */}
            <div className="connect-info-text">
              Get the latest news about skincare<br/>tips and new products.
            </div>

            {/* Center Bottom Instagram Heading */}
            <div className="instagram-heading-wrapper">
              <h2 className="insta-on">on</h2>
              <h2 className="insta-name">instagram</h2>
            </div>

            {/* Bottom Right Parallax Image */}
            <motion.div style={{ y: bottomImageY }} className="parallax-img-right">
              <img src="/right.jpeg" alt="Connect Right" />
            </motion.div>

            {/* Instagram Button Bottom Center */}
            <div className="insta-btn-container">
              <a href="https://www.instagram.com/silky_gold_?utm_source=qr&igsh=MThrcDVlc3pienQ4OQ==" aria-label="Instagram" className="mobile-social-btn" target="_blank" rel="noopener noreferrer">
              <button className="insta-follow-btn">
                <span className="insta-label">INSTAGRAM</span>
                <div className="insta-icon-circle">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </div>
              </button></a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  function NewsletterSection() {
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);
    const [error, setError] = useState("");

    const handleSubscribe = (e: React.MouseEvent | React.FormEvent) => {
      e.preventDefault();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(email)) {
        setSubscribed(true);
        setError("");
      } else {
        setError("PLEASE ENTER A VALID EMAIL");
      }
    };

    return (
      <section className="newsletter-section">
        <div className="newsletter-bg">
          <img src="/hearfromus.jpg" alt="Newsletter Background" className="newsletter-bg-img" />
        </div>
        
        <div className="newsletter-overlay-container">
          <div className="newsletter-dark-box">
            {subscribed ? (
              <div className="newsletter-success-content" style={{ textAlign: 'center', padding: '2rem 0' }}>
                <h2 className="newsletter-title">THANK YOU!</h2>
                <p className="newsletter-subtitle" style={{ marginTop: '1rem' }}>WE WILL NOTIFY YOU.</p>
                <div className="newsletter-line" style={{ margin: '2rem auto', width: '40px' }}></div>
                <p className="newsletter-disclaimer">You have successfully joined our community.</p>
              </div>
            ) : (
              <>
                <h2 className="newsletter-title">HEAR MORE FROM US</h2>
                <p className="newsletter-subtitle">Get the latest news about skincare tips and new products.</p>
                
                <form onSubmit={handleSubscribe} className="newsletter-input-group">
                  <input 
                    type="email" 
                    placeholder="ENTER YOUR EMAIL" 
                    className="newsletter-input" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </form>
                {error && <p style={{ color: '#ff4d4d', fontSize: '0.6rem', marginTop: '0.5rem', fontWeight: '700', letterSpacing: '0.1em' }}>{error}</p>}
                
                <div className="newsletter-action-group" onClick={handleSubscribe} style={{ cursor: 'pointer' }}>
                  <div className="subscribe-circle">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7M17 7H17V17M17 7H7" />
                    </svg>
                  </div>
                  <button onClick={handleSubscribe} className="subscribe-link" style={{ background: 'none', border: 'none', padding: 0, font: 'inherit', color: 'inherit', cursor: 'pointer' }}>SUBSCRIBE</button>
                </div>
                
                <div className="newsletter-footer-mini">
                  <div className="newsletter-line"></div>
                  <p className="newsletter-disclaimer">
                    No Spam, only quality articles to help you be<br/>more radiant. You can opt out anytime.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    );
  }

  function Footer() {
    return (
      <footer className="site-footer">
        <div className="footer-links-container">
          <div className="footer-column">
            <h3>EXPLORE</h3>
            <ul>
              <li><a href="#shop">Shop</a></li>
              <li><a href="#philosophy">Philosophy</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#skincare">Skincare</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>FOLLOW US</h3>
            <ul>
              <li><a target="_blank" href="https://www.instagram.com/silky_gold_?utm_source=qr&igsh=MThrcDVlc3pienQ4OQ==">Instagram</a></li>
              <li><a target="_blank" href="https://www.facebook.com/arun.jha.94009/">Facebook</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>CONTACT US</h3>
            <ul>
              <li><a href="mailto:support@silkygolds.com">support@silkygolds.com</a></li>
              <li><a href="tel:9319851474">+91-93198-51474</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-branding-bar">
          <div className="branding-left">
            <div className="footer-logo">Silky Gold</div>
            <p className="footer-tagline">
              Pure. Thoughtful. Clinical Skincare
<br/>
              Formulated with honesty. Proven to work.
            </p>
            <p className="footer-copyright">© 2026 Silky Gold, All Rights Reserved</p>
          </div>
          
          <div className="branding-right">
            {/* <div className="legal-links">
              <a href="#">Disclaimer</a>
              <a href="#">Credits</a>
            </div> */}
            <p className="credits-text">
              Website By: <a target="_blank" href="https://www.nexenbloom.com/" className="underline">Nexen Bloom</a>
            </p>
          </div>
        </div>
      </footer>
    );
  }

  function OfferBanner() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Show banner on every reload
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="offer-banner-overlay">
      <div className="offer-banner">
        <button className="banner-close-btn" onClick={handleClose}>
          ✕
        </button>
        
        <div className="banner-content">
          <div className="banner-top-section">
            <div className="new-arrival-tag">NEW ARRIVAL</div>
            <h2 className="banner-brand">SILKY GOLD</h2>
            <h1 className="banner-heading">ALOE VERA<br/>WHITE RICE</h1>
            <p className="product-name">Face Serum</p>
            <p className="product-tagline">Brighter • Firmer • Healthier Skin</p>
          </div>
          
          <div className="banner-image-section">
            <div className="product-image-wrapper">
              <img 
                src="/aloeverawr.png" 
                alt="Aloe Vera White Rice Face Serum" 
                className="banner-product-img"
              />
            </div>
            <div className="discount-badge">
              <div className="discount-number">UP TO 50%</div>
              <div className="discount-text">OFF<br/>GRAB THE OFFER NOW</div>
            </div>
          </div>
          
          <div className="banner-bottom-section">
            <div className="shop-now-text">SHOP NOW</div>
            <div className="platform-buttons">
              <a 
                href="https://www.amazon.in/dp/B0H337DH18" 
                target="_blank" 
                rel="noopener noreferrer"
                className="platform-btn amazon"
              >
                <img src="/amazon.jpg" alt="Amazon" className="platform-logo" />
                <span>Amazon</span>
              </a>
              <a 
                href="https://www.flipkart.com/silky-gold-aloe-vera-white-rice-face-serum-vitamin-b5-niacinamide-aloevera-extract-rice-extract/p/itma2e7d081cabac?pid=KMTHNAA2ZJNX5KYA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="platform-btn flipkart"
              >
                <img src="/flipkart.png" alt="Flipkart" className="platform-logo" />
                <span>Flipkart</span>
              </a>
              <a 
                href="https://www.meesho.com/s/p/fqe6zs?utm_source=s_wb" 
                target="_blank" 
                rel="noopener noreferrer"
                className="platform-btn meesho"
              >
                <img src="/meesho.avif" alt="Meesho" className="platform-logo" />
                <span>Meesho</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HappyCustomersSection() {
  // Sample customer testimonial videos - replace with real ones
  const customerVideos = [
    { id: 1, name: "Priya Sharma", location: "Mumbai", video: "/testimonial1.mp4" },
    { id: 2, name: "Ananya Patel", location: "Delhi", video: "/testimonial2.mp4" },
    { id: 3, name: "Saumya Mehta", location: "Pune", video: "/testimonial3.mp4" },
    { id: 4, name: "Sheetal Verma", location: "Delhi", video: "/testimonial4.mp4" },
    { id: 5, name: "Pallavi Dubey", location: "Noida", video: "/testimonial5.mp4" },
    { id: 6, name: "Simran Singh", location: "Mumbai", video: "/testimonial6.mp4" },
    { id: 7, name: "Kirti Chauhan", location: "Greater Noida", video: "/testimonial7.mp4" },
    { id: 8, name: "Suhana Rajput", location: "Delhi", video: "/testimonial8.mp4" },
    { id: 9, name: "Deepali Chaudhary", location: "Gurugram", video: "/testimonial9.mp4" },
    { id: 10, name: "Monika Chaubey", location: "Chennai", video: "/testimonial10.mp4" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? customerVideos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev === customerVideos.length - 1 ? 0 : prev + 1));
  };

  const getVisibleVideos = () => {
    let prevIndex = currentIndex - 1;
    let nextIndex = currentIndex + 1;
    
    if (prevIndex < 0) prevIndex = customerVideos.length - 1;
    if (nextIndex >= customerVideos.length) nextIndex = 0;

    return [
      customerVideos[prevIndex],
      customerVideos[currentIndex],
      customerVideos[nextIndex]
    ];
  };

  const visibleVideos = getVisibleVideos();

  // Control video playback based on position
  useEffect(() => {
    videoRefs.current.forEach((videoEl, index) => {
      if (!videoEl) return;
      if (index === 1) {
        // Center video - play and loop
        videoEl.loop = true;
        videoEl.play().catch(() => {
          // Auto-play might be blocked by browser
        });
      } else {
        // Side videos - pause
        videoEl.pause();
        videoEl.currentTime = 0;
      }
    });
  }, [currentIndex]);

  return (
    <section className="happy-customers-section">
      <div className="happy-customers-container">
        <h2 className="happy-customers-title">
          Happy <span className="italic">Customers</span>
        </h2>
        <p className="happy-customers-subtitle">
          Real people, real results from our premium skincare collection
        </p>
        
        <div className="testimonials-carousel-wrapper">
          <button className="carousel-arrow left-arrow" onClick={handlePrev}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
          
          <div className="testimonials-carousel">
            <div className="visible-cards-container">
              {visibleVideos.map((video, index) => (
                <div 
                  key={`${video.id}-${index}`} 
                  className={`testimonial-card ${index === 1 ? 'center-card' : 'side-card'}`}
                >
                  <div className="video-container">
                    <video
                      ref={el => { videoRefs.current[index] = el; }}
                      src={video.video}
                      muted
                      playsInline
                      preload="metadata"
                      className="testimonial-video"
                    />
                  </div>
                  <div className="customer-info">
                    <h4 className="customer-name">{video.name}</h4>
                    <p className="customer-location">{video.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button className="carousel-arrow right-arrow" onClick={handleNext}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

  export default function HomePage() {

    const [menuOpen, setMenuOpen] = useState(false);
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [phase, setPhase] = useState<"loading" | "brand" | "done">("loading");
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
      if (phase === "loading") {
        const interval = setInterval(() => {
          setLoadingProgress((prev) => {
            if (prev >= 100) {
              clearInterval(interval);
              setTimeout(() => setPhase("brand"), 500);
              return 100;
            }
            return prev + 25;
          });
        }, 700);
        return () => clearInterval(interval);
      }

      if (phase === "brand") {
        const exitTimer = setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => setPhase("done"), 1200);
        }, 1500);
        return () => clearTimeout(exitTimer);
      }
    }, [phase]);

    if (phase !== "done") {
      const tens = Math.floor(loadingProgress / 10);
      const ones = loadingProgress % 10;
      const prevTens = tens > 0 ? tens - 1 : 0;
      const prevOnes = ones > 0 ? ones - 1 : 9;

      return (
        <div className="loading-screen">
          {phase === "loading" && (
            <div className="counter-container">
              {loadingProgress === 100 ? (
                <div className="digit digit-center left-digit-animate">
                  <div className="digit-inner">
                    <span>99</span>
                    <span>100</span>
                  </div>
                </div>
              ) : (
                <>
                  <div className="digit" key={`tens-${tens}`}>
                    <div className="digit-inner left-digit-animate">
                      <span>{prevTens}</span>
                      <span>{tens}</span>
                    </div>
                  </div>
                  <div className="digit" key={`ones-${ones}`}>
                    <div className="digit-inner right-digit-animate">
                      <span>{ones}</span>
                      <span>{prevOnes}</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
          {phase === "brand" && (
            <div className="brand-reveal">
              <div className={`brand-word ${isExiting ? "silky-exit" : "silky-enter"}`}>
                SILKY
              </div>
              <div className="brand-divider">|</div>
              <div className={`brand-word ${isExiting ? "gold-exit" : "gold-enter"}`}>
                GOLD
              </div>
            </div>
          )}
        </div>
      );
    }

    return (
      <>
        <OfferBanner />
        <main className="main-content fade-in">
        <section className="hero">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="hero-video"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
          
          <nav className="nav">
            <button
              type="button"
              className="hamburger"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <div className="logo"><a href="#">Silky Gold</a></div>
            <div className="menu">
              <a href="#shop">SHOP</a>
              <a href="#philosophy">PHILOSOPHY</a>
              <a href="#gallery">GALLERY</a>
              <a href="#skincare">SKINCARE</a>
            </div>
            <div className="user-actions">
              <a target="_blank" href="https://www.meesho.com/s/p/fqe6zs?utm_source=s_wb">
              <svg
                className="bag-icon"
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg></a>
            </div>

            {menuOpen && (
              <div className="mobile-menu" role="dialog" aria-modal="true">
                <div className="mobile-menu-header">
                  <button
                    type="button"
                    className="mobile-menu-close"
                    aria-label="Close menu"
                    onClick={() => setMenuOpen(false)}
                  >
                    ✕
                  </button>
                  <div className="mobile-menu-logo">Silky Gold</div>
                  <button type="button" className="mobile-menu-cart" aria-label="Cart">
                    <a target="_blank" href="https://www.meesho.com/s/p/fqe6zs?utm_source=s_wb">
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                      <path d="M3 6h18" />
                      <path d="M16 10a4 4 0 0 1-8 0" />
                    </svg></a>
                  </button>
                </div>

                <div className="mobile-menu-links">
                  <a href="#shop" onClick={() => setMenuOpen(false)}>Shop</a>
                  <a href="#philosophy" onClick={() => setMenuOpen(false)}>Philosophy</a>
                  <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
                  <a href="#skincare" onClick={() => setMenuOpen(false)}>Skincare</a>

                </div>

                <div className="mobile-menu-footer">
                  <div className="mobile-menu-social">
                    <a target="_blank" href="https://www.instagram.com/silky_gold_?utm_source=qr&igsh=MThrcDVlc3pienQ4OQ==" aria-label="Instagram" className="mobile-social-btn">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                    </a>
                    <a target="_blank" href="https://linkedin.com/in/silky-gold-96497650" aria-label="LinkedIn" className="mobile-social-btn">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width="4" height="12" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </a>
                    <a target="_blank" href="https://www.youtube.com/@SILKYGOLDs" aria-label="YouTube" className="mobile-social-btn">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22.54 6.42A2.78 2.78 0 0 0 20.6 4.5C18.88 4 12 4 12 4s-6.88 0-8.6.5A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.5C5.12 20 12 20 12 20s6.88 0 8.6-.5a2.78 2.78 0 0 0 1.94-1.92A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58Z" />
                        <path d="m10 15 5-3-5-3z" />
                      </svg>
                    </a>
                    <a target="_blank" href="https://www.facebook.com/arun.jha.94009/" aria-label="Facebook" className="mobile-social-btn">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    </a>
                  </div>

                  <div className="mobile-menu-contact">
                    <div className="mobile-menu-contact-label">CONTACT US</div>
                    <a href="mailto:support@silkygolds.com" className="mobile-menu-contact-link">
                      support@silkygolds.com
                    </a>
                    <a href="tel:9319851474" className="mobile-menu-contact-link">
                      +91-93198-51474
                    </a>
                  </div>
                </div>
              </div>
            )}
          </nav>
          {/* Hero */}

          <div className="hero-content">
            <h1 className="hero-title">
              <span className="italic">True</span> to Oneself
              <br />
              kind to <span className="italic">Nature</span>
            </h1>
            <p className="hero-subtitle">
              Unreservedly honest products that truly work, be kind to skin and
              the planet - no exceptions!
            </p>
          </div>

          <div className="hero-footer">
            <a target="_blank" href="https://www.meesho.com/s/p/fqe6zs?utm_source=s_wb" className="cta-button">
              <div className="cta-text-wrapper">
                <span className="cta-text">EXPLORE ALL PRODUCTS</span>
              </div>
              <div className="arrow-circle">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
            </a>
          </div>
        </section>
        <SkincareSection />
        <ExplorePotencySection />
        <PureBrillianceSection />
        {/* <WhiteRiceIngredientsSection /> */}
        <VarnayaBlendsSection />
        <TransparencySection />
        <OffersQualitySection />
        <HappyCustomersSection />
        <ConnectInstagramSection />
        <NewsletterSection />
        <Footer />
      </main>
      </>
    );
  }
