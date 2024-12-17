// es chisht tarberaky, vor error chta, ayl gri API call successfuly

import * as Sentry from "@sentry/nextjs";

export const dynamic = "force-dynamic";

export function GET() {
  try {
    // Simulate a successful API response
    return new Response("API is working correctly!", { status: 200 });
  } catch (error) {
    // Log unexpected errors to Sentry
    console.error("API Error: ", error);
    Sentry.captureException(error);

    // Return a 500 response for unexpected errors
    return new Response("Internal Server Error", { status: 500 });
  }
}

// es en tarberaky vor error ta sentryn

// import * as Sentry from "@sentry/nextjs";

// export const dynamic = "force-dynamic";

// export function GET() {
//   try {
//     // Simulate an error for testing purposes
//     throw new Error("Simulated error for testing Sentry integration");

//     // Return a success response (this won't be reached if the error is thrown)
//     return new Response("API is working correctly!", { status: 200 });
//   } catch (error) {
//     // Log the error to Sentry
//     console.error("API Error: ", error);
//     Sentry.captureException(error);

//     // Return a 500 response for unexpected errors
//     return new Response("Internal Server Error", { status: 500 });
//   }
// }
