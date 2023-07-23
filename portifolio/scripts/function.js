  // Função para criar elementos HTML com atributos
  function createElementWithAttributes(tag, attributes) {
    const element = document.createElement(tag);
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
    return element;
}

function toggleNav() {
const mainNav = document.getElementById('main-nav');
mainNav.classList.toggle('active');
}

        
    // Criação do header
const header = createElementWithAttributes('header', {});

// Div profile-info
const profileInfoDiv = createElementWithAttributes('div', { class: 'profile-info' });

// Div profile-image
const profileImageDiv = createElementWithAttributes('div', { class: 'profile-image' });
const profileImage = document.createElement('img');
profileImage.src = 'img/Allanz.png';
profileImage.alt = 'Foto do Allan Carvalho Souza';
profileImageDiv.appendChild(profileImage);

// Div profile-name
const profileNameDiv = createElementWithAttributes('div', { class: 'profile-name' });
profileNameDiv.textContent = 'Allan';

// Adicionando profile-image e profile-name à profile-info
profileInfoDiv.appendChild(profileImageDiv);
profileInfoDiv.appendChild(profileNameDiv);

// Botão toggle-nav-btn
const toggleNavBtn = createElementWithAttributes('button', { id: 'toggle-nav-btn', class: 'toggle-nav-btn' });
toggleNavBtn.innerHTML = '<i class="fas fa-bars"></i>';
toggleNavBtn.addEventListener('click', toggleNav);

// Nav main-nav
const mainNav = createElementWithAttributes('nav', { id: 'main-nav' });
const navList = createElementWithAttributes('ul', {});

// Links do menu
const menuLinks = [
    { href: 'index.html', icon: 'fas fa-home', text: 'Home' },
    { href: './links/curriculo.html', icon: 'fas fa-user', text: 'Sobre mim' },
    { href: './links/projetos.html', icon: 'fas fa-folder-open', text: 'Meus projetos' },
    { href: '#videos', icon: 'fas fa-video', text: 'Vídeos' },
    { href: '#redes', icon: 'fas fa-share-alt', text: 'Redes Sociais' },
    { href: '#tecnologias', icon: 'fas fa-laptop-code', text: 'Tecnologias' },
    { href: '#linguagens-mais-usadas', icon: 'fas fa-code', text: 'Linguagens mais usadas' }
];

menuLinks.forEach(link => {
    const listItem = createElementWithAttributes('li', {});
    const linkItem = createElementWithAttributes('a', { href: link.href });
    linkItem.innerHTML = `<i class="${link.icon}"></i> ${link.text}`;
    listItem.appendChild(linkItem);
    navList.appendChild(listItem);
});

// Adicionando navList à mainNav
mainNav.appendChild(navList);

// Adicionando profile-info, toggleNavBtn e mainNav ao header
header.appendChild(profileInfoDiv);
header.appendChild(toggleNavBtn);
header.appendChild(mainNav);

// Adicionando o header ao corpo do documento
document.body.insertBefore(header, document.body.firstChild);

// Criação do main
const main = createElementWithAttributes('main', {});

// Seção 1
const section1 = createElementWithAttributes('section', { id: 'section1' });
const section1Title = createElementWithAttributes('h2', { class: 'section-title' });
section1Title.textContent = '🚀 Explorando o Mundo do Desenvolvimento 🌐';
const section1Content = createElementWithAttributes('div', { class: 'section-content' });
section1Content.innerHTML = `
    <p><span class="emoji emoji-bounce">😄</span> Olá! Sou Allan Carvalho Souza, um entusiasta da tecnologia apaixonado por desenvolvimento web e mobile.</p>
    <p><span class="emoji emoji-bounce">🌈📱</span> Meu portfólio é um espaço onde compartilho meus projetos, experiências e habilidades na área de programação.</p>
    <p><span class="emoji emoji-spin">💻🚀</span> Com foco em criar soluções criativas e funcionais, busco constantemente aprimorar minhas habilidades e explorar novas tecnologias.</p>
    <p><span class="emoji emoji-pulse">🛠️🔍</span> Seja bem-vindo(a) e sinta-se à vontade para explorar meus projetos e conhecer um pouco mais sobre meu trabalho!</p>
`;
section1.appendChild(section1Title);
section1.appendChild(section1Content);
main.appendChild(section1);

// Seção de Tecnologias
const sectionTecnologias = createElementWithAttributes('section', { id: 'tecnologias' });
const sectionTecnologiasTitle = createElementWithAttributes('h2', { class: 'section-title' });
sectionTecnologiasTitle.textContent = 'Tecnologias';
const technologiesDiv = createElementWithAttributes('div', { class: 'technologies' });
const technologiesLogos = [
    'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
    'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white',
    'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black',
    'https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white',
    'https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white',
    'https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white',
    'https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black',
    'https://img.shields.io/badge/React_Native-61DAFB?style=for-the-badge&logo=react&logoColor=black'
];

