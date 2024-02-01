import * as React from "react";
import { useParams } from "react-router-dom";
import Catel1 from "../Images/Catel1.jpg";
import Catel2 from "../Images/Catel2.jpg";
import Catel3 from "../Images/Catel3.jpg";
import Catel4 from "../Images/Catel4.jpg";

const Formular = () => {
  const dogs = [
    {
      userId: 1,
      name: "Dora",
      age: "2 ani",
      status: "Adoptabil",
      image: Catel1,
      breed: "Corgi",
      sex: "Feminin",
      vaccin: "Deparazitare interna/externa",
      sterilizare: "Da",
      stareSanatate: "Fara probleme de sanatate",
      ziNastere: "15 Martie 2022",
      cadouZiNastere:
        "Donatii / O zi la Salonul de Catei / O sedinta foto profesionala (creste sansele de adoptie)!",
    },
    {
      userId: 2,
      name: "Max",
      age: "2 ani",
      status: "Rezervat",
      image: Catel2,
      breed: "Golden Retriever",
      sex: "Masculin",
      vaccin: "Deparazitare interna/externa",
      sterilizare: "Da",
      stareSanatate: "Fara probleme de sanatate",
      ziNastere: "16 Februarie 2023",
      cadouZiNastere:
        "Donatii / O zi la Salonul de Catei / O sedinta foto profesionala (creste sansele de adoptie)!",
    },
    {
      userId: 3,
      name: "Lady",
      age: "3 ani",
      status: "Adoptat",
      image: Catel3,
      breed: "Samoyed",
      sex: "Feminin",
      vaccin: "Deparazitare interna/externa",
      sterilizare: "Da",
      stareSanatate: "Fara probleme de sanatate",
      ziNastere: "16 August 2021",
      cadouZiNastere:
        "Donatii / O zi la Salonul de Catei / O sedinta foto profesionala (creste sansele de adoptie)!",
    },
    {
      userId: 4,
      name: "Fifi",
      age: "0.5 ani",
      status: "Adoptabil",
      image: Catel4,
      breed: "Yorkshire Terrier",
      sex: "Feminin",
      vaccin: "Deparazitare interna/externa",
      sterilizare: "Nu",
      stareSanatate: "Fara probleme de sanatate",
      ziNastere: "10 Octombrie 2023",
      cadouZiNastere:
        "Donatii / O zi la Salonul de Catei / O sedinta foto profesionala (creste sansele de adoptie)!",
    },
  ];
  const { userId } = useParams();
  const dog = dogs.find((dog) => dog.userId === parseInt(userId));

  return (
    <div className="dog-container">
      <span class="dog-name">{dog.name}</span> <br />
      <img src={dog.image} alt="" class="dog-img" /> <br />
      <div class="dog-details">
        <span>&#128062;</span> Status: {dog.status} <br />
        <span>&#128062;</span> Rasa: {dog.breed} <br />
        <span>&#128062;</span> Varsta: {dog.age} <br />
        <span>&#128062;</span> Sex: {dog.sex} <br />
        <span>&#128062;</span> Vaccin: {dog.vaccin} <br />
        <span>&#128062;</span> Sterilizat: {dog.sterilizare} <br />
        <span>&#128062;</span> Stare de sanatate: {dog.stareSanatate} <br />
        <span>&#128062;</span> Zi Nastere: {dog.ziNastere} <br />
        <span>&#128062;</span> Cadou zi nastere: {dog.cadouZiNastere}
      </div>
    </div>
  );
};

export default Formular;
