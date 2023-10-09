import "./App.css";
import CatNav from "./Components/CatNav/CatNav";
import MainComponent from "./Components/MainComponent/MainComponent";
import TopNav from "./Components/TopNav/TopNav";

function App() {
  return (
    <>
      <TopNav></TopNav>
      <CatNav></CatNav>
      <MainComponent></MainComponent>
    </>
  );
}

export default App;
