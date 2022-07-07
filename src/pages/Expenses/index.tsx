import React from "react";
import Dashboard from "./components/Dashboard";
import ExpenseGraph from "./components/ExpenseGraph";
import { Container, GraphContainer, DashboardContainer } from "./styles";

function Expenses() {
  return (
    <Container>
      <GraphContainer>
        <ExpenseGraph />
      </GraphContainer>
      <DashboardContainer>
        <Dashboard />
      </DashboardContainer>
    </Container>
  );
}

export default Expenses;
