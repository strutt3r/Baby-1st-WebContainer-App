import './style.css';
import { WebContainer } from '@webcontainer/api';
import { files } from './files';
/** @type {import('@webcontainer/api').WebContainer} */
let webcontainerInstance;

window.addEventListener('load', async () => {
  textareaEl.value = files['index.js'].file.contents;
  // Call only once
  webcontainerInstance = await WebContainer.boot();
  await webcontainerInstance.mount(files);
  const exitCode = await installDependencies();
  if (exitCode !== 0) {
    throw new Error('Installation Failed');
  }
});

document.querySelector('#app').innerHTML = `
<div class = "container">
  <div class = "editor">
    <textarea>A text area am I</textarea>
  </div>
  <div class = "preview">
    <iframe src = "loading.html"></iframme>
  </div>
</div>
`;

/** @type {HTMLIFrameElement | null} */
const iframeEl = document.querySelector('iframe');

/** @type {HTMLTextAreaElement | null} */
const textareaEl = document.querySelector('textarea');

async function installDependencies() {
  // Install Dependencies
  const installProcess = await webcontainerInstance.spawn('npm', ['install']);
  installProcess.output.pipeTo(
    new WritableStream({
      write(data) {
        console.log(data);
      },
    })
  );
  // Wait for install command to exit
  return InstallProcess.exit;
}
