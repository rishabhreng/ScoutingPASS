var config_data = `
{
  "title":"Scouting PASS 2022",
  "page_title":"Rapid React",
  "elements":{
    "prematch": {
      "Scouter Last Name (Required, if unclear put first name)": {
        "code":"s",
        "type":"scouter",
        "size":5,
        "maxSize":50,
        "required":"true"
      },
      "Event":{
        "code":"e",
        "type":"event",
        "defaultValue":"2022txcmp2",
        "required":"true",
        "disabled":"true"
      },
      "Match Level (Required)":{
        "code":"l",
        "type":"level",
        "choices":{
          "qm":"Quals<br>",
          "qf":"Quarter-Final<br>",
          "sf":"Semi-Final<br>",
          "f":"Final"
        },
        "defaultValue":"qm",
        "required":"true"
      },
      "Match # (Required)":{
        "code":"m",
        "type":"match",
        "min":1,
        "max":100,
        "required":"true"
      },
     "Robot (Required)": {
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
      "Team # (Required)": {
        "code":"t",                                    
        "type":"team",
        "min":1,
        "max":9999,
        "required":"true"
      },
      "Auto Start Position Map (Required)<br>Just press a random location.": {
        "code":"as",
        "title": "Auto Start Position",
        "type":"field_image",
        "filename":"2022/field_image.png"
      },
      "Starting Location": {
          "code":"sl",
          "title":"Starting Location",
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
      "Cargo Dropped/Missed": {
        "code":"acd",
        "title": "Cargo Dropped",
        "type":"counter"
      }
    },
    "teleop": {
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
      "Cargo Dropped/Missed": {
        "code":"tcd",
        "title": "Cargo Dropped",
        "type":"counter"
      },
      "Defense Performance": {
          "code":"dp",
          "title":"Defense Performance",
          "type":"radio",
          "choices": {
              "0":"Didn't Defend<br>",
              "1":"Below Average<br>",
              "2":"Average<br>",
              "3":"Above Average<br>"
          },
          "defaultValue":"0"
      },
      "Defense Evasion": {
        "code":"de",
        "title":"Defense Evasion",
        "type":"radio",
        "choices": {
            "0":"Didn't Encounter Defense<br>",
            "1":"Below Average<br>",
            "2":"Average<br>",
            "3":"Above Average<br>"
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
          "0":"Not Attempted/Failed<br>",
          "1":"Low<br>",
          "2":"Mid<br>",
          "3":"High<br>",
          "4":"Traversal<br>"
        },
        "defaultValue":"0"
      }
    },
    "postmatch": {
      "Foul": {
        "code":"f",
        "title": "Had fouls?",
        "type":"counter"
      },
      "Technical Foul": {
        "code":"tf",
        "title": "Had technical fouls?",
        "type":"counter"
      },
      "Died/Tipped": {
        "code":"dt",
        "title":"Died/Tipped",
        "type":"bool"
      },
      "Comments (swerve/tank, fast/slow speed, climb time, crippled by defense?-couldn't score; driver ability/style; <br>strategic/problem solving; type of fouls drawn: pinning,<br> damage to other robots, inside other robot's frame perimeter; <br>consistent shooting from a few spots; anything else notable": {
        "code":"co",
        "title": "Comments",
        "type":"text",
        "size":15,
        "maxSize":1000
      }     
    }
  }
}
`