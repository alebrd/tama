import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import VenueGallery from "@/components/VenueGallery";
import MainHallImageSwitcher from "@/components/MainHallImageSwitcher";

export const metadata: Metadata = {
  title: "Venue Rental & Event Offer — TAMA Poznań",
  description: "Monumental industrial event space in the heart of Poznań for up to 1,000 guests. Conferences, galas, banquets, and concerts. Explore room layouts, technical rider, and enquire.",
};

const stats = [
  { value: "1,000", label: "Max Guests Capacity" },
  { value: "1,100 m²", label: "Total Complex Area" },
  { value: "5 Rooms", label: "Modular Event Zones" },
  { value: "Central", label: "0.8 km from Main Station" },
];

const eventTypes = [
  "Conferences & Congresses",
  "Corporate Galas & Anniversaries",
  "Seated Banquets",
  "Company Celebrations & Teambuilding",
  "Live Concerts & Performances",
  "Fashion Shows & Product Launches",
  "Trade Fairs & Exhibitions",
  "Hackathons & Industry Meetups",
];

const mailtoSubject = encodeURIComponent("Event Rental Inquiry TAMA: [Date & Event Type]");
const mailtoBody = encodeURIComponent(
  `Hello,

I would like to inquire about date availability and rental options at TAMA Club:
- Planned event date: 
- Estimated guest count: 
- Event type (conference / gala / banquet / concert / other): 
- Preferred spaces / rooms: 
- Technical / catering requirements: 

Please provide an initial estimate and availability.

Best regards,`
);

