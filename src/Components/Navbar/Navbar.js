import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <button>
              <a href="/">Cine suntem noi</a>
            </button>
          </li>
          <li>
            <button>
              <a href="/about">Catei adoptabili</a>
            </button>
          </li>
          <li>
            <button>
              <a href="/DogApi">Afla mai multe despre rasa catelului tau</a>
            </button>
          </li>
          <li>
            <button>
              <a href="/contact">Familia Noastra</a>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
