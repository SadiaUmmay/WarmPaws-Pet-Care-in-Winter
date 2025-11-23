import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/public/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <h3 className='text-center text-2xl md:text-4xl my-10 font-semibold text-blue-700'>
                All Winter Care Services
            </h3>

            <div className='w-full mx-2 md:w-7xl md:mx-auto my-4 gap-10 grid grid-cols-1 md:grid-cols-3'>
                {services.map(service => (
                    <div key={service.id} className="card bg-base-100 w-90 mx-auto shadow-sm">
                        <figure>
                            <img
                                className='w-full h-[300px] object-cover'
                                src={service?.image}
                                alt={service.serviceName}
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{service.serviceName}</h2>
                            <div className='flex justify-between my-3 font-semibold'>
                                <p>Price : {service.price}$</p>
                                <p className='text-orange-600'>Rating : {service.rating}</p>
                            </div>
                            <div className="card-actions justify-end">
                               
                                <Link
                                    to={`/service-details/${service.serviceId}`}
                                    className="btn btn-primary"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
