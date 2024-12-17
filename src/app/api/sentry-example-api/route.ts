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
