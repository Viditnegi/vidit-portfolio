import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
        <Reveal>
          <p className={`${styles.aboutText}`} style={{ fontWeight: 400 }}>
            <span style={{ fontSize: '2em' }}>H</span>ey there! I&apos;m Vidit Singh Negi, and I&apos;m a B.Tech - Computer Science graduate from Jaypee Institute of Information Technology, Noida.
            <br/><br/>
            I have experience working with AI/ML applications, with a focus on model development and optimization, and have in depth knowledge about AI/ML. I&apos;m passionate about creating clever and impactful models that provide great value in the industry.
          </p>
        </Reveal>
          <Reveal>
            <p className={styles.aboutText}style={{ fontWeight: 400 }}>
              I code in Python and C++, and have experience with Pytorch, Tensorflow, Langchain, Flask, FastAPI and various data processing libraries such as Panda, Numpy, OpenCV and more. 
              I&apos;ve also worked with Devops/MLops tools like Docker, Wandb, databases like MongoDB, MySql, Pinecone, Cloud Services like Azure, AWS, Runpod.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}style={{ fontWeight: 400 }}>
              When I&apos;m not coding, I enjoy spending time making music and playing instruments. 
              I believe that maintaining a healthy work-life balance is crucial for staying productive and motivated.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}style={{ fontWeight: 400 }}>
              I&apos;m always looking for new challenges and opportunities to learn and grow as a developer. 
              If you&apos;re interested in working together or have an opening that might be a good fit for me, please feel free to reach out!
              🔗
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