export default function VenuePage() {
  return (
    <div className={styles.page}>
      <div className="container">

        {/* 1. Hero Section */}
        <div className={`${styles.hero} reveal`}>
          <p className={styles.eyebrow}>EVENT SPACE · POZNAŃ CITY CENTER</p>
          <h1 className={`${styles.title} text-gradient`}>Host Your Event at TAMA</h1>
          <p className={styles.sub}>
            Over 1,100 m² of revitalized post-industrial space inside the historic Wielkopolska Chamber of Crafts building.
            A monumental venue for prestigious conferences, corporate galas, seated banquets, and concerts for groups up to 1,000 guests.
          </p>
          <div className={styles.heroCta}>
            <a href="#inquire" className="btn">
              INQUIRE NOW →
            </a>
            <a href="#gallery" className={styles.btnHeroOutline}>
              EXPLORE GALLERY ↓
            </a>
          </div>
        </div>

        {/* 2. Key Metrics Strip */}
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
            <span className={styles.sectionEyebrow}>EVENT FORMATS</span>
            <h2 className={styles.sectionTitle}>What We Host</h2>
            <p className={styles.sectionDesc}>
              From intimate executive summits and VIP banquets to large-scale theater congresses and monumental concert productions.
            </p>
          </div>
          <div className={styles.tagGrid}>
            {eventTypes.map((type) => (
              <span key={type} className={styles.tag}>{type}</span>
            ))}
          </div>
        </div>

        {/* 4. Visual Showcase: Gallery (Elevated) */}
        <div id="gallery" className={`${styles.section} reveal`}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>ATMOSPHERE &amp; INTERIORS</span>
            <h2 className={styles.sectionTitle}>TAMA Complex Gallery</h2>
            <p className={styles.sectionDesc}>
              Historic industrial heritage seamlessly integrated with concert-grade audiovisual technology, stage lighting, and custom design.
            </p>
          </div>
          <VenueGallery isEnglish={true} variant="tama" />
        </div>

        {/* 5. Real Setups Matrix (Photographic Cards) */}
        <div className={`${styles.section} reveal`}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>CAPACITIES &amp; CONFIGURATIONS</span>
            <h2 className={styles.sectionTitle}>Main Hall Layout Options</h2>
            <p className={styles.sectionDesc}>
              Over 500 m² of versatile open floor space in the Main Hall allows precise customization for your event&apos;s exact agenda and audience flow.
            </p>
          </div>

          <div className={styles.setupsGrid}>
            {/* Setup 1: Banquet */}
            <div className={styles.setupCard}>
              <div className={styles.setupImageWrapper}>
                <Image
                  src="/offer/arturAENnowicki-2992.jpg"
                  alt="Seated banquet layout at TAMA Club"
                  fill
                  className={styles.setupImage}
                  sizes="(max-width: 992px) 100vw, 33vw"
                />
              </div>
              <div className={styles.setupBody}>
                <div className={styles.setupHeader}>
                  <div className={styles.setupTitleBlock}>
                    <span className={styles.setupTag}>BANQUET · GALA &amp; SEATED DINNER</span>
                    <h3 className={styles.setupTitle}>Banquet Layout (250 Places)</h3>
                  </div>
                  <div className={styles.setupIconBadge} title="Banquet layout">
                    <Image
                      src="/icons/Artboard3.svg"
                      alt="Banquet seating layout icon"
                      width={28}
                      height={28}
                      className={styles.setupIcon}
                    />
                  </div>
                </div>
                <p className={styles.setupText}>
                  25 ten-person round banquet tables with full formal dinner service and white linens. Generous space featuring a central dance floor, presentation stage for live music or awards, and direct bar access.
                </p>
                <ul className={styles.setupBullets}>
                  <li>25 tables (10 guests each) · 250 seated capacity total</li>
                  <li>Spacious circulation aisles and dedicated dance floor</li>
                  <li>Dedicated perimeter buffer for hot and cold catering buffets</li>
                </ul>
              </div>
            </div>

            {/* Setup 2: Theater / Conference */}
            <div className={styles.setupCard}>
              <div className={styles.setupImageWrapper}>
                <Image
                  src="/offer/arturAENnowicki-2942.jpg"
                  alt="Conference theater layout at TAMA Club"
                  fill
                  className={styles.setupImage}
                  sizes="(max-width: 992px) 100vw, 33vw"
                />
              </div>
              <div className={styles.setupBody}>
                <div className={styles.setupHeader}>
                  <div className={styles.setupTitleBlock}>
                    <span className={styles.setupTag}>THEATER / CONFERENCE</span>
                    <h3 className={styles.setupTitle}>Theater Layout (400 Places)</h3>
                  </div>
                  <div className={styles.setupIconBadge} title="Theater and conference layout">
                    <Image
                      src="/icons/Artboard2.svg"
                      alt="Theater and conference layout icon"
                      width={28}
                      height={28}
                      className={styles.setupIcon}
                    />
                  </div>
                </div>
                <p className={styles.setupText}>
                  Classical amphitheater seating oriented toward the concert-grade stage. Features a giant central display, 5 side multimedia projection screens, and a mezzanine balcony overview for attendees.
                </p>
                <ul className={styles.setupBullets}>
                  <li>400 seated places in conference theater rows</li>
                  <li>Full-width stage with professional keynote lighting and lectern</li>
                  <li>Wireless microphone packs and dedicated AV control booth</li>
                </ul>
              </div>
            </div>

            {/* Setup 3: Concert / Standing */}
            <div className={styles.setupCard}>
              <div className={styles.setupImageWrapper}>
                <Image
                  src="/offer/AEN04241.jpg"
                  alt="Concert and event layout at TAMA Club"
                  fill
                  className={styles.setupImage}
                  sizes="(max-width: 992px) 100vw, 33vw"
                />
              </div>
              <div className={styles.setupBody}>
                <div className={styles.setupHeader}>
                  <div className={styles.setupTitleBlock}>
                    <span className={styles.setupTag}>CONCERT &amp; EVENT</span>
                    <h3 className={styles.setupTitle}>Concert Layout (Up to 1,000 Places)</h3>
                  </div>
                  <div className={styles.setupIconBadge} title="Concert and event layout">
                    <Image
                      src="/icons/Artboard1.svg"
                      alt="Concert and event layout icon"
                      width={28}
                      height={28}
                      className={styles.setupIcon}
                    />
                  </div>
                </div>
                <p className={styles.setupText}>
                  Maximizing the open cubic volume of the Main Hall. Concert touring rider compliance, dynamic club lightshow, 2 independent bars, and direct backstage dressing room access for performers.
                </p>
                <ul className={styles.setupBullets}>
                  <li>1,000 standing capacity or 20 cocktail tables + 800 standing</li>
                  <li>Line-array sound system meeting top international tour riders</li>
                  <li>Dynamic lighting show (intelligent moving heads, strobes, haze)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 6. The 5-Space Complex Modularity */}
        <div className={`${styles.section} reveal`}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>MODULARITY &amp; SPATIAL ARCHITECTURE</span>
            <h2 className={styles.sectionTitle}>The 5-Room Complex</h2>
            <p className={styles.sectionDesc}>
              Over 1,100 m² divided into 5 independent zones. Book the entire venue exclusively or combine select spaces for a tailored attendee journey (plenary keynote + banquet dinner + afterparty + VIP suite).
            </p>
          </div>

          <div className={styles.spacesGrid}>
            {/* Space 1: Main Room (Hero Card) */}
            <div className={`${styles.spaceCard} ${styles.spaceCardHero}`}>
              <MainHallImageSwitcher isEnglish={true} />
              <div className={styles.spaceBody}>
                <span className={styles.spaceMeta}>MAIN HALL · OVER 500 M² · UP TO 1,000 GUESTS</span>
                <h3 className={styles.spaceTitle}>Main Hall</h3>
                <p className={styles.spaceDesc}>
                  The central powerhouse of TAMA. Features a massive concert stage, mezzanine viewing balcony, 5 side multimedia screens, line-array acoustics, and the primary cocktail bar.
                </p>
                <ul className={styles.spaceBullets}>
                  <li>Tour-grade stage with direct ground-level load-in ramp</li>
                  <li>Flexible reconfiguration (banquet, conference, live show)</li>
                  <li>Dedicated technical control booth for sound and light engineers</li>
                </ul>
              </div>
            </div>

            {/* Space 2: Chandelier Room */}
            <div className={styles.spaceCard}>
              <div className={styles.spaceImageWrapper}>
                <Image
                  src="/offer/ARTUR_AEN_NOWICKI-5262.jpg"
                  alt="Chandelier Room at TAMA"
                  fill
                  className={styles.spaceImage}
                  sizes="(max-width: 992px) 100vw, 50vw"
                />
              </div>
              <div className={styles.spaceBody}>
                <span className={styles.spaceMeta}>CHANDELIER ROOM · 150 M² · UP TO 120 GUESTS</span>
                <h3 className={styles.spaceTitle}>Chandelier Room</h3>
                <p className={styles.spaceDesc}>
                  A prestigious space distinguished by historic elegance: crystal chandeliers, original stained glass windows, parquet floors, and an independent cocktail bar.
                </p>
                <ul className={styles.spaceBullets}>
                  <li>Ideal for welcome drinks, catering banquets, or executive networking</li>
                  <li>Dedicated buffet counter area and stylish lounge sofa arrangements</li>
                  <li>Directly adjacent to the grand staircase foyer and smoking lounge</li>
                </ul>
              </div>
            </div>

            {/* Space 3: SLOW Space */}
            <div className={styles.spaceCard}>
              <div className={styles.spaceImageWrapper}>
                <Image
                  src="/spaces/slow.jpg"
                  alt="SLOW Modular Space"
                  fill
                  className={styles.spaceImage}
                  sizes="(max-width: 992px) 100vw, 50vw"
                />
              </div>
              <div className={styles.spaceBody}>
                <span className={styles.spaceMeta}>SLOW SPACE · 200 M² · UP TO 200 GUESTS</span>
                <h3 className={styles.spaceTitle}>SLOW Club &amp; Lounge</h3>
                <p className={styles.spaceDesc}>
                  A modular, post-industrial club venue created in collaboration with acclaimed architecture studio mode:lina™. Perfect for breakout workshops, seminars, or conference afterparties.
                </p>
                <ul className={styles.spaceBullets}>
                  <li>Audiophile acoustic treatment and intimate mood lighting</li>
                  <li>Craft cocktail bar counter and mezzanine lounge</li>
                  <li>Operates completely independently or as an integrated sub-space of TAMA</li>
                </ul>
              </div>
            </div>

            {/* Space 4: Sala U'Patki */}
            <div className={styles.spaceCard}>
              <div className={styles.spaceImageWrapper}>
                <Image
                  src="/spaces/upatki.jpg"
                  alt="U'Patka Room at TAMA"
                  fill
                  className={styles.spaceImage}
                  sizes="(max-width: 992px) 100vw, 50vw"
                />
              </div>
              <div className={styles.spaceBody}>
                <span className={styles.spaceMeta}>U&apos;PATKA ROOM · 42 M² · UP TO 35 GUESTS</span>
                <h3 className={styles.spaceTitle}>U&apos;Patka Room</h3>
                <p className={styles.spaceDesc}>
                  An intimate, character-rich room ideal as a private VIP lounge, executive meeting salon, photo studio, or quiet discussion area.
                </p>
                <ul className={styles.spaceBullets}>
                  <li>Accommodates cocktail high-tops, banquet setups, or lounge armchairs</li>
                  <li>Discrete positioning ensures complete privacy for VIP guests and executives</li>
                </ul>
              </div>
            </div>

            {/* Space 5: Sala Konferencyjna */}
            <div className={styles.spaceCard}>
              <div className={styles.spaceImageWrapper}>
                <Image
                  src="/conference/sala-konferencyjna.jpg"
                  alt="Conference Boardroom at TAMA"
                  fill
                  className={styles.spaceImage}
                  sizes="(max-width: 992px) 100vw, 50vw"
                />
              </div>
              <div className={styles.spaceBody}>
                <span className={styles.spaceMeta}>CONFERENCE ROOM · 19 M² · UP TO 12 GUESTS</span>
                <h3 className={styles.spaceTitle}>Conference Boardroom</h3>
                <p className={styles.spaceDesc}>
                  Functional meeting room equipped with a central conference table and high-speed Wi-Fi. Also serves as an organizer production headquarters or speaker green room.
                </p>
                <ul className={styles.spaceBullets}>
                  <li>Dedicated operational workspace for agencies and production staff</li>
                  <li>Quiet backstage administrative sanctuary during large productions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 7. Technical Infrastructure & Rider (4 Pillars) */}
        <div className={`${styles.section} reveal`}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>PRODUCTION INFRASTRUCTURE</span>
            <h2 className={styles.sectionTitle}>Why TAMA? Technical Superiority</h2>
            <p className={styles.sectionDesc}>
              One of Poland&apos;s most thoroughly equipped concert and event venues. Complete touring-grade equipment included as standard, eliminating third-party rental costs.
            </p>
          </div>

          <div className={styles.techGrid}>
            <div className={styles.techCard}>
              <span className={styles.techNumber}>01 / SOUND</span>
              <h3 className={styles.techTitle}>Concert Sound</h3>
              <p className={styles.techText}>
                Top-tier line-array acoustic system, digital mixing consoles, and tour-standard wireless microphones. Delivers pin-sharp speech clarity and thunderous live concert power.
              </p>
            </div>

            <div className={styles.techCard}>
              <span className={styles.techNumber}>02 / MULTIMEDIA</span>
              <h3 className={styles.techTitle}>Lighting &amp; 5 Screens</h3>
              <p className={styles.techText}>
                Comprehensive stage lighting rig: intelligent moving heads, stage wash, and LED floods. Includes 5 synchronized side multimedia screens plus a large main stage LED wall.
              </p>
            </div>

            <div className={styles.techCard}>
              <span className={styles.techNumber}>03 / STAGE</span>
              <h3 className={styles.techTitle}>Stage &amp; Green Rooms</h3>
              <p className={styles.techText}>
                Full-scale concert stage with overhead trussing. Professional artist and speaker backstage quarters with vanity mirrors, private bathrooms, and en-suite showers.
              </p>
            </div>

            <div className={styles.techCard}>
              <span className={styles.techNumber}>04 / LOGISTICS</span>
              <h3 className={styles.techTitle}>Load-in Ramp &amp; Power</h3>
              <p className={styles.techText}>
                Direct ground-level technical vehicle access and load-in ramp straight to the stage floor. High-capacity 3-phase power distribution (32A, 63A) with certified distribution boards.
              </p>
            </div>
          </div>
        </div>

        {/* 8. Corporate Realizations & Brand Trust */}
        <div className={`${styles.section} reveal`}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>TRUSTED BY LEADING BRANDS</span>
            <h2 className={styles.sectionTitle}>Selected B2B Realizations</h2>
            <p className={styles.sectionDesc}>
              See how renowned international companies transformed TAMA&apos;s historic post-industrial spaces for their benchmark corporate gatherings.
            </p>
          </div>

          <div className={styles.realizationsGrid}>
            {/* Realization 1: NIVEA Gala */}
            <div className={styles.realizationCard}>
              <div className={styles.realizationImageWrapper}>
                <Image
                  src="/offer/arturAENnowicki-2970.jpg"
                  alt="Blue carpet corporate gala setup for NIVEA at TAMA Club"
                  fill
                  className={styles.realizationImage}
                  sizes="(max-width: 992px) 100vw, 50vw"
                />
              </div>
              <div className={styles.realizationBody}>
                <span className={styles.realizationTag}>CORPORATE GALA · ANNIVERSARY · BANQUET</span>
                <h3 className={styles.realizationTitle}>Blue Carpet Gala (NIVEA)</h3>
                <p className={styles.realizationText}>
                  A full-venue anniversary gala production. Grand staircase foyer styled into a branded blue-carpet arrival zone, formal seated dinner in the Chandelier Room, and plenary awards ceremony in the Main Hall.
                </p>
                <ul className={styles.realizationBullets}>
                  <li>Staircase arrival and foyer styled with architectural uplighting and photo wall</li>
                  <li>Seated banquet with warm and cold buffet stations under the crystal chandeliers</li>
                  <li>Plenary session with comprehensive stage lighting and synchronized multimedia presentation</li>
                </ul>
              </div>
            </div>

            {/* Realization 2: AWS / GIC Tech Conference */}
            <div className={styles.realizationCard}>
              <div className={styles.realizationImageWrapper}>
                <Image
                  src="/offer/artur_aen_nowicki-0049.jpg"
                  alt="Pre-GIC Party powered by AWS at TAMA Club"
                  fill
                  className={styles.realizationImage}
                  sizes="(max-width: 992px) 100vw, 50vw"
                />
              </div>
              <div className={styles.realizationBody}>
                <span className={styles.realizationTag}>TECH SECTOR · B2B CONGRESS · NETWORKING</span>
                <h3 className={styles.realizationTitle}>Pre-GIC Party Powered by AWS</h3>
                <p className={styles.realizationText}>
                  An international gaming and technology summit reception for Amazon Web Services and the Game Industry Conference. Arranged in a high-energy networking format with multiple bar zones and illuminated branding totems.
                </p>
                <ul className={styles.realizationBullets}>
                  <li>Illuminated vertical branding totems for AWS for Games and GIC</li>
                  <li>Cocktail standing format optimized for seamless executive networking</li>
                  <li>Dynamic club ambient lighting synchronized with client corporate brand palette</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 9. Location & Logistics */}
        <div className={`${styles.section} reveal`}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>LOCATION &amp; LOGISTICS</span>
            <h2 className={styles.sectionTitle}>In the Heart of Poznań</h2>
            <p className={styles.sectionDesc}>
              TAMA is located inside the historic Wielkopolska Chamber of Crafts building, only 800 meters from the Main Railway Station (Poznań Główny) and the Poznań International Fair (MTP). In the immediate vicinity, you will find numerous business hotels and convenient parking areas.
            </p>
          </div>

          <div className={styles.locationBox}>
            <a 
              href="https://www.google.com/maps/search/Tama+Klub+Poznan"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.locationAddress}
            >
              ul. Niezłomnych 2, 61-894 Poznań (Chamber of Crafts Building) →
            </a>

            <div className={styles.transitGrid}>
              <div className={styles.transitItem}>
                <Image src="/icons/Artboard4.svg" alt="Main Railway Station" width={52} height={52} className={styles.transitIcon} />
                <div>
                  <div className={styles.transitLabel}>Main Railway Station (PKP)</div>
                  <div className={styles.transitValue}>0.8 km (10 min walk)</div>
                </div>
              </div>

              <div className={styles.transitItem}>
                <Image src="/icons/Artboard5.svg" alt="Airport" width={52} height={52} className={styles.transitIcon} />
                <div>
                  <div className={styles.transitLabel}>Poznań-Ławica Airport</div>
                  <div className={styles.transitValue}>6.4 km (15 min drive)</div>
                </div>
              </div>

              <div className={styles.transitItem}>
                <Image src="/icons/Artboard6.svg" alt="Public Transport" width={52} height={52} className={styles.transitIcon} />
                <div>
                  <div className={styles.transitLabel}>Public Transit Access</div>
                  <div className={styles.transitValue}>Tram &amp; Bus (Wierzbięce Hub)</div>
                </div>
              </div>
            </div>

            <iframe
              src="https://maps.google.com/maps?q=TAMA%20Klub%20Poznan&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className={styles.mapEmbed}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="TAMA Poznań Google Map"
            />
          </div>
        </div>

        {/* 10. Dedicated B2B Booking Card */}
        <div id="inquire" className={`${styles.bookingCard} reveal`}>
          <div className={styles.bookingInner}>
            <span className={styles.bookingEyebrow}>BOOKINGS &amp; CUSTOM ESTIMATES</span>
            <h2 className={styles.bookingTitle}>Plan Your Next Event at TAMA</h2>
            <p className={styles.bookingDesc}>
              Connect directly with our B2B rentals and production team. We will help you design the optimal floorplan, AV technical schedule, and tailored catering offer suited to your vision.
            </p>

            <div className={styles.bookingContacts}>
              <div className={styles.bookingItem}>
                <span className={styles.bookingRole}>B2B Space Rentals &amp; Events</span>
                <span style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ffffff" }}>Katya</span>
                <a href={`mailto:katya@tamaklub.pl?subject=${mailtoSubject}&body=${mailtoBody}`} className={styles.bookingEmail}>
                  katya@tamaklub.pl
                </a>
              </div>

              <div className={styles.bookingItem}>
                <span className={styles.bookingRole}>Production Office &amp; General Inquiries</span>
                <span style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ffffff" }}>TAMA Club</span>
                <a href="mailto:kontakt@tamaklub.pl" className={styles.bookingEmail}>
                  kontakt@tamaklub.pl
                </a>
              </div>
            </div>

            <div className={styles.bookingActions}>
              <a
                href={`mailto:katya@tamaklub.pl?subject=${mailtoSubject}&body=${mailtoBody}`}
                className="btn"
                id="tama-offer-enquire-btn"
              >
                INQUIRE NOW →
              </a>
              <Link
                href="/en/contact"
                className={styles.btnHeroOutline}
                id="tama-offer-contact-btn"
              >
                CONTACT PAGE
              </Link>
            </div>

            <p className={styles.bookingNote}>
              * We usually reply within 24 hours with an initial cost estimate and room recommendation.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

