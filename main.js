import './style.css';

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
