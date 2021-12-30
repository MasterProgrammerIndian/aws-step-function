exports.handler = async () => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "number is not between 10 and 100",
    }),
  };
  console.log("number is not between 10 and 100");
  return response;
};
