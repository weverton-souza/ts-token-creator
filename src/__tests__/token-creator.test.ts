import { TokenCreator } from '../token-creator/token-creator';

test('My token', function() {
  var token = new TokenCreator();
  var secret = 'secret';
  var tokenConfig = {
    header: {
        "typ": "JWT",
        "alg": "HS256"
    },
    body: {
        "sub": "1234567890",
        "name": "John Doe",
        "admin": true,
        "jti": "27668a0d-3f0a-4cd8-a351-a8c3bf6a596e",
        "iat": 1553397630,
        "exp": 1553401230
       },
  };
  expect(token.hmacSHA256(tokenConfig, secret)).toBe(
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImp0aSI6IjI3NjY4YTBkLTNmMGEtNGNkOC1hMzUxLWE4YzNiZjZhNTk2ZSIsImlhdCI6MTU1MzM5NzYzMCwiZXhwIjoxNTUzNDAxMjMwfQ.d-o6iDYo-UhJtn5kn8CSQgqJfd8SloazpiPuQjFTxOA',
  );
});
