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
          $('#project-type').append("</select><p id='error-subtopic' class='error--inline'></p>");
          $('#project-type').addClass('margin');
        } else {
          $('#project-type').empty();
          $('#project-type').removeClass('margin');
        }
      }
    }
});

//validating the input

  var inputName;
  var inputQuestion;
  var inputTopicVal;
  var inputTopic;
  var inputSubtopicVal;
  var inputSubtopic;
  var inputEmail;
  var regEx;

  var errCount = 1;

  //VALIDATION ON SUBMIT
  function checkValidity() {
    $('#error-name, #error-email, #error-topic, #error-subtopic, #error-question').empty();
    inputName = document.getElementById('name');
    inputEmail = document.getElementById('email');
    inputQuestion = document.getElementById('question');
    inputTopicVal = checkValue("topic");
    inputTopic = document.getElementById('topic');
    inputSubtopic = document.getElementById('subtopic');
    if (inputSubtopic !== null){
      inputSubtopicVal = checkValue("subtopic");
    } else inputSubtopicVal = null;
          
    if (inputName.value == ""){
      $('#error-name').append("Please enter your name");
      $(inputName).addClass("invalid-input");
    } else {
      $(inputName).removeClass("invalid-input");
    }  
    
    //should be there if user want to submit empty field, before editing it
    if (inputEmail.value == ""){
      $('#error-email').append("Please write correct email");
      $(inputEmail).addClass("invalid-input");
    } else {
      $(inputEmail).removeClass("invalid-input");
    }
      
    if (inputTopicVal == ""){
      $('#error-topic').append("Please choose topic");
      $(inputTopic).addClass("invalid-input");
    } else {
      $(inputTopic).removeClass("invalid-input");
    }

    if (inputSubtopicVal == ""){
      $('#error-subtopic').append("Please choose subtopic");
      $(inputSubtopic).addClass("invalid-input");
    } else if (inputSubtopic == null) {
      //console.log("null here");
    } else {
      $(inputSubtopic).removeClass("invalid-input");
    }

    if (inputQuestion.value == ""){
      $('#error-question').append("Please write your question");
      $(inputQuestion).addClass("invalid-input");
    } else {
      $(inputQuestion).removeClass("invalid-input");
    }

    if (inputQuestion.value == "" || inputEmail.value == "" || inputName.value == "" || inputTopicVal == "" || inputSubtopicVal == ""){
      return errCount = 1;
    } else return errCount = 0;
  }

  //VALIDATION "ON" USER INPUT
  //Check if email is correct
  $('#email').blur(function() {
    regEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let inputId = document.getElementById('email');
    $(inputId).removeClass("invalid-input");
    $('#error-email').empty();
    if (regEx.test(inputId.value)) {
      errCount = 0;
    } else {
      errCount = 1;
      $('#error-email').append("Please write correct email");
      $(inputId).addClass("invalid-input");
    }
    return errCount; 
  });

  //check if name field is filled
  $('#name').blur(function() {
    let inputId = document.getElementById('name');
    $(inputId).removeClass("invalid-input");
    $('#error-name').empty();
    if (inputId.value != "") {
      errCount = 0;
    } else {
      errCount = 1;
      $('#error-name').append("Please enter your name");
      $(inputId).addClass("invalid-input");
    }
    return errCount; 
  });

  //check if topic is choosen
  $('#topic').blur(function() {
    let inputId = document.getElementById('topic');
    $(inputId).removeClass("invalid-input");
    $('#error-topic').empty();
    if (inputId.value != "") {
      errCount = 0;
    } else {
      errCount = 1;
      $('#error-topic').append("Please choose topic");
      $(inputId).addClass("invalid-input");
    }
    return errCount; 
  });

  //check if subtopic is choosen
  $('#topic').change(function() {
    $('#subtopic').blur(function() {
      let inputId = document.getElementById('subtopic');
      $(inputId).removeClass("invalid-input");
      $('#error-subtopic').empty();
      if (inputId.value != "") {
        errCount = 0;
      } else {
        errCount = 1;
        $('#error-subtopic').append("Please choose subtopic");
        $(inputId).addClass("invalid-input");
      }
      return errCount; 
    });
  });

  //check if question field is filled
  $('#question').blur(function() {
    let inputId = document.getElementById('question');
    $(inputId).removeClass("invalid-input");
    $('#error-question').empty();
    if (inputId.value != "") {
      errCount = 0;
    } else {
      errCount = 1;
      $('#error-question').append("Please write your question");
      $(inputId).addClass("invalid-input");
    }
    return errCount; 
  });

  //SUBMITTING A FORM
  $('#contactForm').submit(function(event) {
    checkValidity();

    if (errCount == 1) {
      return false;
    } else {
      console.log("Name: " + inputName.value);
      console.log("Email: " + inputEmail.value);
      console.log("Topic: " + inputTopicVal);
      console.log("Subtopic: " + inputSubtopicVal);
      console.log("Message: " + inputQuestion.value);
      event.preventDefault();
      alert("Your form was submitted correctly");
      location.reload();
    }
  });
}); 