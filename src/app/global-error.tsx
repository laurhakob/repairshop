"use client"; // Error boundaries must be Client Components
import * as Sentry from "@sentry/nextjs";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  // Capture the error in Sentry
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    // global-error must include html and body tags
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}

// "use client";

// import * as Sentry from "@sentry/nextjs";
// import NextError from "next/error";
// import { useEffect } from "react";

// export default function GlobalError({ error }: { error: Error & { digest?: string } }) {
//   useEffect(() => {
//     Sentry.captureException(error);
//   }, [error]);

//   return (
//     <html>
//       <body>
//         {/* `NextError` is the default Next.js error page component. Its type
//         definition requires a `statusCode` prop. However, since the App Router
//         does not expose status codes for errors, we simply pass 0 to render a
//         generic error message. */}
//         <NextError statusCode={0} />
//       </body>
//     </html>
//   );
// }
