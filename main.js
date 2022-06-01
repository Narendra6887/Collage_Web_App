var SpeechRecognition = window.webkitSpeechRecognition;
var img_id = "" ;
var recognition = new SpeechRecognition()

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event) 
{
    console.log(event);

    var Content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);

    if(Content=="selfie"){
        console.log("taking selfie---")
        speak()
    }
}

function speak(){
    var synth = window.speechSynthesis;

    speak_data = "Taking your selfie in 2 seconds";
    
    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function(){
        img_id = "selfie1";
        take_snapshot();
    } , 2000)

    setTimeout(function(){
        img_id = "selfie2";
        take_snapshot();
        speak_data = "Taking your next selfie in 2 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    } , 4000)

    setTimeout(function(){
        img_id = "selfie3";
        take_snapshot();
        speak_data = "Taking your next selfie in 2 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    } , 6000)
}

Webcam.set({
    width:340,
    height:250,
    image_format: 'png',
    png_quality: 90
})

camera = document.getElementById("camera");

function take_snapshot(){
    console.log(img_id); 
    Webcam.snap(function(data_uri)
    { 
        if(img_id=="selfie1"){ 
            document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_uri+'"/>'; } 
        if(img_id=="selfie2"){ 
            document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+data_uri+'"/>'; } 
        if(img_id=="selfie3"){ 
            document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+data_uri+'"/>'; } }); 
    }

function save()
{
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}