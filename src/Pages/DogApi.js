import { useEffect, useState } from "react";

const DogApi = () => {
  const [dogs, setDogs] = useState([]);

  const fetchAndDisplayDogs = async () => {
    try {
      const urlCorgi =
        "https://api.api-ninjas.com/v1/dogs?name=Pembroke Welsh Corgi";
      const urlTerrier =
        "https://api.api-ninjas.com/v1/dogs?name=Yorkshire Terrier";
      const urlSamoyed = "https://api.api-ninjas.com/v1/dogs?name=samoyed";
      const urllabrador_retriever =
        "https://api.api-ninjas.com/v1/dogs?name=Golden Retriever";

      const [respCorgi, respTerrier, respSamoyed, resplabrador_retriever] =
        await Promise.all([
          fetch(urlCorgi, {
            headers: {
              "X-Api-Key": "FhblRugrlIWuYT0smahEDA==7w1WSn3j6JoaFJGY",
            },
          }),
          fetch(urllabrador_retriever, {
            headers: {
              "X-Api-Key": "FhblRugrlIWuYT0smahEDA==7w1WSn3j6JoaFJGY",
            },
          }),
          fetch(urlSamoyed, {
            headers: {
              "X-Api-Key": "FhblRugrlIWuYT0smahEDA==7w1WSn3j6JoaFJGY",
            },
          }),
          fetch(urlTerrier, {
            headers: {
              "X-Api-Key": "FhblRugrlIWuYT0smahEDA==7w1WSn3j6JoaFJGY",
            },
          }),
        ]);

      if (
        !respCorgi.ok ||
        !respTerrier.ok ||
        !respSamoyed.ok ||
        !resplabrador_retriever.ok
      ) {
        throw new Error(
          `HTTP error! Status: ${respCorgi.status} or ${respTerrier.status} or ${respSamoyed.status}`
        );
      }

      const dogsCorgi = await respCorgi.json();
      const dogsTerrier = await respTerrier.json();
      const dogsSamoyed = await respSamoyed.json();
      const dogslabrador_retriever = await resplabrador_retriever.json();

      const combinedDogs = [
        ...dogsCorgi,
        ...dogsTerrier,
        ...dogsSamoyed,
        ...dogslabrador_retriever,
      ];
      setDogs(combinedDogs);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  console.log(dogs);

  useEffect(() => {
    fetchAndDisplayDogs();
  }, []);

  return (
    <>
      {dogs.map((dog) => (
        <div className="dog-characteristics" key={dog.name}>
          <img src={dog.image_link} alt={dog.name} />
          <div className="characteristics-container">
          <p className="dog-name-api">{dog.name}</p>
            <ul className="characteristics-list">
              <li>
                <label htmlFor="energy">Energie</label>
                <progress id="energy" max="5" value={dog.energy}></progress>
              </li>
              <li>
                <label htmlFor="barking">Latrat</label>
                <progress id="barking" max="5" value={dog.barking}></progress>
              </li>
              <li>
                <label htmlFor="good_with_children">Prietenos cu copiii</label>
                <progress
                  id="good_with_children"
                  max="5"
                  value={dog.good_with_children}
                ></progress>
              </li>
              <li>
                <label htmlFor="good_with_other_dogs">
                  Prietenos cu alti caini
                </label>
                <progress
                  id="good_with_other_dogs"
                  max="5"
                  value={dog.good_with_other_dogs}
                ></progress>
              </li>
              <li>
                <label htmlFor="playfulness">Caracter jucaus</label>
                <progress
                  id="playfulness"
                  max="5"
                  value={dog.playfulness}
                ></progress>
              </li>
              <li>
                <label htmlFor="protectiveness">Protectivitate</label>
                <progress
                  id="protectiveness"
                  max="5"
                  value={dog.protectiveness}
                ></progress>
              </li>
              <li>
                <label htmlFor="trainability">Posibilitate de training</label>
                <progress
                  id="trainability"
                  max="5"
                  value={dog.trainability}
                ></progress>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};
export { DogApi };
