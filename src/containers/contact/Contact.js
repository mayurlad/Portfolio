import React, {useContext} from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {illustration, contactInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import email from "../../assets/lottie/email";
import whatsapp from "../../assets/lottie/whatsapp"; // ✅ WhatsApp Lottie
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title">{contactInfo.title}</h1>
            <p
              className={
                isDark
                  ? "dark-mode contact-subtitle"
                  : "subTitle contact-subtitle"
              }
            >
              {contactInfo.subtitle}
            </p>
            <div
              className={
                isDark ? "dark-mode contact-text-div" : "contact-text-div"
              }
            >
              {/* ✅ WhatsApp icon + phone number */}
              {contactInfo.number && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <a
                    className="contact-detail"
                    href={"tel:" + contactInfo.number}
                    style={{display: "flex", alignItems: "center", gap: "8px"}}
                  >
                    <span>{contactInfo.number}</span>
                  </a>

                  {/* WhatsApp Lottie instead of phone icon */}
                  {contactInfo.whatsapp && (
                    <a
                      href={contactInfo.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{width: "80px", height: "80px"}}
                    >
                      <DisplayLottie animationData={whatsapp} />
                    </a>
                  )}
                </div>
              )}

              <br />
              <br />

              {/* ✅ Email */}
              <a
                className="contact-detail-email"
                href={"mailto:" + contactInfo.email_address}
              >
                {contactInfo.email_address}
              </a>

              <br />
              <br />

              {/* ✅ Social Media row */}
              <div
                className="social-media-row"
                style={{display: "flex", alignItems: "center", gap: "20px"}}
              >
                <SocialMedia />
              </div>
            </div>
          </div>
          <div className="contact-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={email} />
            ) : (
              <img
                alt="Man working"
                src={require("../../assets/images/contactMailDark.svg")}
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
