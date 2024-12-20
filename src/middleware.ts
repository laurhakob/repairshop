// ira mot serveri text middleware a grac
// import { withAuth } from "@kinde-oss/kinde-auth-nextjs/server";
// import { NextRequest } from "next/server";

// export default withAuth(
//   async function middleware(request: NextRequest) {
//     console.log(request);
//   },
//   {
//     isReturnToCurrentPage: true,
//   }
// );

// export const config = {
//   matcher: [
//     /*
//      * Match all request paths except for the ones starting with:
//      * - api (API routes)
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - auth
//      * - favicon.ico (favicon file)
//      * - robots.txt
//      * - images
//      * - login
//      * - homepage (represented with $ after beginning /)
//      */
//     "/((?!api|_next/static|_next/image|auth|favicon.ico|robots.txt|images|login|$).*)",
//   ],
// };



import { withAuth } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export default withAuth(
  async function middleware(request: NextRequest) {
    // Log specific properties for debugging
    console.log("Method:", request.method);
    console.log("URL:", request.url);
    console.log("Headers:", request.headers.get('user-agent'));

    // Continue processing the request
    return NextResponse.next();
  },
  {
    isReturnToCurrentPage: true,
  }
);

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|auth|favicon.ico|robots.txt|images|login|$).*)",
  ],
};
