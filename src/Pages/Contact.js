import myImage6 from "../Images/cateiadoptati1.jpg"
import myImage7 from "../Images/cateiadoptati2.jpg";
import myImage8 from "../Images/cateiadoptati3.jpg";
import myImage9 from "../Images/cateiadoptati4.jpg";
import myImage10 from "../Images/cateiadoptati5.jpg";


const Contact = () => {
  return (
    <div className="contact-img-outer-container">
      <div className="contact-img-container">
        <h2 className="page-title">Familia noastră</h2>
        <div className="contact-img">
          <img src={myImage6} alt="" />
          <img src={myImage7} alt="" />
          <img src={myImage8} alt="" />
          <img src={myImage9} alt="" />
          <img src={myImage10} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;