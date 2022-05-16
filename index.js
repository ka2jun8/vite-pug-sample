const template = require("./template/sample");

const html = template({ name: "sample" });

console.log({ html });

if (typeof window === "object") {
  document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const content = document.createElement("div");
    content.innerHTML = html;
    root.appendChild(content);
  });
}
