import type { Metadata } from "next";
import Image from "next/image";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Merch — TAMA",
  description: "TAMA merchandise — limited drops from Poznań's Techno Palace.",
};

const products = [
  {
    id: "tshirt-logo",
    name: "TAMA Logo Tee",
    description: "100% heavyweight cotton. Classic black with embossed box logo.",
    price: "PLN 120",
    image: "/shop-tshirt.jpg",
    tag: "NEW DROP",
  },
  {
    id: "socks-classic",
    name: "TAMA Socks — Classic",
    description: "Premium ribbed cotton. TAMA embroidered in white. One size.",
    price: "PLN 40",
    image: "/shop-socks.jpg",
    tag: "BESTSELLER",
  },
  {
    id: "socks-zigzag",
    name: "TAMA Socks — Zigzag",
    description: "Bold black & white chevron pattern with woven TAMA box logo. One size.",
    price: "PLN 45",
    image: "/shop-socks-zigzag.jpg",
    tag: "LIMITED",
  },
];

export default function MerchPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <h1 className="text-gradient">MERCH</h1>
          <p className={styles.subtitle}>Merchandise and more coming soon</p>
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
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className={styles.info}>
                <h2 className={styles.name}>{product.name}</h2>
                <p className={styles.description}>{product.description}</p>
                <div className={styles.footer}>
                  <span className={styles.price}>{product.price}</span>
                  <a href="mailto:joanna@tamaklub.pl" className="btn">
                    ENQUIRE
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
