import Header from "./components/Header/Header";
import SectionPhotos from "./components/SectionPhotos/SectionPhotos";
import "./index.scss";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <main>
          <SectionPhotos />
        </main>
      </div>
    </>
  );
}

export default App;
