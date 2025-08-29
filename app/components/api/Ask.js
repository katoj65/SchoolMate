
import { Http, } from "@nativescript/core";
import { key } from '../database/connection';
import * as ApplicationSettings from '@nativescript/core/application-settings';
import Auth from './authApi';

class Ask{

async postQuestion(question){
const user=ApplicationSettings.getString('user',null);
const data=JSON.parse(user);
const email=data.email;
const auth=new Auth();
const token = await auth.newToken();

return await Http.request({
url: 'https://ycmlubeulbufsfrvbmal.supabase.co/rest/v1/chat_question',
method: 'POST',
headers:{
'Content-Type': 'application/json',
'apikey': key,
'Authorization': 'Bearer ' + token,
'Prefer': 'return=representation'
},

content: JSON.stringify({
user_email: email,
message: question
})
});








}



async getUserChat(){
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

export default Ask;