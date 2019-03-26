# ts-token-creator

Needs lots of work...

# Example Code
```js
import { TokenCreator } from 'ts-token-creator'

export class MyClass {

  secret = 'secret';
  
  tokenConfig = {
     header: {
          "typ": "JWT",
          "alg": "HS256"
      },
      body: {
         "sub": "1234567890",
        "name": "John Doe",
        "iat": 1516239022
       },
    };
  
  constructor(private tokenCreator: TokenCreator) {
    const token = this.tokenCreator.hmacSHA256(this.tokenConfig, this.secret);
    console.log(token);
    // Console result: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.XbPfbIHMI6arZ3Y922BhjWgQzWXcXNrz0ogtVhfEd2o
  }
}
```
