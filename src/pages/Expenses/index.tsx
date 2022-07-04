import React from "react";
import { Container } from "./styles";

function Expenses() {
  const costCenters = [
    {
      name: "Mobilidade",
      id: 1,
      expenseGroups: [
        { name: "Carro", cost: 2050.6, id: 4245 },
        { name: "Transporte", cost: 520.6, id: 6685 },
      ],
    },
    {
      name: "Saúde",
      id: 2,
      expenseGroups: [
        { name: "Remedio", cost: 44.8, id: 2235 },
        { name: "Consulta", cost: 200, id: 6548 },
      ],
    },
  ];

  return <Container>Expenses</Container>;
}

export default Expenses;
