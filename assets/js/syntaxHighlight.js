const linguagem = document.querySelector(".cadastro__opcoes");
const editorCodigo = document.querySelector(".editor__texto");


function aplicaHighlight() {
    const codigo = editorCodigo.innerText;
    editorCodigo.innerHTML = `<code class="editor__textoCodigo hljs ${linguagem.value}" contenteditable="true" aria-label="Editor de Código"></code>`

    editorCodigo.querySelector("code").textContent = codigo;

    hljs.highlightElement(editorCodigo.querySelector("code"));
}


export {
    aplicaHighlight
}