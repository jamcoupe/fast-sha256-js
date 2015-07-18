


export declare class SHA256 {
  static HASH(Uint8Array): Uint8Array;
  static HMAC(key: Uint8Array, message: Uint8Array): Uint8Array;
  static PBKDF2(password: Uint8Array, salt: Uint8Array, rounds: number, dkLen: number): Uint8Array;
}
