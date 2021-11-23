class BodyScan extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="buttonContainer">
          <div class="buttonDiv">
          <a href="hello.com" class="firstLink"></a>
          <a href="hello.com" class="secondLink"></a>
          <a href="hello.com" class="thirdLink"></a>
          </div>
        </div>
        `;
  }
}
customElements.define("body-scan", BodyScan);

const body = document.querySelector(".body");

body.addEventListener("mouseenter", bodyMouseEnter);
body.onmouseleave = bodyMouseLeave;

function bodyMouseEnter(e) {
  const buttonContainer = document.querySelector(".buttonContainer");
  //   buttonContainer.style.left = `${e.offsetX}px`;
  //   newDiv.style.top = `${e.offsetY - 30}px`;
}

function bodyMouseLeave() {
  body.removeChild(BodyScan);
}
