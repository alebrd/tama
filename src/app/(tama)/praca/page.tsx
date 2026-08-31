import type { Metadata } from "next";
import styles from "../en/jobs/page.module.css";

export const metadata: Metadata = {
  title: "Praca — TAMA",
  description: "Dołącz do zespołu TAMY.",
};

export default function PracaPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <h1 className="text-gradient">DOŁĄCZ DO ZESPOŁU TAMY</h1>
        </div>

        <div style={{ maxWidth: "700px", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <p className={styles.roleDesc} style={{ fontSize: "1rem", color: "var(--foreground)" }}>
            Chcesz dołączyć do zespołu TAMY i rozwijać się w dynamicznym środowisku? Poszukujemy osób zaangażowanych, komunikatywnych i otwartych na nowe wyzwania.
          </p>
          <p className={styles.roleDesc} style={{ fontSize: "1rem" }}>
            Jeśli jesteś zainteresowany/a współpracą z nami, wyślij swoje CV wraz z krótką informacją, jakiego rodzaju pracy lub stanowiska szukasz, na adres:
            <br />
            <a href="mailto:patryk@tamaklub.pl" className={styles.email} style={{ marginTop: "0.5rem", display: "inline-block" }}>
              patryk@tamaklub.pl
            </a>
          </p>
          <p className={styles.roleDesc} style={{ fontSize: "1rem" }}>
            Nawet jeśli obecnie nie prowadzimy rekrutacji na konkretne stanowisko, chętnie poznamy Twoje doświadczenie i kompetencje. Jeśli pojawi się możliwość współpracy odpowiadająca Twoim zainteresowaniom, skontaktujemy się z Tobą.
          </p>
        </div>
      </div>
    </div>
  );
}
