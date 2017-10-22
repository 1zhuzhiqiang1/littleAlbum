/**
 * Created by admin on 2017/10/22.
 */

var fs = require("fs");

/**
 * 获取uploads文件夹下面所有的目录
 * @param callback
 */
exports.getAllAlbums = function (callback) {
    fs.readdir("uploads", function (err, files) {
        var allALbums = [];
        (function list(i) {
            if (i === files.length) {
                callback(allALbums);
                return;
            }
            fs.stat("./uploads/" + files[i], function (err, file) {
                if (file.isDirectory()) {
                    allALbums.push(files[i]);
                }
                list(i + 1);
            })
        })(0);
    });
};

/**
 * 获取指定文件夹下面所有的图片
 * @param req
 * @param res
 */
exports.getAlbums = function (folderName, callback) {
    var folderPath = "uploads" + "/" + folderName;
    fs.readdir(folderPath, function (err, files) {
        callback(files);
    })
};