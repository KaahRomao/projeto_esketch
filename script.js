const container = document.querySelector("#container");

for (let i = 0; i < 16 * 16; i++) {
  const div = document.createElement("div");
  div.classList.add("quadrado");
  container.appendChild(div);

  div.addEventListener("mouseover", () => {
    div.style.backgroundColor = "blue";
  });
}

const button = document.querySelector("#btnTamanho");

button.addEventListener("click", () => {
  let tamanhoXeY = prompt(
    "Qual o tamanho da largura e altura de quadrado que você quer?",
  );

  if (tamanhoXeY > 100) {
    alert("Tente valores abaixo de 100. talvez funcione!");
    return;
  }

  container.innerHTML = "";
  container.style.setProperty("--grid-size", tamanhoXeY);
  for (let i = 0; i < tamanhoXeY * tamanhoXeY; i++) {
    const div = document.createElement("div");
    div.classList.add("quadrado");
    container.appendChild(div);

    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = "red";
    });
  }
});
