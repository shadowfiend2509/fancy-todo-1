const Route = require('express').Router();
const userRoute = require('./userRouter');
const todoRoute = require('./todoRouter');
const projectRoute = require('./projectRouter');
const quoteRoute = require('./quote');

Route.use(
  '/users',
  userRoute
)
Route.use(
  '/todos',
  todoRoute
)
Route.use(
  '/projects',
  projectRoute
)
Route.use(
  '/quote',
  quoteRoute
)

module.exports = Route;