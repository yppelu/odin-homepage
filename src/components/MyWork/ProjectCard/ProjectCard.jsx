import './ProjectCard.css';

export default function ProjectCard({ imageSrc, projectName, githubLink, projectLink, description }) {
  return (
    <div className='project-card'>
      <div className='project-card__image-container'>
        {
          imageSrc
            ? (
              <>
                <img src={imageSrc} alt={projectName + 'project'} />
              </>
            )
            : (<>
              <p>screenshot</p>
              <p>of project</p>
            </>)
        }
      </div>
      <div className='project-card__description'>
        <div className='project-card__header'>
          <h3 className='project-card__title'>{projectName}</h3>
          <div className='project-card__project-links'>
            <a className='project-card__project-link' href={githubLink} target='_blank' rel='noreferrer' title='Project GitHub' aria-label='Project GitHub'>
              <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' alt='Project GitHub' aria-hidden />
            </a>
            <a className='project-card__project-link' href={projectLink} target='_blank' rel='noreferrer' title='Open Project' aria-label='Open Project'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='#000000'>
                <path d='M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z' />
              </svg>
            </a>
          </div>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}
