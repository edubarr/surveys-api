import { httpRequest, httpResponse } from "../protocols/http";

export class SignUpController {
  handle(httpRequest: httpRequest): httpResponse {
    if (httpRequest.body.name == null) {
      return {
        statusCode: 400,
        body: new Error("Missing param: name"),
      };
    }
    if (httpRequest.body.email == null) {
      return {
        statusCode: 400,
        body: new Error("Missing param: email"),
      };
    } else {
      return {
        statusCode: 0,
        body: new Error("default return"),
      };
    }
  }
}
