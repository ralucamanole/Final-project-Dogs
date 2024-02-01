import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./DogCard.css";
import Catel1 from "../../Images/Catel1.jpg";
import Catel2 from "../../Images/Catel2.jpg";
import Catel3 from "../../Images/Catel3.jpg";
import Catel4 from "../../Images/Catel4.jpg";
import { useParams, NavLink } from "react-router-dom";

const DogCard = () => {
  let { userId } = useParams();
  const dogs = [
    {
      userId: 1,
      name: "Dora",
      age: "2 ani",
      status: "Adoptabil",
      breed: "Corgi",
      image: Catel1,
    },
    {
      userId: 2,
      name: "Max",
      age: "1 an",
      status: "Rezervat",
      breed: "Golden Retriever",
      image: Catel2,
    },
    {
      userId: 3,
      name: "Lady",
      age: "3 ani",
      status: "Adoptat",
      breed: "Samoyed",
      image: Catel3,
    },
    {
      userId: 4,
      name: "Fifi",
      age: "0.5 an",
      status: "Adoptabil",
      breed: "Yorkshire Terrier",
      image: Catel4,
    },
  ];
  return (
    <div className="card-display">
      {dogs.map((dog) => (
        <div key={dog.userId}>
          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src={dog.image} className="dog-img" />
            <Card.Body>
              <Card.Title className="dog-name">{dog.name}</Card.Title>
              <Card.Text>
                <span>&#128062;</span> Status: {dog.status}
                <br />
                <span>&#128062;</span> Rasa: {dog.breed}
                <br />
                <span>&#128062;</span> Varsta: {dog.age}
                <br />
              </Card.Text>

              <NavLink to={`/formular/${dog.userId}`} className="link">
                <Button variant="primary">Ia-ma acasa</Button>
              </NavLink>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default DogCard;
