import './AboutMe.css';

import LinksToAccounts from '../LinksToAccounts/LinksToAccounts.jsx';

export default function AboutMe() {
  return (
    <section className='about-me-section'>
      <div className='about-me-section__background'></div>
      <div className='about-me-section__content'>
        <picture className='about-me-section__photo'>
          <source media='(max-width:500px)' srcSet='/images/about-me_mobile.jpg' />
          <source media='(max-width:780px)' srcSet='/images/about-me_tablet.jpg' />
          <img src='/images/about-me_desktop.jpg' alt='Ashley Williams' />
        </picture>
        <p className='about-me-section__name'>Ashley Williams</p>
        <div className='about-me-section__description'>
          <h2 className='about-me-section__title'>About me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <LinksToAccounts />
        </div>
      </div>
    </section>
  );
}
