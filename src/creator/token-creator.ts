import * as CryptoJS from 'crypto-js';

interface IHeader {
  alg: string;
  typ: string;
}

interface ITokenConfig {
  header: IHeader;
  body: any;
}

export class TokenCreator {
  public hmacSHA256(tokenConfig: ITokenConfig, secret: string): string {
    const encodedHeaderPlusPayload = this.createEncodedData(tokenConfig.header, tokenConfig.body);
    return encodedHeaderPlusPayload + "." + this.base64EncodeURL(CryptoJS.HmacSHA256(encodedHeaderPlusPayload, secret));
  }

  private createEncodedData(header: IHeader, payload: any): string {
    const strEncHeader = CryptoJS.enc.Utf8.parse(JSON.stringify(header));
    const strEncPayload = CryptoJS.enc.Utf8.parse(JSON.stringify(payload));
    return this.base64EncodeURL(strEncHeader) + "." + this.base64EncodeURL(strEncPayload);
  }

  private base64EncodeURL(data: any): string {
    return CryptoJS.enc.Base64.stringify(data)
    .replace(/=+$/, "")
      .replace(/\//g, "_")
        .replace(/\+/g, "-");
  }
}
