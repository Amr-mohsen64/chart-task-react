import classes from './App.module.scss';
import Chart from './components/Chart/Chart'
import Header from './components/Header/Header'


function App() {
  return (
    <section className={classes.content}>
      <div className={classes.container}>
        <Header />
        <Chart />
      </div>
    </section>

  );
}

export default App;
