import { useTranslation } from "react-i18next";
import ProductCatalog from "../components/ProductCatalog";

export default function Quilts() {
  const { t, i18n } = useTranslation();
  return <ProductCatalog category="quilts" eyebrow={t("quilts.eyebrow")} title={t("quilts.title")} description={t("quilts.description")} language={i18n.language} />;
}
