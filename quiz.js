function result(){
    var score=0;
    var numOfQ=5;
    var ans= ['c','a','d','b','d'];


    var q1=document.forms['quiz']['select-1'].value; //can access multiple values,here quiz and qustions(select-n)
    var q2=document.forms['quiz']['select-2'].value;
    var q3=document.forms['quiz']['select-3'].value;
    var q4=document.forms['quiz']['select-4'].value;
    var q5=document.forms['quiz']['select-5'].value;

    for(var i=1;i<=numOfQ;i++){
        if(eval('q'+i)!=''){
            
        }
        else if(eval('q'+i)==''){
            alert("You Have Missed the Question Number:"+i);       
        }
    }

    for(var i=1;i<=numOfQ;i++){
        if(eval('q'+i)==ans[i-1]){
            score++;
        }
    }

    var res=document.getElementById('score');
    res.innerHTML="<h2>You have Scored "+score+" marks out of "+numOfQ+"</h2>";
    alert("You Scored: "+score);
    return false;
}