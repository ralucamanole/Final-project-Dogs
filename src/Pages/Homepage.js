import myImage5 from "../Images/Catei1.jpg";
import myImage6 from "../Images/funnydogo.png"

const Homepage = () => {
  return (
    <>
  
      <div className="homepage-container">
      <div className="funnydogo">
        <img src={myImage6} alt="" />
      </div>
        <img src={myImage5} alt="" className="dog-homepage" />
        <h1 className="homepage-title">Happy Little Paws</h1>
        <p className="homepage-paragraf1">Cine suntem noi?</p>
        <p className="homepage-paragraf2">
          <span>&#128062;</span> Adăpostul Happy Little Paws a fost înființată
          în 2000, încă de la momentul creării, a contribuit decisiv la
          bunăstarea animalelor din România, în special la cea a câinilor
          abandonați și aflați în suferință.
          <br />
          <span>&#128062;</span>Administrat cu dedicare adăpostul găzduiește în
          prezent peste 500 de câini, inclusiv câini bătrâni. Aceștia primesc
          cele mai bune îngrijiri, adăpostul având propriul cabinet veterinar și
          o clinică modernă de fizioterapie, trei locuri de joacă, trei piscine,
          pistă de antrenament.
          <br />
          <span>&#128062;</span>Câinii de la Happy Little Paws au fost salvați
          din stradă sau din diferite situații-limită. Adăpostul Happy Little
          Paws a devenit un cămin pentru câinii unor persoane publice care s-au
          stins din viață. Acesta din urmă a vrut să se asigure că prietenii săi
          patrupezi vor ajunge la Happy Little Paws, fiind convins că, în acest
          adăpost, câinii săi vor avea parte de îngrijire, afecțiune și de o
          viață decentă.
          <br />
          <span>&#128062;</span>Fundația Happy Little Paws face permanent
          eforturi pentru a le găsi adoptatori câinilor din adăpost, oferind
          inclusiv posibilitatea adoptării la distanță. Fundația Happy Little
          Paws organizează permanent evenimente de promovare a adopțiilor și
          evenimente de conștientizare a responsabilității pe care cu toții
          trebuie s-o avem, față de animale.
          <br />
          <span>&#128062;</span>De asemenea, Fundația Happy Little Paws
          desfășoară un proiect de desensibilizare a câinilor, „Mesagerii Happy
          Little Paws”, proiect care constă în activități de dresaj de bază
          pentru câinii din adăpost. Proiectul este permanent monitorizat de
          dresori canini care, de trei ori pe săptămâna efectuează ore de dresaj
          cu câini selectați din adăpost.
          <br />
          <span>&#128062;</span>Fundația Happy Little Paws desfășoară activități
          educaționale în școli în cadrul Săptămânii Altfel și organizează
          “excursii” pentru copiii dornici să viziteze un adăpost în care
          trăiesc 500 de câini. Aceștia pot afla totul despre câini, dar și
          informații despre ce înseamnă un adăpost, informații despre ce
          înseamnă să fii medic veterinar, dresaj canin, informații generale
          despre protecția animalelor.
        </p>
      </div>
    </>
  );
};

export default Homepage;
