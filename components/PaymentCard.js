import React, { useState } from "react";
// import AppFooter from "./Footer";
import { Button } from "antd";

const PaymentCard = () => {
  const [cardNumber, setCardNumber] = useState("4256 4256 4256 4256");
  const [expDate, setExpDate] = useState("12/24");
  const [ccvNumber, setCcvNumber] = useState("342");
  const [cardName, setCardName] = useState("John Doe");
  const [showBack, setShowBack] = useState(false);

  const toggleBackCard = () => {
    
    setShowBack(!showBack);

  };

  const handleExpDateChange = (e) => {
    let input = e.target.value;
  
    // Remove any non-numeric characters
    input = input.replace(/\D/g, '');
  
    // Format the date as MM/YY
    if (input.length > 2) {
      const month = parseInt(input.slice(0, 2), 10);
      // Ensure the month is between 1 and 12
      if (month < 1) {
        // If month is less than 1, set it to '01'
        input = '01' + input.slice(2, 4);
      } else if (month > 12) {
        // If month is greater than 12, set it to '12'
        input = '12' + input.slice(2, 4);
      } else {
        // Otherwise, keep the month as is
        input = `${input.slice(0, 2)}/${input.slice(2, 4)}`;
      }
    }
  
    setExpDate(input);
  };
  

  return (
   <div >
     <main className="flex  flex-col items-center justify-between p-6 lg:p-24">
      <form className="bg-white w-full max-w-3xl mx-auto px-4 lg:px-6 py-8 shadow-md rounded-md flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 lg:pr-8 lg:border-r-2 lg:border-slate-300">
          <div className="mb-4">
            <label className="text-neutral-800 font-bold text-sm mb-2 block">
              Card number:
            </label>
            <input
               type="text"
               className="flex h-10 w-full rounded-md border-2 bg-background px-4 py-1.5 text-lg ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-purple-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 undefined"
               placeholder="XXXX XXXX XXXX XXXX"
               value={cardNumber}
               onChange={(e) => {
                   // Remove non-numeric characters
                   const inputNumber = e.target.value.replace(/\D/g, '');
                   // Format the number with spaces after every 4 digits
                   const formattedNumber = inputNumber.replace(/(\d{4})/g, '$1 ').trim();
                   // Update state with formatted number (max length 19 to accommodate spaces)
                   if (inputNumber.length <= 16) {
                       setCardNumber(formattedNumber);
                   }
               }}            maxLength={19}

            />
          </div>
          <div className="flex gap-x-2 mb-4">
            <div className="block">
              <label className="text-neutral-800 font-bold text-sm mb-2 block">
                Exp. date:
              </label>
              <input
                id="expDate"
                type="text"
                className="flex h-10 w-full rounded-md border-2 bg-background px-4 py-1.5 text-lg ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-purple-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 undefined"
                placeholder="MM/YY"
                value={expDate}
                onChange={handleExpDateChange}
              />
            </div>
            <div className="block">
              <label className="text-neutral-800 font-bold text-sm mb-2 block">
                CCV:
              </label>
              <input
                id="ccvNumber"
                type="text"
                className="flex h-10 w-full rounded-md border-2 bg-background px-4 py-1.5 text-lg ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-purple-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 undefined"
                placeholder="123"
                value={ccvNumber}
                onFocus={toggleBackCard} // Show back side when CCV field is focused
                onBlur={toggleBackCard} // Hide back side when CCV field is blurred
                onChange={(e) => {
                    const value = e.target.value;
                    if (/^\d{0,6}$/.test(value)) {
                      setCcvNumber(value);
                    }
                  }}
                  maxLength={6} // Restrict input to 6 characters
                />
            </div>
          </div>
          <div className="mb-4">
            <label className="text-neutral-800 font-bold text-sm mb-2 block">
              Card holder:
            </label>
            <input
              id="cardName"
              type="text"
              className="flex h-10 w-full rounded-md border-2 bg-background px-4 py-1.5 text-lg ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-purple-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 undefined"
              placeholder="John Doe"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              maxLength={15}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:pl-8">
          <div className="w-full max-w-sm h-56" style={{ perspective: "1000px" }}>
            <div
              id="creditCard"
              className={`relative creditCard cursor-pointer transition-transform duration-500 ${
                showBack ? "seeBack" : ""
              }`}
              style={{ transformStyle: "preserve-3d" }}
              onClick={toggleBackCard}
            >
              <div
                className="w-full h-56 m-auto rounded-xl text-white shadow-2xl absolute"
                style={{ backfaceVisibility: "hidden" }}
              >
                {!showBack && <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl w-full h-full flex flex-col justify-between p-4">
                  <div className="text-4xl font-semibold">{cardNumber.slice(0, 4)}</div>
                  <div className="flex justify-between">
                    <div className="text-sm font-light">Card Holder</div>
                    <div className="text-sm font-light">Expiration</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-xl font-medium">{cardName}</div>
                    <div className="text-xl font-medium">{expDate}</div>
                  </div>
                </div>}
                {/* ///////////////////////// */}
                {showBack && (
  <div
    className="w-full h-56 m-auto rounded-xl text-white shadow-2xl absolute transform rotate-y-180 transition-transform duration-1000"
  >
    <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl w-full h-full flex flex-col justify-between p-6">
      <div className="text-2xl font-semibold">CCV</div>
      <div className="text-4xl font-semibold">{ccvNumber}</div>
    </div>
  </div>
)}

              </div>
              
            </div>
          </div>
        </div>
      </form>
      
    
    </main>

    <div style={{display:'flex',justifyContent:'center',marginTop:'-5%',marginBottom:'5%'}}>
    <Button style={{padding:'0px 35px'}}>Pay</Button>

    </div>
    {/* <AppFooter/> */}
   </div>
  );
}

export default PaymentCard;
