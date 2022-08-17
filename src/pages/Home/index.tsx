import React from "react";
import { useTranslation } from "react-i18next";
import { Container } from "./styles";

function Home() {
  const { t } = useTranslation();

  return (
    <Container>
      <p>{t("hello")}</p>
    </Container>
  );
}

export default Home;
