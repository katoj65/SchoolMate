import { Http, } from "@nativescript/core";
import { key } from "../database/connection";

class classApi{
async userClass(user_class){
return await Http.request({
url: 'https://ycmlubeulbufsfrvbmal.supabase.co/rest/v1/class?select=*,subject(id,name,topic(name))&name=eq.'+user_class,
method: 'GET',
headers: {
'apikey':key,
'Authorization': 'Bearer'+key,
'Content-Type': 'application/json'
}
});

}













}
export default classApi;