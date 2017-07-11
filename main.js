// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
// ( function(){
// //   // Select the first element from the array
//   let first = formData[ 0 ];
// //   // Log the first object
//   console.log( first );
// //   // Log the string "First Name"
//   console.log( "formData",formData );
// } )();


// -------- Your Code Goes Below this Line --------


  for (x = 0; x < formData.length; x++){
    let fields = document.getElementById("fields");
    let input = document.createElement("input");


    let select = document.createElement("select");
    if (formData[x]["type"] === "select") {


      for (i = 0; i < formData[x].options.length; i++) {

        let choices = document.createElement("option");
        let text = document.createTextNode(formData[x].options[i]["label"]);
        fields.appendChild(select);
        select.appendChild(choices);
          choices.setAttribute("value", formData[x].options[i]["value"]);
          choices.text = formData[x].options[i]["label"];
      }
    }
    if (x === 4) {
      x=5
    }

    input.setAttribute("type", formData[x]["type"] );
    input.setAttribute("placeholder", formData[x]["label"]);
    input.setAttribute("id", formData[x]["id"]);
    input.setAttribute("icon", formData[x]["icon"]);
    input.setAttribute("option", formData[x]["options"]);


    fields.appendChild(input);
  }
