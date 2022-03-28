import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Title from "./components/Title";
import "./app.css"



function App() {
  return (
    <>
        <Title></Title>
        <Header></Header>
        <Card img={true}></Card>
        <Card img={true}></Card>
        <Card img={true}></Card>
        <Footer></Footer>
    </>
  );
}

export default App;
