import React, { useState } from "react";
import {numberToCurrency} from "../../../utils/NumberFormater.ts";

interface TransferCardProps {}

const TransferCard: React.FC<TransferCardProps> = () => {
  const [copied, setCopied] = useState(false);
  const payment = localStorage.getItem("paymentMethod") as string;

  const paymentLogo = (): string => {
      const methodString = payment.toUpperCase();
      if (/MANDIRI/.test(methodString)) {
          return "mandiri";
      } else if (/BNI/.test(methodString)) {
          return "bni";
      } else if (/BCA/.test(methodString)) {
          return "bca"
      } else {
          return "bri"
      }
  }

  const handleCopyClick = () => {
    const range = document.createRange();
    const virtualAccountNumberElement = document.getElementById(
      "virtualAccountNumber"
    );

    if (virtualAccountNumberElement) {
      range.selectNode(virtualAccountNumberElement);

      const selection = window.getSelection();
      if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);

        document.execCommand("copy");

        selection.removeAllRanges();
        setCopied(true);

        setTimeout(() => {
          setCopied(false);
        }, 800);
      }
    }
  };

  return (
    <div className="flex flex-col w-full px-4 py-3 bg-white rounded-lg shadow-md">
      <p className="text-sm font-semibold text-black 2xl:text-sm">
        Transfer to
      </p>
      <div className="flex items-center mt-2">
        <div className="w-10 h-7 border border-[#E0E0E0] rounded mr-2 flex items-center justify-center">
          <img src={`/images/payment-method/${paymentLogo()}.svg`} alt="mandiri" />
        </div>
        <p className="text-xs font-normal text-black">
            {payment}
        </p>
      </div>
      <div className="flex items-center justify-between mt-2 h-9 bg-[#D2F1FF] rounded px-3">
        <p id="virtualAccountNumber" className="font-medium text-black">
          780 0112 5786 8072
        </p>
        <button
          onClick={handleCopyClick}
          className={`${copied ? "text-xs text-black font-semibold" : ""}`}
        >
          {copied ? (
            "Copied!"
          ) : (
            <img src="/images/copy-solid.png" alt="Copy-item" />
          )}
        </button>
      </div>
      <hr className="mt-2 bg-[#C2C2C2]" />
      <p className="mt-2 text-xs font-semibold text-black">Total Payment</p>
      <p className="mt-1 text-lg text-[#1E90FF] font-semibold">{numberToCurrency("IDR",
          JSON.parse(localStorage.getItem("totalPrice") as string) ?? 0, true, false)}</p>
    </div>
  );
};

export default TransferCard;
