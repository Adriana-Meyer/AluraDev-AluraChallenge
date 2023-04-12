
function alteraCorEditor() {
    const seletorCor = document.getElementById("seletorCor");

    seletorCor.addEventListener("change", () => {
        const editor = document.getElementById("editorContainer");
        editor.style.backgroundColor = seletorCor.value;

    });
}

export {
    alteraCorEditor
}