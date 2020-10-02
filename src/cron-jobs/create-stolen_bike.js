const {
  userService: {
    createUserService
  }
} = require(`../services`);

module.exports = async () => {
  try {
    const Petro = {
      "owner_bike":"Petro",
      "bike_name":"Tusa",
      "owner_email":"111"
    }
    setTimeout(() => {
        createUserService(Petro);
        console.log(`***********Start Looking for Petro's Tusa`)
      },
      3000);

    const Dima = {
      "owner_bike":"Dima",
      "bike_name":"Ukraine",
      "owner_email":"222"
    }
    setTimeout(() => {
        createUserService(Dima);
        console.log(`***********Start Looking for Dima's Ukraine`)
      },
      4000);

    const Ivan = {
      "owner_bike":"Ivan",
      "bike_name":"Zayka",
      "owner_email":"333"
    }
    setTimeout(() => {
        createUserService(Ivan);
        console.log(`***********Start Looking for Ivan's Zayka`)
      },
      5000);

    const Vasul = {
      "owner_bike":"Vasul",
      "bike_name":"Dnipro",
      "owner_email":"444"
    }
    setTimeout(() => {
        createUserService(Vasul);
        console.log(`***********Start Looking for Vasul's Dnipro`)
      },
      6000);

    const Vova = {
      "owner_bike":"Vova",
      "bike_name":"Skate",
      "owner_email":"555"
    }
    setTimeout(() => {
        createUserService(Vova);
        console.log(`***********Start Looking for Vova's Skate`)
      },
      7000)

  } catch (e) {
    console.log(e)
  }
}
