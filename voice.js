function startVoice() {
  const rec = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

  rec.onresult = (e) => {
    const cmd = e.results[0][0].transcript.toLowerCase();

    if (cmd.includes("scan")) scanFrame();
    if (cmd.includes("upload")) uploadFiles();
    if (cmd.includes("export")) exportBook();
  };

  rec.start();
}
