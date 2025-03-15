import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Monotype",
    position: "AI/ML Trainee",
    time: "Aug 2024 - Present",
    location: "Noida",
    description:
      "Owned many projects and collaborated across multiple teams. Researched, built, trained, optimized and deployed GenAI models including Diffusion models, GANs and Transformers, using Pytorch, FastAPI, docker, Wandb, AWS/Azure. Made Bert-Diffusion Model for font generation, reduced designing time by 30% for designers.  -  Patent. Built custom 3-staged diffusion model for Japanese fonts generating characters with >90% IOU (Improved by 15%).",
    tech: [
      "Pytorch",
      "Flask",
      "FastAPI",
      "OpenCV",
      "Docker",
      "Accelerate",
      "Lightning",
      "Pandas",
      "Numpy",
      "AWS/Azure/Runpod",
      "Diffusion",
      "GANs",
      "Transformers",
    ],
  },
  {
    title: "Polynomial.AI",
    position: "Python Developer Intern",
    time: "June 2024 - July 2024",
    location: "Remote",
    description:
      "Worked with building POS systems. Built REST-APIs with Flask, utilized MongoDB for data storage, did automation using Selenium, and trained ML models for classification. The automation pipeline saved many hours of manual sales report extraction, improving productivity by 25%. Made Flask APIs to handle requests, worked with MongoDB and AWS S3 to store the sales reports.",
    tech: ["Python", "Flask", "MongoDB ", "Selenium", "AWS"],
  },
  {
    title: "GreenTech ITS LLP",
    position: "Computer Vision Intern",
    time: "Arp 2024 - May 2024",
    location: "New Delhi",
    description:
      "Worked on ANPR system and  made Abandoned Object Detection System with object detection, OCR, YOLOv8 and YOLO-NAS, DeepSort, Background Subtraction, Depth Estimation, Implemented Kafka. Optimized Model inference speed using TensorRT and ONNX and made it 4x faster. Built Docker containers to deploy on toll plaza sites. Increased the ANPR accuracy from 85% to 93%.",
    tech: ["Tensorflow", "Pytorch", "OCR", "YOLO", "TensorRT", "ONNX", "Kafka", "Docker", "Depth Estimation", "Background Subtraction"],
  },
];
