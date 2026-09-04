import { useTranslation } from "react-i18next";
import ProductCatalog from "../components/ProductCatalog";

export default function DuvetCovers() {
  const { t, i18n } = useTranslation();
  return <ProductCatalog category="duvet-covers" eyebrow={t("duvetCovers.eyebrow")} title={t("duvetCovers.title")} description={t("duvetCovers.description")} language={i18n.language} />;
}
