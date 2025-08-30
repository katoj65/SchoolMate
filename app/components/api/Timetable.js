import { Http } from "@nativescript/core";
import { key } from "../database/connection";
import * as ApplicationSettings from '@nativescript/core/application-settings';

class Timetable{

async revisionTimetable(){
const user=ApplicationSettings.getString('user',null);
const data=JSON.parse(user);
const email=data.email;
return await Http.request({
url: 'https://ycmlubeulbufsfrvbmal.supabase.co/rest/v1/weekly_days?select=day,timetable(*)&timetable.user_email=eq.'+email+'&timetable.limit=1',
method: 'GET',
headers: {
'apikey':key,
'Authorization': 'Bearer'+key,
'Content-Type': 'application/json'
}

});
}











}

export default Timetable;