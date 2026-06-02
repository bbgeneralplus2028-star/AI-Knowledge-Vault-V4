function addToBook(text) {
  book.push({ page: book.length + 1, text });
  localStorage.setItem("book", JSON.stringify(book));
}

function exportBook() {
  const content = book.map(p => `PAGE ${p.page}\n\n${p.text}`).join("\n\n---\n\n");

  const blob = new Blob([content], { type: "text/plain" });

  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "AI_Knowledge_Book.txt";
  a.click();
}
