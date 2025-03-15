import styles from "./stats.module.scss";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Used at work</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Python</span>
            <span className="chip">C++</span>
            <span className="chip">Pytorch</span>
            <span className="chip">Tensorflow</span>
            <span className="chip">Lightning</span>
            <span className="chip">Accelerate</span>
            <span className="chip">Wandb</span>
            <span className="chip">OpenCV</span>
            <span className="chip">Langchain</span>
            <span className="chip">Tensorflow</span>
            <span className="chip">Pandas</span>
            <span className="chip">Numpy</span>
            <span className="chip">Scikit-Learn</span>
            <span className="chip">Flask</span>
            <span className="chip">FastAPI</span>
            <span className="chip">Docker</span>
            <span className="chip">MongoDB</span>
            <span className="chip">Hugging Face</span>
            <span className="chip">Streamlit</span>
            <span className="chip">Selenium</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillSmile size="2.4rem" color="var(--brand)" />
            <span>Learning</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">CUDA</span>
            <span className="chip">Triton</span>
            {/* <span className="chip">TypeScript</span> */}
            <span className="chip">Kubernetes</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
