const BikeModel = require(`../database/models/bike.model`)

module.exports = {
  createUserService: async (user) => {
    return await BikeModel.create(user);

  },

  checkUserService: async (owner_email) => {
    return await BikeModel.findOne({where: {owner_email}})
  },

  updateUserService: async (status, owner_email) => {
    return await BikeModel.update({status}, {where: {owner_email}})
  },

  deleteUserService: async (owner_email) => {
    return await BikeModel.destroy({where: {owner_email}})
  },

  getAllBikes:async ()=>{
    return await BikeModel.findAll()
  }
}
