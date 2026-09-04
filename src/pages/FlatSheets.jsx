import { useTranslation } from "react-i18next";
import ProductCatalog from "../components/ProductCatalog";

export default function FlatSheets() {
  const { t, i18n } = useTranslation();
  return <ProductCatalog category="flat-sheets" eyebrow={t("flatSheets.eyebrow")} title={t("flatSheets.title")} description={t("flatSheets.description")} language={i18n.language} />;
}
