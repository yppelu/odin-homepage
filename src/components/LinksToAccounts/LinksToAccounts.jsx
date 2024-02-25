import './LinksToAccounts.css';

export default function LinksToAccounts() {
  return (
    <div className='links-to-accounts'>
      <a className='links-to-accounts__link' href='https://github.com/' title='My GitHub' aria-label='My GitHub'>
        <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' alt='My GitHub' aria-hidden />
      </a>
      <a className='links-to-accounts__link' href='https://linkedin.com/' title='My LinkedIn' aria-label='My LinkedIn'>
        <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg' alt='My LinkedIn' aria-hidden />
      </a>
      <a className='links-to-accounts__link' href='https://twitter.com/' title='My Twitter' aria-label='My Twitter'>
        <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg' alt='My Twitter' aria-hidden />
      </a>
    </div>
  );
}
