import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Jobs — TAMA",
  description: "Open positions at TAMA club in Poznań.",
};

const roles = [
  {
    title: "Bar Staff",
    type: "Part-time / Weekends",
    description:
      "Join our bar team and be part of the energy. We're looking for passionate people with a positive attitude and experience in a fast-paced bar environment.",
  },
  {
    title: "Door Staff",
    type: "Part-time / Weekends",
    description:
      "Represent TAMA at the door. We need calm, respectful, and professional individuals committed to keeping our venue a safe space for everyone.",
  },
  {
    title: "Booking Assistant",
    type: "Part-time",
    description:
      "Support our booking and artist relations team. Ideal for someone passionate about electronic music and the underground scene with strong organizational skills.",
  },
];

export default function JobsPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <h1 className="text-gradient">JOBS</h1>
          <p className={styles.subtitle}>
            Want to be part of TAMA? We&apos;re always looking for passionate people.
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
                href="mailto:contact@tamaklub.com"
                className={`${styles.applyBtn} btn btn-outline`}
              >
                APPLY
              </a>
            </div>
          ))}
        </div>

        <p className={styles.note}>
          Don&apos;t see a role that fits? Send us a general application at{" "}
          <a href="mailto:contact@tamaklub.com" className={styles.email}>
            contact@tamaklub.com
          </a>
        </p>
      </div>
    </div>
  );
}
