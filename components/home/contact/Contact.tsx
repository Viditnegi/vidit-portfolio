import { Reveal } from "@/components/utils/Reveal";
import styles from "./contact.module.scss";
import { AiFillMail } from "react-icons/ai";
import Link from "next/link";

export const Contact = () => {
  return (
    <section className="section-wrapper" id="contact">
      <div className={styles.contactWrapper}>
        <Reveal width="100%">
          <h4 className={styles.contactTitle}>
            Contact<span>.</span>
          </h4>
        </Reveal>
        <Reveal width="100%">
          <p className={styles.contactCopy}>
            Send an email if you want to connect! You can also find me on{" "}
            <Link
              href="https://www.linkedin.com/in/vidit-negi-7975871b5/"
              target="_blank"
              rel="nofollow"
            >
              Linkedin.
            </Link>{" "}
            
          </p>
        </Reveal>
        <Reveal width="100%">
          <div className={styles.contactEmail}>
            <AiFillMail size="2.4rem" />
            <span>viditsn@gmail.com</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
