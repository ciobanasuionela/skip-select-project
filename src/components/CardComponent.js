import React, { useEffect, useState } from "react";
import "./CardComponent.css";

export const CardComponent = () => {
  const [data, setData] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const getData = async () => {
    const url =
      "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      return json;
    } catch (error) {
      return null;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      if (result) {
        setData(result);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <h2 className="header">Choose Your Skip Size</h2>
      <p className="subheader">
        Select the skip size that best suits your needs
      </p>

      <div className="cards-container">
        {data.length !== 0 ? (
          data.map((item, index) => (
            <div
              onClick={() => setSelectedIndex(index)}
              className="card"
              key={index}
              style={
                selectedIndex === index
                  ? { borderColor: "#a38517", transitionDelay: "100ms" }
                  : {}
              }
            >
              <img
                src="https://images.unsplash.com/photo-1528323273322-d81458248d40?q=80&w=3029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="image"
              ></img>
              {selectedIndex === index && (
                <div className="check-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#a38517"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-check w-5 h-5 md:w-6 md:h-6 text-[#0037C1]"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </div>
              )}
              <span className="pill">{item.size} Yards</span>
              {!item.allowed_on_road && (
                <div className="warning">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#e8d8d8"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-alert-triangle w-4 h-4 text-yellow-500 shrink-0"
                  >
                    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                    <path d="M12 9v4"></path>
                    <path d="M12 17h.01"></path>
                  </svg>
                  <p className="warning-text">Private Property Only</p>
                </div>
              )}
              <div className="information-container">
                <p className="title">{item.size} Yard Skip</p>
                <p className="subtitle">
                  {item.hire_period_days} day hire period
                </p>
                <p className="price">
                  £{item.price_before_vat}
                  <span className="price-detail"> per week</span>
                </p>
              </div>
              <button
                className="button"
                style={
                  selectedIndex === index ? { backgroundColor: "#a38517" } : {}
                }
              >
                {selectedIndex === index ? (
                  <span>Selected</span>
                ) : (
                  <div className="button-text">
                    <span>Select This Skip</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-arrow-right w-4 h-4"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </div>
                )}
              </button>
            </div>
          ))
        ) : (
          <div class="loader-container">
            <div class="loader"></div>
          </div>
        )}
      </div>
      {selectedIndex !== null && data[selectedIndex] && (
        <footer className="footer">
          <div className="footer-left">
            <p className="footer-info">
              <strong style={{ color: "#2a2a2a" }}>
                {data[selectedIndex].size} Yard Skip
              </strong>
              <strong className="footer-price">£</strong>7 per week
            </p>
          </div>
          <div className="footer-right">
            <button
              className="footer-btn secondary"
              onClick={() => setSelectedIndex(null)}
            >
              Back
            </button>
            <button className="footer-btn primary">Continue</button>
          </div>
        </footer>
      )}
    </div>
  );
};
