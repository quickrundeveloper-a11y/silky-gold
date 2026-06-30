"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

function Particle() {
  const randomX = Math.random() * 100;
  const randomY = Math.random() * 100;
  const randomDelay = Math.random() * 5;
  const randomSize = 10 + Math.random() * 20;

  return (
    <motion.div
      className="particle"
      style={{
        position: "absolute",
        left: `${randomX}%`,
        top: `${randomY}%`,
        width: `${randomSize}px`,
        height: `${randomSize}px`,
        background: "rgba(180, 83, 9, 0.1)",
        borderRadius: "50%",
        pointerEvents: "none"
      }}
      animate={{
        y: [0, -30, 0],
        opacity: [0.3, 0.6, 0.3],
        scale: [1, 1.1, 1]
      }}
      transition={{
        duration: 4 + Math.random() * 2,
        repeat: Infinity,
        delay: randomDelay,
        ease: "easeInOut"
      }}
    />
  );
}

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00"
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check localStorage for existing end date
    let endTime = localStorage.getItem("silkygold-countdown-end");
    let endDate: Date;

    if (endTime) {
      endDate = new Date(parseInt(endTime));
      // If the saved end date is in the past, set a new one
      if (endDate.getTime() < new Date().getTime()) {
        endDate = new Date();
        endDate.setDate(endDate.getDate() + 7);
        localStorage.setItem("silkygold-countdown-end", endDate.getTime().toString());
      }
    } else {
      endDate = new Date();
      endDate.setDate(endDate.getDate() + 7);
      localStorage.setItem("silkygold-countdown-end", endDate.getTime().toString());
    }

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = endDate.getTime() - now;

      if (distance < 0) {
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0")
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="countdown">
      <div className="countdown-item">
        <span className="countdown-number">{timeLeft.days}</span>
        <span className="countdown-label">Days</span>
      </div>
      <div className="countdown-item">
        <span className="countdown-number">{timeLeft.hours}</span>
        <span className="countdown-label">Hours</span>
      </div>
      <div className="countdown-item">
        <span className="countdown-number">{timeLeft.minutes}</span>
        <span className="countdown-label">Minutes</span>
      </div>
      <div className="countdown-item">
        <span className="countdown-number">{timeLeft.seconds}</span>
        <span className="countdown-label">Seconds</span>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-links-container">
        <div className="footer-column">
          <h3>EXPLORE</h3>
          <ul>
            <li><a href="/">Shop</a></li>
            <li><a href="/">Philosophy</a></li>
            <li><a href="/">Gallery</a></li>
            <li><a href="/">Skincare</a></li>
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
            <br />
            Formulated with honesty. Proven to work.
          </p>
          <p className="footer-copyright">© 2026 Silky Gold, All Rights Reserved</p>
        </div>

        <div className="branding-right">
          <p className="credits-text">
            Website By: <a target="_blank" href="https://www.nexenbloom.com/" className="underline">Nexen Bloom</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function LandingClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const faqs = [
    { q: "Is this serum suitable for all skin types?", a: "Yes! Our Aloe Vera White Rice Face Serum is gentle, non-comedogenic, and designed to work perfectly for oily, dry, combination, and sensitive skin." },
    { q: "How often should I use the serum?", a: "For best results, use twice daily: morning and night, after cleansing and before moisturizing." },
    { q: "Does it contain any harmful chemicals?", a: "Absolutely not! Our formula is free from parabens, sulfates, mineral oil, and artificial fragrances." },
    { q: "Can I use it with other skincare products?", a: "Yes! It layers beautifully under moisturizer, sunscreen, and makeup. It's also safe for use with active ingredients like niacinamide." },
    { q: "When will I see results?", a: "Most customers report visible hydration and glow within 1-2 weeks, with full brightening results in 4-6 weeks of consistent use." },
  ];

  const benefits = [
    { title: "Deep Hydration", desc: "Locks in moisture for 24-hour plumpness", icon: "💧" },
    { title: "Skin Brightening", desc: "Fades dark spots and evens skin tone", icon: "✨" },
    { title: "Natural Ingredients", desc: "Pure, plant-based goodness", icon: "🌿" },
    { title: "Lightweight Formula", desc: "Absorbs instantly, no grease", icon: "🌬️" },
    { title: "Suitable For All Skin Types", desc: "Gentle for sensitive skin", icon: "🤍" },
    { title: "Soothes & Calms Skin", desc: "Reduces redness and irritation", icon: "🧴" }
  ];

  const reviews = [
    { name: "Riya Mehta", review: "My skin feels so soft and hydrated! The glow is absolutely real and lasts all day.", rating: 5 },
    { name: "Anushka Patel", review: "Finally a product that actually brightens my skin without any irritation. Obsessed!", rating: 5 },
    { name: "Sneha Kapoor", review: "Lightweight, absorbs quickly, and smells amazing. My skin has never looked better!", rating: 5 }
  ];

  return (
    <div className="silky-gold-landing">
      {/* 1. HERO */}
      <section className="hero-section">
        <div className="hero-bg-image">
          <Image
            src="/landing-banner.png"
            alt="Silky Gold Serum Background"
            fill
            className="hero-bg-img"
            priority
          />
        </div>
        <div className="hero-overlay"></div>
        {mounted && [...Array(10)].map((_, i) => <Particle key={i} />)}
        <div className="container">
          <div className="hero-grid">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="hero-text">
              <div className="hero-badge">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
                  <path d="M22 12A10 10 0 0 0 12 2v10z" />
                </svg>
                Silky Gold Aloe Vera White Rice
              </div>
              <h1 className="hero-heading">
                Reveal
                <br />
                <i>Naturally Radiant</i>
                <br />
                Skin
              </h1>
              <p className="hero-desc">Experience deep hydration, brightening, and nourishment with our luxurious Aloe Vera & White Rice Face Serum. Your journey to glowing skin starts here.</p>
              <div className="hero-buttons">
                <a href="/" className="btn-primary">
                  Shop Now for ₹498
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m5 12 7 7 7-7M12 5v14" />
                  </svg>
                </a>
                <button className="btn-secondary">Learn More</button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. BENEFITS */}
      <section className="benefits-section">
        <div className="container">
          <div className="benefits-split">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="benefits-image-wrap">
              <Image
                src="/landing-benefits.png"
                alt="Benefits"
                fill
                className="benefits-image"
              />
            </motion.div>
            <div className="benefits-content">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-title-wrap left">
                <h2 className="section-title">Why You'll <i>Love It</i></h2>
              </motion.div>
              <div className="benefits-grid-small">
                {benefits.map((benefit, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="benefit-card">
                    <div className="benefit-icon">{benefit.icon}</div>
                    <h3>{benefit.title}</h3>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT HIGHLIGHT */}
      <section className="product-highlight-section">
        <div className="container">
          <div className="product-highlight-split">
            <div className="product-highlight-content">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-title-wrap left">
                <h2 className="section-title">Star <i>Ingredients</i></h2>
              </motion.div>
              <div className="ingredient-badges">
                {[
                  { name: "Aloe Vera Extract", desc: "Soothes, hydrates, and calms irritation" },
                  { name: "White Rice Extract", desc: "Brightens, protects, and improves elasticity" },
                  { name: "Vitamin B5", desc: "Deeply moisturizes and repairs skin barrier" },
                  { name: "Niacinamide", desc: "Fades dark spots and evens texture" }
                ].map((ing, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="ingredient-badge">
                    <div className="ingredient-badge-icon">
                      {i === 0 ? "🌱" : i === 1 ? "🍚" : i === 2 ? "✨" : "💫"}
                    </div>
                    <div>
                      <h4>{ing.name}</h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="product-highlight-image-wrap">
              <Image
                src="/landing-glow1.png"
                alt="Product Highlight"
                fill
                className="product-highlight-image"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. NATURAL BEAUTY */}
      <section className="natural-beauty-section">
        <div className="container">
          <div className="natural-beauty-split">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="natural-beauty-image-wrap">
              <Image
                src="/landing-glow2.png"
                alt="Natural Beauty"
                fill
                className="natural-beauty-image"
              />
            </motion.div>
            <div className="natural-beauty-content">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-title-wrap left">
                <h2 className="section-title">Pure & <i>Natural</i></h2>
              </motion.div>
              <div className="natural-benefits-grid">
                {[
                  { icon: "🌱", title: "Natural Ingredients" },
                  { icon: "🐰", title: "Cruelty Free" },
                  { icon: "❌", title: "Sulfate Free" },
                  { icon: "🌸", title: "No Artificial Fragrance" }
                ].map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="natural-benefit-card">
                    <div className="natural-benefit-icon">{item.icon}</div>
                    <h3>{item.title}</h3>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HOW TO USE + RESULTS */}
      <section className="how-to-use-section">
        <div className="container">
          <div className="how-to-use-content">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-title-wrap">
              <h2 className="section-title">How to Get Your <i>Glow</i></h2>
            </motion.div>
            <div className="how-to-use-image-wrap">
              <Image
                src="/landing-usage.png"
                alt="How to Use"
                width={1200}
                height={800}
                className="how-to-use-image"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. CUSTOMER REVIEWS */}
      <section className="reviews-section">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-title-wrap">
            <h2 className="section-title">What People <i>Say</i></h2>
          </motion.div>
          <div className="reviews-slider">
            {reviews.map((r, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="review-card">
                <div className="stars">
                  {"⭐".repeat(r.rating)}
                </div>
                <p className="review-text">"{r.review}"</p>
                <div className="reviewer">
                  <div className="reviewer-avatar">
                    {r.name.charAt(0).toUpperCase()}
                  </div>
                  <h4>{r.name}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. EXCITING OFFERS */}
      <section className="exciting-offers-section">
        <div className="container">
          <div className="offers-content">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2>✨ Limited Time Offer!</h2>
              <Countdown />
              <div className="price">
                Only ₹498 <span className="old-price">₹996</span>
              </div>
              <a href="/" className="offers-btn">
                Grab the Offer Now!
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. TRUST BADGES */}
      <section className="trust-section">
        <div className="container">
          <div className="trust-row">
            {[
              { icon: "🔒", text: "Secure Payments" },
              { icon: "🚚", text: "Fast Shipping" },
              { icon: "💯", text: "Money Back Guarantee" },
              { icon: "✨", text: "Premium Quality" },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="trust-badge">
                <span className="trust-icon">{item.icon}</span>
                <h3>{item.text}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="faq-section">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-title-wrap">
            <h2 className="section-title">Frequently Asked <i>Questions</i></h2>
          </motion.div>
          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="faq-item">
                <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="faq-btn">
                  <span>{faq.q}</span>
                  <svg
                    width="20" height="20" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="2"
                    className={`faq-arrow ${openFaq === idx ? 'open' : ''}`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="faq-answer">
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA */}
      <section className="final-cta">
        <div className="container">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="final-cta-content">
            <div className="final-cta-img-wrap">
              <div className="final-cta-glow"></div>
              <Image src="/aloeverawr.png" alt="Serum" fill className="final-cta-img" />
            </div>
            <h2>Get Your <i>Glow</i> Today</h2>
            <a href="/" className="final-cta-btn">
              Buy Now for ₹498
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
