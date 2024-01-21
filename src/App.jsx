import Header from "./components/Header/Header";
import SectionButtons from "./components/SectionButtons/SectionButtons";
import SectionPhotos from "./components/SectionPhotos/SectionPhotos";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <main>
          <SectionButtons />
          <SectionPhotos />
        </main>
      </div>
    </>
  );
}

export default App;
