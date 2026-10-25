const compliments = [
  'Kehadiranmu adalah cara sederhana untukku membuat hari biasa terasa istimewa.',
  'Kamu tidak harus jadi sempurna untuk jadi seseorang yang sangat berarti untukku.',
  'Semoga hari ini memperlakukanmu selembut kamu memperlakukan orang-orang yang kamu sayangi.',
  'Senyummu adalah salah satu hal kecil yang diam-diam bisa memperbaiki hariku menjadi lebih baik.',
  'Jangan lupa istirahat, ya sayanggkuu. Dunia boleh jahat, tapi kamu masih punya tempat untuk bersandar yaitu aku 💖.',
  'Apa pun yang sedang kamu hadapi, aku percaya kamu sudah berusaha sebaik mungkin.'
];

const compliment = document.getElementById('compliment');
const hugButton = document.getElementById('hugButton');
const hugCount = document.getElementById('hugCount');
const noteButton = document.getElementById('noteButton');
const letter = document.getElementById('letter');
const hearts = document.getElementById('hearts');
let hugsSent = 0;

hugButton.addEventListener('click', () => {
  hugsSent += 1;
  hugCount.textContent = `Peluk terkirim: ${hugsSent} 🤍`;
  compliment.textContent = compliments[Math.floor(Math.random() * compliments.length)];

  for (let index = 0; index < 7; index += 1) {
    const heart = document.createElement('span');
    heart.className = 'floating-heart';
    heart.textContent = ['♥', '♡', '♥'][Math.floor(Math.random() * 3)];
    heart.style.left = `${10 + Math.random() * 80}%`;
    heart.style.animationDelay = `${Math.random() * 0.45}s`;
    heart.style.fontSize = `${17 + Math.random() * 16}px`;
    hearts.appendChild(heart);
    heart.addEventListener('animationend', () => heart.remove(), { once: true });
  }
});

noteButton.addEventListener('click', () => {
  const isOpening = letter.hidden;
  letter.hidden = !isOpening;
  noteButton.textContent = isOpening ? 'Tutup surat kecil' : 'Buka surat kecil';
  noteButton.setAttribute('aria-expanded', String(isOpening));
});

noteButton.setAttribute('aria-expanded', 'false');
