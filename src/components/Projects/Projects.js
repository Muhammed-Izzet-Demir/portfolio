import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// New project images
import hrPlatform from "../../Assets/Projects/biometric-platform.jpg";
import agriDashboard from "../../Assets/Projects/agricultural-dashboard.jpg";
import personnelTracking from "../../Assets/Projects/personnel-tracking.jpg";
import defenseSurveillance from "../../Assets/Projects/defense-surveillance.jpg";
import mobileBiometric from "../../Assets/Projects/mobile-biometric.jpg";
import faceRecognitionSdk from "../../Assets/Projects/face-recognition-sdk.jpg";
import mobileTech from "../../Assets/Projects/mobile-tech.jpg";
import multicameraSystem from "../../Assets/Projects/multicamera-system.jpg";
import faceApi from "../../Assets/Projects/face-api.jpg";

// Academic project images (originals)
import brainTumor from "../../Assets/Projects/chatify.png";
import travelGuide from "../../Assets/Projects/blog.png";
import anime from "../../Assets/Projects/codeEditor.png";
import rentACar from "../../Assets/Projects/leaf.png";
import earthquake from "../../Assets/Projects/emotion.png";
import climate from "../../Assets/Projects/ml.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        {/* ── LIVE & COMMERCIAL ── */}
        <h2 className="project-heading" style={{ fontSize: "1.4em", paddingTop: "10px" }}>
          <strong className="purple">Live</strong> &amp; Commercial Projects
        </h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hrPlatform}
              isBlog={false}
              title="Enterprise Biometric Attendance & HR Platform"
              description="Live — 10,000+ Users | React 18 · Flask · JWT · Leaflet · i18next · PostgreSQL. Multi-role web platform for biometric attendance management, real-time location tracking, task scheduling, activity logging, Excel export, and Turkish/English multilingual support."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={agriDashboard}
              isBlog={false}
              title="Agricultural Workforce & Field Operations Dashboard"
              description="Live | React 18 · Material UI · Syncfusion · Recharts · TailwindCSS. Enterprise management panel for the agriculture sector with map-based location tracking, worker assignments, CSV/Excel data export, Swagger API integration, and multi-language support."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={personnelTracking}
              isBlog={false}
              title="Corporate Personnel Tracking System"
              description="Live | React 18 · Vite · ExcelJS · jsPDF · XLSX. Personnel status tracking dashboard with automated Excel and PDF report generation. Modern Vite build pipeline and clean component architecture for enterprise internal use."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={defenseSurveillance}
              isBlog={false}
              title="Defense-Grade Surveillance & Analytics API"
              description="Live — Türk Telekom | Node.js · Express.js · Python · Flask · CORS. IP camera proxy and real-time face detection API developed as part of a joint defense project with Türk Telekom. Handles Digest authentication for IP cameras and logs detection events in real time."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mobileBiometric}
              isBlog={false}
              title="Biometric Mobile Identity Verification App"
              description="In Development | React Native 0.72 · ML Kit · ONNX Runtime Mobile · Vision Camera. Cross-platform mobile application with on-device face detection, real-time OCR text recognition, and ONNX model inference. Features SSL pinning for security and smooth Reanimated animations."
            />
          </Col>
        </Row>

        {/* ── AI & BIOMETRIC ── */}
        <h2 className="project-heading" style={{ fontSize: "1.4em", paddingTop: "10px" }}>
          <strong className="purple">AI</strong> &amp; Biometric Systems
        </h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={faceRecognitionSdk}
              isBlog={false}
              title="On-Device Face Recognition & Anti-Spoofing SDK"
              description="Live Production — Published npm Package | JavaScript · ONNX Runtime Web · Webpack. 100% client-side SDK using a NIST FRVT-listed model. Delivers iBeta Level 2 anti-spoofing (print/video/3D mask/deepfake), 512-dim face embeddings, pose estimation, and age/gender analysis. Zero data leaves the browser."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={faceRecognitionSdk}
              isBlog={false}
              title="Real-Time Passive Liveness Detection API"
              description="Python · FastAPI · ONNX Runtime · YOLOv5 · PyTorch. REST API classifying frames as real / fake / unknown / blurry using MiniFASNetV2SE anti-spoofing model. Includes Laplacian blur filtering, temporal smoothing across multiple frames, and webcam/video file support."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mobileBiometric}
              isBlog={false}
              title="Biometric Verification Web Suite"
              description="Published npm Package | React 18 · TensorFlow.js · MediaPipe · Vite. Client-side biometric verification suite published as an npm package. Provides step-by-step liveness confirmation with face angle/pose detection, smile detection, and image quality scoring."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={multicameraSystem}
              isBlog={false}
              title="Enterprise Multi-Camera Face Recognition System"
              description="Python · PyQt6 · Flask · YOLOv8 · PostgreSQL · ONNX. Desktop application with REST API backend supporting USB, IP, and RPC cameras. Features YOLOv8 body detection, embedding-based user registration in PostgreSQL, BLE Wallet device integration, and MVC architecture."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mobileTech}
              isBlog={false}
              title="Android On-Device Liveness Detection SDK"
              description="Kotlin · CameraX · ONNX Runtime · YOLOv5. Native Android SDK with 5-frame temporal smoothing and adjustable confidence threshold for passive liveness detection. Fully on-device — no server communication required."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={faceApi}
              isBlog={false}
              title="Browser-Based ID Document OCR Engine"
              description="Active | JavaScript · ONNX Runtime Web · Tesseract.js · OpenCV.js. Client-side OCR engine for identity documents supporting 6 languages. PWA offline support, 3 engine options, and zero server-side processing — all runs in the browser."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={faceApi}
              isBlog={false}
              title="Face Detection & Identity Management REST API"
              description="Python · Flask · PostgreSQL · ONNX · JWT · Swagger. JWT-secured REST API with Swagger documentation, ONNX model inference for face detection, and migration-based schema management. Designed for enterprise identity verification workflows."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={personnelTracking}
              isBlog={false}
              title="Face Detection Analytics Dashboard"
              description="React · Vite · Bootstrap · DataTables. Real-time statistics and visualization frontend for the Face Detection API. Displays detection logs, user analytics, and live camera event feeds with interactive DataTables."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={multicameraSystem}
              isBlog={false}
              title="FaceNet Custom Training Pipeline"
              description="Python · PyTorch · TensorFlow · Scikit-learn. Transfer learning pipeline with triplet loss optimization on custom identity datasets. Trains FaceNet-based models for high-accuracy face embeddings tailored to specific enterprise use cases."
            />
          </Col>
        </Row>

        {/* ── ACADEMIC & EARLIER ── */}
        <h2 className="project-heading" style={{ fontSize: "1.4em", paddingTop: "10px" }}>
          Academic &amp; <strong className="purple">Earlier</strong> Projects
        </h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={brainTumor}
              isBlog={false}
              title="Classification of Brain Tumors"
              description="Python · PyTorch · ResNet18. Glioblastoma classification using MRI images. Predicted MGMT promoter methylation — a genetic marker that influences chemotherapy response — through radiogenomics, aiming to reduce the need for invasive tumor biopsies."
              ghLink="https://github.com/Muhammed-tr/classification-of-brain-tumor-mri-Resnet18"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travelGuide}
              isBlog={false}
              title="Speech-Emotion Recognition Travel Guide Assistant"
              description="Python · Deep Learning · NLP. Travel guide assistant that uses speech emotion recognition to analyze users' emotional states and suggest places, events, and topics aligned with their current mood."
              ghLink="https://github.com/Muhammed-tr/speech-emotion-recognition"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={anime}
              isBlog={false}
              title="Anime Recommendation System"
              description="Python · Pandas · Scikit-learn. Explored collaborative filtering and content-based recommendation techniques on anime datasets. Implemented user-based collaborative filtering to recommend anime based on user preferences and rating similarities."
              ghLink="https://github.com/Muhammed-tr/Team6_DataCinephiles"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rentACar}
              isBlog={false}
              title="Rent-A-Car OOP (C#)"
              description="C# · .NET · OOP. Object-oriented car rental system simulating real-world operations: vehicle listing management, user registration, rental transactions, and price calculation — built with clean OOP principles and layered architecture."
              ghLink="https://github.com/Muhammed-tr/Rent-A-Car-OOP-"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={earthquake}
              isBlog={false}
              title="Earthquake & Disaster Alert Web Application"
              description="JavaScript · REST APIs · Geolocation. Web application that monitors real-time earthquake and disaster events via public APIs. Sends personalized notifications to users when an event occurs near their location, providing timely safety alerts."
              ghLink="https://github.com/Muhammed-tr"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={climate}
              isBlog={false}
              title="Temperature, CO₂ Emissions & Sea Level Trends"
              description="Python · Plotly · Seaborn · Scikit-learn. Data analysis project investigating climate change indicators across decades. Visualizes global temperature variations, CO₂ emission trends, and sea level rise using regression models to project future environmental impact."
              ghLink="https://github.com/Muhammed-tr"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
