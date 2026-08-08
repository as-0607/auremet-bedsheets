import AppRoutes from "./routes/AppRoutes";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);
  return <AppRoutes />;
}
