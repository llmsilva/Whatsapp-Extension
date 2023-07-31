import React, { useState } from "react";

class App extends React.Component {
  componentWillMount() {
    chrome.storage.local.set({ data: "Your data" }, function (result) {
      console.log(" Data saved ");
    });
  }

  render() {
    return <div className="App"></div>;
  }
}

const MyApp = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleInputChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = () => {
    if (phoneNumber) {
      const encodedPhoneNumber = encodeURIComponent(phoneNumber);
      const whatsappUrl = `https://wa.me/${encodedPhoneNumber}`;

      // Open a new tab with the WhatsApp conversation
      chrome.tabs.create({ url: whatsappUrl });

      // Reset the phone number field
      setPhoneNumber("");
    }
  };

  return (
    <div className="App">
      <input type="text" value={phoneNumber} onChange={handleInputChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default (App, MyApp);
