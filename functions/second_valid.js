exports.handler = async (event) => {
  const num = await parseInt(event.number);
  if (num > 10) {
    console.log("number is greater than 10");
    return true;
  } else {
    console.log("number is lesser than 10 ");
    return false;
  }
};
