import './App.css';
import Hero from './Hero';
import Navbar from './navbar';
import data from './data';
import Card from './card';



function App() {
  const card=data.map(item=>{
    return (
      <Card 
      key={item.id}
      {...item}
      />
    )
  })
    
  return (
    <>
        <Navbar />
        <Hero />
        <section className="cards-list">
          {card}
        </section>
    </>
  );
}

export default App;
