import styles from './app.module.css';
import Header from './components/header';
import Logo from './components/logo';
import Title from './components/title';
import DarkBtn from './components/dark-btn';
import LightBtn from './components/light-btn';
import Form from './components/form';

function App() {
  return (
    <div className="App">
      <Header />
      <section className={styles["title-and-logo-container"]}>
        <Title />
        <Logo />
      </section>
      <section className={styles.buttons}>
        <DarkBtn />
        <LightBtn />
      </section>
      <Form />
    </div>
  );
}

export default App;
