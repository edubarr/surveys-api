import {
  HttpRequest,
  HttpResponse,
  Controller,
  EmailValidator,
} from "../protocols";
import { MissingParamError, InvalidParamError } from "../errors";
import { badRequest, serverError } from "../helpers/https-helper";

export class SignUpController implements Controller {
  private readonly emailValidator: EmailValidator;

  constructor(emailValidator: EmailValidator) {
    this.emailValidator = emailValidator;
  }

  handle(httpRequest: HttpRequest): HttpResponse {
    try {
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
      if (httpRequest.body.password !== httpRequest.body.passwordConfirmation) {
        return badRequest(new InvalidParamError("passwordConfirmation"));
      }

      if (!this.emailValidator.isValid(httpRequest.body.email)) {
        return badRequest(new InvalidParamError("email"));
      }
    } catch (error) {
      return serverError();
    }
    return serverError();
  }
}
