import styles from "./Testimonial.module.css";

export default function Testimonial() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h1>Kind Words From Our Clients</h1>
          <div className={styles.testimonialContainer}>
            <div className={styles.testimonial}>
              <p>
                “Absolutely loved the service. I had a specific color in mind
                and they looked for it with me. They were very nice and I love
                my nails. I will definitely be going back.”
              </p>
              <p className={styles.author}>- Francis W. ⭐⭐⭐⭐⭐</p>
            </div>
            <div className={styles.testimonial}>
              <p>
                “Julie was so friendly, and took her time and made my nails look
                so pretty and classy for my wedding even though I was just doing
                dip and my nails were short! I wasn’t sure about the color so
                she even dipped a couple of acrylic nails as a demo so I could
                see how the colors would look. Really nice salon and would
                definitely return!”
              </p>
              <p className={styles.author}>- Sarah L. ⭐⭐⭐⭐⭐</p>
            </div>
            <div className={styles.testimonial}>
              <p>
                “I had the best nail experience ever here! Cheryl did my nails
                and she was amazing. She truly paid attention to detail, took
                her time, and made sure It was exactly what I wanted and how I
                liked it. I have never felt more relaxed at a salon! Salon is
                super clean as well and maintains a peaceful environment. I will
                definitely be returning!”
              </p>
              <p className={styles.author}>- Adison H. ⭐⭐⭐⭐⭐</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.linebreak}></div>
    </>
  );
}
