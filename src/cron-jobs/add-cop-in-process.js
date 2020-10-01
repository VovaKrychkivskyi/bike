const StatModel = require(`../database/models/statistics.model`)
const cron = require(`node-cron`)

const {
  copService: {
    getAllFreeCops,
    updateCopStatusService
  },
  statService:{
    getAllInfo,
    updateStatService,
    addCopService,
    addCopNameService
  }
} = require(`../services`)

module.exports = () => {
  cron.schedule(`*/15 * * * * *`, async () => {
    const copsDB = await getAllFreeCops()
    const statDB = await getAllInfo()

    for (let copsDBElement of copsDB) {
      if (copsDBElement.dataValues.status === `smocking marlboro`){
        const id = copsDBElement.dataValues.id;
        const name = copsDBElement.dataValues.name;
        await updateCopStatusService(`I'm working`, name)

        for (let statDBElement of statDB) {
          if (statDBElement.dataValues.status === `stolen`){
            const idStat = statDBElement.dataValues.id;
            await updateStatService(`looking for`, idStat);

            await addCopService(id,idStat);
            await addCopNameService(name, idStat)

            setTimeout(()=>{
              updateStatService(`already found`, idStat);
              updateCopStatusService(`smocking marlboro`, name)
            },5000)


          }
        }
      }
    }
  })
}