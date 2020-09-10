const formatNumber = inputNumber => {
  let formetedNumber = (Number(inputNumber)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
  let splitArray = formetedNumber.split('.')
  let decimal
  if (splitArray.length > 1) {
    formetedNumber = splitArray[0]
    decimal = splitArray[1]
  }
  return {
    ammount: formetedNumber.replace(',', '.'),
    decimals: decimal
  };
};

export default formatNumber