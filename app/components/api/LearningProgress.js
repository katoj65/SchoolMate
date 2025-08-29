import * as ApplicationSettings from '@nativescript/core/application-settings';
import { key } from '../database/connection';
import { Http} from "@nativescript/core";
import Auth from './authApi';

class LearningProgress{

async subTopicAccess(id){
const user=ApplicationSettings.getString('user',null);
const data=JSON.parse(user);
const email=data.email;

const auth=new Auth();
const token = await auth.newToken();

return await Http.request({
url: 'https://ycmlubeulbufsfrvbmal.supabase.co/rest/v1/subtopic_access_log',
method: 'POST',
headers: {
'Content-Type': 'application/json',
'apikey': key,
'Authorization': 'Bearer ' + token
},
content: JSON.stringify({
user_email: email,
sub_topic_id: id
})

});

}

















}


export default LearningProgress;