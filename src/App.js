import './App.css';

import BestSeller from './Components/BestSeller';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Review from './Components/Review';
import Special from './Components/Special';
import Special2 from './Components/Special2';
import Statistics from './Components/Statistics';
import Subscription from './Components/Subscription';

function App() {
  return (
    <div >
      
      <Header />  
      <Hero />
      <BestSeller />
     <Special />
     <Statistics />
   <Special2 />
      <Review />
      <Subscription />
      
      <Footer />
    
      

    </div>
  );
}

export default App;
