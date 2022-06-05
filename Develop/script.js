/* find date start */
var today = new Date();
var day = today.getDay();
var dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Friday", "Saturday"];
var dayText = "Today is : " +dayList[day] + ".";
var currentDay = $("#currentDay")
.text(dayText);
var time = today.getHours();
console.log(time);
/* end of find date */


/* change section colors start */
var nine = document.getElementById("nine");
var ten = document.getElementById("ten");
var eleven = document.getElementById("eleven");
var twelve = document.getElementById("twelve");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");


if(time == 8)
{
    nine.classList.add("bg-success");
    ten.classList.add("bg-success");
    eleven.classList.add("bg-success");
    twelve.classList.add("bg-success");
    one.classList.add("bg-success");
    two.classList.add("bg-success");
    three.classList.add("bg-success");
    four.classList.add("bg-success");
    five.classList.add("bg-success");
    
}
else if (time == 9)
{
    nine.classList.remove("bg-success");
    nine.classList.add("bg-danger");

}
else if(time == 10)
{
    ten.classList.remove("bg-success");
    nine.classList.remove("bg-danger");
    nine.classList.add("bg-secondary");
    ten.classList.add("bg-danger");
}
else if(time == 11)
{
    eleven.classList.remove("bg-success");
    ten.classList.remove("bg-danger");
    ten.classList.add("bg-secondary");
    eleven.classList.add("bg-danger");
}
else if(time == 12)
{
    twelve.classList.remove("bg-success");
    eleven.classList.remove("bg-danger");
    eleven.classList.add("bg-secondary");
    twelve.classList.add("bg-danger");
}
else if(time == 13)
{
    one.classList.remove("bg-success");
    twelve.classList.remove("bg-danger");
    twelve.classList.add("bg-secondary");
    one.classList.add("bg-danger");
}
else if(time == 14)
{
    two.classList.remove("bg-success");
    one.classList.remove("bg-danger");
    one.classList.add("bg-secondary");
    two.classList.add("bg-danger");
}
else if(time == 15)
{
    three.classList.remove("bg-success");
    two.classList.remove("bg-danger");
    two.classList.add("bg-secondary");
    three.classList.add("bg-danger");
}
else if(time == 16)
{
    four.classList.remove("bg-success");
    three.classList.remove("bg-danger");
    three.classList.add("bg-secondary");
    four.classList.add("bg-danger");
}
else if(time == 17)
{
    five.classList.remove("bg-success");
    four.classList.remove("bg-danger");
    four.classList.add("bg-secondary");
    five.classList.add("bg-danger");
}
/* change section colors end */



