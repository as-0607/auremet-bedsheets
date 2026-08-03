import Promise from "../components/Promise";
import Quality from "../components/Quality";
import { Leaf, Sparkles, Shield, Feather } from "lucide-react";

const default_quality_details = [
  {
    icon: Leaf,
    name: "Premium Cotton",
    description:
      "Long-staple Egyptian fibres selected for silky strength and unmatched breathability.",
  },
  {
    icon: Sparkles,
    name: "Luxury Comfort",
    description:
      "A hotel-weight hand and a temperature-regulating weave designed for real sleep.",
  },
  {
    icon: Shield,
    name: "Long Lasting",
    description:
      "Double-turned hems and reinforced stitching for years of gentle use.",
  },
  {
    icon: Feather,
    name: "Elegant Design",
    description:
      "Minimal palettes, considered proportions — pieces that never date.",
  },
];

const promiseDetails =[
  "OEKO-TEX certified fibres",
  "Sandwashed for pre-softened comfort",
  "Reinforced double stitching",
  "60-night home trial, always",
];

export default function WhyAuremet() {
  return (
    <section>
      <Quality
        standalone={true}
        small_header="Our Craft"
        big_header="Why Auremet"
        discription="The quiet standards behind every thread, every stitch, and every night of extraordinary rest."
        quality_details={default_quality_details}
      />
      <Promise 
      standalone={true}
      small_header="The Promise"
      big_header="Made to be lived with."
      promise_details={promiseDetails}
      />
    </section>
  );
}
