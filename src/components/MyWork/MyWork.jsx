import './MyWork.css';

import ProjectCard from './ProjectCard/ProjectCard.jsx';

export default function MyWork() {
  return (
    <section className='my-work-section'>
      <h2 className='my-work-section__title'>My work</h2>
      <div className='my-work-section__projects-container'>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
}
