const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");

app.use(cors());
app.use(express.json());

app.get("/getData", async (req, res) => {
    try {
        const allData = await fs.readFile(
            "fpl-response",
            "utf8",
            (err, data) => {
                if (err) {
                    console.error(err);
                    return;
                }
                const json_data = res.json(JSON.parse(data)["elements"]);
                // console.log(json_data["events"][0]);
            }
        );
    } catch (error) {
        console.log(error.message);
    }
});

app.listen(5000, () => {
    console.log("server has started on port 5000");
});
