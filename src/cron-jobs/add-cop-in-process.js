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
    const singleCop = []
    for (const copsAll of copsDB) {
      if (copsAll.dataValues.status === `smocking marlboro`) {
        singleCop.push(copsAll.dataValues)
      }
    }
    const cop = singleCop[0];
    const copId = cop.id;
    const copName = cop.name

    const singleBike = []
    for (const bikeAll of statDB) {
      if (bikeAll.dataValues.status === `stolen`) {
        singleBike.push(bikeAll.dataValues)
      }
    }
    const bike = singleBike[0];
    const bikeId = bike.id;

    console.log(9999, bikeId);

    await updateCopStatusService(`I'm working`, copName)
    await updateStatService(`looking for`, bikeId)

    await addCopService(copId, bikeId);
    await addCopNameService(copName, bikeId)

    await updateStatService(`bike is already found`, bikeId)
    await updateCopStatusService(`writing report`, copName)


  })
}


// const StatModel = require(`../database/models/statistics.model`)
// const cron = require(`node-cron`)
//
// const {
//   copService: {
//     getAllFreeCops,
//     updateCopStatusService
//   },
//   statService: {
//     getAllInfo,
//     updateStatService,
//     addCopService,
//     addCopNameService
//   }
// } = require(`../services`)
//
// module.exports = () => {
//   cron.schedule(`*/10 * * * * *`, async () => {
//     const copsDB = await getAllFreeCops()
//     const statDB = await getAllInfo()
//
//     for (let copsDBElement of copsDB) {
//       if (copsDBElement.dataValues.status === `smocking marlboro`) {
//
//         for (let statDBElement of statDB) {
//           if (statDBElement.dataValues.status === `stolen`) {
//             const copId = copsDBElement.dataValues.id;
//             const copName = copsDBElement.dataValues.name;
//
//             await updateCopStatusService(`I'm working`, copName)
//             const statId = statDBElement.dataValues.id;
//             await updateStatService(`looking for`, statId)


//
//             await addCopService(copId, statId);
//             await addCopNameService(copName, statId)
//
//             await updateStatService(`bike is already found`, statId)
//             await updateCopStatusService(`smocking marlboro`, copName)
//           }
//         }
//       }
//     }
//   })
// }
//