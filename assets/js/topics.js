$(window).on('load', function() {
  var topics = [
        {
          "label" : "general question",
          "value" : "general",
          "subtopic": null
        },
        {
          "label" : "business cooperation",
          "value" : "cooperation",
          "subtopic": null
        },
        {
          "label" : "evaluation",
          "value" : "evaluation",
          "subtopic": {
            "inputType" : "select",
            "placeholder" : "project type",
            "options" : [{
              "label" : "landing page",
              "value" : "landing-page"
            },{
              "label" : "backend service",
              "value" : "backend-service"
            },{
              "label" : "mobile app",
              "value" : "mobile-app"
            }]
          }
        },
        {
          "label" : "bug report",
          "value" : "bug",    
          "subtopic": null
        }
      ];

  var strUser = "";
  var test;

  drawTopics();

  //draw topics
  function drawTopics () {
    let topicsLength = topics.length;
    let options = "";
    let i;
        
    for (i = 0; i < topicsLength; i++) {
      let label = topics[i].label;
      let value = topics[i].value;
      options += "<option value='" + value + "'>" + label + "</option>";
    }
    //add items(options) within select
    $('#topic').append(options);
  }

  // retrieve answers from user select
  function checkValue (selectId) {
    let e = document.getElementById(selectId);
    strUser = e.options[e.selectedIndex].value;
    return strUser;
  }

  //draw subtopics
  $("#topic").change(function() {
    checkValue("topic");
    let topicsLength = topics.length;
    let i;

    for (i = 0; i < topicsLength; i++) {
      let label = topics[i].label;
      let value = topics[i].value;
            
      if (strUser == value) {
        let subtopic = topics[i].subtopic;
        if (subtopic != null) {
          let select = "";
          let options = "";
          let placeholder = topics[i].subtopic.placeholder;
          let subtopicsLength = topics[i].subtopic.options.length;
          for (j = 0; j < subtopicsLength; j++) {
            let sublabel = topics[i].subtopic.options[j].label;
            let subvalue = topics[i].subtopic.options[j].value;;
            options += "<option value='" + subvalue + "'>" + sublabel + "</option>";          
          }

          defaultOption = "<option value='' selected='selected' hidden='hidden'>Choose Subtopic</option>"
          select += "<select name='subtopic' id='subtopic'>" + defaultOption;
          //add subitems(options) within select
          $('#project-type').append(select);
          $('#subtopic').append(options);
          $('#project-type').append("</select>");
        } else {
          $('#project-type').empty();
        }
      }
    }
});

//validating the input

  var inputName;
  var inputQuestion;
  var inputTopic;
  var inputSubtopic;
  var inputEmail;
  var regEx;

  var errCount;

  function checkValidity() {
    $('#error').empty();
    inputName = document.getElementById('name').value;
    inputEmail = document.getElementById('email').value;
    inputQuestion = document.getElementById('question').value;
    inputTopic = checkValue("topic");
    inputSubtopic = document.getElementById('subtopic');
    if (inputSubtopic !== null){
      inputSubtopic = checkValue("subtopic");
    }
          
    if (inputName == ""){
      $('#error').append("<p>name empty</p>");
    } else {
      //console.log(inputName);
    }  
    
    //should be there if user want to submit empty field, before editing it
    if (inputEmail == ""){
      $('#error').append("<p>email empty</p>");
    } else {
      //console.log(inputEmail);
    }
      
    if (inputTopic == ""){
      $('#error').append("<p>topic empty</p>");
    } else {
     // console.log(inputTopic);
    }

    if (inputSubtopic == ""){
      $('#error').append("<p>subtopic empty</p>");
    } else if (inputSubtopic == null) {
      //console.log("null here");
    } else {
      console.log(inputSubtopic);
    }

    if (inputQuestion == ""){
      $('#error').append("<p>textarea empty</p>");
    } else {
     // console.log(inputQuestion);
    }
    
    if (inputQuestion == "" || inputEmail == "" || inputName == "" || inputTopic == "" || inputSubtopic == ""){
      return errCount = 1;
    } else return errCount = 0;
  }

  //checking if email is correct
  $('#email').change(function() {
    regEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    inputEmail = document.getElementById('email').value;
    $('#error2').empty();
    //console.log(inputEmail);
    if (regEx.test(inputEmail)) {
      errCount = 0;
    } else {
      errCount = 1;
      $('#error2').append("<p>email incorrect</p>");
    }
    return errCount; 
  });

  //submiting a form & validating email
  $('#contactForm').submit(function(event) {
    $('#error').empty();
    checkValidity();

    if (errCount == 1) {
      return false;
    } else {
      console.log("Name: " + inputName);
      console.log("Email: " + inputEmail);
      console.log("Topic: " + inputTopic);
      console.log("Subtopic: " + inputSubtopic);
      console.log("Message: " + inputQuestion);
      alert("Your form was submitted correctly");
      event.preventDefault();
      location.reload();
    }
  });
}); 