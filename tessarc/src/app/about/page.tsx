import { AboutSection } from "@/components/AboutSection";
import { AlgorithmGrid } from "@/components/AlgorithmGrid";
import { EngineStats } from "@/components/EngineStats";

export default function AboutPage() {
  return (
    <div className="flex flex-1 flex-col">
      <AboutSection />
      <EngineStats />
      <AlgorithmGrid />
    </div>
  );
}
