const express = require(`express`);
const cors = require(`cors`)
const app = express();

const {mainRouter} = require(`./routers`);
const {createCop, createStolenBike, addBikeInProcess, addCopInProcess} = require(`./cron-jobs`);
const {WHITE_LIST} = require(`./configs/const.config`)

createCop();
createStolenBike();
addBikeInProcess();
addCopInProcess();


app.use(cors({
  origin: (origin, callback) => {
    if (WHITE_LIST.split(';').includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}))

app.use(express.json());
app.use(`/`, mainRouter);


app.use('*', (err, req, res, next) => {
  res
    .status(err.status || 404)
    .json({
      message: err.message || 'NOT FOUND',
      code: err.customCode || ''
    })
});

module.exports = app;
