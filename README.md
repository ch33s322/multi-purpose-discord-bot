# multi-purpose-discord-bot
the discord bot ive been working on for fun its kinda neat

# i just pasted the wiki into the read me cause I'm lazy


# Welcome to the discord bot wiki!
_This is a guide for people i've invited to work on this project who may not have programing experience_

# Basic Stuff
im hoping that you know basic stuff like if, else, for, while, do while, and switch statements because we might not use all of them but well use most of them. If you don't know here's a crash course:
## If
if statements typically look like this in javascript
``` javascript
if(condition)
{
  //code here if condition is true
} 
```

## else
else comes after if statements like this
```javascript
if(condition)
{
  //code if true
}
else
{
  //code if false
} 
```
## for
for statements are for when you want to do something many times and you know how many times you want to do it
```javascript
for(x=1; x <=10; x++)
{
   //code repeated 10 times because x goes from 1 - 10 and loop happens when x <= 10
}
```
## while and do while
these are very similar however have 1 major difference. do while is for when you know you need to do something at least once. while you may not even do at all. they look like this
```javascript
do  //do it the first time
{
 //code that you might want to repeat
} 
while(condition);
```
and this
```javascript
while(condition)
{
   //if condition is true run code here
}
```
## switch statements
these are intimidating at first but they aren't that bad and are a really powerful tool
they operate a little different too. they use a variable that changes and the variable points to the code you want to execute.
```javascript
switch(variable)//lets just say its an number for now
{
 case 1: //if variable = 1 then do this
 //code for 1
break; //break statements stop the rest of the switch statement from executing
case 2: //if variable = 2 then do this
//code for 2
break;
default: //this is what would happen if variable doesn't equal 1, 2 or anything else you made a case for
//default code sometimes good for an error message
break;
}
```
# bot specific stuff
## messages
```javascript
Bot.on("message", function(message) {
    console.log(message.content + " " + message.author.id + " " + message.author.username);
});
```
the above code might look scary but its actually quite simple
Bot.on("message", function(message) {

});
bot.on is asking for an event:
‘"message", function(message)’ is what we specify
