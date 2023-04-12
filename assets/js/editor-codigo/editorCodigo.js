import { alteraCorEditor } from './alteraCorEditor.js';
import { aplicaHighlight } from './syntaxHighlight.js';

alteraCorEditor();

const botao = document.querySelector(".editor__botao");

botao.addEventListener("click", () => {
    aplicaHighlight();
} );
