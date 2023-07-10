export const errorsClient = (textErrorsClient) => {
  switch (textErrorsClient) {
    case "createService":
      return "Crear servicio eB";
    case "assignPlan":
      return "Asignar plan a servicio eB";
    default:
      return "Cambiar plan";
  }
};
