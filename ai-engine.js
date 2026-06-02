async function processInput(text) {
  classify(text);
  storeMemory(text);
  linkGraph(text);

  const summary = await autoSummarize(text);

  return summary || text;
}

function classify(text) {
  let type = "general";

  if (text.toLowerCase().includes("court")) type = "legal";
  if (text.toLowerCase().includes("invoice")) type = "financial";
  if (text.toLowerCase().includes("property")) type = "property";

  localStorage.setItem("lastType", type);
}

async function autoSummarize(text) {
  return text.split(" ").slice(0, 80).join(" ") + "...";
}
