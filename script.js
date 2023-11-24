document.getElementById('runBtn').addEventListener('click', () => {
    const htmlEditor = document.querySelector('.html-editor');
    const cssEditor = document.querySelector('.css-editor');
    const jsEditor = document.querySelector('.js-editor');
  
    const htmlCode = htmlEditor.textContent;
    const cssCode = `<style>${cssEditor.textContent}</style>`;
    const jsCode = `<script>${jsEditor.textContent}</script>`;
  
    const outputFrame = document.getElementById('outputFrame');
    const outputDoc = outputFrame.contentDocument || outputFrame.contentWindow.document;
  
    outputDoc.open();
    outputDoc.write(`
      <html>
        <head>
          ${cssCode}
        </head>
        <body>
          ${htmlCode}
          ${jsCode}
        </body>
      </html>
    `);
    outputDoc.close();
  });
  