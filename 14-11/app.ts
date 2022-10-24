function printResult(): undefined {
  console.log('lalala');
  return;
}

console.log(printResult());

function throwError(message: string, errorCode: number): never {
  throw {
    message,
    errorCode
  };
}

throwError('not found', 404);

function whileLoop():never{
  whileLoop(true){
    console.log('haha')
  }
}