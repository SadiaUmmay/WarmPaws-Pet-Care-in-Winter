import React, { useEffect, useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { useParams } from 'react-router';

const ServiceDetails = () => {
  const { id } = useParams(); // get serviceId from URL
  const [service, setService] = useState(null);

  useEffect(() => {
    fetch('/public/services.json')
      .then(res => res.json())
      .then(data => {
        const selectedService = data.find(s => s.serviceId.toString() === id);
        setService(selectedService);
      })
      .catch(err => console.log(err));
  }, [id]);

  const handleBooking = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    toast.success(`Booking successful for ${name}!`);
    e.target.reset();
  };

  if (!service) return <p className="text-center mt-10">Loading service details...</p>;

  return (
    <div className="hero bg-base-200 min-h-screen">
      <Toaster position="top-right" />
      <div className="hero-content flex-col w-full max-w-3xl">
        <div className="card w-full bg-base-100 shadow-lg">
          <figure>
            <img src={service.image} alt={service.serviceName} className="w-full h-80 object-cover" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl">{service.serviceName}</h2>
            <p><strong>Price:</strong> ${service.price}</p>
            <p><strong>Rating:</strong> {service.rating}</p>
            <p><strong>Description:</strong> {service.description}</p>
            <p><strong>Category:</strong> {service.category}</p>
            <p><strong>Provider:</strong> {service.providerName} ({service.providerEmail})</p>
            <p><strong>Slots Available:</strong> {service.slotsAvailable}</p>
          </div>
        </div>

        <div className="card w-full bg-base-100 shadow-lg mt-6 p-6">
          <h3 className="text-2xl font-bold mb-4">Book Service</h3>
          <form onSubmit={handleBooking} className="flex flex-col gap-4">
            <input type="text" name="name" placeholder="Your Name" className="input input-bordered w-full" required />
            <input type="email" name="email" placeholder="Your Email" className="input input-bordered w-full" required />
            <button type="submit" className="btn btn-primary w-full">Book Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
