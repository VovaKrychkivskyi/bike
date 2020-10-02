const StatModel = require(`../database/models/statistics.model`)

module.exports = {

  getAllInfo:async ()=>{
    return await StatModel.findAll()
  },
  updateStatService: async (status, id) => {
    return await StatModel.update({status}, {where: {id}})
  },
  addCopService: async (officer_id, id) => {
    return await StatModel.update({officer_id}, {where: {id}})
  },
  addCopNameService: async (officer_name, id) => {
    return await StatModel.update({officer_name}, {where: {id}})
  },
  getAllProcess: async () => {
    return await StatModel.findAll()
  }
}
