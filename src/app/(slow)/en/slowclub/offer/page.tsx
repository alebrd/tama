import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import VenueGallery from "@/components/VenueGallery";

export const metadata: Metadata = {
  title: "Offer — SLOW",
  description: "Host your event at SLOW — an intimate club and event venue in the heart of Poznań for up to 200 guests. Audiophile sound, cocktail bar, and mezzanine.",
};

const stats = [
  { value: "200", label: "Max Guests" },
  { value: "200 m²", label: "Total Space" },
  { value: "Central", label: "Poznań Location" },
];

const eventTypes = [
  "Corporate Parties",
  "Special Occasions",
  "Industry Meetups",
  "Workshops & Panels",
  "Exclusive Gatherings",
  "Mini Conferences",
];

const slowGalleryImages = [
  // Top 8 for the Preview Grid
  "/slow-offer/Dancefloor-1_SLOW.jpg",
  "/slow-offer/Bar_SLOW.jpg",
  "/slow-offer/Antresola-1_SLOW.jpg",
  "/slow-offer/Sala_SLOW.jpg",
  "/slow-offer/Dancefloor-3_SLOW.jpg",
  "/slow-offer/Bar-2_SLOW.jpg",
  "/slow-offer/Antresola-7_SLOW.jpg",
  "/slow-offer/Deco_SLOW.jpg",
  // Additional Photos in Modal
  "/slow/slow-prev-events/IMG_7590.jpeg",
  "/slow/slow-prev-events/IMG_7587.jpeg",
  "/slow-offer/Dancefloor-2_SLOW.jpg",
  "/slow-offer/Dancefloor-4_SLOW.jpg",
  "/slow-offer/Dancefloor-5_SLOW.jpg",
  "/slow-offer/Dancefloor-6_SLOW.jpg",
  "/slow-offer/Dancefloor-7_SLOW.jpg",
  "/slow-offer/Dancefloor_SLOW.jpg",
  "/slow-offer/Bar-3_SLOW.jpg",
  "/slow-offer/Bar.jpg",
  "/slow-offer/Sala__SLOW.jpg",
  "/slow-offer/Antresola-2_SLOW.jpg",
  "/slow-offer/Antresola-3_SLOW.jpg",
  "/slow-offer/Antresola-4_SLOW.jpg",
  "/slow-offer/Antresola-5_SLOW.jpg",
  "/slow-offer/Antresola-6_SLOW.jpg",
  "/slow-offer/Antresola-8_SLOW.jpg",
  "/slow-offer/Antresola-9_SLOW.jpg",
  "/slow-offer/Antresola-10_SLOW.jpg",
  "/slow-offer/Antresola-11_SLOW.jpg",
  "/slow-offer/Antresola-12_SLOW.jpg",
  "/slow-offer/Antresola-13_SLOW.jpg",
  "/slow-offer/Antresola-14_SLOW.jpg",
  "/slow-offer/Antresola-15_SLOW.jpg",
  "/slow-offer/Antresola-16_SLOW.jpg",
  "/slow-offer/Antresola-17_SLOW.jpg",
  "/slow-offer/Antresola-18_SLOW.jpg",
];

