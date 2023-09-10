
import './App.css';
import './Blg.css'
import ContactUs from './contacts';
import Home,{ArticleGrid} from './home';
import { Ratemovie,FullArticles } from './home';
import { linksList,data } from './objects';
import { ChakraProvider } from '@chakra-ui/react';
import { Intro } from './Tags';




function App() {
  
 

  return (
    <ChakraProvider>
      <div className="App">
        <Home links={[...linksList]} />
        <Ratemovie />
        <Intro {...data} />
        {/* <ArticleGrid obj = {[...data]} /> */}
        <FullArticles obj={[...data]}/>
       
      </div>
    </ChakraProvider>
  );
}

export default App;
