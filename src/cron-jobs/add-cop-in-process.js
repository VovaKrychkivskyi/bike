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
  cron.schedule(`0,02 * * * * *`, async () => {

    const copsDB = await getAllFreeCops()
    const statDB = await getAllInfo()

    const singleCop = []
    const singleBike = []

    for (const copsAll of copsDB) {
      if (copsAll.dataValues.status === `smocking marlboro`) {
        singleCop.push(copsAll.dataValues)
      }
    }

    for (const bikeAll of statDB) {
      if (bikeAll.dataValues.status === `stolen`) {
        singleBike.push(bikeAll.dataValues)
      }
    }

    if (singleCop.length > 0 && singleBike.length > 0) {

      const bike = singleBike[0];
      const cop = singleCop[0];
      const nameCop = cop.name
      const idCop = cop.id;
      const idBike = bike.id

      await updateCopStatusService(`I'm working`, nameCop);
      await updateStatService(`looking for`, idBike);

      await addCopNameService(nameCop, idBike);
      await addCopService(idCop, idBike);

      await updateStatService(`bike is already found`, idBike);
      await updateCopStatusService(`writing report`, nameCop)
    }
  })
}

