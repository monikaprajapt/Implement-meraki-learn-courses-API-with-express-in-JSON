var fs = require("fs");
var axios = require("axios");
var url1 = ("https://api.merakilearn.org/courses")
axios.get(url1)
    .then(resp => {
        let DATA = (resp.data)
        let m = JSON.stringify(DATA, null, 4)
        fs.writeFileSync("courses.json", m)
        serial_no = 1
        for (i of (DATA)) {
            
        }

})


