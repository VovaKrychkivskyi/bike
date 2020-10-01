const StatModel = require(`../database/models/statistics.model`)
const cron = require(`node-cron`)
const {
  userService: {
    getAllBikes,
    updateUserService
  }
} = require('../services')

module.exports = () => {
  cron.schedule(`*/5 * * * * *`, async () => {
    const stolenDB = await getAllBikes()

    for (let stolenDBElement of stolenDB) {
      if (stolenDBElement.dataValues.status === `pending`) {

        const {id} = stolenDBElement.dataValues
        const {owner_email} = stolenDBElement.dataValues

        await StatModel.create({bike_id: id})
        await updateUserService(`already add to police`, owner_email)
      }
    }
  })
}