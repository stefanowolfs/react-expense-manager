import { createServer } from "miragejs";

export function startMockAPI() {
  if (
    process.env.NODE_ENV !== "development" ||
    process.env.REACT_APP_ENABLE_MOCK_API !== "true"
  ) {
    return;
  }

  console.log("Starting MirageJS");
  createServer({
    routes() {
      this.namespace = "api";
      this.urlPrefix = "http://localhost:3005";

      this.get("/login", () => {
        return { token: "2389d8998-83298ds8fd98-dsf8787f7s" };
      });

      this.get("/expenses/report", () => {
        return {
          totalCost: 2816,
          reportRange: {
            from: new Date(),
            to: new Date(),
          },
          userId: 1,
          costCenters: [
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
          ],
        };
      });

      this.get("/expenses/statement", (schema, request) => {
        const month = request.queryParams.month;
        const mock = [
          {
            id: 12345123,
            expenseGroupId: 1,
            description: "Abastecer",
            billingDate: new Date(),
            cost: 100.0,
          },
          {
            id: 123451221,
            expenseGroupId: 1,
            description: "Abastecer",
            billingDate: new Date(),
            cost: 100.0,
          },
          {
            id: 21421351,
            expenseGroupId: 1,
            description: "Revisão",
            billingDate: new Date(),
            cost: 1850.6,
          },
          {
            id: 432324,
            expenseGroupId: 2,
            description: "Consulta",
            billingDate: new Date(),
            cost: 350.0,
          },
        ];
        return { mock };
      });

      this.get("/expense-groups/:id/activities", (schema, request) => {
        const id = request.params.id;
        const month = request.queryParams.month;
        const activitiesMock = [
          {
            id: 21343252,
            expenseGroupId: 1,
            description: "Abastecer",
            month: month,
            totalCost: 200.0,
          },
          {
            id: 23532423,
            expenseGroupId: 1,
            description: "Revisão",
            billingDate: month,
            totalCost: 1850.6,
          },
          {
            id: 3,
            expenseGroupId: 2,
            description: "Consulta",
            billingDate: month,
            totalCost: 350.0,
          },
        ];
        const activities = activitiesMock.filter(
          (activity) => activity.expenseGroupId.toString() === id
        );
        return { activities };
      });
    },
  });
}
