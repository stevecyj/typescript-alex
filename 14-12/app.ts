let message: any;
message = 'abc';

let ddd = (<string>message).endsWith('c');
let ddd2 = (message as string).endsWith('c');
