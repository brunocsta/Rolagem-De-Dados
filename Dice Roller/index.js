function rolarDado(){
    const numeroDeRolagens = document.getElementById("numeroDeRolagens").value;
    const resultadoRolagem = document.getElementById("resultadoRolagem");
    const imagensDado = document.getElementById("imagensDado");
    const valores = [];
    const imagens = [];

    for(let i = 0; i < numeroDeRolagens; i++){
        const valor = Math.floor(Math.random() * 6) + 1;
        valores.push(valor);
        imagens.push(`<img src="dados_imagens/${valor}.png">`);
    }
    resultadoRolagem.textContent = `Rolagem: ${valores.join(', ')}`;
    imagensDado.innerHTML = imagens.join('');

}