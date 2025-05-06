// src/components/Footer.js
import React from "react";

const Footer = () => {
  const popularRoutes = [
    "Delhi To Manali Bus",
    "Delhi To Rishikesh Bus",
    "Delhi To Shimla Bus",
    "Delhi To Nainital Bus",
    "Delhi To Katra Bus",
    "Bangalore To Goa Bus",
    "Bangalore To Hyderabad Bus",
    "Bangalore To Tirupathi Bus",
    "Bangalore To Chennai Bus",
    "Bangalore To Pondicherry Bus",
    "Hyderabad To Bangalore Bus",
    "Hyderabad To Goa Bus",
    "Hyderabad To Srisailam Bus",
    "Hyderabad To Vijayawada Bus",
    "Hyderabad To Tirupathi Bus",
    "Pune To Goa Bus",
    "Pune To Mumbai Bus",
    "Pune To Nagpur Bus",
    "Pune To Kolhapur Bus",
    "Pune To Nashik Bus",
    "Mumbai To Goa Bus",
    "Mumbai To Pune Bus",
    "Mumbai To Shirdi Bus",
    "Mumbai To Mahabaleshwar Bus",
    "Mumbai To Kolhapur Bus",
    "Kolkata To Digha Bus",
    "Kolkata To Siliguri Bus",
    "Kolkata To Puri Bus",
    "Kolkata To Bakkhali Bus",
    "Kolkata To Mandarmani Bus",
  ];

  const popularCities = [
    "Hyderabad Bus Booking",
    "Bangalore Bus Booking",
    "Chennai Bus Booking",
    "Pune Bus Booking",
    "Delhi Bus Booking",
    "Mumbai Bus Booking",
    "Kolkata Bus Booking",
    "Ernakulam Bus Booking",
    "Ahmedabad Bus Booking",
    "Vijayawada Bus Booking",
    "Jaipur Bus Booking",
    "Indore Bus Booking",
    "Lucknow Bus Booking",
    "Bhopal Bus Booking",
    "Goa Bus Booking",
    "Ayodhya Bus Booking",
    "Prayagraj Bus Booking",
    "Varanasi Bus Booking",
  ];

  const popularOperators = [
    "No 1 Air Travels",
    "YBM Travels",
    "Sri SMS Travels",
    "Svkdt Travels",
    "RKT Tours and Travels",
    "Royal Cars",
    "Rahul Travels",
    "JBT Travels",
    "Raj Express",
    "Vaishali Express",
    "Rahul Travels Indore",
    "Delhi Tours And Travels",
    "Ashok Travels",
    "Greenline Travels",
    "Pawan Travels",
    "Ravi Travels",
    "VRL Travels",
    "Dolphin Travels",
    "Ganesh Travels",
    "Kaveri Travels",
    "National Travels",
    "Bharathi Travels",
    "City Land Travels",
    "KKaveri Travels",
    "KK Travels",
    "Mahadev Travels",
    "Maharaja Travels",
    "M R Travels",
    "New Payal Travels",
    "Paras Travels",
  ];

  return (
    <footer id="rh_footer_new" style={{ background: "#f7f7f7" }}>
      <div
        className="rb_footer"
        style={{
          maxWidth: "1200px",
          margin: "auto",
          paddingLeft: "0",
          paddingRight: "0",
        }}
      >
        <ul style={{ maxWidth: "1200px", marginBottom: "3rem" }}>
          <li style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div
              className="interLinkContainer"
              style={{
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
              }}
              id="0"
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: "700",
                    lineHeight: "1.25rem",
                  }}
                >
                  Popular Bus Routes
                </h3>
                <i
                  className="interLink icon icon-down"
                  style={{ fontSize: "1rem" }}
                ></i>
              </div>
              <div className="seoLinkSection" style={{ margin: ".5rem 0" }}>
                {popularRoutes.map((route, index) => (
                  <React.Fragment key={index}>
                    <a
                      className="footer_seo_link footer_link_new"
                      href="#"
                      target="_blank"
                    >
                      {route}
                    </a>
                    {index < popularRoutes.length - 1 && " | "}
                  </React.Fragment>
                ))}
              </div>
              <div
                style={{
                  backgroundColor: "#C4C4C4",
                  height: "1px",
                  width: "100%",
                  marginTop: ".5rem",
                }}
              ></div>
            </div>

            <div
              className="interLinkContainer"
              style={{
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
              }}
              id="1"
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: "700",
                    lineHeight: "1.25rem",
                  }}
                >
                  Popular Cities
                </h3>
                <i
                  className="interLink icon icon-down"
                  style={{ fontSize: "1rem" }}
                ></i>
              </div>
              <div className="seoLinkSection" style={{ margin: ".5rem 0" }}>
                {popularCities.map((city, index) => (
                  <React.Fragment key={index}>
                    <a
                      className="footer_seo_link footer_link_new"
                      href="#"
                      target="_blank"
                    >
                      {city}
                    </a>
                    {index < popularCities.length - 1 && " | "}
                  </React.Fragment>
                ))}
              </div>
              <div
                style={{
                  backgroundColor: "#C4C4C4",
                  height: "1px",
                  width: "100%",
                  marginTop: ".5rem",
                }}
              ></div>
            </div>

            <div
              className="interLinkContainer"
              style={{
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
              }}
              id="2"
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: "700",
                    lineHeight: "1.25rem",
                  }}
                >
                  Popular Bus Operators
                </h3>
                <i
                  className="interLink icon icon-down"
                  style={{ fontSize: "1rem" }}
                ></i>
              </div>
              <div className="seoLinkSection" style={{ margin: ".5rem 0" }}>
                {popularOperators.map((operator, index) => (
                  <React.Fragment key={index}>
                    <a
                      className="footer_seo_link footer_link_new"
                      href="#"
                      target="_blank"
                    >
                      {operator}
                    </a>
                    {index < popularOperators.length - 1 && " | "}
                  </React.Fragment>
                ))}
              </div>
              <div
                style={{
                  backgroundColor: "#C4C4C4",
                  height: "1px",
                  width: "100%",
                  marginTop: ".5rem",
                }}
              ></div>
            </div>
          </li>
        </ul>

        <ul
          className="footer_links"
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <li
            className="footer_link_section main_footer_item"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              width: "17rem",
            }}
          >
            <div className="footer_main_logos">
              <img
                src="WADIBUS.png"
                alt="adiBus"
                title="adiBus"
                className="rb_footer_logo"
                style={{ width: "6.25rem", height: "6.25rem" }}
              />
            </div>
            <span
              className="footer_text"
              style={{
                display: "block",
                textAlign: "left",
                fontSize: "1rem",
                lineHeight: "1.5",
                margin: "1rem 0",
                color: "#3e3e52",
              }}
            >
              AdiBus is the world's largest online bus ticket booking service
              trusted by over 25 million happy customers globally. AdiBus offers
              bus ticket booking through its website for all major routes.
            </span>
          </li>

          <li
            className="footer_link_section"
            id="about_redbus_title_footer"
            style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
          >
            <strong
              className="footer_link_section_title"
              style={{ fontSize: "1.125rem", color: "#1d1d1d", margin: "0" }}
            >
              About AdiBus
            </strong>
            <a
              className="footer_link_section_item footer_link_new"
              href="#"
              id="about_us_footer"
              target="_blank"
              style={{ color: "#3e3e52" }}
            >
              About us
            </a>
            <a
              className="footer_link_section_item footer_link_new"
              href="#"
              id="investor_relations_footer"
              target="_blank"
              style={{ color: "#3e3e52" }}
            >
              Investor Relations
            </a>
            <a
              className="footer_link_section_item footer_link_new"
              href="#"
              id="contact_us_footer"
              target="_blank"
              style={{ color: "#3e3e52" }}
            >
              Contact us
            </a>
            <a
              className="footer_link_section_item footer_link_new"
              href="#"
              id="sitemap_footer"
              target="_blank"
              style={{ color: "#3e3e52" }}
            >
              Sitemap
            </a>
            <a
              className="footer_link_section_item footer_link_new"
              href="#"
              id="offers_footer"
              target="_blank"
              style={{ color: "#3e3e52" }}
            >
              Offers
            </a>
            <a
              className="footer_link_section_item footer_link_new"
              href="#"
              id="careers_footer"
              target="_blank"
              style={{ color: "#3e3e52" }}
            >
              Careers
            </a>
            <a
              className="footer_link_section_item footer_link_new"
              href="#"
              id="values_footer"
              target="_blank"
              style={{ color: "#3e3e52" }}
            >
              Values
            </a>
          </li>

          <li
            className="footer_link_section"
            id="info_title_footer"
            style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
          >
            <strong
              className="footer_link_section_title"
              style={{ fontSize: "1.125rem", color: "#1d1d1d", margin: "0" }}
            >
              Info
            </strong>
            <a
              className="footer_link_section_item footer_link_new"
              href="#"
              id="terms_n_conditions_footer"
              target="_blank"
              style={{ color: "#3e3e52" }}
            >
              T&amp;C
            </a>
            <a
              className="footer_link_section_item footer_link_new"
              href="#"
              id="privacy_policy_footer"
              target="_blank"
              style={{ color: "#3e3e52" }}
            >
              Privacy policy
            </a>
            <a
              className="footer_link_section_item footer_link_new"
              href="#"
              id="faq_footer"
              target="_blank"
              style={{ color: "#3e3e52" }}
            >
              FAQ
            </a>
            <a
              className="footer_link_section_item footer_link_new"
              href="#"
              id="blog_footer"
              target="_blank"
              style={{ color: "#3e3e52" }}
            >
              Blog
            </a>
            <a
              className="footer_link_section_item footer_link_new"
              href="#"
              id="bus_operator_registration_footer"
              target="_blank"
              style={{ color: "#3e3e52" }}
            >
              Bus operator registration
            </a>
            <a
              className="footer_link_section_item footer_link_new"
              href="#"
              id="agent_registration_footer"
              target="_blank"
              style={{ color: "#3e3e52" }}
            >
              Agent registration
            </a>
            <a
              className="footer_link_section_item footer_link_new"
              href="#"
              id="insurance_partner_footer"
              target="_blank"
              style={{ color: "#3e3e52" }}
            >
              Insurance partner
            </a>
            <a
              className="footer_link_section_item footer_link_new"
              href="#"
              id="user_agreement_footer"
              target="_blank"
              style={{ color: "#3e3e52" }}
            >
              User agreement
            </a>
            <a
              className="footer_link_section_item footer_link_new"
              href="#"
              target="_blank"
              style={{ color: "#3e3e52" }}
            >
              Primo Bus
            </a>
            <a
              className="footer_link_section_item footer_link_new"
              href="#"
              target="_blank"
              style={{ color: "#3e3e52" }}
            >
              Bus Timetable
            </a>
          </li>

          <li
            className="footer_link_section"
            id="global_sites_title_footer"
            style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
          >
            <strong
              className="footer_link_section_title"
              style={{ fontSize: "1.125rem", color: "#1d1d1d", margin: "0" }}
            >
              Global Sites
            </strong>
            <a
              className="footer_link_section_item footer_link_new"
              href="#"
              id="India_site_footer"
              target="_blank"
              style={{ color: "#3e3e52" }}
            >
              India
            </a>
            <a
              className="footer_link_section_item footer_link_new"
              href="#"
              id="singapore_site_footer"
              target="_blank"
              style={{ color: "#3e3e52" }}
            >
              Singapore
            </a>
            <a
              className="footer_link_section_item footer_link_new"
              href="#"
              id="malaysia_site_footer"
              target="_blank"
              style={{ color: "#3e3e52" }}
            >
              Malaysia
            </a>
            <a
              className="footer_link_section_item footer_link_new"
              href="#"
              id="indonesia_site_footer"
              target="_blank"
              style={{ color: "#3e3e52" }}
            >
              Indonesia
            </a>
            <a
              className="footer_link_section_item footer_link_new"
              href="#"
              id="peru_site_footer"
              target="_blank"
              style={{ color: "#3e3e52" }}
            >
              Peru
            </a>
            <a
              className="footer_link_section_item footer_link_new"
              href="#"
              id="colombia_site_footer"
              target="_blank"
              style={{ color: "#3e3e52" }}
            >
              Colombia
            </a>
            <a
              className="footer_link_section_item footer_link_new"
              href="#"
              id="cambodia_site_footer"
              target="_blank"
              style={{ color: "#3e3e52" }}
            >
              Cambodia
            </a>
            <a
              className="footer_link_section_item footer_link_new"
              href="#"
              id="vietnam_site_footer"
              target="_blank"
              style={{ color: "#3e3e52" }}
            >
              Vietnam
            </a>
          </li>

          <li
            className="footer_link_section"
            id="our_partners_title_footer"
            style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
          >
            <strong
              className="footer_link_section_title"
              style={{ fontSize: "1.125rem", color: "#1d1d1d", margin: "0" }}
            >
              Our Partners
            </strong>
            <a
              className="footer_link_section_item footer_link_new"
              href="https://www.goibibo.com/bus/"
              id="goibibo_bus_footer"
              target="_blank"
              rel="nofollow"
              style={{ color: "#3e3e52" }}
            >
              Goibibo Bus
            </a>
            <a
              className="footer_link_section_item footer_link_new"
              href="https://www.goibibo.com/hotels/"
              id="goibibo_hotels_footer"
              target="_blank"
              rel="nofollow"
              style={{ color: "#3e3e52" }}
            >
              Goibibo Hotels
            </a>
            <a
              className="footer_link_section_item footer_link_new"
              href="https://www.makemytrip.com/hotels/"
              id="makemytrip_hotels_footer"
              target="_blank"
              rel="nofollow"
              style={{ color: "#3e3e52" }}
            >
              Makemytrip Hotels
            </a>
          </li>
        </ul>

        <div
          className="horizontal_seperator"
          style={{ backgroundColor: "#e5e5e5", height: "1px", width: "100%" }}
        ></div>

        <div
          className="copyright_social_section"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <span className="footer_copyright_text">
            Ⓒ 2025 ADIBUS All Rights Reserved
          </span>
          <div
            className="social_section"
            style={{ display: "flex", gap: "1.5rem" }}
          >
            <a
              className="social_icon_item footer_link_new"
              id="redbus_facebook"
              href="#"
              target="_blank"
              style={{ cursor: "pointer" }}
            >
              <img
                src="https://st.redbus.in/web/images/layout/social_facebook_new.svg"
                className="social_img"
                alt="redbus_facebook"
                loading="lazy"
                style={{ width: "1.5rem", height: "1.5rem" }}
              />
            </a>
            <a
              className="social_icon_item footer_link_new"
              id="redbus_linkedin"
              href="#"
              target="_blank"
              style={{ cursor: "pointer" }}
            >
              <img
                src="https://st.redbus.in/web/images/layout/social_linkedin_new.svg"
                className="social_img"
                alt="redbus_linkedin"
                loading="lazy"
                style={{ width: "1.5rem", height: "1.5rem" }}
              />
            </a>
            <a
              className="social_icon_item footer_link_new"
              id="redbus_twitter"
              href="#"
              target="_blank"
              style={{ cursor: "pointer" }}
            >
              <img
                src="https://st.redbus.in/web/images/layout/social_twitter_new.svg"
                className="social_img"
                alt="redbus_twitter"
                loading="lazy"
                style={{ width: "1.5rem", height: "1.5rem" }}
              />
            </a>
            <a
              className="social_icon_item footer_link_new"
              id="redbus_instagram"
              href="#"
              target="_blank"
              style={{ cursor: "pointer" }}
            >
              <img
                src="https://st.redbus.in/web/images/layout/social_instagram_new.svg"
                className="social_img"
                alt="redbus_instagram"
                loading="lazy"
                style={{ width: "1.5rem", height: "1.5rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
