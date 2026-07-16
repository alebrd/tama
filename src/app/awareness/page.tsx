import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Awareness — TAMA",
  description: "TAMA's safe space policy. Take care of yourself and others.",
};

export default function AwarenessPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.hero}>
          <p className={styles.eyebrow}>OUR COMMITMENT</p>
          <h1 className={`${styles.title} text-gradient`}>
            Take care of yourself<br />and others.
          </h1>
        </div>

        <div className={`${styles.policyBlock} glass`}>
          <p className={styles.policyText}>
            Our mission is to make our club a place where everyone feels safe at all times and
            under all circumstances.
          </p>
          <p className={styles.policyText}>
            Racism, sexism, homophobia, antisemitism, Islamophobia, and any other form of
            discrimination or violence have no place here.
          </p>
          <p className={styles.policyText}>
            If you ever feel uncomfortable or witness something concerning, please don&apos;t
            hesitate to reach out to one of our employees at any time — we&apos;re here for you!
          </p>
          <p className={styles.policyText}>
            If you&apos;d like to share an experience or observation afterwards, you can contact us
            at{" "}
            <a href="mailto:contact@tamaklub.com" className={styles.email}>
              contact@tamaklub.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
