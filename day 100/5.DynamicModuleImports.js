document.addEventListener("click", async () => {
  const { default: printModule } = await import("./print.js");
  printModule();
});
console.log(`In the Main File`, 2);
