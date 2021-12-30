exports.handler = async (event) => {
  const num = await parseInt(event.number);
  if (num < 100) {
    console.log("number is lesser than 100");
    return true;
  } else {
    console.log("number is larger than 100 ");
    return false;
  }
};
