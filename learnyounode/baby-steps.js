console.log(process.argv.slice(2).reduce((acc, val) => acc + parseInt(val), 0));
