const uppercase = (str, callback) => {
  const result = str.toUpperCase() 
  callback(result);
}

module.exports = uppercase;