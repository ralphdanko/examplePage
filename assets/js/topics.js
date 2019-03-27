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
          select += "<select name='" + placeholder + "' id='project-type'>" + defaultOption;
          //add subitems(options) within select
          $('#subtopic').append(select);
          $('#project-type').append(options);
          $('#subtopic').append("</select>");
        } else {
          $('#subtopic').empty();
        }
      }
    }
});

//validating the input

  var inputName;
  var inputMessage;
  var inputTopic;
  var inputProjectType;
  var inputEmail;
  var regEx;

  var errCount;

  function checkValidity() {
    $('#error').empty();
    inputName = document.getElementById('name').value;
    inputEmail = document.getElementById('email').value;
    inputMessage = document.getElementById('message').value;
    inputTopic = checkValue("topic");
    inputProjectType = document.getElementById('project-type');
    if (inputProjectType !== null){
      inputProjectType = checkValue("project-type");
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

    if (inputProjectType == ""){
      $('#error').append("<p>subtopic empty</p>");
    } else if (inputProjectType == null) {
      //console.log("null here");
    } else {
     // console.log(inputProjectType);
    }

    if (inputMessage == ""){
      $('#error').append("<p>textarea empty</p>");
    } else {
     // console.log(inputMessage);
    }
    
    if (inputMessage == "" || inputEmail == "" || inputName == "" || inputTopic == "" || inputProjectType == ""){
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
      //event.preventDefault();
      return false;
    } else {
      console.log("Name: " + inputName);
      console.log("Email: " + inputEmail);
      console.log("Topic: " + inputTopic);
      console.log("Project Type: " + inputProjectType);
      console.log("Message: " + inputMessage);
      alert("Your form is submitted correctly");
      event.preventDefault();
      location.reload();
    }
  });
}); 