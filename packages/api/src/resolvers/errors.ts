import { MiddlewareFn } from "type-graphql";

export const INVALID_WEB3TOKEN = "INVALID_WEB3TOKEN";

export const ErrorInterceptor: MiddlewareFn<any> = async (
  { context, info },
  next
) => {
  try {
    return await next();
  } catch (err) {
    console.error(err);
    throw err;
  }
};
