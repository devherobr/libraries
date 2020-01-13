const defaultAwesomeFunction = name => {
  const returnStr = `I am the Default Awesome Function, fellow comrade! - ${name}`;
  return returnStr;
};

const awesomeFunction = () => 'I am just an Awesome Function';

export { awesomeFunction, defaultAwesomeFunction as default };
