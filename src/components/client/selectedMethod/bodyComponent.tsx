import Breadcrumbs from "./breadcrumbs";
import SelectedCard from "./selectedCard";
import TransferCard from "./transferCard";
import VaCard from "./vaCard";
import { Toaster } from "react-hot-toast";
import React, {useEffect, useState} from "react";
import {FlightData} from "../../../assets/static/TableDataTypes.ts";
import API_URL from "../../../assets/static/API.ts";
import axios from "axios";
import ProcessingModal from "../purchaseProcessing/ProcessingModal.tsx";
import {useNavigate} from "react-router-dom";
import TransferEvidenceComponent from "../purchaseProcessing/TansferEvidenceComponent.tsx";

const BodyComponent = () => {
  const [flights, setFlights] = useState<FlightData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [showEvidence, setShowEvidence] = useState<boolean>(false);
  const navigate = useNavigate();

  const paymentMethod = localStorage.getItem("paymentMethod") as string;
  const flightIds: string[] = JSON.parse(localStorage.getItem("flightId") as string);

  useEffect(() => {
    const fetchData = async () => {
      const flightDataArray = await Promise.all(
          flightIds.map(id => axios.get(API_URL + "/v1/flights/" + id))
      );
      const flightsData = flightDataArray.map(response => response.data.data);
      setFlights(flightsData);
    };

    if (flightIds.length > 0) {
      fetchData();
    }
  }, [flightIds]);

  const handleClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowEvidence(false);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/purchaseStatus/123")
    }, 2000);
  };

  return (
    <>
      <Toaster />
      {loading && (
          <ProcessingModal />
      )}
      {showEvidence && (
          <TransferEvidenceComponent handleSubmit={handleClick} />
      )}
      {/* Inner Body Section */}
      <div className="w-full px-4">
        {/* Departure Header */}
        <Breadcrumbs />

        {/* Fligth Card */}
        <div className="flex flex-col w-full mt-4 gap-y-3">
          {flights.map((data) => (
              <SelectedCard flightData={data} />
          ))}
          <TransferCard />
          <p className="text-[16px] font-bold text-black">{paymentMethod}</p>
          <VaCard />
          <button
            className="mt-5 h-10 bg-[#1E90FF] rounded font-semibold"
            onClick={() => setShowEvidence(!showEvidence)}
          >
            I already paid
          </button>
        </div>
      </div>
    </>
  );
};

export default BodyComponent;
