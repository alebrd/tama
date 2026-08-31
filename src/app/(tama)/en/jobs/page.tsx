import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Jobs — TAMA",
  description: "Join the TAMA team.",
};

export default function JobsPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <h1 className="text-gradient">JOIN THE TAMA TEAM</h1>
        </div>

        <div style={{ maxWidth: "700px", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <p className={styles.roleDesc} style={{ fontSize: "1rem", color: "var(--foreground)" }}>
            Do you want to join the TAMA team and grow in a dynamic environment? We are looking for dedicated, communicative people open to new challenges.
          </p>
          <p className={styles.roleDesc} style={{ fontSize: "1rem" }}>
            If you are interested in working with us, send your CV along with a short note about the kind of work or position you are looking for to:
            <br />
            <a href="mailto:patryk@tamaklub.pl" className={styles.email} style={{ marginTop: "0.5rem", display: "inline-block" }}>
              patryk@tamaklub.pl
            </a>
          </p>
          <p className={styles.roleDesc} style={{ fontSize: "1rem" }}>
            Even if we are not currently recruiting for a specific position, we would love to learn about your experience and skills. If an opportunity arises that matches your interests, we will contact you.
          </p>
        </div>
      </div>
    </div>
  );
}
