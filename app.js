/**
 * Created by admin on 2017/10/22.
 */
var express = require("express");

var router = require("./controllers/router");

var app = express();

app.set("view engine", "ejs");

app.use(express.static('public'));
app.use(express.static('uploads'));
app.use(express.static('node_modules'));

app.get("/", router.showIndex);

app.get("/:albumFolderName", router.showAlbum);
app.get("/:albumFolderName/:albumDetail", router.showAlbumDetail);

app.use(function (req, res) {
    res.render("error");
});

app.listen("3000");