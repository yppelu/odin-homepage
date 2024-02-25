import './ContactMe.css';

import LinksToAccounts from '../LinksToAccounts/LinksToAccounts.jsx';

export default function ContactMe() {
  return (
    <footer className='contact-me'>
      <div className='contact-me__info'>
        <h2 className='contact-me__title'>Contact me</h2>
        <p className='contact-me__paragraph'>
          Please get in touch if you think our work can be mutually beneficial!
        </p>
        <p className='contact-me__paragraph'>
          1234 Random Road
          <br />
          Random Town, California, 12345
        </p>
        <p className='contact-me__paragraph' aria-label='Phone number'>
          <svg className='contact-me__info-icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='#FFFFFF'>
            <path d='M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z' />
          </svg>
          555-555-5555
        </p>
        <p className='contact-me__paragraph' aria-label='Email address'>
          <svg className='contact-me__info-icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='#FFFFFF'>
            <path d='M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z' />
          </svg>
          this.is.not.real@gmail.com
        </p>
        <LinksToAccounts />
      </div>
      <picture className='contact-me__picture'>
        <source media='(max-width:500px)' srcSet='/images/contact-me_mobile.jpg' />
        <source media='(max-width:800px)' srcSet='/images/contact-me_tablet.jpg' />
        <img src='/images/contact-me_desktop.jpg' alt='Me' />
      </picture>
    </footer>
  );
}
