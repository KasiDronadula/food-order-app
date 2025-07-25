import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { deleteEventAction } from "../../State/Customers/Restaurant/restaurant.action";
import { deleteRestaurant } from "../../State/Admin/Restaurants/admin.action";

const EventCard = ({ item, isCustomer, jwt }) => {
  const dispatch = useDispatch();

const handleDeleteEvent = () => {
  if (window.confirm("Are you sure you want to delete this event?")) {
  console.log("Deleting event with ID:", item.id);
    dispatch(deleteEventAction({ eventId: item.id, jwt }));
  }
};


  return (
    <div>
      <Card sx={{ width: 345 }}>
        <CardMedia
          sx={{
            height: 345,
            "&:hover": {
              transform: "scale(1.1)",
              transition: "transform 0.5s ease-in-out",
            },
          }}
          image={item.image}
          title="event"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.restaurant.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.name}
          </Typography>
          <div className="py-2 space-y-2">
            <p>{item.location}</p>
            <p className="text-sm text-blue-500">{item.startedAt}</p>
            <p className="text-sm text-red-500">{item.endsAt}</p>
          </div>
        </CardContent>

        {!isCustomer && (
          <CardActions>
           <IconButton onClick={handleDeleteEvent} aria-label="delete">
  <DeleteIcon />
</IconButton>

          </CardActions>
        )}
      </Card>
    </div>
  );
};

export default EventCard;
