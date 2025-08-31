import { Http} from "@nativescript/core";
import { key } from "../database/connection";
import * as ApplicationSettings from '@nativescript/core/application-settings';
import Auth from "./authApi";

class Search{

async searchSubject(input){





}






async searchTopic(input){

}





async searchSubTopic(input){
return await Http.request({
url: 'https://ycmlubeulbufsfrvbmal.supabase.co/rest/v1/topic?select=*,subject(name)&name=ilike.%'+input+'%',
method: 'GET',
headers: {
'apikey':key,
'Authorization': 'Bearer'+key,
'Content-Type': 'application/json'
}
});
}









}

export default Search;