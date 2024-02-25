import './MyWork.css';

import ProjectCard from './ProjectCard/ProjectCard.jsx';

export default function MyWork() {
  return (
    <section className='my-work-section'>
      <h2 className='my-work-section__title'>My work</h2>
      <div className='my-work-section__projects-container'>
        <ProjectCard
          imageSrc='/images/battleship-preview-photo.jpg'
          projectName='Battleship'
          githubLink='https://github.com/yppelu/odin-battleship/'
          projectLink='https://yppelu-odin-battleship.netlify.app/'
          description='Battleship game project for TOP'
        />
        <ProjectCard
          imageSrc='/images/memory-card-preview-photo.jpg'
          projectName='Memory Card Game'
          githubLink='https://github.com/yppelu/odin-memory-card/'
          projectLink='https://yppelu-odin-memory-card.netlify.app/'
          description='Memory Card game project for TOP'
        />
        <ProjectCard
          imageSrc='/images/todo-list-preview-photo.jpg'
          projectName='ToDo List'
          githubLink='https://github.com/yppelu/odin-todo-list/'
          projectLink='https://yppelu-odin-todo-list.netlify.app/'
          description='ToDo List project for TOP'
        />
        <ProjectCard
          imageSrc='/images/weather-app-preview-photo.jpg'
          projectName='Weather App'
          githubLink='https://github.com/yppelu/odin-weather-app/'
          projectLink='https://yppelu.github.io/odin-weather-app/'
          description='Weather app project for TOP'
        />
        <ProjectCard
          imageSrc='/images/tic-tac-toe-preview-photo.jpg'
          projectName='Tic Tac Toe'
          githubLink='https://github.com/yppelu/odin-tic-tac-toe'
          projectLink='https://yppelu.github.io/odin-tic-tac-toe/'
          description='Tic Tac Toe project for TOP'
        />
        <ProjectCard
          imageSrc='/images/etch-a-sketch-preview-photo.jpg'
          projectName='Etch-a-Sketch'
          githubLink='https://github.com/yppelu/odin-etch-a-sketch'
          projectLink='https://yppelu.github.io/odin-etch-a-sketch/'
          description='Etch-a-Sketch project for TOP'
        />
      </div>
    </section>
  );
}
