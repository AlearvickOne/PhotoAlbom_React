import ButtonPage from "../Buttons/ButtonPage";
import ButtonSorting from "../Buttons/ButtonSorting";
import "./sectionPhotos.scss";

const category = [
  { name: "Горы" },
  { name: "Природа" },
  { name: "Города" },
  { name: "Люди" },
  { name: "Животные" },
];

export default function SectionPhotos() {
  const arr = ["<", ">"];
  return (
    <section>
      <div className="background_btns">
        <div className="btns">
          <div className="btns_child">
            {category.map((el, index) => (
              <ButtonSorting key={index}>{el.name}</ButtonSorting>
            ))}
          </div>
        </div>
      </div>

      <div className="photos">
        <div className="photos_elts">
          <img src="/images_1.jpeg" alt="photo-left" className="opacity"></img>
          <img src="/images_2.jpeg" alt="photo-center" className=""></img>
          <img src="/images_3.jpeg" alt="photo-right" className="opacity"></img>
        </div>
      </div>

      <div className="background_page">
        <div className="btns-page_child">
          {arr.map((el, index) => (
            <ButtonPage key={index}>{el}</ButtonPage>
          ))}
        </div>
      </div>
    </section>
  );
}
