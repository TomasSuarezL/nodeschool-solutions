const http = require("http");

const waitAll = () => {
  let isReady = Object.values(allData).every((r) => r.ready);
  if (isReady) {
    Object.values(allData).forEach((r) => console.log(r.string));
  } else {
    setTimeout(waitAll, 1000);
  }
};

let allData = {
  [process.argv[2]]: {
    string: "",
    ready: false,
  },
  [process.argv[3]]: {
    string: "",
    ready: false,
  },
  [process.argv[4]]: {
    string: "",
    ready: false,
  },
};

Object.keys(allData).forEach((k) => {
  http.get(k, (res) => {
    let dataString = "";
    res
      .on("data", (data) => {
        dataString += data.toString();
      })
      .on("end", () => {
        allData[k].string = dataString;
        allData[k].ready = true;
      });
  });
});

waitAll();

// 'use strict'
// const http = require('http')
// const bl = require('bl')
// const results = []
// let count = 0

// function printResults () {
//   for (let i = 0; i < 3; i++) {
//     console.log(results[i])
//   }
// }

// function httpGet (index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err) {
//         return console.error(err)
//       }

//       results[index] = data.toString()
//       count++

//       if (count === 3) {
//         printResults()
//       }
//     }))
//   })
// }

// for (let i = 0; i < 3; i++) {
//   httpGet(i)
// }
