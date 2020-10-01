const CopModel = require(`../database/models/cop.model`)

module.exports = {
  createCopService: async (user) => {
    return await CopModel.create(user)
  },

  checkCopService: async (email) => {
    return await CopModel.findOne({where: {email}})
  },

  updateCopService: async (name, email) => {
    return await CopModel.update({name}, {where: {email}})
  },

  deleteCopService: async (email) => {
    return await CopModel.destroy({where: {email}})
  },

  getAllFreeCops:async ()=>{
    return await CopModel.findAll()
  },

  updateCopStatusService: async (status, name) => {
    return await CopModel.update({status}, {where: {name}})
  },
}
