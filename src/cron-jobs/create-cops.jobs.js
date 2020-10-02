const {
  copService: {
    createCopService
  }
} = require(`../services`);

module.exports = async () => {
  try {
    const Olya = {
      "name": "Olya",
      "password": "111",
      "email": "111"
    }
    setTimeout(() => {
      createCopService(Olya);
      console.log(`/////cop Olya started working`)
    },
       1000);

    const Katya = {
      "name": "Katya",
      "password": "222",
      "email": "222"
    }
    setTimeout(() => {
        createCopService(Katya);
        console.log(`/////cop Katya started working`)
      },
      2000);

    const Oksana = {
      "name": "Oksana",
      "password": "333",
      "email": "333"
    }
    setTimeout(() => {
        createCopService(Oksana);
        console.log(`/////cop Oksana started working`)
      },
      3000);

    const Lilya = {
      "name": "Lilya",
      "password": "444",
      "email": "444"
    }
    setTimeout(() => {
        createCopService(Lilya);
        console.log(`/////cop Lilya started working`)
      },
      4000);

    const Dasha = {
      "name": "Dasha",
      "password": "555",
      "email": "555"
    }
    setTimeout(() => {
        createCopService(Dasha);
        console.log(`/////cop Dasha started working`)
      },
      5000)

  } catch (e) {
    console.log(e)
  }
}


