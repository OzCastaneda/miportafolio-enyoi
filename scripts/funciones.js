const projects = [
    {
      idProject: 1,
      imgProject: "https://res.cloudinary.com/drxkkea9o/image/upload/v1742165726/the_Four_Sacred_Guardia_3_hyllof.jpg",
      titleProject: 'Juego de Monstruos',
      descriptionProject: "En este proyecto se interactua con monstruos de diferentes elementos",
      linkProject: "",
    },
    {
      idProject: 2,
      imgProject: "https://res.cloudinary.com/drxkkea9o/image/upload/v1741568375/A_majestic_battle_between_a_powerful_white_t_2_van2ts.jpg",
      titleProject: 'Calculadora',
      descriptionProject: "Este implementa logica de javascript para crear una calculadora",
      linkProject: "",
    },
    {
      idProject: 3,
      imgProject: "https://res.cloudinary.com/drxkkea9o/image/upload/v1742166952/cyborg8_ueksk1.jpg",
      titleProject: 'Reloj digital',
      descriptionProject: "Permite ver la hora facilmente",
      linkProject: "",
    },
    {
      idProject: 4,
      imgProject: "https://res.cloudinary.com/drxkkea9o/image/upload/v1742167050/Angelic_samurai_warrior_with_1_zba8zf.jpg",
      titleProject: 'Formulario de contactenos',
      descriptionProject: "En este proyecto recopilamos informacion a traves de una app sencilla",
      linkProject: "",
    },
  ];
  
  const references = [
    {
      Nombre: "Pedro Perez",
      Cargo: "Ingeniero",
      Telefono: "3102587895",
      Correo: "pepe1@gmail.com",
    },
    {
      Nombre: "Carlos Rodriguez",
      Cargo: "Desarrollador",
      Telefono: "3102587895",
      Correo: "carlos2@gmail.com",
    },
    {
      Nombre: "Oscar Collazos",
      Cargo: "Analista de datos",
      Telefono: "3102587895",
      Correo: "oscar3@gmail.com",
    },
  ];
  
  const experience = [
    {
      nombreLenguaje: "HTML",
      progresoPorcentaje: 80,
      imagen: "https://res.cloudinary.com/drxkkea9o/image/upload/v1742177245/htmlloogo_arg8e5.png",
    },
    {
      nombreLenguaje: "JavaScript",
      progresoPorcentaje: 80,
      imagen: "https://res.cloudinary.com/drxkkea9o/image/upload/v1742177258/java_jhwnh6.jpg",
    },
    {
      nombreLenguaje: "CSS",
      progresoPorcentaje: 80,
      imagen: "https://res.cloudinary.com/drxkkea9o/image/upload/v1742177269/css_rysm79.jpg",
    },
  ];
  
  // Función para el desplazamiento suave a las secciones
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (event) {
      event.preventDefault();
  
      const target = document.querySelector(this.getAttribute("href"));
  
      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: "smooth", // Animación de desplazamiento suave
        });
      }
    });
  });
  
  // Función para cargar la sección de proyectos
  function loadSectionProjects() {
    projects.forEach(project => createCardsProjects(project));
  }
  
  // Función para crear tarjetas de proyectos
  function createCardsProjects(project) {
    const cardProject = document.createElement("div");
    cardProject.classList.add("card-projects");
  
    const containerImg = document.createElement("div");
    containerImg.classList.add("container-img-card");
  
    const imgCard = document.createElement("img");
    imgCard.src = project.imgProject;
    imgCard.alt = project.titleProject;
   
    const containerDescription = document.createElement('div');
    containerDescription.classList.add('container-description-card');
  
    const titleCard = document.createElement('h3');
    titleCard.textContent = project.titleProject;
  
    const descriptionCard = document.createElement('p');
    descriptionCard.textContent = project.descriptionProject;
  
    const goToProject = document.createElement('a');
    goToProject.href = project.linkProject;
    goToProject.setAttribute('target', '_blank');
    goToProject.textContent = 'Ir a proyecto';
   
    cardProject.appendChild(containerImg);
    cardProject.appendChild(containerDescription);
  
    containerImg.appendChild(imgCard);
    containerDescription.appendChild(titleCard);
    containerDescription.appendChild(descriptionCard);
    containerDescription.appendChild(goToProject);
  
    document.querySelector('.container-cards').appendChild(cardProject);
  }
  
  // Función para cargar la sección de experiencia
  function loadSectionExperience() {
    experience.forEach(exp => createCardsExperience(exp));
  }
  
  // Función para crear tarjetas de experiencia
  function createCardsExperience(exp) {
    const cardExperience = document.createElement("div");
    cardExperience.classList.add("card-experience");
    
    const containerImg = document.createElement("div");
    containerImg.classList.add("container-img-experience");
    
    const imgExperience = document.createElement("img");
    imgExperience.src = exp.imagen;
    imgExperience.alt = exp.nombreLenguaje;
    
    const containerInfo = document.createElement("div");
    containerInfo.classList.add("container-info-experience");
    
    const titleExperience = document.createElement("h3");
    titleExperience.textContent = exp.nombreLenguaje;
    
    const progressContainer = document.createElement("div");
    progressContainer.classList.add("progress-container");
    
    const progressBar = document.createElement("div");
    progressBar.classList.add("progress-bar");
    progressBar.style.width = `${exp.progresoPorcentaje}%`;
    
    const percentageText = document.createElement("span");
    percentageText.textContent = `${exp.progresoPorcentaje}%`;
    percentageText.classList.add("percentage-text");
    
    containerImg.appendChild(imgExperience);
    progressContainer.appendChild(progressBar);
    progressContainer.appendChild(percentageText);
    
    containerInfo.appendChild(titleExperience);
    containerInfo.appendChild(progressContainer);
    
    cardExperience.appendChild(containerImg);
    cardExperience.appendChild(containerInfo);
    
    document.querySelector('.container-experience').appendChild(cardExperience);
  }
  
  // Función para cargar la sección de referencias
  function loadSectionReferences() {
    references.forEach(ref => createCardsReferences(ref));
  }
  
  // Función para crear tarjetas de referencias
  function createCardsReferences(ref) {
    const cardReference = document.createElement("div");
    cardReference.classList.add("card-reference");
    
    const nameReference = document.createElement("h3");
    nameReference.textContent = ref.Nombre;
    
    const positionReference = document.createElement("p");
    positionReference.classList.add("position");
    positionReference.textContent = ref.Cargo;
    
    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-info");
    
    const phoneContainer = document.createElement("div");
    phoneContainer.classList.add("contact-item");
    
    const phoneIcon = document.createElement("span");
    phoneIcon.classList.add("icon");
    phoneIcon.innerHTML = "📞";
    
    const phoneText = document.createElement("span");
    phoneText.textContent = ref.Telefono;
    
    const emailContainer = document.createElement("div");
    emailContainer.classList.add("contact-item");
    
    const emailIcon = document.createElement("span");
    emailIcon.classList.add("icon");
    emailIcon.innerHTML = "✉️";
    
    const emailText = document.createElement("span");
    emailText.textContent = ref.Correo;
    
    phoneContainer.appendChild(phoneIcon);
    phoneContainer.appendChild(phoneText);
    
    emailContainer.appendChild(emailIcon);
    emailContainer.appendChild(emailText);
    
    contactContainer.appendChild(phoneContainer);
    contactContainer.appendChild(emailContainer);
    
    cardReference.appendChild(nameReference);
    cardReference.appendChild(positionReference);
    cardReference.appendChild(contactContainer);
    
    document.querySelector('.container-references').appendChild(cardReference);
  }
  
  // Inicializar todas las secciones cuando el DOM esté cargado
  document.addEventListener('DOMContentLoaded', function() {
    loadSectionProjects();
    loadSectionExperience();
    loadSectionReferences();
  });