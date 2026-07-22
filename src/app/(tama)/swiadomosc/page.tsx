import type { Metadata } from "next";
import styles from "../en/awareness/page.module.css";

export const metadata: Metadata = {
  title: "Świadomość — TAMA",
  description: "Polityka bezpiecznej przestrzeni TAMY. Dbaj o siebie i innych.",
};

export default function SwiadomoscPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.hero}>
          <p className={styles.eyebrow}>NASZE ZOBOWIĄZANIE</p>
          <h1 className={`${styles.title} text-gradient`}>
            Dbaj o siebie<br />i innych.
          </h1>
        </div>

        <div className={`${styles.policyBlock} glass`}>
          <p className={styles.policyText}>
            Naszą misją jest sprawienie, aby nasz klub był miejscem, w którym każdy czuje się
            bezpiecznie przez cały czas i w każdych okolicznościach.
          </p>
          <p className={styles.policyText}>
            Rasizm, seksizm, homofobia, antysemityzm, islamofobia i wszelkie inne formy
            dyskryminacji lub przemocy nie mają tu miejsca.
          </p>
          <p className={styles.policyText}>
            Jeśli kiedykolwiek poczujesz się niekomfortowo lub zauważysz coś niepokojącego,
            nie wahaj się skontaktować z jednym z naszych pracowników w dowolnym momencie —
            jesteśmy tu dla Ciebie!
          </p>
          <p className={styles.policyText}>
            Jeśli chcesz podzielić się swoim doświadczeniem lub obserwacją,
            możesz skontaktować się z nami pod adresem{" "}
            <a href="mailto:joanna@tamaklub.pl" className={styles.email}>
              joanna@tamaklub.pl
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
