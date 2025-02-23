// import { MAILJET_API_KEY,MAILJET_SECRET_KEY,RECEIVER_EMAIL} from "$env/static/private";
// import MailInquiryTemplate from "../Components/MailInquiryTemplate.svelte";
// import { render } from "svelte-email";
// import Mailjet from "node-mailjet";

// export async function GET({url}) {
//     let data={message:"this is a test mail"}
//     return new Response(JSON.stringify(data),{
//         headers:{
//             'content-type':'application/json'
//         }
//     })
// }

// export async function POST({request}) {
//     const {customerName,customerEmail,title,customerMessage} = await request.json();

//     let retObj={status:"NG",message:"error"};

//     try {
        
//         if (!customerName) {
//             retObj.message="名前が入力されていません";
//             return new Response(JSON.stringify(retObj)) 
//         }

//         if (!customerEmail) {
//             retObj.message="Emailが入力されていません";
//             return new Response(JSON.stringify(retObj)) 
//         }
//         if (!title) {
//             retObj.message="Titleが入力されていません";
//             return new Response(JSON.stringify(retObj)) 
//         }   
//         if (!customerMessage) {
//             retObj.message="messageが入力されていません";
//             return new Response(JSON.stringify(retObj)) 
//         }   
//         if (title.length>50) {
//             retObj.message="Titleは50文字以内で入力してください";
//             return new Response(JSON.stringify(retObj)) 
//         }     
//         if (customerMessage.length>200) {
//             retObj.message="Messageは200文字以内で入力してください";
//             return new Response(JSON.stringify(retObj)) 
//         }     

//         // retObj.status="OK";
//         // return new Response(JSON.stringify(retObj)) 
        
//         const mailjetClient = new Mailjet({
//             apiKey: MAILJET_API_KEY,
//             apiSecret: MAILJET_SECRET_KEY,
//             config:{
//                 host: 'api.mailjet.com',
//                 version: 'v3.1',
//                 output: 'json',
//             }
//         });

//         // const transporter=nodemailer.createTransport({
//         //     // @ts-ignore
//         //     host:MAIL_STMP_SERVER
//         //    ,port:MAIL_STMP_PORT
//         //    ,secure:false
//         //    ,auth:{
//         //        user:MAIL_ACCOUNT,
//         //        pass:MAIL_APP_PWD
//         //    }})
   
//          let emailHtml=""
//          emailHtml = render({
//             // @ts-ignore
//             template:MailInquiryTemplate,
//             props:{"customerName":customerName,"customerEmail":customerEmail,"title":title,"customerMessage":customerMessage}
//         })

//         const request =await mailjetClient.post('send', { version: 'v3.1' }).request({
//           Messages: [
//             {
//                 From: {
//                     Email: "shen020316@gmail.com",
//                     Name: "問い合わせいた",
//                 },
//               To: [
//                 {
//                   Email: RECEIVER_EMAIL,
//                   Name: "問い合わせメールボックス",
//                 }
//               ],
//               Subject: title,
//               TextPart: customerMessage,
//               HTMLPart: emailHtml
//             }
//           ]
//         })

//         retObj.status="OK"       
//     } catch (error) {
//         retObj.message="send mail system error!"
//     }
//     return new Response(JSON.stringify(retObj),{
//         headers:{
//             'content-type':'application/json'
//         }
//     })
// }