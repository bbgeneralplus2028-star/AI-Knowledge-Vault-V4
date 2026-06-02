let graph = JSON.parse(localStorage.getItem("graph") || "{}");

function linkGraph(text) {
  let words = text.toLowerCase().split(" ");

  words.forEach(w => {
    if (!graph[w]) graph[w] = [];
    graph[w].push(text.slice(0, 60));
  });

  localStorage.setItem("graph", JSON.stringify(graph));
}
