var zodSign = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces", " "];

var horoscope = ["take a different route home today, you may be surprised with what you find!",
    "today holds a moist mood. Drink water and stay out of the sun",
    "the next few days will either hold the beginnings to your greatest accomplishment, or your death",
    "listen to your emotions, and stay smooth",
    "the ocean holds the answers, go surfing if you can",
    "climb a tree today, and you may make a new friend at the top!",
    "stay inside today, or you may see something you were never meant to see",
    "be nice to someone you don't know. You might just get a gift a little down the road",
    "make a playlist of your favorite songs, and take a hike. You will feel and unusual sense of euphoria",
    "listen to the words of a wise elderly woman, and things will become more clear",
    "the universe is aligning for you, just wait",
    "don't think twice about your next struggle, go with your gut!",
    "this date does not exist :(" ];

var images = ["images/aries.jpg" , "images/taurus.jpg" , "images/gemini.jpg" , "images/cancer.jpg" , "images/leo.jpg" ,  "images/virgo.jpg" , "images/libra.jpg" , "images/scorpio.jpg"  , "images/sagittarius.jpg" , "images/capricorn.jpg" , "images/aquarius.jpg" , "images/pisces.jpg"];

function onSubmit(){

    document.getElementById("birthday").innerHTML="";
    document.getElementById("sign").innerHTML="";
    document.getElementById("horo").innerHTML="";
    document.getElementById("images").src="";


    var name = document.getElementById("name").value;
    var month = document.getElementById("month").value;
    var day = document.getElementById("day").value;


    var now = new Date();

    if(birthday(month,day,now)==true){
        document.getElementById("birthday").innerHTML="Happy happy birthday you grandpa! Tick the biggest thing off on your bucket list, it will lead to the best experience of your life";
        return true;
    }

    var sign = determineSign(month,day);

    document.getElementById("sign").innerHTML=zodSign[sign];
    document.getElementById("horo").innerHTML="Hi " + name + ", " + horoscope[sign];
    document.getElementById("images").src=images[sign];

    console.log(name);
    console.log(month);
    console.log(day);

}


function determineSign(month,day){
    //bad dates
    if(month==2 && day>28){
        return 12;
    }
    if(month==4 && day==31){
        return 12;
    }
    if(month==6 && day==31){
        return 12;
    }
    if(month==9 && day==31){
        return 12;
    }
    if(month==11 && day==31){
        return 12;
    }

    //good dates
    if(month==3 && day>=21){
        return 0;
    }
    if(month==4 && day<=19){
        return 0;
    }
    if(month==4 && day>=20 ){
        return 1;
    }
    if(month==5 && day<= 20){
        return 1;
    }
    if(month==5 && day>= 21){
        return 2;
    }
    if(month==6 && day<= 20){
        return 2;
    }
    if(month==6 && day>=21){
        return 3;
    }
    if(month==7 && day<=22){
        return 3;
    }
    if(month==7 && day>=23){
        return 4;
    }
    if(month==8 && day<=22){
        return 4;
    }
    if(month==8 && day>=23){
        return 5;
    }
    if(month==9 && day<=22){
        return 5;
    }
    if(month==9 && day>=23){
        return 6;
    }
    if(month==10 && day<=22){
        return 6;
    }
    if(month==10 && day>=23){
        return 7;
    }
    if(month==11 && day<=21){
        return 7;
    }
    if(month==11 && day>=22){
        return 8;
    }
    if(month==12 && day<=21){
        return 8;
    }
    if(month==12 && day>=22){
        return 9;
    }
    if(month==1 && day<=19){
        return 9;
    }
    if(month==1 && day>=20){
        return 10;
    }
    if(month==2 && day<=18){
        return 10;
    }
    if(month==2 && day>=19){
        return 11;
    }
    if(month==3 && day<=20){
        return 11;
    }
    if(month==2 && day>=28){
        return 12;
    }
}

function birthday(month,day,now){
    if(month==now.getMonth()+1 && day==now.getDate()){
        return true;
    }else{
        return false;
    }
}