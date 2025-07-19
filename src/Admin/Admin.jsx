import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import RestaurantDashboard from "./Dashboard/RestaurantDashboard";
import RestaurantsOrder from "./Orders/RestaurantsOrder";
import RestaurantsMenu from "./Food/RestaurantsMenu";
import AddMenuForm from "./Food/AddMenuForm";
import CreateRestaurantForm from "./AddRestaurants/CreateRestaurantForm";
import IngredientTable from "./Events/Events";
import Category from "./Category/Category";
import Ingredients from "./Ingredients/Ingredients";
import Details from "./Details/Details";
import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";

import { useDispatch, useSelector } from "react-redux";
import {
  getIngredientCategory,
  getIngredientsOfRestaurant,
} from "../State/Admin/Ingredients/Action";
import { getRestaurantsCategory } from "../State/Customers/Restaurant/restaurant.action";
import { fetchRestaurantsOrder } from "../State/Admin/Order/restaurants.order.action";

const Admin = () => {
  const dispatch = useDispatch();
  const [openSideBar, setOpenSideBar] = useState(false);
  const { auth, restaurant } = useSelector((store) => store);

  const handleOpenSideBar = () => setOpenSideBar(true);
  const handleCloseSideBar = () => setOpenSideBar(false);

  useEffect(() => {
    const restaurantId = restaurant?.usersRestaurant?.id;
    const token = auth?.jwt || localStorage.getItem("jwt");

    if (restaurantId && token) {
      dispatch(getIngredientCategory({ jwt: token, id: restaurantId }));
      dispatch(getIngredientsOfRestaurant({ jwt: token, id: restaurantId }));
      dispatch(getRestaurantsCategory({ jwt: token, restaurantId }));
      dispatch(fetchRestaurantsOrder({ jwt: token, restaurantId }));
    }
  }, [dispatch, restaurant?.usersRestaurant, auth?.jwt]);

  return (
    <div>
      <AdminNavbar handleOpenSideBar={handleOpenSideBar} />
      <div className="lg:flex justify-between">
        <div>
          <AdminSidebar handleClose={handleCloseSideBar} open={openSideBar} />
        </div>
        <div className="lg:w-[80vw]">
          <Routes>
            <Route path="/" element={<RestaurantDashboard />} />
            <Route path="/orders" element={<RestaurantsOrder />} />
            <Route path="/menu" element={<RestaurantsMenu />} />
            <Route path="/add-menu" element={<AddMenuForm />} />
            <Route path="/add-restaurant" element={<CreateRestaurantForm />} />
            <Route path="/event" element={<IngredientTable />} />
            <Route path="/ingredients" element={<Ingredients />} />
            <Route path="/category" element={<Category />} />
            <Route path="/details" element={<Details />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Admin;
