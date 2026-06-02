const API_KEY = "YOUR_OPENAI_API_KEY";

async function askGPT(prompt) {
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `
You are a live intelligence engine inside a document analysis system.
You:
- summarize documents
- extract legal meaning
- find risks
- compare ideas
- build structured knowledge outputs
`
        },
        { role: "user", content: prompt }
      ]
    })
  });

  const data = await res.json();
  return data.choices[0].message.content;
}
