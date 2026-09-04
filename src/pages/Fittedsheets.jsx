import { useTranslation } from "react-i18next";
import ProductCatalog from "../components/ProductCatalog";

export default function FittedSheets() {
  const { t, i18n } = useTranslation();
  return <ProductCatalog category="fitted-sheets" eyebrow={t("fittedSheets.eyebrow")} title={t("fittedSheets.title")} description={t("fittedSheets.description")} language={i18n.language} />;
}
