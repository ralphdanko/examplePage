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

    // retreive answers from user select
    function checkValue () {
        let e = document.getElementById("topic");
        strUser = e.options[e.selectedIndex].value;
        return strUser;
    }

    //draw subtopics
    $( "#topic" ).change(function() {
        checkValue();
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
                    select += "<select name='" + placeholder + "' id='project-type'>"
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
});



 