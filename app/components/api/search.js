import { Http} from "@nativescript/core";
import { key } from "../database/connection";
import * as ApplicationSettings from '@nativescript/core/application-settings';
import Auth from "./authApi";

class Search{

async searchSubject(input){
return await Http.request({
url: 'https://ycmlubeulbufsfrvbmal.supabase.co/rest/v1/subject\
?select=*&name=ilike.*'+input+'*',
method: 'GET',
headers: {
'apikey':key,
'Authorization': 'Bearer'+key,
'Content-Type': 'application/json'
}
});

}






async searchTopic(input){
return await Http.request({
url: 'https://ycmlubeulbufsfrvbmal.supabase.co/rest/v1/topic\
?select=*,subject(name)&name=ilike.*'+input+'*',
method: 'GET',
headers: {
'apikey':key,
'Authorization': 'Bearer'+key,
'Content-Type': 'application/json'
}
});
}





async searchSubTopic(input){
return await Http.request({
url: 'https://ycmlubeulbufsfrvbmal.supabase.co/rest/v1/sub_topic\
?select=*,topic(name,subject(name))&name=ilike.*'+input+'*',
method: 'GET',
headers: {
'apikey':key,
'Authorization': 'Bearer'+key,
'Content-Type': 'application/json'
}
});
}




async postSearchLog(input){
const user=ApplicationSettings.getString('user',null);
const data=JSON.parse(user);
const email=data.email;
const auth=new Auth();
const token=await auth.userToken();
return await Http.request({
url:'https://ycmlubeulbufsfrvbmal.supabase.co/rest/v1/searchLog',
method:'POST',
headers: {
'Content-Type':'application/json',
'apikey': key,
'Authorization':'Bearer ' + token,
'Prefer':'return=representation'
},
content: JSON.stringify({
user_email:email,
search:input
})

});
}










async getSearchLog(){

}




















}

export default Search;