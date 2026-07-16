import type { Metadata } from "next";
import styles from "../en/jobs/page.module.css";

export const metadata: Metadata = {
  title: "Praca — TAMA",
  description: "Wolne stanowiska w klubie TAMA w Poznaniu.",
};

const roles = [
  {
    title: "Obsługa baru",
    type: "Część etatu / Weekendy",
    description:
      "Dołącz do naszego zespołu baru i poczuj tę energię. Szukamy zaangażowanych osób z pozytywnym nastawieniem i doświadczeniem w pracy w intensywnym środowisku barowym.",
  },
  {
    title: "Obsługa wejścia",
    type: "Część etatu / Weekendy",
    description:
      "Reprezentuj TAMĘ przy wejściu. Szukamy spokojnych, szanujących innych i profesjonalnych osób, dla których bezpieczeństwo gości jest priorytetem.",
  },
  {
    title: "Asystent ds. bookingu",
    type: "Część etatu",
    description:
      "Wesprzyj nasz zespół ds. bookingu i relacji z artystami. Idealne stanowisko dla osoby pasjonującej się muzyką elektroniczną i sceną undergroundową, z dobrymi umiejętnościami organizacyjnymi.",
  },
];

export default function PracaPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <h1 className="text-gradient">PRACA</h1>
          <p className={styles.subtitle}>
            Chcesz być częścią TAMY? Zawsze szukamy pasjonatów.
          </p>
        </div>

        <div className={styles.roleList}>
          {roles.map((role, i) => (
            <div key={i} className={`${styles.roleCard} glass`}>
              <div className={styles.roleInfo}>
                <h2 className={styles.roleTitle}>{role.title}</h2>
                <span className={styles.roleType}>{role.type}</span>
                <p className={styles.roleDesc}>{role.description}</p>
              </div>
              <a
                href="mailto:joanna@tamaklub.pl"
                className={`${styles.applyBtn} btn btn-outline`}
              >
                APLIKUJ
              </a>
            </div>
          ))}
        </div>

        <p className={styles.note}>
          Nie widzisz odpowiedniej oferty? Wyślij nam spontaniczną aplikację na{" "}
          <a href="mailto:joanna@tamaklub.pl" className={styles.email}>
            joanna@tamaklub.pl
          </a>
        </p>
      </div>
    </div>
  );
}
