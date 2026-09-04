import Quality from "../components/Quality";
import { Leaf, Sparkles, Shield, Feather } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function WhyAuremet() {
  const { t } = useTranslation();

  const default_quality_details = [
    {
      icon: Leaf,
      name: t("why_quality.cotton.name"),
      description: t("why_quality.cotton.description"),
    },
    {
      icon: Sparkles,
      name: t("why_quality.comfort.name"),
      description: t("why_quality.comfort.description"),
    },
    {
      icon: Shield,
      name: t("why_quality.lasting.name"),
      description: t("why_quality.lasting.description"),
    },
    {
      icon: Feather,
      name: t("why_quality.design.name"),
      description: t("why_quality.design.description"),
    },
  ];

  return (
    <section>
      <Quality
        standalone={true}
        small_header={t("why_quality.small_header")}
        big_header={t("why_quality.big_header")}
        description={t("why_quality.description")}
        quality_details={default_quality_details}
      />
    </section>
  );
}
