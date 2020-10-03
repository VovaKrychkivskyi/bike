const cron = require(`node-cron`)

const {
  copService: {
    getAllFreeCops,
    updateCopStatusService
  }
} = require(`../services`)


module.exports = () => {
  cron.schedule(`*/10 * * * * *`, async () => {
    const copsDB = await getAllFreeCops()
    const singleCop = []
    for (const copsAll of copsDB) {
      if (copsAll.dataValues.status === `writing report`) {
        singleCop.push(copsAll.dataValues)
      }
    }
    const cop = singleCop[0];
    const copName = cop.name
    await updateCopStatusService(`smocking marlboro`, copName)
  })
}