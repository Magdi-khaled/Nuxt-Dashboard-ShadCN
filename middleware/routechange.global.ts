export default defineNuxtRouteMiddleware((to, from) => {
  if (from.name === "services" && to.name !== "services") {
    localStorage.setItem("selectedService", "choose-service");
  }
});