export default function SlowOfferPage() {
  return (
    <div className={styles.page}>
      <div className="container">

        {/* 1. Hero */}
        <div className={`${styles.hero} reveal`}>
          <p className={styles.eyebrow}>EVENT SPACE · POZNAŃ</p>
          <h1 className={styles.title}>Host Your Event</h1>
          <p className={styles.sub}>
            Corporate parties, private celebrations, galas, and bespoke gatherings —
            intimate atmosphere, audiophile sound, and distinctive character in the heart of Poznań.
          </p>
          <div className={styles.heroCta}>
            <a href="#inquire" className="btn-slow">
              INQUIRE NOW →
            </a>
            <a href="#gallery" className={styles.btnSlowOutline}>
              EXPLORE GALLERY ↓
            </a>
          </div>
        </div>

        {/* 2. Stats */}
        <div className={styles.statsRow}>
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`${styles.stat} reveal`}
              style={{ '--reveal-delay': `${idx * 30}ms` } as React.CSSProperties}
            >
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>

        {/* 3. Event Types */}
        <div className={`${styles.section} reveal`}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>What We Host</h2>
          </div>
          <div className={styles.tagGrid}>
            {eventTypes.map((type) => (
              <span key={type} className={styles.tag}>{type}</span>
            ))}
          </div>
        </div>

        {/* 4. Gallery Showcase (Photos First) */}
        <div id="gallery" className={`${styles.section} reveal`}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>ATMOSPHERE & INTERIORS</span>
            <h2 className={styles.sectionTitle}>SLOW Club Gallery</h2>
            <p className={styles.sectionDesc}>
              Discover the venue, dancefloor, mezzanine, and cocktail bar during live events.
            </p>
          </div>
          <VenueGallery isEnglish={true} images={slowGalleryImages} variant="slow" title="SLOW Club Gallery" />
        </div>

        {/* 5. Main Space & Setups */}
        <div className={`${styles.section} reveal`}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>MAIN VENUE</span>
            <h2 className={styles.sectionTitle}>SLOW Club & Layout Configurations</h2>
            <p className={styles.sectionDesc}>
              A modular venue designed by mode:lina™, blending industrial heritage with acoustic engineering and full technical rider support.
            </p>
          </div>

          <div className={styles.mainSpaceCard}>
            <div className={styles.mainSpaceImageWrapper}>
              <Image
                src="/slow-offer/Dancefloor-1_SLOW.jpg"
                alt="SLOW Club — main event space"
                fill
                className={styles.mainSpaceImage}
                sizes="(max-width: 992px) 100vw, 50vw"
              />
            </div>
            <div className={styles.mainSpaceBody}>
              <span className={styles.mainSpaceEyebrow}>HEART OF THE CLUB</span>
              <h3 className={styles.mainSpaceTitle}>SLOW Club — 200 m²</h3>
              <p className={styles.mainSpaceText}>
                A seamless combination of dancefloor, cocktail bar, intimate mezzanine, and comfortable lounge booths. The adaptable layout allows for a smooth transition from presentations and daytime networking to evening banquets and dance parties.
              </p>
              <ul className={styles.specsList}>
                <li>Up to 200 standing guests</li>
                <li>200 m² total space</li>
                <li>Dancefloor & lounge booth seating</li>
                <li>Mezzanine overlooking the main hall</li>
                <li>Dedicated cocktail bar</li>
                <li>Full DJ & multimedia rider</li>
              </ul>
            </div>
          </div>

          <div className={styles.setupsGrid}>
            <div className={styles.setupCard}>
              <div className={styles.setupHeader}>
                <h4 className={styles.setupTitle}>Club & Party</h4>
                <Image src="/icons/Artboard1.svg" alt="Club & Party" width={32} height={32} className={styles.setupIcon} />
              </div>
              <div className={styles.setupCapacity}>Up to 200 guests</div>
              <p className={styles.setupDesc}>
                Standing and cocktail setup. Full access to the dancefloor, bar, and mezzanine. Ideal for corporate bashes, galas, live concerts, and product launches.
              </p>
            </div>

            <div className={styles.setupCard}>
              <div className={styles.setupHeader}>
                <h4 className={styles.setupTitle}>Cocktail & Networking</h4>
                <Image src="/icons/Artboard3.svg" alt="Cocktail" width={32} height={32} className={styles.setupIcon} />
              </div>
              <div className={styles.setupCapacity}>Up to 120 guests</div>
              <p className={styles.setupDesc}>
                Cocktail party formula with high tables, lounge booths, and effortless movement between the bar and mezzanine. Perfect for business receptions and anniversaries.
              </p>
            </div>

            <div className={styles.setupCard}>
              <div className={styles.setupHeader}>
                <h4 className={styles.setupTitle}>Lounge & Seated</h4>
                <Image src="/icons/Artboard2.svg" alt="Seated" width={32} height={32} className={styles.setupIcon} />
              </div>
              <div className={styles.setupCapacity}>Up to 70 guests</div>
              <p className={styles.setupDesc}>
                Seated lounge arrangement with presentation space, mezzanine, and workshop area. Tailored for panels, listening sessions, and private talks.
              </p>
            </div>
          </div>
        </div>

        {/* 6. Real Event Setups */}
        <div className={`${styles.section} reveal`}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>EVENT REALIZATIONS</span>
            <h2 className={styles.sectionTitle}>Previous Event Setups at SLOW</h2>
            <p className={styles.sectionDesc}>
              From exclusive themed galas and casino nights to corporate workshops with full banquet catering — explore how our space transforms for live events.
            </p>
          </div>

          <div className={styles.realizationsGrid}>
            {/* Realization 1: Casino / Themed Gala */}
            <div className={styles.realizationCard}>
              <div className={styles.realizationImageWrapper}>
                <Image
                  src="/slow/slow-prev-events/IMG_7587.jpeg"
                  alt="Casino and themed gala setup at SLOW"
                  fill
                  className={styles.realizationImage}
                  sizes="(max-width: 992px) 100vw, 50vw"
                />
              </div>
              <div className={styles.realizationBody}>
                <span className={styles.realizationTag}>THEMED EVENT · CORPORATE GALA</span>
                <h4 className={styles.realizationTitle}>Casino & Interactive Entertainment</h4>
                <p className={styles.realizationText}>
                  A Las Vegas & Wall Street themed corporate party. The open club floor transformed with professional gaming tables (roulette, blackjack), illuminated photo booth, and red velvet stanchion ropes.
                </p>
                <ul className={styles.realizationBullets}>
                  <li>Casino tables with glowing cyan LED rims</li>
                  <li>Branded welcome easel & illuminated photo zone</li>
                  <li>Dynamic ambient UV/cyan club lighting</li>
                </ul>
              </div>
            </div>

            {/* Realization 2: Catering & Workshops */}
            <div className={styles.realizationCard}>
              <div className={styles.realizationImageWrapper}>
                <Image
                  src="/slow/slow-prev-events/IMG_7590.jpeg"
                  alt="Catering buffet and workshop setup at SLOW"
                  fill
                  className={styles.realizationImage}
                  sizes="(max-width: 992px) 100vw, 50vw"
                />
              </div>
              <div className={styles.realizationBody}>
                <span className={styles.realizationTag}>CATERING · WORKSHOP & RECEPTION</span>
                <h4 className={styles.realizationTitle}>Catering Station & Coffee Break</h4>
                <p className={styles.realizationText}>
                  A full-service hospitality and banquet counter arranged along the mezzanine railing, featuring a continuous coffee/tea bar, seasonal garland decor, and custom directional zone signage.
                </p>
                <ul className={styles.realizationBullets}>
                  <li>Espresso machine & hot beverage urn station</li>
                  <li>Pastry and banquet snack presentation</li>
                  <li>Custom event branding and directional signage</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 7. USPs / The SLOW Experience */}
        <div className={`${styles.section} reveal`}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>STANDARDS & FEATURES</span>
            <h2 className={styles.sectionTitle}>Why SLOW?</h2>
            <p className={styles.sectionDesc}>
              Three defining pillars that make every event at SLOW unforgettable.
            </p>
          </div>

          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <span className={styles.featureNumber}>01 / ACOUSTICS</span>
              <h4 className={styles.featureTitle}>Audiophile Sound</h4>
              <p className={styles.featureText}>
                Interiors designed in partnership with architecture studio mode:lina™. Dedicated acoustic treatment and a high-fidelity sound system ensure crystal-clear audio for keynote speeches and DJ sets alike.
              </p>
            </div>

            <div className={styles.featureCard}>
              <span className={styles.featureNumber}>02 / BAR</span>
              <h4 className={styles.featureTitle}>Artisanal Mixology</h4>
              <p className={styles.featureText}>
                Experienced bartenders and a bespoke cocktail menu crafted from artisanal ingredients. We provide complete bar service, custom branded welcome drinks, and tailored open-bar packages.
              </p>
            </div>

            <div className={styles.featureCard}>
              <span className={styles.featureNumber}>03 / DESIGN</span>
              <h4 className={styles.featureTitle}>Light & Heritage Architecture</h4>
              <p className={styles.featureText}>
                Housed in the historic 1930s Wielkopolska Craft Guild building, paired with dynamic RGBW/UV scene lighting, neon accents, and velvet lounges for an immersive cinematic ambiance.
              </p>
            </div>
          </div>
        </div>

        {/* 7. Additional Breakout Spaces */}
        <div className={`${styles.section} reveal`}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>EXPAND YOUR EVENT</span>
            <h2 className={styles.sectionTitle}>Breakout Rooms in the Building</h2>
            <p className={styles.sectionDesc}>
              Need dedicated spaces for breakout workshops, production offices, or a private greenroom? The same historic building offers additional rooms available for hire.
            </p>
          </div>

          <div className={styles.breakoutGrid}>
            {/* Conference Room */}
            <div className={styles.breakoutCard}>
              <div className={styles.breakoutImageWrapper}>
                <Image
                  src="/spaces/sala-tv.jpg"
                  alt="Conference Room"
                  fill
                  className={styles.breakoutImage}
                  sizes="(max-width: 992px) 100vw, 50vw"
                />
              </div>
              <div className={styles.breakoutBody}>
                <span className={styles.breakoutEyebrow}>MEETING ROOM · 19 M²</span>
                <h4 className={styles.breakoutTitle}>Conference Room</h4>
                <ul className={styles.breakoutSpecs}>
                  <li>12 seated (boardroom layout)</li>
                  <li>Large TV screen and multimedia setup</li>
                  <li>Bright, focused environment for work sessions</li>
                  <li>Available separately or bundled with SLOW</li>
                </ul>
                <p className={styles.breakoutNote}>
                  Ideal for board meetings, client presentations, and focused workshops.
                </p>
              </div>
            </div>

            {/* U'Patka Room */}
            <div className={styles.breakoutCard}>
              <div className={styles.breakoutImageWrapper}>
                <Image
                  src="/spaces/upatki.jpg"
                  alt="U'Patka Room"
                  fill
                  className={styles.breakoutImage}
                  sizes="(max-width: 992px) 100vw, 50vw"
                />
              </div>
              <div className={styles.breakoutBody}>
                <span className={styles.breakoutEyebrow}>MULTI-PURPOSE HALL · 42 M²</span>
                <h4 className={styles.breakoutTitle}>U&apos;Patka Room</h4>
                <ul className={styles.breakoutSpecs}>
                  <li>42 m² versatile space</li>
                  <li>Banquet and cocktail table arrangements</li>
                  <li>Chillout zone, greenroom, or mini dancefloor</li>
                  <li>Available separately or bundled with SLOW</li>
                </ul>
                <p className={styles.breakoutNote}>
                  A versatile room ideal as a chillout lounge, artist backstage, or an independent space for private gatherings.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 8. Location */}
        <div className={`${styles.section} reveal`}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>HEART OF POZNAŃ</span>
            <h2 className={styles.sectionTitle}>Location & Accessibility</h2>
            <p className={styles.sectionDesc}>
              SLOW is located in the very heart of Poznań, within the historic Wielkopolska Craft Guild building at ul. Niezłomnych 2 — just a short walk from the Main Railway Station (PKP) and the Poznań International Fair (MTP).
            </p>
          </div>

          <div className={styles.locationBox}>
            <a
              href="https://maps.app.goo.gl/GAQgNHoqGhnbCuqp9"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.locationAddress}
            >
              ul. Niezłomnych 2, 61-894 Poznań
            </a>
            <div className={styles.transitGrid}>
              <div className={styles.transitItem}>
                <Image src="/icons/Artboard4.svg" alt="Train" width={52} height={52} className={styles.transitIcon} />
                <div>
                  <div className={styles.transitLabel}>Main Railway Station</div>
                  <div className={styles.transitValue}>0.8 km</div>
                </div>
              </div>
              <div className={styles.transitItem}>
                <Image src="/icons/Artboard5.svg" alt="Airport" width={52} height={52} className={styles.transitIcon} />
                <div>
                  <div className={styles.transitLabel}>Poznań-Ławica Airport</div>
                  <div className={styles.transitValue}>6.4 km</div>
                </div>
              </div>
              <div className={styles.transitItem}>
                <Image src="/icons/Artboard6.svg" alt="Public Transport" width={52} height={52} className={styles.transitIcon} />
                <div>
                  <div className={styles.transitLabel}>Public Transit Access</div>
                  <div className={styles.transitValue}>Bus & Tram</div>
                </div>
              </div>
            </div>

            <iframe
              src="https://maps.google.com/maps?q=Slow%20Club%20Poznan&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className={styles.mapEmbed}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SLOW Poznań Map"
            />
          </div>
        </div>

        {/* 9. Final B2B Booking & Inquiry Card */}
        <div id="inquire" className={`${styles.inquiryCard} reveal`}>
          <div className={styles.inquiryInner}>
            <span className={styles.inquiryEyebrow}>B2B & EVENT HIRE</span>
            <h2 className={styles.inquiryTitle}>Plan Your Event at SLOW</h2>
            <p className={styles.inquiryDesc}>
              Tell us about your event vision — we will prepare a bespoke estimate, recommend optimal room configurations, and curate a bar package tailored to your exact needs.
            </p>

            <div className={styles.inquiryContacts}>
              <div className={styles.inquiryItem}>
                <span className={styles.inquiryRole}>Event Manager & B2B Hire</span>
                <a href="mailto:katya@tamaklub.pl" className={styles.inquiryEmail}>
                  katya@tamaklub.pl
                </a>
              </div>
              <div className={styles.inquiryItem}>
                <span className={styles.inquiryRole}>Table Bookings & Club Packages</span>
                <a href="mailto:events@slowclub.pl" className={styles.inquiryEmail}>
                  events@slowclub.pl
                </a>
              </div>
            </div>

            <div className={styles.inquiryActions}>
              <a
                href="mailto:katya@tamaklub.pl"
                className="btn-slow"
                id="slow-offer-enquire-btn"
              >
                INQUIRE NOW →
              </a>
              <Link
                href="/en/slowclub/contact"
                className={styles.btnSlowOutline}
                id="slow-offer-contact-btn"
              >
                CONTACT PAGE
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
