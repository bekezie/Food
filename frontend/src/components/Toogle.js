import React, { useState, useEffect } from "react";

const Toogle = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const data = window.localStorage.getItem("mytoogle");

    setShow(JSON.parse(data));
    if (data === "true") {
      document.body.style = "background: #121212;";
    } else {
      document.body.style = "background: none;";
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("mytoogle", JSON.stringify(show));
  });

  const Mode = () => {
    if (show === false) {
      setShow(true);
      document.body.style = "background: #121212;";
    } else {
      setShow(false);
      document.body.style = "background: none;";
    }
  };

  // const LightMode = () => {
  //   setShow(false);
  //   document.body.style = "background: #121212;";
  // };

  // const DarkMode = () => {
  //   setShow(true);
  //   document.body.style = "background: none;";
  // };

  return (
    <div className="col">
      {
        <div class="toggle">
          <label>
            <div>Switch</div>

            <input type="checkbox" id="toggle1" onClick={Mode} />
            <span></span>
          </label>
        </div>
      }

      {!show ? (
        <div>
          <div>Light Mode</div>
        </div>
      ) : (
        <div>
          <div>Dark Mode</div>
        </div>
      )}
    </div>
  );
};

export default Toogle;
