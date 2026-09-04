import { useTranslation } from "react-i18next";
import ProductCatalog from "../components/ProductCatalog";

export default function Duvets() {
  const { t, i18n } = useTranslation();
  return <ProductCatalog category="duvets" eyebrow={t("duvets.eyebrow")} title={t("duvets.title")} description={t("duvets.description")} language={i18n.language} />;
}
