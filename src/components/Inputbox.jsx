// import React from "react";

// function Inputbox({
//   label,
//   amount,
//   onAmountChange,
//   onCurrencyChange,
//   currencyOption = [],
//   selectCurrency = "usd",
//   className = "",
// }) {
//   return (
//     <div className={`bg-white p-3 rounded-lg  text-sm flex ${className}`}>
//       <div className=" w-1/2">
//         <label className=" text-black/40  mb-2 inline-block">{label}</label>
//         <input
//           className=" outline-none w-full  bg-transparentn py-1.5"
//           type="number"
//           placeholder="Amount"
//           value={amount}
//           onChange={(e) =>
//             onAmountChange && onAmountChange(Number(e.target.value))
//           }
//         />
//       </div>
//       <div className=" w-1/2  flex flex-wrap  justify-end text-right">
//         <p className=" text-black/40  mb-2 w-full"> Currency Type</p>
//         <select
//           className=" rounded-lg  px-1 py-1  bg-gray-100 cursor-pointer outline-none"
//           value={selectCurrency}
//           onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
//         >
//           {currencyOption.map((c) => (
//             <option key={c} value={c}>
//               {c}
//             </option>
//           ))}
//         </select>
//       </div>
//     </div>
//   );
// }

// export default Inputbox;
// useId hook it provides unique id.
import React, { useId } from "react";
import "./Inputbox.css";

function Inputbox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "inr",
  amountDisable = false,
  currencyDisable = false,
  className = "text-blue-500",
}) {
  const uuid = useId();
  console.log("uuid", uuid); // ✅ logs the unique ID to the console
  console.log("label", label); // ✅ logs the label to the console
  console.log("amount", amount); // ✅ logs the amount to the console
  console.log("onAmountChange", onAmountChange); // ✅ logs the onAmountChange function to the console
  console.log("onCurrencyChange", onCurrencyChange); // ✅ logs the onCurrencyChange function to the console

  return (
    <div className={`bg-white p-3 rounded-lg  text-sm flex  ${className}`}>
      <div className="w-1/2">
        <label
          htmlFor={uuid}
          className=" text-black mb-4 inline-block "
          style={{ marginRight: "12rem" }}
        >
          {label}
        </label>
        <input
          id={uuid}
          className=" outline-none w-full  bg-transparent py-1.5 border-b-2 border-blue-500 focus:border-blue-700 transition duration-300"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => {
            console.log("eamoun", e);
            // let newValue = e.target.value;
            // value = newValue.replace(/^0+/, '');
            onAmountChange && onAmountChange(Number(e.target.value));
          }}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className=" text-black mb-2 w-full"> Currency Type</p>
        <select
          className=" rounded-lg  px-1 py-1  bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => {
            console.log("ecurrenchng", e);
            onCurrencyChange && onCurrencyChange(e.target.value);
          }}
          disabled={currencyDisable}
        >
          {/* <option value="usd">USD</option>
          <option value="inr">INR</option>
          <option value="eur">EUR</option> */}
          {currencyOptions.map((currency) => {
            //yaha pe jitne v currency api se aa rha h wo map ho rha h
            // console.log("currfetchedfromapi", currency); // ✅ logs each currency to the console
            return (
              <option value={currency} key={currency}>
                {currency}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default Inputbox;

// currencyOption nhi samajh aya
