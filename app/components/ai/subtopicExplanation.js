import { ai_key } from "./key";
import { Http } from "@nativescript/core";
class subtopicExplanation{

async explanation(subtopic){
return await Http.request({
url: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent',
method: 'POST',
headers: {
'X-goog-api-key': ai_key,
'Content-Type': 'application/json'
},
content: JSON.stringify({
contents: [
{
parts : subtopic
}
],

generationConfig:{
"responseMimeType": "application/json",
"responseSchema": {
"type": "object",
"properties": {
"topic": { "type": "string" },
"definition": { "type": "string" },
"examples": {
"type": "array",
"items": { "type": "string" }
}
},
"required": ["topic", "definition", "examples"]

}
}



})
});

}















}

export default subtopicExplanation;