import { MAIL_APP_PWD,MAIL_STMP_SERVER,MAIL_STMP_PORT } from "$env/static/private";


export async function GET({url}) {
    let data={MAIL_APP_PWD,MAIL_STMP_SERVER,MAIL_STMP_PORT}
    return new Response(JSON.stringify(data),{
        headers:{
            'content-type':'application/json'
        }
    })
}