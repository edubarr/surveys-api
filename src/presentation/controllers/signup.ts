import { MissingParamError } from "../errors/missing-param-error";
import { HttpRequest, HttpResponse } from "../protocols/http";
import { badRequest } from "../helpers/https-helper";

export class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse {
    const requiredFields = [
      "name",
      "email",
      "password",
      "passwordConfirmation",
    ];

    for (const field of requiredFields) {
      if (httpRequest.body[field] == null) {
        return badRequest(new MissingParamError(field));
      }
    }

    return badRequest(new MissingParamError("default"));
  }
}
