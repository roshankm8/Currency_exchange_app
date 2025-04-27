import { useState } from "react";
import { Inputbox } from "./components";
import "./App.css";
import useCurrency from "./hooks/currencyinfo";
import SwapCallsOutlinedIcon from '@mui/icons-material/SwapCallsOutlined';

function App() {
  const [amount, setamount] = useState("");
  const [from, setfrom] = useState("inr");
  const [to, setto] = useState("usd");
  const [convertedamount, setconvertedamount] = useState(0);
  const currencyget = useCurrency(from); //usecurrency fn ko import kiye h currencyinfo se or isme from pass kr rhe h mtlb inr ki value milegi
  console.log("currencyget", currencyget);
  const fetchkeys = Object.keys(currencyget);
  console.log("fetchkeys", fetchkeys);
  const swap = () => {
    console.log("swap", from, to, swap);

    setfrom(to);
    setto(from);
    setamount(convertedamount); //yeh converted amount ko set kr rhe h jo amount h usko set krne ke liye
    setconvertedamount(amount);
  };
  const convert = () => {
    setconvertedamount(amount * currencyget[to]);
  };
  console.log("convert", convert);
//   convert() function:

// Takes amount, multiplies by the exchange rate (currencyget[to]), and sets the new converted amount.

// Example:

// If 1 INR = 0.012 USD

// And amount = 100, then

// convertedamount = 100 × 0.012 = 1.2 USD

  return (
    <>
      
      <div
      
        className="w-full  flex flex-wrap bg-cover bg-no-repeat justify-center items-center h-screen"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        }}
      >
        <h1
  className="text-xl  h-11 flex justify-center items-center   p-8 rounded-xl shadow-lg w-full mx-auto"
        
  style={{
    marginBottom: "1rem",
    position: "absolute",
    top: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    padding: "0.5rem 1rem",
    borderRadius: "8px",
    backgroundColor: "rgba(255, 255, 255, 0.5)"
  }}
>
  Currency Exchange App
</h1>

        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              console.log("eeee", e);

              e.preventDefault();
              convert(); //as of my think ye converted amt h
            }}
          >
            <div className="w-full mb-1">
              <Inputbox
                label="From"
                amount={amount}
                currencyOptions={fetchkeys}
                onCurrencyChange={(currency) => setamount(amount)}
                selectCurrency={from}
                onAmountChange={(amount) => setamount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                {/* <img src="https://cdn-icons-png.flaticon.com/512/9870/9870522.png" alt="SWAP" style={{width:"30px" , height:"25px"}}/> */}
                <SwapCallsOutlinedIcon style={{ fontSize: "2 0px" }} />
               
              </button>
            </div>
            <div className="w-full mb-4 mt-1">
              <Inputbox
                label="To"
                amount={convertedamount}
                currencyOptions={fetchkeys}
                onCurrencyChange={(currency) => setto(currency)}
                selectCurrency={to}
                amountDisable={true}
              />
            </div>
            <button>
              <div className="w-full bg-blue-600 text-white text-center py-2 px-2 rounded-md hover:bg-blue-700 transition duration-300">
                Convert {from.toLocaleUpperCase()} to {to.toLocaleUpperCase()}
              </div>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
