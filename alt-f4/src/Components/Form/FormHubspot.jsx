import React, { useEffect } from "react";

const HubspotForm = () => {
  useEffect(() => {

    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "47892754",
          formId: "36cc09a1-9d59-45ad-b595-c4a2eaef20a6",
          target: "#hubspotForm"
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="Formulario-hubspot">
      <div id="hubspotForm"></div>
    </div>
  );
};

export default HubspotForm;
