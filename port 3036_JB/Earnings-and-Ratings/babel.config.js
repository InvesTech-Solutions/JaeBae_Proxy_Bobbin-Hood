{
  "presets":  [["es2015", { "modules": false }], "react", "env"],
  "env": {
  "test": {
      "presets":[
        "es2015",
         "stage-0",
        "react"],
      "plugins": [
        "transform-class-properties",
        "transform-object-rest-spread"
      ]
    }
  }
}