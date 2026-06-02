let memory = JSON.parse(localStorage.getItem("memory") || "[]");

function storeMemory(text) {
  memory.push({ id: Date.now(), text });
  localStorage.setItem("memory", JSON.stringify(memory));
}
