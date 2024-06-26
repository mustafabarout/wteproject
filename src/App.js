import { Header , Roadmap , About , Choose, Container ,Contact , Footer , Faq } from "./components";

function App() {
  return (
    <>
      
      <Header/>
      <Container>
      <About/><br/><br/>
      <Choose/><br/><br/>
      <Roadmap/><br/><br/>
      <Faq/><br/><br/>
      <Contact/>
      </Container>
      <Footer/>
      
    </>
  );
}

export default App;
