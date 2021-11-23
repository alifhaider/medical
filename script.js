const container = document.querySelector(":root");

const parts = document.querySelectorAll(".parts");

const head = document.querySelector(".head");
const heart = document.querySelector(".heart");
const body = document.querySelector(".body");
const lungs = document.querySelector(".lungs");
const stomach = document.querySelector(".stomach");
const leftFoot = document.querySelector(".leftFoot");
const rightFoot = document.querySelector(".rightFoot");
const leftArm = document.querySelector(".leftArm");
const rightArm = document.querySelector(".rightArm");

const heartData = [
  {
    Name: "Height and weight - BMI",
    Link: "#",
  },

  {
    Name: "Area and volume – S/V ratio",
    Link: "#",
  },
  {
    Name: "CV System",
    Link: "#",
  },
  {
    Name: "Heart rate, blood pressure, O2 saturation",
    Link: "#",
  },
  {
    Name: "Blood volume – composition, Hct, [Hb]",
    Link: "#",
  },
  {
    Name: "Cardiac output, TPR, SV",
    Link: "#",
  },
  {
    Name: "Compliance",
    Link: "#",
  },
  {
    Name: "Cardiac Index",
    Link: "#",
  },
  {
    Name: "Blood pH",
    Link: "#",
  },
  {
    Name: "Respiratory System",
    Link: "#",
  },
  {
    Name: "RR, TV, ventilation",
    Link: "#",
  },
  {
    Name: "Compliance, FEV1",
    Link: "#",
  },
  {
    Name: "O2 consumed, CO2 produced (pH)",
    Link: "#",
  },
];

const lungsData = [
  { Name: "BMR", Link: "#" },
  { Name: "Blood glucose, lipid profile", Link: "#" },
  { Name: "Work (mets)", Link: "#" },
  { Name: "Body temp.", Link: "#" },
  { Name: "Urinary System", Link: "#" },
  { Name: "RBF, GFR, urine output", Link: "#" },
  { Name: "Fluid balance, ion levels", Link: "#" },
  { Name: "GI System", Link: "#" },
  { Name: "Input/output", Link: "#" },
  { Name: "Caloric balance, mass balance, fluid balance", Link: "#" },
  { Name: "Vitamins", Link: "#" },
  { Name: "Integumentary System", Link: "#" },
  { Name: "Sweat rate, T, fluid balance", Link: "#" },
  { Name: "Nervous System", Link: "#" },
  { Name: "IQ", Link: "#" },
];

const stomachData = [
  { Name: "Height/weight", Link: "#" },
  { Name: "BMR", Link: "#" },
  { Name: "Blood pressure", Link: "#" },
  { Name: "Fluid balance", Link: "#" },
  { Name: "Skeletal System", Link: "#" },
  { Name: "Number of bones", Link: "#" },
  { Name: "Bone strength and density", Link: "#" },
  { Name: "Joint ROM, speed", Link: "#" },
];

const headData = [
  { Name: "IOP", Link: "#" },
  { Name: "Aural sensitivity", Link: "#" },
  { Name: "Scovill scale", Link: "#" },
  { Name: "Pain scales", Link: "#" },
  { Name: "Memory", Link: "#" },
];

for (let i = 0; i < parts.length; i++) {
  parts[i].addEventListener("mouseenter", function (e) {
    container.style.setProperty("--pseudo", "visible");
    const newDiv = document.createElement("div");
    newDiv.className = "buttonContainer";
    parts[i].appendChild(newDiv);

    newDiv.style.left = `${-120}px`;
    newDiv.style.top = `${e.offsetY - 30}px`;

    if (parts[i].classList[1] === "stomach") {
      if (e.offsetX < 50) {
        newDiv.style.left = `${-120}px`;
        newDiv.style.top = `${e.offsetY - 30}px`;
        newDiv.style.direction = "rtl";
      } else {
        newDiv.style.left = `${110}px`;
        newDiv.style.top = `${e.offsetY - 30}px`;
        newDiv.style.direction = "ltr";
      }
      createButton(stomachData);
    } else if (parts[i].classList[1] === "head") {
      if (e.offsetX < 50) {
        newDiv.style.left = `${-120}px`;
        newDiv.style.top = `${e.offsetY - 30}px`;
        newDiv.style.direction = "rtl";
      } else {
        newDiv.style.left = `${60}px`;
        newDiv.style.top = `${e.offsetY - 30}px`;
        newDiv.style.direction = "ltr";
      }
      createButton(headData);
      body.style.visibility = "hidden";
      stomach.style.visibility = "hidden";
      lungs.style.visibility = "hidden";
    } else if (parts[i].classList[1] === "heart") {
      newDiv.style.direction = "rtl";
      newDiv.style.left = `${-120}px`;
      newDiv.style.top = `${e.offsetY - 30}px`;
      createButton(heartData);
      stomach.style.visibility = "hidden";
      lungs.style.visibility = "hidden";
    } else if (parts[i].classList[1] === "lungs") {
      newDiv.style.left = `${60}px`;
      newDiv.style.top = `${e.offsetY - 30}px`;
      createButton(lungsData);
      stomach.style.visibility = "hidden";
      heart.style.visibility = "hidden";
    } else if (parts[i].classList[1] === "rightArm") {
      newDiv.style.direction = "ltr";
      newDiv.style.left = `${60}px`;
      newDiv.style.top = `${e.offsetY - 30}px`;
      createButton(Arms);
      body.style.visibility = "hidden";
      stomach.style.visibility = "hidden";
      heart.style.visibility = "hidden";
      lungs.style.visibility = "hidden";
    } else if (parts[i].classList[1] === "leftArm") {
      createButton(Arms);
      body.style.visibility = "hidden";
      stomach.style.visibility = "hidden";
      heart.style.visibility = "hidden";
      lungs.style.visibility = "hidden";
      newDiv.style.direction = "rtl";
    } else if (parts[i].classList[1] === "leftFoot") {
      newDiv.style.direction = "rtl";
      createButton(Feet);
      body.style.visibility = "hidden";
      stomach.style.visibility = "hidden";
    } else if (parts[i].classList[1] === "rightFoot") {
      newDiv.style.direction = "ltr";
      newDiv.style.left = `${60}px`;
      newDiv.style.top = `${e.offsetY - 30}px`;
      createButton(Feet);
      body.style.visibility = "hidden";
      stomach.style.visibility = "hidden";
    }
  });

  parts[i].onmouseleave = function () {
    container.style.setProperty("--pseudo", "hidden");
    const buttonContainer = document.querySelector(".buttonContainer");
    parts[i].removeChild(buttonContainer);
    body.style.visibility = "visible";
    stomach.style.visibility = "visible";
    heart.style.visibility = "visible";
    lungs.style.visibility = "visible";
  };
}

function createButton(data) {
  const buttonContainer = document.querySelector(".buttonContainer");
  const buttonDiv = document.createElement("div");
  buttonDiv.className = "buttonDiv";
  buttonContainer.appendChild(buttonDiv);
  for (let i = 0; i < data.length; i++) {
    let button = document.createElement("a");
    button.className = "Link";
    buttonDiv.appendChild(button);
    const name = document.createTextNode(data[i].Name);
    button.title = data[i].Name;
    button.href = data[i].Link;
    button.appendChild(name);
  }
}
