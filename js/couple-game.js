const questions = [
  {
    q: "วันหยุด อยากไปเที่ยวที่ไหนมากที่สุด",
    c: ["คาเฟ่", "ทะเล", "ระบายสี"],
  },
  {
    q: "อยากเที่ยวจังหวัดไหน (ถ้ามีโอกาสได้ไป)",
    c: ["กรุงเทพ", "เชียงใหม่", "สุราษฎร์"],
  },
  {
    q: "สิ่งที่อยากทำ นอกจากงานที่ทำอยู่ตอนนี้",
    c: ["ช่างเสริมสวย", "ขายของชำ", "บัญชี (ร้านตัดผมชายในอนาคต)"],
  },
  {
    q: "เป้าหมายในการมีลูกด้วยกัน",
    c: ["20%", "50%", "100%"],
  },
  {
    q: "คิดว่าที่เป็นอยู่ตอนนี้ดีมากแล้วหรือยัง",
    c: ["ดีมากแล้ว", "ยังต้องปรับกันอีก", "ไม่มีความสุขเลย"],
  }
];

let index = 0;
let userAnswers = [];

const questionText = document.getElementById("questionText");
const choicesBox = document.getElementById("choices");
const gameCard = document.getElementById("gameCard");

function renderQuestion() {
  const q = questions[index];

  questionText.textContent = `${index + 1}. ${q.q}`;
  choicesBox.innerHTML = "";

  q.c.forEach((choice) => {
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.textContent = choice;
    btn.onclick = () => selectAnswer(choice);
    choicesBox.appendChild(btn);
  });
}

function selectAnswer(choice) {
  userAnswers.push(choice);
  index++;

  if (index < questions.length) {
    renderQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  let answersHTML = `
    <div style="color:white; text-align:center; padding:20px;">
      <h2>คำตอบของคุณ </h2>
  `;

  userAnswers.forEach((ans, i) => {
    answersHTML += `<h8>${i + 1}. ${ans}</h8>`;
  });

  answersHTML += `
      <br>
      <button class="btn" onclick="restartGame()">เล่นอีกครั้ง</button>
    </div>
  `;

  gameCard.innerHTML = answersHTML;
}

function restartGame() {
  index = 0;
  userAnswers = [];

  gameCard.innerHTML = `
    <h2 id="questionText"></h2>
    <div id="choices"></div>
  `;

  window.questionText = document.getElementById("questionText");
  window.choicesBox = document.getElementById("choices");

  renderQuestion();
}

renderQuestion();
