const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');

// Som para o botão "Não" (efeito de fuga)
const noButtonAudio = new Audio('https://www.myinstants.com/media/sounds/vine-boom.mp3');



function moveNoButton() {
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;

    const maxX = containerRect.width - buttonWidth;
    const maxY = containerRect.height - buttonHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noButton.style.position = 'absolute';
    noButton.style.transition = 'transform 0.1s ease, top 0.2s, left 0.2s';
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
    noButton.style.transform = 'scale(1.2) rotate(10deg)';
    
    // Toca o som de fuga no botão "Não"
    noButtonAudio.currentTime = 0;
    noButtonAudio.play();

    setTimeout(() => {
        noButton.style.transform = 'scale(1) rotate(0deg)';
    }, 100);
}

noButton.addEventListener('mouseenter', moveNoButton);
noButton.addEventListener('touchstart', moveNoButton);

// Toca o som romântico ao clicar no botão "Sim"
yesButton.addEventListener('click', () => {
    romanticAudio.currentTime = 0;
    romanticAudio.play();
});
