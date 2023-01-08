const fileSystem = require("fs");
const sampleData = "./jsonResponse.json";

class NotificationController {
    static GetAllNotification(req,res){
        const data = JSON.parse(fileSystem.readFileSync(sampleData, "utf8"));
        return res.status(200).json(data)
    }
}

module.exports = NotificationController