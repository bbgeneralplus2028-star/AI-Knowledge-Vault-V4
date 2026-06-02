let video = document.getElementById("video");
let output = document.getElementById("output");

let book = [];

async function startCamera() {
  const stream = await navigator.mediaDevices.getUserMedia({
    video: { facingMode: "environment" }
  });

  video.srcObject = stream;
}

async function scanFrame() {
  const canvas = document.createElement("canvas");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  const ctx = canvas.getContext("2d");
  ctx.drawImage(video, 0, 0);

  const image = canvas.toDataURL("image/png");

  const text = await runOCR(image);

  const result = await processInput(text);

  output.value += "\n\n" + result;

  addToBook(text);
}

function uploadFiles() {
  const input = document.createElement("input");
  input.type = "file";
  input.multiple = true;

  input.onchange = (e) => {
    for (let file of e.target.files) {
      const text = `[FILE] ${file.name}`;
      processInput(text);
      addToBook(text);
    }
  };

  input.click();
}
