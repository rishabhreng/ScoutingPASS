var config_data = `
{
  "title":"Scouting PASS 2022",
  "page_title":"Rapid React",
  "elements":{
    "prematch": {
      "Scouter Initials": {
        "code":"s",
        "type":"scouter",
        "size":5,
        "maxSize":5,
        "required":"true"
      },
      "Event":{
        "code":"e",
        "type":"event",
        "defaultValue":"2022txirv",
        "required":"true",
        "disabled":"true"
      },
      "Match Level":{
        "code":"l",
        "type":"level",
        "choices":{
          "qm":"Quals<br>",
          "ef":"Eighth-Final<br>",
          "qf":"Quarter-Final<br>",
          "sf":"Semi-Final<br>",
          "f":"Final"
        },
        "defaultValue":"qm",
        "required":"true"
      },
      "Match #":{
        "code":"m",
        "type":"match",
        "min":1,
        "max":100,
        "required":"true"
      },
     "Robot": {
        "code":"r",
        "type":"robot",
        "choices":{
          "r1":"Red-1",
          "b1":"Blue-1<br>",
          "r2":"Red-2",
          "b2":"Blue-2<br>",
          "r3":"Red-3",
          "b3":"Blue-3"
        },
        "required":"true"
      },
      "Team #": {
        "code":"t",
        "type":"team",
        "min":1,
        "max":99999
      },
      "Auto Start Position": {
        "code":"as",
        "title": "Auto Start Position",
        "type":"field_image",
        "filename":"2022/field_image.png"
      },
      "Starting Position": {
          "code":"sp",
          "title":"Starting Position",
          "type":"radio",
          "choices":{
              "1":"1",
              "2":"2",
              "3":"3",
              "4":"4"
          },
          "defaultValue":"1"
      },
      "Cargo Preload": {
          "code":"cp",
          "title":"Cargo Preloaded?",
          "type":"bool"
      }
    },
    "auton": {
      "Taxi off Tarmac": {
        "code":"at",
        "title": "Taxi off Tarmac?",
        "type":"bool"
      },
      "Cargo Acquired": {
          "code":"aca",
          "title":"Cargo Acquired",
          "type":"counter"
      },
      "Upper Cargo Scored": {
        "code":"au",
        "title": "Upper Cargo Scored",
        "type":"counter"
      },
      "Lower Cargo Scored": {
        "code":"al",
        "title": "Lower Cargo Scored",
        "type":"counter"
      },
      "Cargo Dropped": {
        "code":"acd",
        "title": "Cargo Dropped",
        "type":"counter"
      }
    },
    "teleop": {
        "Cargo Acquired": {
            "code":"tca",
            "title":"Cargo Acquired",
            "type":"counter"
        },
      "Upper Cargo Scored": {
        "code":"tu",
        "title": "Upper Cargo Scored",
        "type":"counter"
      },
      "Lower Cargo Scored": {
        "code":"tl",
        "title": "Lower Cargo Scored",
        "type":"counter"
      },
      "Cargo Dropped": {
        "code":"tcd",
        "title": "Cargo Dropped",
        "type":"counter"
      },
      "Defense Performance": {
          "code":"dp",
          "title":"Defense Performance",
          "type":"radio",
          "choices": {
              "1":"Not effective<br>",
              "2":"Average<br>",
              "3":"Very Effective<br>",
              "0":"Didn't Defend<br>"
          },
          "defaultValue":"0"
      },
      "Defense Evasion": {
        "code":"de",
        "title":"Defense Evasion",
        "type":"radio",
        "choices": {
            "1":"Not Good<br>",
            "2":"Average<br>",
            "3":"Very Good<br>",
            "0":"Didn't Encounter Defense<br>"
        },
        "defaultValue":"0"
    }
    },
    "endgame": {
      "Climb Attempted": {
          "code":"ca",
          "title":"Climb Attempted?",
          "type":"bool"
      },
      "Climb Level": {
        "code":"cl",
        "title": "Climb Level",
        "type":"radio",
        "choices":{
          "1":"Low<br>",
          "2":"Mid<br>",
          "3":"High<br>",
          "4":"Traversal<br>",
          "0":"Failed<br>",
          "-1":"Not attempted"
        },
        "defaultValue":"-1"
      }
    },
    "postmatch": {
      "Foul": {
        "code":"f",
        "title": "Had fouls?",
        "type":"bool"
      },
      "Technical Foul": {
        "code":"tf",
        "title": "Had technical fouls?",
        "type":"bool"
      },
      "Comments": {
        "code":"co",
        "title": "Comments (driver ability/style; strategic/problem solving; type of fouls drawn: pinning; damage to other robots, inside other robot's frame perimeter; consistent shooting from a few spots; anything else notable",
        "type":"text",
        "size":15,
        "maxSize":400
      }
      
    }
  }
}
`
