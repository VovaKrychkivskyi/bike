const cron = require(`node-cron`)

const StatModel = require(`../database/models/statistics.model`)

const {
  userService: {
    getAllBikes,
    updateUserService
  }
} = require('../services')

module.exports = () => {
  cron.schedule(`*/10 * * * * *`, async () => {
    const stolenDB = await getAllBikes()

    for (let stolenDBElement of stolenDB) {
      if (stolenDBElement.dataValues.status === `pending`) {

        const {id} = stolenDBElement.dataValues
        const {owner_email} = stolenDBElement.dataValues

        await StatModel.create({bike_id: id})
        await updateUserService(`police know about it`, owner_email)
      }
    }
  })
}