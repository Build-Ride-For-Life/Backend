const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');
const driversRouter = require('../drivers/drivers-router.js');
const reviewsRouter = require('../reviews/reviews-router.js');

const server = express();

server.get('/', (req, res) => {
    res.send({ api: "up" })
});

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);
server.use('/api/drivers', driversRouter);
server.use('/api/reviews', reviewsRouter);


module.exports = server;