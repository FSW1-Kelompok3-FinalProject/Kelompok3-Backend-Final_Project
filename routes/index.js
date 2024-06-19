const router = require("express").Router();
const swaggerUI = require("swagger-ui-express");
const swaggerDocument = require("../docs/swagger.json");

const Auth = require("./authRouter");
const Flight = require("./flightRouter");
const Airport = require("./airportRouter");

const Airline = require("./airlineRouter");
const User = require("./userRouter");
const Passenger = require("./passengerRouter");
const Ticket = require("./ticketRouter");
const Booking = require("./bookingRouter");
const Seat = require("./seatRoutes");
const Notification = require("./notificationRoutes");
const Transaction = require("./transactionRouter");
router.use("/api-docs", swaggerUI.serve);
router.use("/api-docs", swaggerUI.setup(swaggerDocument));

router.use("/api/v1/auth", Auth);
router.use("/api/v1/flight", Flight);
router.use("/api/v1/airport", Airport);
router.use("/api/v1/airline", Airline);
router.use("/api/v1/user", User);
router.use("/api/v1/passenger", Passenger);
router.use("/api/v1/ticket", Ticket);
router.use("/api/v1/transaction", Transaction);
router.use("/api/v1/seat", Seat);
router.use("/api/v1/notification", Notification);
router.use("/api/v1/booking", Booking);


module.exports = router;
