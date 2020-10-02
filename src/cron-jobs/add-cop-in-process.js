const StatModel = require(`../database/models/statistics.model`)
const cron = require(`node-cron`)

const {
  copService: {
    getAllFreeCops,
    updateCopStatusService
  },
  statService: {
    getAllInfo,
    updateStatService,
    addCopService,
    addCopNameService
  }
} = require(`../services`)

module.exports = () => {
  cron.schedule(`*/10 * * * * *`, async () => {
    const copsDB = await getAllFreeCops()
    const statDB = await getAllInfo()

    for (let copsDBElement of copsDB) {
      if (copsDBElement.dataValues.status === `smocking marlboro`) {
        const copId = copsDBElement.dataValues.id;
        const copName = copsDBElement.dataValues.name;

        await updateCopStatusService(`I'm working`, copName)

        for (let statDBElement of statDB) {
          if (statDBElement.dataValues.status === `stolen`) {
            const statId = statDBElement.dataValues.id;

            await updateStatService(`looking for`, statId)

            await addCopService(copId, statId);
            await addCopNameService(copName, statId)

            await updateStatService(`bike is already found`, statId)

            await updateCopStatusService(`smocking marlboro`, copName)
          }
        }
      }
    }
  })
}