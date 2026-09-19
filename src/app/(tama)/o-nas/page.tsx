import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "O nas — TAMA",
  description: "Historia, tożsamość i architektura klubu TAMA w zabytkowym gmachu Wielkopolskiej Izby Rzemieślniczej w Poznaniu.",
};

export default function ONasPage() {
  return (
    <div className={styles.page}>
      <div className="container">

        {/* ─── Hero Header ───────────────────────────────────────────── */}
        <section className={`${styles.hero} reveal`}>
          <p className={styles.eyebrow}>HISTORIA · TOŻSAMOŚĆ · PRZESTRZEŃ</p>
          <h1 className={`${styles.title} text-gradient`}>O Nas</h1>
          <p className={styles.sub}>
            TAMA to wiodący klub muzyki elektronicznej i unikalna przestrzeń eventowa w sercu Poznania.
            Miejsce zrodzone z pasji do bezkompromisowej muzyki, architektury i społeczności.
          </p>
        </section>

        {/* ─── Chapter 1: Heritage & Architecture ───────────────────── */}
        <section className={`${styles.chapter} reveal`}>
          <div className={styles.chapterText}>
            <span className={styles.chapterEyebrow}>DZIEDZICTWO I ARCHITEKTURA</span>
            <h2 className={styles.chapterTitle}>90 Lat Historii w Sercu Poznania</h2>
            <p className={styles.chapterParagraph}>
              TAMA mieści się w zrewitalizowanym, zabytkowym gmachu dawnej Wielkopolskiej Izby Rzemieślniczej przy ul. Niezłomnych 2, wzniesionym w 1929 roku. Monumentalny budynek z okresu dwudziestolecia międzywojennego zachował swój unikalny, historyczny charakter: surowe detale, wysokie sklepienia, reprezentacyjne klatki schodowe oraz witraże.
            </p>
            <p className={styles.chapterParagraph}>
              Współczesna rewitalizacja przestrzeni pozwoliła połączyć autentyczną duszę 90-letniego gmachu z bezkompromisowym, industrialnym klimatem. Ponad 1 100 m² otwartej powierzchni stanowi dziś jedną z najbardziej charakterystycznych i inspirujących przestrzeni kulturalnych w Polsce.
            </p>
          </div>
          <div className={styles.chapterImageWrapper}>
            <Image
              src="/spaces/main-hall.jpg"
              alt="Architektura gmachu TAMY — hol i klatka schodowa"
              fill
              className={styles.chapterImage}
              sizes="(max-width: 900px) 100vw, 50vw"
              priority
            />
          </div>
        </section>

        {/* ─── Manifesto / Quote Block ──────────────────────────────── */}
        <section className={`${styles.manifesto} reveal`}>
          <p className={styles.manifestoText}>
            „TAMA to nie tylko mury i przestrzeń — to przede wszystkim ludzie, energia dźwięku i społeczność, która tworzy to miejsce od pierwszego dnia.”
          </p>
          <p className={styles.manifestoAuthor}>— MANIFEST KLUBU TAMA</p>
        </section>

        {/* ─── Chapter 2: Music, Sound & Tech ────────────────────────── */}
        <section className={`${styles.chapter} ${styles.chapterReverse} reveal`}>
          <div className={styles.chapterImageWrapper}>
            <Image
              src="/spaces/main-room.jpg"
              alt="Sala Główna TAMY — nagłośnienie i oświetlenie sceniczne"
              fill
              className={styles.chapterImage}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
          <div className={styles.chapterText}>
            <span className={styles.chapterEyebrow}>MUZYKA I TECHNOLOGIA</span>
            <h2 className={styles.chapterTitle}>Dźwięk, Światło i Produkcja</h2>
            <p className={styles.chapterParagraph}>
              Od kameralnych listening sessions po potężne występy czołówki światowej sceny elektronicznej i koncertowej — TAMA projektowana była z myślą o najwyższej jakości doświadczenia dźwiękowego.
            </p>
            <p className={styles.chapterParagraph}>
              Klub wyposażony jest w bezkompromisowy system nagłośnienia, profesjonalną scenę koncertową, zaawansowane instalacje oświetleniowe oraz wieloekranowe zaplecze wizualne. Każdy detal techniczny kalibrowany jest z rzemieślniczą precyzją, zapewniając pełną dynamikę i klarowność brzmienia.
            </p>
          </div>
        </section>

        {/* ─── Values Grid ──────────────────────────────────────────── */}
        <section className={`${styles.valuesSection} reveal`}>
          <div className={styles.valuesHeader}>
            <span className={styles.chapterEyebrow}>NASZE WARTOŚCI</span>
            <h2 className={styles.chapterTitle}>Filary Działania</h2>
          </div>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <span className={styles.valueNum}>01</span>
              <h3 className={styles.valueTitle}>Szacunek & Safer Space</h3>
              <p className={styles.valueText}>
                Przestrzeń wolna od jakiejkolwiek dyskryminacji. Dbamy o komfort, otwartość i bezpieczeństwo każdego gościa zgodnie z zasadami kultury klubowej.
              </p>
            </div>
            <div
              className={styles.valueCard}
              style={{ "--reveal-delay": "30ms" } as React.CSSProperties}
            >
              <span className={styles.valueNum}>02</span>
              <h3 className={styles.valueTitle}>Kultura Muzyczna</h3>
              <p className={styles.valueText}>
                Stawiamy na bezkompromisową jakość dźwięku i autentyczność artystyczną — od lokalnych twórców po legendy międzynarodowej sceny techno i electro.
              </p>
            </div>
            <div
              className={styles.valueCard}
              style={{ "--reveal-delay": "60ms" } as React.CSSProperties}
            >
              <span className={styles.valueNum}>03</span>
              <h3 className={styles.valueTitle}>Wszechstronność</h3>
              <p className={styles.valueText}>
                Ponad 1 100 m² modułowej przestrzeni łączącej funkcję klubu muzycznego, sceny koncertowej oraz prestiżowego miejsca wydarzeń biznesowych i gal.
              </p>
            </div>
          </div>
        </section>

        {/* ─── Bottom CTA Bar ───────────────────────────────────────── */}
        <section className={`${styles.ctaBar} reveal`}>
          <div className={styles.ctaText}>
            <h2 className={styles.ctaTitle}>Poznaj TAMĘ z Bliska</h2>
            <p className={styles.ctaDesc}>
              Przejdź do strony klubu, poznaj nasze unikalne sale lub sprawdź ofertę wynajmu na wyłączność.
            </p>
          </div>
          <div className={styles.ctaLinks}>
            <Link href="/tama" className={styles.ctaBtnPrimary} id="about-to-tama-btn">
              KLUB TAMA →
            </Link>
            <Link href="/przestrzen" className={styles.ctaBtnOutline} id="about-to-spaces-btn">
              PRZESTRZENIE
            </Link>
            <Link href="/oferta" className={styles.ctaBtnOutline} id="about-to-offer-btn">
              OFERTA WYNAJMU
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
