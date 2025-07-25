import React, { useEffect } from 'react';
import { getAllEvents } from '../../../State/Customers/Restaurant/restaurant.action';
import { useDispatch, useSelector } from 'react-redux';
import EventCard from '../../../Admin/Events/EventCard';

const CustomerEvents = () => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

  const { restaurant } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getAllEvents({ jwt }));
  }, [dispatch, jwt]); // ✅ Fixed dependency array

  return (
    <div className="mt-5 px-5 flex flex-wrap gap-5">
      {restaurant.events.map((item, index) => (
        <div key={index}>
          <EventCard isCustomer={true} item={item} />
        </div>
      ))}
    </div>
  );
};

export default CustomerEvents;
