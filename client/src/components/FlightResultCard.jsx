const FlightResultCard = ({ flight }) => {
    const { airline, departureTime, arrivalTime, price } = flight;
  
    return (
      <div className="border p-4 rounded shadow-sm bg-white flex flex-col gap-2">
        <div className="font-semibold text-lg">{airline || 'Unknown Airline'}</div>
        <div className="text-sm">
          Departure: {departureTime || '—'} <br />
          Arrival: {arrivalTime || '—'}
        </div>
        <div className="font-bold text-blue-600">
          {price ? `$${price}` : 'Price not available'}
        </div>
      </div>
    );
  };
  
  export default FlightResultCard;
  