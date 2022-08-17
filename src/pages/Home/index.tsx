import React from "react";
import { useTranslation } from "react-i18next";
import { Container } from "./styles";

function Home() {
  const { t } = useTranslation();

  return (
    <Container>
      <h1>{t("hello")}</h1>
    </Container>
  );
}

export default Home;
