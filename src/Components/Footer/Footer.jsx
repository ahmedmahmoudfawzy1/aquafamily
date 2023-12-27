import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { TiSocialFacebook  } from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";



export default function Footer() {
    
    


  return (
    <footer>
      <div className="boxContainer">
        <div className="box1">
          <h3>عن Aqua Family</h3>
          <p>
            "فلتر Aqua Family" العلامة التجارية الرائدة الأولى في مجال تنقية المياه المخصصة
            للاستخدام المنزلي في مصر. بمنتجاتها التي تتجاوز 25 حلاً مبتكرًا
            ومتنوعًا يتناسب كل منها مع احتياجات كل أسرة للاستمتاع بمياه شرب نقية
            وصحية وسهلة، قدمت تانك خدماتها للملايين منذ تأسيسها عام 1989. كما
            تفخر تانك بالتوسع في حجم أعمالها وذلك بتصدير منتجاتها التي حازت على
            ثقة المستخدمين على مستوى 22 دولة في شمال أفريقيا ومنطقة دول الخليج
            والشرق الأقصى.
          </p>
        </div>

        <div className="box">
          <h3 className="head">الااقسام </h3>
          <Link path="#" className="link">
            Egypt
          </Link>
          <Link path="#" className="link">
            london
          </Link>
          <Link path="#" className="link">
            Korea
          </Link>
          <Link path="#" className="link">
            Japan
          </Link>
        </div>

        <div className="box">
          <h3 className="head">التواصل </h3>
          <a href="https://facebook.com" className="link">
            facebook
            <TiSocialFacebook />
          </a>
          <a href="https://wa.me/{01112204836}" className="link">
            WhatsApp
            <FaWhatsapp />

          </a>
          <a href="https://www.instagram.com/" className="link">
            Instagram
            <FaInstagram />
          </a>
          <a href="https://www.Linkedin.com/" className="link">
          Linkedin
          <FaLinkedin className="icon"/>
          </a>
        </div>

        <div className="box">
          <h3 className="head">المتابعه </h3>
          <Link path="#" className="link">
            Facebook
          </Link>
          <Link path="#" className="link">
            Twitter
          </Link>
          <Link path="#" className="link">
            instgram
          </Link>
          <Link path="#" className="link">
            linkedin
          </Link>
        </div>
      </div>
      <h4 className="created">
        Created By  <span className="text-primary"> Ahmed M.Fawzy</span> all right reserved
      </h4>
    </footer>
  );
}
