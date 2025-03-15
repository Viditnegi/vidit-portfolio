import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Flash Attention (Triton)",
    imgSrc: "/project-imgs/flash_attention.png",
    code: "https://github.com/Viditnegi/Flash_Attention_w_Triton",
    projectLink: "https://github.com/Viditnegi/Flash_Attention_w_Triton",
    tech: ["Pytorch", "Triton", "CUDA", "Transformers"],
    description: "Attention Mechanism Acceleration using Triton",
    modalContent: (
      <>
        <p>
          Derived equations of softmax with RowSumExp and jacobian matrices for backward pass.
        </p>
        <p>
          Coded forward and backward pass with Triton and made transformer compute efficient.
        </p>
      </>
    ),
  },
  {
    title: "Multimodal Vision-Language (PaliGemma)",
    imgSrc: "/project-imgs/paligemma.png",
    code: "https://github.com/Viditnegi/PaliGemma-from-scratch",
    projectLink: "https://github.com/Viditnegi/PaliGemma-from-scratch",
    tech: ["Pytorch", "Flask", "Vision Transformers", "Gemma"],
    description:
      "A state-of-the-art model for visual-language understanding, transforming image-based question answering with deep contextual intelligence.",
    modalContent: (
      <>
        <p>
          Coded Vision and Language Transformers, and implemented concepts like KV Caching and RoPE.
        </p>
        <p>
          Made a simple Flask api for it.
        </p>
      </>
    ),
  },
  {
    title: "Chest Cancer Detection web-app",
    imgSrc: "/project-imgs/chest_cancer.jpg",
    code: "https://github.com/Viditnegi/Full-Stack-Chest-Cancer-Classifier/tree/main",
    projectLink: "https://github.com/Viditnegi/Full-Stack-Chest-Cancer-Classifier/tree/main",
    tech: ["Tensorflow", "MLflow", "CI/CD", "Docker", "Flask ", "AWS"],
    description:
      "This web-app helps detect tumors that are not easy to locate in the medical industry.",
    modalContent: (
      <>
        <p>
          Made structured pipeline for data ingestion, preprocessing, training, evaluation & prediction. 
        </p>
        <p>
          Used MLflow through Dagshub API to monitor and compare VGG models. Used DVC for experiment tracking.
        </p>
        <p>
          Made Docker image, and deployed docker container to AWS using CI/CD pipeline.
        </p>
      </>
    ),
  },
  {
    title: "Custom Article Q&A tool",
    imgSrc: "/project-imgs/custon_researcher.png",
    code: "https://github.com/Viditnegi/Article-Question-Answer-Tool",
    projectLink:"https://github.com/Viditnegi/Article-Question-Answer-Tool",
    tech: ["Langchain", "FAISS", "Pinecone ", "Streamlit"],
    description:
      "A specialized tool designed for researchers, enabling them to extract information from online sources and engage in interactive queries for deeper insights.",
    modalContent: (
      <>
        <p>
          Web-scraping the URLs, splits the data into chunks, passed through OpenAI&apos;s Ada-v2 embedding encoder.
        </p>
        <p>Stores vectors in Faiss VectorIndex. Made a streamlit app for POC.</p>
      </>
    ),
  },
  {
    title: "Sign Language Detection",
    imgSrc: "/project-imgs/sign_language.png",
    code: "https://github.com/Viditnegi/Sign-Language-Detection-mediapipe",
    projectLink: "https://github.com/Viditnegi/Sign-Language-Detection-mediapipe",
    tech: ["Tensorflow", "MediaPipe", "OpenCV"],
    description:"This project was made with a target to classify the hand gestures in a sign language.",
    modalContent: (
      <>
        <p>
          This is another self project that i made to showcase our mobile app.
        </p>
        <p>
          I integrated ko-fi donation and uses Template for this Nextjs Project.
          I also use a plugin for scrapping data from our google play to display
          directly on the landing page.
        </p>
      </>
    ),
  },
  {
    title: "Abandoned-Object-Detection",
    imgSrc: "/project-imgs/abandoned.png",
    code: "https://github.com/Viditnegi/Abandoned-Object-Detection",
    projectLink: "https://github.com/Viditnegi/Abandoned-Object-Detection",
    tech: ["Tensorflow", "Yolo", "DeepSort", "OpenCV"],
    description: "This project was built to detect all the abandoned or unattended objects (mainly bags) in crowded areas through cctv/surveillance footage.",
    modalContent: (
      <>
        <p>
          Used Real World CCTV dataset. Objects classified into 4 categories - Person, Backpack, Handbag and Suitcase.
        </p>
        <p>Yolov8 model was trained and DeepSort tracking algorithm was applied.</p>
        <p>Made an algorithm to detect when the object is abandoned.</p>
        <p>Used Kafka for streaming and Dockerized the application.</p>
      </>
    ),
  },
  {
    title: "Real time DeepFake Detection",
    imgSrc: "/project-imgs/deepfake.webp",
    code: "https://github.com/Viditnegi/Deepfake-detection",
    projectLink: "https://github.com/Viditnegi/Deepfake-detection",
    tech: ["Django", "Tensorflow", "OpenCV", "LSTM/GRUs"],
    description: "This Project detects Deepfake videos generated by AI.",
    modalContent: (
      <>
        <p>
          Faces were cropped out from each video.
        </p>
        <p> Resnext architecture was used as the backbone and LSTM to extract sequential features.</p>
        <p> Accuracy came out to be 91% with high recall.</p>
        <p> Django application for real-time detection, with upload video option.</p>
      </>
    ),
  },
];
