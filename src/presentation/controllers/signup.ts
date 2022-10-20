import { MissingParamError } from "../errors/missing-param-error";
import { HttpRequest, HttpResponse } from "../protocols/http";
import { badRequest } from "../helpers/https-helper";

export class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse {
    if (httpRequest.body.name == null) {
      return badRequest(new MissingParamError("name"));
    }
    if (httpRequest.body.email == null) {
      return badRequest(new MissingParamError("email"));
    } else {
      return badRequest(new MissingParamError("default"));
    }
  }
}
