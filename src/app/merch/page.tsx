import type { Metadata } from "next";
import Image from "next/image";
import styles from "../en/merch/page.module.css";

export const metadata: Metadata = {
  title: "Merch — TAMA",
  description: "Merch TAMY — limitowane wydania z poznańskiego Techno Palace.",
};

const products = [
  {
    id: "tshirt-logo",
    name: "TAMA Logo Tee",
    description: "100% bawełna premium. Klasyczna czerń z tłoczonym logo w kwadracie.",
    price: "120 zł",
    image: "/shop-tshirt.jpg",
    tag: "NOWOŚĆ",
  },
  {
    id: "socks-classic",
    name: "TAMA Skarpety — Classic",
    description: "Premium bawełna prążkowana. TAMA wyhaftowane na biało. Jeden rozmiar.",
    price: "40 zł",
    image: "/shop-socks.jpg",
    tag: "BESTSELLER",
  },
  {
    id: "socks-zigzag",
    name: "TAMA Skarpety — Zigzag",
    description: "Wyrazisty wzór czarno-białego chevron z tkanym logiem TAMA. Jeden rozmiar.",
    price: "45 zł",
    image: "/shop-socks-zigzag.jpg",
    tag: "LIMITOWANE",
  },
];

export default function MerchPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <h1 className="text-gradient">MERCH</h1>
          <p className={styles.subtitle}>Merch i nie tylko — już wkrótce</p>
        </div>

        <div className={styles.grid}>
          {products.map((product) => (
            <div key={product.id} className={`${styles.card} glass`}>
              <div className={styles.imageWrap}>
                <span className={styles.tag}>{product.tag}</span>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className={styles.info}>
                <h2 className={styles.name}>{product.name}</h2>
                <p className={styles.description}>{product.description}</p>
                <div className={styles.footer}>
                  <span className={styles.price}>{product.price}</span>
                  <a href="mailto:joanna@tamaklub.pl" className="btn">
                    ZAPYTAJ
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
