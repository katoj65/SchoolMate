class Term{

async termRunning(){
const date =new Date();
const m=date.getUTCMonth();
let term='Term I';
if(m>5){
term="Term II";
}else if(m>8){
term='Term III';
}
 return await term;
}


















}
export default Term;