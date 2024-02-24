import AboutMe from './components/AboutMe/AboutMe.jsx';
import MyWork from './components/MyWork/MyWork.jsx';
import ContactMe from './components/ContactMe/ContactMe.jsx';

export default function App() {
  return (
    <>
      <h1 className='main-heading'>Homepage</h1>
      <AboutMe />
      <MyWork />
      <ContactMe />
    </>
  );
}
