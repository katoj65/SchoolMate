import { Http, } from "@nativescript/core";
import { key } from './database/connection.js';
class subjectApi{





async get(){
const user=ApplicationSettings.getString('user',null);
const data=JSON.parse(user);
const email=data.email;
return await Http.request({
url: 'https://ycmlubeulbufsfrvbmal.supabase.co/rest/v1/chat_question?select=*&user_email=eq.'+email,
method: 'GET',
headers: {
'apikey':key,
'Authorization': 'Bearer'+key,
'Content-Type': 'application/json'
}


});





}











}

export default subjectApi;