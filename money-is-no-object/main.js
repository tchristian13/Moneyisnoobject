// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘
const isAdmin = (user) => {
    firstName:  'Tia'
    lastName:   'Williams'
    userRole:   'admin'     

    for(let i in user){
        if(i === 'userRole' && user[i] === 'ADMIN'){
            return true;
        }
    }
    return false;
}

 function getEmail(user){

    const firstName = user.firstName;
    const lastName = user.lastname;
const email = firstName(1) + lastName + ".prsvr@gmail.com";
return email
 }


 const user = { 
        firstName: 'Jason',
        lastName:  'Doty'
    };

console.log (email)
const email = getEmail(user);

console.log(email)

    

 function getPlaylistLength(playlist) {
        name: 'my jams',
        songs; ['Vienna', 'Hey Ya!' ,'Not like Us',]
        return playlist.length
            
 }

 function getPlaylistLength(playlist) {
    name: 'empty playlist',
    songs; []
    return playlist.length
        
}


function getHardestHomework(homework) {
     if (!homeworks || homeworks.length === 0) {
     return null;
 }
 let hardestHomework = null;
 let lowestAverage = Infinity;

 for (const homework of homeworks){
     const {name, scores} = homework;
     const averageScore = scores.reduce((sum, score) => sum + 
    score , 0) /scores.length;

    if (averageScore < lowestAverage){
        lowestAverage = averageScore;
        hardestHomework = name;
    }
 }
 return hardestHomework;
}


getHardestHomework([
    { name: 'homework 1', averageScore: 99 }
    { name: 'homework 2', averageScore: 1 }
]) return averageScore <= averageScore


getHardestHomework([
    { name: 'hip-hip-array', averageScore: 12 },
    { name: 'wait-i-object', averageScore: 200 },
    { name: 'objective-reasoning', averageScore: 25 }
])
=> 'hip-hip-array'


    
 



// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};