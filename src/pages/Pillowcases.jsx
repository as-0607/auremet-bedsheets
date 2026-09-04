import { useTranslation } from "react-i18next";
import ProductCatalog from "../components/ProductCatalog";

export default function Pillowcases() {
  const { t, i18n } = useTranslation();
  return <ProductCatalog category="pillowcases" eyebrow={t("pillowcases.eyebrow")} title={t("pillowcases.title")} description={t("pillowcases.description")} language={i18n.language} />;
}
