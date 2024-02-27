import mn from "../src/assets/logo.png";
import pm from "../src/assets/2.png";
import gm from "../src/assets/3.png";
import mg from "../src/assets/1.png";
import call from "../src/assets/phone-call.png";
import facebook from "../src/assets/facebook.png";
import web from "../src/assets/web.png";
const App = () => {
  return (
    <>
      <div className="display">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            minWidth: "12px",
          }}
        >
          <img src={mn} alt="" />
        </div>
        <div className="grid-container">
          <div style={{ margin: "30px" }}>
            <img src={mg} alt="" />
          </div>
          <section>
            <p
              style={{
                fontSize: "60px",
                fontWeight: "bold",
                display: "flex",
                justifyContent: "center",
              }}
            >
              C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
              the 4th time.
            </p>
            <p
              style={{
                fontSize: "60px",
                fontWeight: "bold",
                display: "flex",
                justifyContent: "center",
                padding: "2px",
              }}
            >
              <ul>
                <li>
                  C.R.I.s energy efficient products are well recognized by
                  various Government Institutions, as trustworthy products for
                  various projects across the globe to save energy.
                </li>
                <li>
                  C.R.I. is the highest contributor in the country for the
                  projects of EESL (Energy Efficiency Services Limited) to
                  replace the old inefficient pumps with 5 Star rated energy
                  efficient smart pumps with IoT enabled control panel.
                </li>
              </ul>
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                minWidth: "12px",
              }}
            >
              <img style={{ width: "70%" }} src={pm} alt="" />
            </div>
            <p
              style={{
                fontSize: "60px",
                fontWeight: "bold",
                display: "flex",
                justifyContent: "center",
                padding: "2px",
              }}
            >
              Government of India has awarded the National Energy Conservation
              Award 2018. Mr. G. Selvaraj, Joint Managing Director of C.R.I.
              Group received the award from Smt. Sumitra Mahajan, Speaker of Lok
              Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
            </p>
          </section>
        </div>
        <div>
          <p
            style={{
              fontSize: "40px",
              fontWeight: "bold",
              display: "flex",
              letterSpacing: "4px",
              left: "20px",
              justifyContent: "center",
            }}
          >
            INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
            RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
            POWER FOR THE NATION.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            minWidth: "12px",
          }}
        >
          <img style={{ width: "50%" }} src={gm} alt="" />
        </div>
        <p
          style={{
            fontSize: "30px",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "center",
            padding: "2px",
          }}
        >
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors
        </p>
        <hr style={{ border: "1px solid red" }} />
        <p
          style={{
            fontSize: "30px",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "center",
            padding: "2px",
          }}
        >
          C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
        </p>
        <p
          style={{
            fontSize: "30px",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "center",
            padding: "2px",
          }}
        >
          CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA SUGARS
          & DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING FOOD &
          BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING
          AGRICULTURE & RESIDENTIAL
        </p>
        <footer>
          <div className="container">
            <span>
              <img src={call} style={{ width: "5rem" }} alt="" />
              Toll free 1800-200-1234
            </span>
            <span>
              <img src={facebook} style={{ width: "5rem" }} alt="" />
              www.facebook.com/cripumps
            </span>
            <span>
              {" "}
              <img src={web} style={{ width: "5rem" }} alt="" />{" "}
              www.crigroups.com
            </span>
          </div>
        </footer>
      </div>
    </>
  );
};

export default App;
