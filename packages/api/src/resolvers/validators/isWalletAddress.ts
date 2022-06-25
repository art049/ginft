import { registerDecorator, ValidationOptions } from "class-validator";
import { ethers } from "ethers";

export function IsWalletAddress(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: "isWalletAddress",
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any) {
          return typeof value === "string" && ethers.utils.isAddress(value);
        },
        defaultMessage: () => "Invalid wallet address",
      },
    });
  };
}