technologiesLogos.forEach(logoSrc => {
    const logoImg = document.createElement('img');
    logoImg.src = logoSrc;
    technologiesDiv.appendChild(logoImg);
});

sectionTecnologias.appendChild(sectionTecnologiasTitle);
sectionTecnologias.appendChild(technologiesDiv);
main.appendChild(sectionTecnologias);

// Seção de Linguagens Mais Usadas
const sectionLinguagens = createElementWithAttributes('section', { id: 'linguagens-mais-usadas' });
const sectionLinguagensTitle = createElementWithAttributes('h2', { class: 'section-title' });
sectionLinguagensTitle.textContent = 'Linguagens mais usadas';
const chartContainer = createElementWithAttributes('div', { class: 'chart-container' });
const chartImg = document.createElement('img');
chartImg.src = 'https://github-readme-stats.vercel.app/api/top-langs/?username=AllanZter';
chartImg.alt = 'Linguagens mais usadas';
chartContainer.appendChild(chartImg);
sectionLinguagens.appendChild(sectionLinguagensTitle);
sectionLinguagens.appendChild(chartContainer);
main.appendChild(sectionLinguagens);



 // Seção de Vídeos
const sectionVideos = createElementWithAttributes('section', { id: 'videos' });
const sectionVideosTitle = createElementWithAttributes('h2', { class: 'section-title' });
sectionVideosTitle.textContent = 'Vídeos';
const videoSlider = createElementWithAttributes('div', { class: 'video-slider' });
const videoSlides = createElementWithAttributes('div', { class: 'slides' });

const videoUrls = [
'video/java.mp4',
'video/app.mp4',
'video/calculadora.mp4',

];

let currentSlide = 0; // Índice do slide atual

videoUrls.forEach(videoUrl => {
const videoCard = createElementWithAttributes('div', { class: 'video-card' });
const videoContainer = createElementWithAttributes('div', { class: 'video-container' });
const videoFrame = document.createElement('iframe');
videoFrame.src = videoUrl;
videoFrame.frameBorder = '0';
videoFrame.allowFullscreen = true;
videoContainer.appendChild(videoFrame);
videoCard.appendChild(videoContainer);
videoSlides.appendChild(videoCard);
});

const prevBtn = document.createElement('button');
prevBtn.textContent = '<';
prevBtn.className = 'prev-btn';
prevBtn.addEventListener('click', () => {
currentSlide = (currentSlide - 1 + videoUrls.length) % videoUrls.length;
updateSlidePosition();
});

const nextBtn = document.createElement('button');
nextBtn.textContent = '>';
nextBtn.className = 'next-btn';
nextBtn.addEventListener('click', () => {
currentSlide = (currentSlide + 1) % videoUrls.length;
updateSlidePosition();
});

function updateSlidePosition() {
const slideWidth = videoSlides.firstElementChild.clientWidth;
const newPosition = -currentSlide * slideWidth;
videoSlides.style.transform = `translateX(${newPosition}px)`;
}

videoSlider.appendChild(videoSlides);
videoSlider.appendChild(prevBtn);
videoSlider.appendChild(nextBtn);
sectionVideos.appendChild(sectionVideosTitle);
sectionVideos.appendChild(videoSlider);
main.appendChild(sectionVideos);






// Seção de Redes Sociais
const sectionRedes = createElementWithAttributes('section', { id: 'redes' });
const sectionRedesTitle = createElementWithAttributes('h2', { class: 'section-title' });
sectionRedesTitle.textContent = 'Redes Sociais';
const socialIcons = createElementWithAttributes('div', { class: 'social-icons' });

const socialMediaLinks = [
{ href: 'https://www.facebook.com/', iconClass: 'facebook-icon', icon: 'fab fa-facebook-square' },
{ href: 'https://www.instagram.com/allan_zter/', iconClass: 'instagram-icon', icon: 'fab fa-instagram' },
{ href: 'https://www.linkedin.com/in/allan-carvalho-souza-64ba69264', iconClass: 'linkedin-icon', icon: 'fab fa-linkedin' },
{ href: 'https://github.com/SeuUsuario', iconClass: 'github-icon', icon: 'fab fa-github' },
{ href: 'https://api.whatsapp.com/send?phone=SEUNUMERODOTELEFONE', iconClass: 'whatsapp-icon', icon: 'fab fa-whatsapp' },
];

socialMediaLinks.forEach(link => {
const socialIconLink = createElementWithAttributes('a', { href: link.href, target: '_blank', class: link.iconClass });
const socialIcon = document.createElement('i');
socialIcon.className = link.icon;
socialIconLink.appendChild(socialIcon);
socialIcons.appendChild(socialIconLink);
});

sectionRedes.appendChild(sectionRedesTitle);
sectionRedes.appendChild(socialIcons);
main.appendChild(sectionRedes);



document.body.appendChild(main);