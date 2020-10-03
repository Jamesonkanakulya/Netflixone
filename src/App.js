import React from "react";

import "./App.scss";
import Home from "./pages/Home";
import { Switch, Route } from "react-router-dom";
import Errorpage from "./pages/Errorpage";

import Nav from "./components/NavBar";
import About from "./pages/About";
import Footer from "./components/Footer";
import Jumbo from "./components/jumba";
import jumboData from "./fixtures/jumbo.json";
import Row from "./components/Row";
import request from "./components/Myapi";
import Banner from "./components/Banner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending now" fetchUrl={request.fetchTrending} />
      <Row title="Top rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchTrending} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />

      {/* <NavBar/> */}
      {/* <Jumbo.Container>
        {
          jumboData.map((item) =>{
            return <Jumbo key={item.id}>
           
              
           
             <Jumbo.Pane>
             <Jumbo.Title>{item.title}</Jumbo.Title>
              <Jumbo.Subtitle>{item.subTitle}</Jumbo.Subtitle>
             </Jumbo.Pane>
             <Jumbo.Pane>
             <Jumbo.Image scr={item.image} alt={item.alt}/>
             </Jumbo.Pane>
             
            </Jumbo>
          })
        }

      </Jumbo.Container> */}
      {/* <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} /> 
        <Route exact path="/errorpage" component={Errorpage} />
        
      </Switch> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
