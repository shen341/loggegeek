import { MAILJET_API_KEY,MAILJET_SECRET_KEY,RECEIVER_EMAIL} from "$env/static/private";

export const GET = (() => {
    // return new Response(String(Math.random()));
// JSON.stringify(data)

return new Response(JSON.stringify({"MAILJET_API_KEY":MAILJET_API_KEY}));

  })