import {handleAuth} from "@kinde-oss/kinde-auth-nextjs/server";
export const GET = handleAuth();

//chatgbt

// import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";

// export const GET = handleAuth();

// export const POST = async (req: Request) => {
//   return new Response("POST method is not supported for this endpoint", {
//     status: 405, // Method Not Allowed
//     headers: { "Allow": "GET" },
//   });
// };
