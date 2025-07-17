import { useState } from "react";
import styles from "./templatePage.module.css";
import Navbar from "./Navbar/navbar";
import Templatepreview from "./TemplatePreview/templatePreview";
import Sidepanel from "./TemplateSidePanel/sidePanel";

export default function TemplatePage() {
  const [activeTemplateIndex, setActiveTemplateIndex] = useState(0);
  return (
    <div>
      <Navbar />
      <div className={styles.previewSection}>
        <Sidepanel
          className={styles.previewSide}
          setIndex={setActiveTemplateIndex}
        />
        <Templatepreview index={activeTemplateIndex} />
      </div>
    </div>
  );
}
