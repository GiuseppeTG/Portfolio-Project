// projects object

const projects = [
  {
    projectTitle: 'Project #0',
    description: 'project#0 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio!',
    mainImage: 'images/project-1.jpg',
    images: ['images/project-1.jpg', 'images/project-4.jpg', 'images/project-3.jpg', 'images/project-2.jpg'],
    languages: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    linkToLiveVersion: '#',
    linkToSource: 'https://github.com/GiuseppeTG',
  },
  {
    projectTitle: 'Project #1',
    description: 'project#1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio!',
    mainImage: 'images/project-2.jpg',
    images: ['images/project-2.jpg', 'images/project-4.jpg', 'images/project-3.jpg', 'images/project-2.jpg'],
    languages: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    linkToLiveVersion: '#',
    linkToSource: 'https://github.com/GiuseppeTG',
  },
  {
    projectTitle: 'Project #2',
    description: 'project#2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio!',
    mainImage: 'images/project-3.jpg',
    images: ['images/project-3.jpg', 'images/project-4.jpg', 'images/project-3.jpg', 'images/project-2.jpg'],
    languages: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    linkToLiveVersion: '#',
    linkToSource: 'https://github.com/GiuseppeTG',
  },
  {
    projectTitle: 'Project #3',
    description: 'project#3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio!',
    mainImage: 'images/project-4.jpg',
    images: ['images/project-4.jpg', 'images/project-4.jpg', 'images/project-3.jpg', 'images/project-2.jpg'],
    languages: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    linkToLiveVersion: '#',
    linkToSource: 'https://github.com/GiuseppeTG',
  },
  {
    projectTitle: 'Project #4',
    description: 'project#4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio!',
    mainImage: 'images/project-5.jpg',
    images: ['images/project-5.jpg', 'images/project-4.jpg', 'images/project-3.jpg', 'images/project-2.jpg'],
    languages: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    linkToLiveVersion: '#',
    linkToSource: 'https://github.com/GiuseppeTG',
  },
  {
    projectTitle: 'Project #5',
    description: 'project#5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio!',
    mainImage: 'images/project-6.jpg',
    images: ['images/project-6.jpg', 'images/project-4.jpg', 'images/project-3.jpg', 'images/project-2.jpg'],
    languages: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    linkToLiveVersion: '#',
    linkToSource: 'https://github.com/GiuseppeTG',
  },
];

// constants

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const header = document.querySelector('header');
const body = document.querySelector('body');
const modal = document.querySelector('#modal');


// mobile menu

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  header.classList.toggle('full-screen');
  body.classList.toggle('no-scroll');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  header.classList.remove('full-screen');
  body.classList.remove('no-scroll');
}));

// modal window

function openModal(num = null) {
  if (num != null) {
    const { languages } = projects[num];
    let languagesList = '';
    languages.forEach((listedItem) => { languagesList += `<li>${listedItem}</li>`; });

    const { images } = projects[num];
    let imagesList = '';
    images.forEach((listedImage) => { imagesList += `<img src="${listedImage}"></img>`; });

    document.getElementById('modal-project-name').innerHTML = projects[num].projectTitle;
    document.getElementById('modal-languages').innerHTML = languagesList;
    document.getElementById('foto').src = projects[num].mainImage;
    document.getElementById('modal-img-preview').innerHTML = imagesList;
    document.getElementById('modal-project-live').href = projects[num].linkToLiveVersion;
    document.getElementById('modal-project-source').href = projects[num].linkToSource;

    modal.classList.add('active');
  }
}

function closeModal(id = null) {
  if (id != null) {
    modal.classList.remove('active');
  }
}

openModal();
closeModal();


// Form validation

