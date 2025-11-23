function showMenu() {
  document.querySelector('.landing-page').style.display = 'none';
  document.getElementById('menuPage').style.display = 'block';
}

function showSubMenu(id) {
  document.getElementById('menuPage').style.display = 'none';
  document.querySelectorAll('.submenu-page').forEach(p => p.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}

function showHuruf() { showSubMenu('huruf'); }
function showIsim() { showSubMenu('isim'); }
function showFiil() { showSubMenu('fiil'); }

function backToMenu() {
  document.querySelectorAll('.submenu-page').forEach(p => p.style.display = 'none');
  document.getElementById('menuPage').style.display = 'block';
}

function exitApp() {
  alert("Terima kasih telah menggunakan Tamyiz!");
}
document.addEventListener("DOMContentLoaded", () => {
  const arabicText = "وَلَقَدْ يَسَّرْنَا ٱلْقُرءَانَ لِلذِّكْرِ فَهَلْ مِن مُّدَّكِرٍ";
  const ayatContainer = document.getElementById("ayatArab");

  if (ayatContainer) {
    [...arabicText].reverse().forEach((char, index) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.animationDelay = `${index * 0.15}s`;
      ayatContainer.appendChild(span);
    });

    setTimeout(() => {
      const translation = document.getElementById("terjemahAyat");
      if (translation) translation.style.opacity = 1;
    }, arabicText.length * 150 + 500);
  }
});
  const clickSound = document.getElementById('clickSound');

  function playClickSound() {
    if (clickSound) clickSound.play();
  }

  function goToPage(url) {
    playClickSound();
    document.body.classList.add("fade-out");
    setTimeout(() => {
      window.location.href = url;
    }, 500); // Delay sesuai durasi fade-out
  }
