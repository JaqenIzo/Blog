
import './App.css';
import './Blg.css'
import ContactUs from './contacts';
import Home,{ArticleGrid,Intro} from './home';
import { Ratemovie } from './home';
import { linksList,data } from './objects';
import { ChakraProvider } from '@chakra-ui/react';




function App() {
  
 

  return (
    <ChakraProvider>
      <div className="App">
        <Home links={[...linksList]} />
        <Ratemovie />
        <Intro {...data} />
        <ArticleGrid obj={[...data]} />
        <ContactUs/>
      </div>
    </ChakraProvider>
  );
}

export default App;
