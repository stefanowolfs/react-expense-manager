export class NetworkException extends Error {
  constructor(message = "Network Exception") {
    super(message);
    this.message = message;
  }
}
