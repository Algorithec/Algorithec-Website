import { AlgorithmGrid } from "@/components/AlgorithmGrid";
import { EngineStats } from "@/components/EngineStats";
import { Hero } from "@/components/Hero";
import { LiveDemo } from "@/components/LiveDemo";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Hero />
      <EngineStats />
      <AlgorithmGrid />
      <LiveDemo />
    </div>
  );
}
