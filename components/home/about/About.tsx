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
            <span style={{ fontSize: '2em' }}>H</span>ey there! I&apos;m Vidit Singh Negi, and I am a Data Scientist currently working at Clarivate. I Studied Computer Science(Btech) from Jaypee Institute of Information Technology, Noida.
            <br/><br/>
            I specialize in building AI/ML Solutions and Agentic Workflows, with a focus on development, optimization and Deployement. I&apos;m passionate about creating clever and impactful models that provide great value in the industry.
          </p>
        </Reveal>
          <Reveal>
            <p className={styles.aboutText}style={{ fontWeight: 400 }}>
              I code in Python and C++, and have experience with Langchain/Langgraph Ecosystem, Pytorch, Tensorflow, Flask, FastAPI and various data processing libraries such as Panda, Numpy, OpenCV and more. 
              I&apos;ve also worked with services provided by AWS and Azure focusing on AI developement, like SageMaker, Bedrock, Guardrails, Step Functions, Lambda, SQS, and more. I Also have experience with Databases like Aurora Postgres, Redshift, MongoDB, and vector databases like Qdrant, Chroma and Pinecone.
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
              If you&apos;re interested in working together or have an opportunity that might be a good fit for me, please feel free to reach out!
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
