import { useState, useEffect } from 'react';

const BookingComponent = () => {
  const [bookingData, setBookingData] = useState(null);

  // Function to send booking data
  const sendBookingData = async (dataToSend) => {
    try {
      const res = await fetch("http://localhost:4888/Booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(dataToSend),
      });
  
      if (!res.ok) {
        // Log the entire response for debugging purposes
        const text = await res.text();
        console.error('Server response:', text);
  
        // Attempt to parse the response as JSON, but don't fail if it's not possible
        let errorData;
        try {
          errorData = JSON.parse(text);
        } catch (e) {
          errorData = { message: 'An unknown error occurred' };
        }
  
        // Use the error message from the server response, or a generic message if not available
        const errorMessage = errorData.message || 'An unknown error occurred';
        throw new Error(errorMessage);
      }
  
      const data = await res.json();
      setBookingData(data);
    } catch (error) {
      console.error(error);
      // Handle the error appropriately, e.g., show a notification to the user
    }
  };

  const collectBookingData = () => {
    const userId ="";
    const userEmail ="";
    const fullName ="";
    const phoneNumber = "";
    const bookingDate ="";
    const numberOfGuests = "";

    return {
      userID: userId,
      userEmail: userEmail,
      fullname: fullName,
      phone: phoneNumber,
      bookat: bookingDate,
      guest: numberOfGuests,
    };
  };

  // Call the function with the data you want to send
  useEffect(() => {
    const dataToSend = collectBookingData();
    sendBookingData(dataToSend);
  }, []);

  return (
    <div>
      {bookingData && <div>{JSON.stringify(bookingData)}</div>}
    </div>
  );
};

export default BookingComponent;