import { useEffect, useState } from "react";
import "./App.css";
import heroCouple from "./assets/hero-couple.jpg";
import heroDesert from "./assets/hero-desert.jpg";
import heroProposal from "./assets/hero-proposal.jpg";
import artBubbles from "./assets/art-bubbles.jpg";
import artDescent from "./assets/art-descent.jpg";
import artSmoke from "./assets/art-smoke.jpg";
import artSuns from "./assets/art-suns.jpg";
import brandBostonPizza from "./assets/brand-boston-pizza.jpg";
import workWedding from "./assets/work-wedding.jpg";
import aboutProfile from "./assets/about-profile.jpg";
import posterCanadianTigers from "./assets/poster-canadian-tigers.jpg";
import posterFuffadJi from "./assets/poster-fuffad-ji.jpg";
import posterJigarthanda from "./assets/poster-jigarthanda-doublex.jpg";
import posterPanchayat from "./assets/poster-panchayat.jpg";

/* =========================================================
   HERO IMAGES
========================================================= */

const heroSlides = [
  {
    src: heroCouple,
    alt: "Couple embracing with the Toronto skyline at sunset",
    position: "center 52%",
  },
  {
    src: heroDesert,
    alt: "Horse race through a dramatic desert landscape",
    position: "center 56%",
  },
  {
    src: heroProposal,
    alt: "Newly engaged couple walking together by the water",
    position: "center 38%",
  },
];

/* =========================================================
   PORTFOLIO CATEGORIES
========================================================= */

const categories = [
  {
    title: "Events",
    subtitle: "Corporate · Social · Hospitality",
    src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1500&q=90",
    alt: "Event photography",
  },
  {
    title: "Portraits",
    subtitle: "Editorial · Lifestyle · Personal",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1500&q=90",
    alt: "Portrait photography",
  },
  {
    title: "Weddings",
    subtitle: "Stories · Details · Celebration",
    src: workWedding,
    alt: "Couple kissing in Toronto with the CN Tower behind them",
  },
  {
    title: "Brands",
    subtitle: "Commercial · Hospitality · Content",
    src: brandBostonPizza,
    alt: "Boston Pizza social media campaign photography",
  },
];

/* =========================================================
   ART PHOTOGRAPHY
========================================================= */

const artPhotography = [
  {
    title: "Descent",
    location: "Form & Geometry",
    src: artDescent,
    alt: "Overhead view of a person descending a spiral staircase",
  },
  {
    title: "Brighter Than a Thousand Suns",
    location: "Colour & Motion",
    src: artSuns,
    alt: "Portrait surrounded by vivid clouds of Holi colour",
  },
  {
    title: "After the Flame",
    location: "Portrait Study",
    src: artSmoke,
    alt: "Black and white portrait of a craftsman at work",
  },
  {
    title: "Weightless",
    location: "Street Observation",
    src: artBubbles,
    alt: "Black and white portrait of a street performer blowing bubbles",
  },
];

/* =========================================================
   PROFESSIONAL SCREEN EXPERIENCE
========================================================= */

const screenCredits = [
  {
    project: "Panchayat",
    detail: "Seasons 4 & 5",
    context: "Amazon Prime Video Series · India",
    role: "Assistant Cinematographer",
    studio: "The Viral Fever",
    poster: posterPanchayat,
    posterAlt: "Panchayat poster",
  },
  {
    project: "Canadian Tigers",
    detail: "Documentary",
    context: "Documentary Production · Canada",
    role: "Cinematographer",
    studio: "Byota TV",
    poster: posterCanadianTigers,
    posterAlt: "Canadian Tiger documentary poster",
  },
  {
    project: "Jigarthanda DoubleX",
    detail: "Feature Film",
    context: "Tamil Period Action Feature · India",
    role: "Camera Intern",
    studio: "Stone Bench Films",
    poster: posterJigarthanda,
    posterAlt: "Jigarthanda DoubleX poster",
  },
  {
    project: "Fuffad Ji",
    detail: "Feature Film",
    context: "Punjabi Period Comedy · India",
    role: "Assistant Cinematographer",
    studio: "Zee Studios",
    poster: posterFuffadJi,
    posterAlt: "Fuffad Ji poster",
  },
];

