/**
 * Created by admin on 2017/10/22.
 */

var file = require("../models/file");

exports.showIndex = function (req, res) {
    file.getAllAlbums(function (allAlbums) {
        res.render("index", {
            albums: allAlbums
        });
    });

};

/**
 * 展示相册图片
 * @param req
 * @param res
 */
exports.showAlbum = function (req, res) {
    var folderName = req.params["albumFolderName"];
    file.getAlbums(folderName, function (images) {
        res.render("album", {
            folderName: folderName,
            images: images
        });
    });
};

/**
 * 展示图片详情
 * @param req
 * @param res
 */
exports.showAlbumDetail = function (req, res) {
    var folderName = req.params["albumFolderName"];
    var albumName = req.params["albumDetail"];
    res.render("albumDetail", {
        folderName: folderName,
        albumName: albumName
    });
};