function App() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  /* =========================================================
     HERO SLIDESHOW
  ========================================================= */

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((previous) => {
        return (previous + 1) % heroSlides.length;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  /* =========================================================
     LOCK PAGE WHILE OVERLAY IS OPEN
  ========================================================= */

  useEffect(() => {
    if (menuOpen || lightboxImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, lightboxImage]);

  /* =========================================================
     ESCAPE KEY
  ========================================================= */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setLightboxImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const openLightbox = (image) => {
    setLightboxImage({
      ...image,
      src: image.src.replace(/w=\d+/, "w=2200"),
    });
  };

  return (
    <div className="page">
      {/* =====================================================
          HERO
      ===================================================== */}

      <header className="hero" id="home">
        {heroSlides.map((slide, index) => (
          <div
            className={`hero-slide ${
              slideIndex === index ? "active" : ""
            }`}
            key={slide.src}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              style={{ objectPosition: slide.position }}
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}

        <div className="hero-shade" />

        {/* NAVIGATION */}

        <nav className="nav">
          <a className="brand" href="#home">
            6North<em>Visuals</em>
          </a>

          <div className="desktop-nav">
            <a href="#home">Home</a>
            <a href="#work">Portfolio</a>
            <a href="#art">Art</a>
            <a href="#films">Films</a>
            <a href="#experience">Experience</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>

          <button
            className={`menu-button ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen((previous) => !previous)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
          </button>
        </nav>

        {/* MOBILE MENU */}

        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <div className="mobile-menu-links">
            <a href="#home" onClick={closeMenu}>
              Home
            </a>

            <a href="#work" onClick={closeMenu}>
              Portfolio
            </a>

            <a href="#art" onClick={closeMenu}>
              Art
            </a>

            <a href="#films" onClick={closeMenu}>
              Films
            </a>

            <a href="#experience" onClick={closeMenu}>
              Experience
            </a>

            <a href="#about" onClick={closeMenu}>
              About
            </a>

            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </div>

          <div className="mobile-menu-bottom">
            <span>Toronto · Canada</span>
            <span>Available for Travel</span>
          </div>
        </div>

        {/* HERO CONTENT */}

        <div className="hero-center">
          <p className="hero-kicker">
            Toronto · Canada · Available Worldwide
          </p>

          <h1 className="hero-title">
            Stories,
            <br />
            <em>cinematically</em>
            <br className="mobile-title-break" /> remembered.
          </h1>

          <div className="hero-services">
            <span>Events</span>
            <i>·</i>
            <span>Portraits</span>
            <i>·</i>
            <span>Weddings</span>
            <i>·</i>
            <span>Brands</span>
            <i>·</i>
            <span>Art</span>
          </div>

          <div className="hero-subline">
            <p>
              Photography and films shaped by a professional
              cinematography background.
            </p>
          </div>

          <a className="hero-round-link" href="#work">
            Explore
            <br />
            Work ↓
          </a>
        </div>

        {/* SLIDE INDICATOR */}

        <div className="hero-bottom">
          <div className="hero-line" />

          <div className="slide-count">
            <span>
              {String(slideIndex + 1).padStart(2, "0")}
            </span>

            <span>/</span>

            <span>
              {String(heroSlides.length).padStart(2, "0")}
            </span>
          </div>

          <div className="hero-line" />
        </div>
      </header>

      {/* =====================================================
          QUICK CONTACT
      ===================================================== */}

      <aside className="booking-strip" aria-label="Booking information">
        <div className="booking-strip-inner content-width">
          <p>
            <span className="booking-dot" aria-hidden="true" />
            Have a story in mind? <strong>Let’s make it visual.</strong>
          </p>

          <div className="booking-strip-links">
            <a href="mailto:sixnorthvisuals@gmail.com">
              sixnorthvisuals@gmail.com
            </a>
            <a href="tel:+14379855609">+1 437 985 5609</a>
            <a className="booking-strip-cta" href="#contact">
              Start a project ↗
            </a>
          </div>
        </div>
      </aside>

      {/* =====================================================
          PORTFOLIO INTRO
      ===================================================== */}

      <section className="work-intro" id="work">
        <div className="content-width">
          <p className="eyebrow">Selected Portfolio</p>

          <h2>
            Real moments.
            <br />
            <em>Refined imagery.</em>
          </h2>

          <p className="work-intro-description">
            Documentary instinct meets editorial direction across
            events, portraits, weddings and commercial work.
          </p>
        </div>
      </section>

      {/* =====================================================
          PORTFOLIO CATEGORIES
      ===================================================== */}

      <section className="category-section">
        <div className="category-grid content-width">
          {categories.map((category) => (
            <article
              className="category-card"
              key={category.title}
            >
              <button
                className="category-image"
                onClick={() => openLightbox(category)}
                aria-label={`View ${category.title} photography`}
              >
                <img
                  src={category.src}
                  alt={category.alt}
                  loading="lazy"
                />
              </button>

              <div className="category-meta">
                <h3>{category.title}</h3>
                <p>{category.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =====================================================
          ART PHOTOGRAPHY
      ===================================================== */}

      <section className="art-section" id="art">
        <div className="art-heading content-width">
          <div>
            <p className="eyebrow">Personal Work · Fine Art</p>
            <h2>
              Art in the
              <br />
              <em>in-between.</em>
            </h2>
          </div>

          <p className="art-intro">
            An ongoing collection of quiet landscapes, graphic forms,
            and fleeting observations—made slowly, without a brief.
          </p>
        </div>

        <div className="art-gallery content-width">
          {artPhotography.map((artwork, index) => (
            <article
              className={`art-piece art-piece-${index + 1}`}
              key={artwork.title}
            >
              <button
                className="art-image"
                onClick={() => openLightbox(artwork)}
                aria-label={`View ${artwork.title}`}
              >
                <img src={artwork.src} alt={artwork.alt} loading="lazy" />
              </button>

              <div className="art-caption">
                <h3>{artwork.title}</h3>
                <p>{artwork.location}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =====================================================
          APPROACH
      ===================================================== */}

      <section className="feature">
        <div className="feature-image">
          <img
            src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1900&q=90"
            alt="Event celebration"
            loading="lazy"
          />
        </div>

        <div className="feature-copy">
          <div className="feature-copy-inner">
            <p className="eyebrow">
              The Approach
            </p>

            <h2>
              Honest moments.
              <br />
              <em>Beautifully framed.</em>
            </h2>

            <p>
              I approach events, people and brands with the same
              attention to image-making that I bring to a film set —
              watching light, anticipating moments and finding the
              frame without making the experience feel staged.
            </p>

            <p>
              The result is imagery that feels natural in the moment,
              but polished enough to live far beyond it.
            </p>

            <a className="text-link" href="#about">
              Discover my approach →
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          FILMS
      ===================================================== */}

      <section className="films" id="films">
        <div className="content-width">
          <div className="films-head">
            <div>
              <p className="films-eyebrow">
                Moving Image
              </p>

              <h2>Films & Motion</h2>
            </div>

            <p>
              Event films, branded stories and short-form content
              shaped by a professional cinematography background —
              with attention to light, movement, composition and
              story.
            </p>
          </div>

          <div className="film-card">
            <iframe
              src="https://www.youtube-nocookie.com/embed/cKDSGYCgmN0?rel=0&playsinline=1"
              title="6NorthVisuals featured film"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          <div className="film-caption">
            <p>Featured Film · 6NorthVisuals</p>
            <span>Play here · Fullscreen available</span>
          </div>
        </div>
      </section>

      {/* =====================================================
          FILM & TELEVISION EXPERIENCE
      ===================================================== */}

      <section
        className="screen-experience"
        id="experience"
      >
        <div className="screen-inner content-width">
          <div className="screen-intro">
            <p className="eyebrow">
              Professional Film & Television Experience
            </p>

            <h2>
              From film sets
              <br />
              <em>to real moments.</em>
            </h2>

            <p className="screen-description">
              My foundation comes from professional film and
              television production. Working within camera and
              cinematography departments shaped the way I see light,
              composition, movement and timing.
            </p>

            <p className="screen-description">
              Today, I bring that same visual discipline to events,
              weddings, portraits and brands — without losing the
              spontaneity that makes those moments real.
            </p>

            <a
              className="film-work-link"
              href="#"
            >
              Explore Narrative Film Work →
            </a>
          </div>

          <div className="screen-credits">
            {screenCredits.map((credit) => (
              <div
                className="credit-row"
                key={credit.project}
              >
                <button
                  className="credit-poster"
                  onClick={() =>
                    openLightbox({
                      src: credit.poster,
                      alt: credit.posterAlt,
                    })
                  }
                  aria-label={`View ${credit.project} poster`}
                >
                  <img
                    src={credit.poster}
                    alt={credit.posterAlt}
                    loading="lazy"
                  />
                </button>

                <div className="credit-project">
                  <h3>{credit.project}</h3>

                  <span className="credit-detail">
                    {credit.detail}
                  </span>

                  <p className="credit-context">
                    {credit.context}
                  </p>
                </div>

                <div className="credit-role">
                  <p>{credit.role}</p>
                  <span>{credit.studio}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section className="about" id="about">
        <div className="about-inner content-width">
          <div className="about-image">
            <img
              src={aboutProfile}
              alt="Dhruv operating a cinema camera on location"
              loading="lazy"
            />
          </div>

          <div className="about-copy">
            <p className="eyebrow">
              Behind the Camera
            </p>

            <h2>
              Story first.
              <br />
              <em>Always.</em>
            </h2>

            <p className="about-lead">
              I'm Dhruv, a Toronto-based photographer and
              cinematographer working across events, weddings,
              portraits, brands and motion.
            </p>

            <p>
              My background comes from professional film and
              television production, where I developed an eye for
              light, composition, movement and visual storytelling.
            </p>

            <p>
              Rather than separating those worlds, I bring that
              experience into the work I create for real people and
              businesses — producing photographs and films that feel
              natural, refined and cinematic without feeling
              over-produced.
            </p>

            <p className="about-note">
              Selected screen experience includes Panchayat,
              Canadian Tigers, Jigarthanda DoubleX and Fuffad Ji.
            </p>

            <a
              className="text-link"
              href="#contact"
            >
              Work with me →
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT
      ===================================================== */}

      <section className="contact" id="contact">
        <div className="contact-inner content-width">
          <div>
            <p className="eyebrow">
              Bookings & Inquiries
            </p>

            <h2>
              Let's create
              <br />
              something <em>timeless.</em>
            </h2>
          </div>

          <div className="contact-bottom">
            <div className="contact-details">
              <a
                className="email"
                href="mailto:sixnorthvisuals@gmail.com"
              >
                sixnorthvisuals@gmail.com ↗
              </a>

              <a className="phone" href="tel:+14379855609">
                +1 437 985 5609
              </a>
            </div>

            <div className="socials">
              <a href="#">Instagram</a>
              <a href="#">YouTube</a>
              <a href="#">Vimeo</a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer>
        <div className="footer-inner content-width">
          <div className="footer-brand">
            <strong>
              6North<em>Visuals</em>
            </strong>
            <span>Toronto · Canada</span>
          </div>

          <div className="footer-meta">
            <span>
              Events · Weddings · Portraits · Art · Films
            </span>

            <span>
              © 2026 6NorthVisuals
            </span>
          </div>
        </div>
      </footer>

      {/* =====================================================
          LIGHTBOX
      ===================================================== */}

      {lightboxImage && (
        <div
          className="lightbox"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setLightboxImage(null);
            }
          }}
        >
          <button
            className="lightbox-close"
            aria-label="Close image"
            onClick={() => setLightboxImage(null)}
          >
            ×
          </button>

          <img
            src={lightboxImage.src}
            alt={lightboxImage.alt}
          />
        </div>
      )}
    </div>
  );
}

export default App;
