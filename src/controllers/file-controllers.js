const con = require('../../database/db');

require('dotenv').config();
class FileController {
    async adddevices(req, res) {
        fonoapi.getDevices(myCallback, req.params.name);
        var devicesinserted = 0;
        var devicesdublicate = 0
        function myCallback(queryString, data) {

            if (data.length) {
                for (var i = 0; i < data.length; i++) {
                    var sql = "INSERT INTO devices (DeviceName,Brand,technology,announced,status,dimensions,weight,sim,type,size,resolution,card_slot,loudspeaker_,sound_c,wlan,bluetooth,gps,radio,usb,features_c,battery_c,colors,sensors,cpu,os,video,speed,network_c,chipset,features,protection,gpu,nfc,price,sar,single,triple,charging,models,_2g_bands,_3_5mm_jack_,_3g_bands,_4g_bands,body_c,gprs,edge,display_c,camera_c,internal,build , dual_  ,_5g,performance,display , sar_eu ) VALUES ?";
                    var values = [
                        [
                            data[i].DeviceName, data[i].Brand, data[i].technology, data[i].announced, data[i].status, data[i].dimensions, data[i].weight, data[i].sim,
                            data[i].type, data[i].size, data[i].resolution, data[i].card_slot, data[i].loudspeaker_, data[i].sound_c, data[i].wlan, data[i].bluetooth, data[i].gps, data[i].radio,
                            data[i].usb, data[i].features_c, data[i].battery_c, data[i].colors, data[i].sensors, data[i].cpu, data[i].os, data[i].video,
                            data[i].speed, data[i].network_c, data[i].chipset, data[i].features, data[i].protection, data[i].gpu, data[i].nfc, data[i].price, data[i].sar,
                            data[i].single, data[i].triple, data[i].charging, data[i].models, data[i]._2g_bands, data[i]._3_5mm_jack_, data[i]._3g_bands, data[i]._4g_bands,
                            data[i].body_c, data[i].gprs, data[i].edge, data[i].display_c, data[i].camera_c, data[i].internal, data[i].build,
                            data[i].dual_, data[i]._5g, data[i].performance, data[i].display, data[i].sar_eu
                        ]
                    ];
                    db.query(sql, [values], function (err, result) {
                        if (err) {
                            devicesdublicate = devicesdublicate + 1;
                            if (err.code === 'ER_DUP_ENTRY') {
                            }
                            if (data.length === devicesinserted + devicesdublicate) {
                                res.send({ 'record inserted': devicesinserted, 'devicesdublicate': devicesdublicate })
                            }
                        } else {
                            devicesinserted = devicesinserted + 1;
                            if (data.length === devicesinserted + devicesdublicate) {
                                res.send({ 'record inserted': devicesinserted, 'devicesdublicate': devicesdublicate })
                            }
                        }
                    });
                }
                console.log('record inserted::', devicesinserted, 'devicesdublicate::', devicesdublicate)
            } else {
                res.send({ 'record inserted': devicesinserted, 'devicesdublicate': devicesdublicate })
            }
        }
    }
    async addfonoapi(req, res) {

        // rola/
        fonoapi.getLatest(myCallback, 100, req.params.name);
        var devicesinserted = 0;
        var devicesdublicate = 0
        function myCallback(queryString, data) {
            if (data.length) {
                for (var i = 0; i < data.length; i++) {
                    var sql = "INSERT INTO devices (DeviceName,Brand,technology,announced,status,dimensions,weight,sim,type,size,resolution,card_slot,loudspeaker_,sound_c,wlan,bluetooth,gps,radio,usb,features_c,battery_c,colors,sensors,cpu,os,video,speed,network_c,chipset,features,protection,gpu,nfc,price,sar,single,triple,charging,models,_2g_bands,_3_5mm_jack_,_3g_bands,_4g_bands,body_c,gprs,edge,display_c,camera_c,internal,build , dual_  ,_5g,performance,display , sar_eu ) VALUES ?";
                    var values = [
                        [
                            data[i].DeviceName, data[i].Brand, data[i].technology, data[i].announced, data[i].status, data[i].dimensions, data[i].weight, data[i].sim,
                            data[i].type, data[i].size, data[i].resolution, data[i].card_slot, data[i].loudspeaker_, data[i].sound_c, data[i].wlan, data[i].bluetooth, data[i].gps, data[i].radio,
                            data[i].usb, data[i].features_c, data[i].battery_c, data[i].colors, data[i].sensors, data[i].cpu, data[i].os, data[i].video,
                            data[i].speed, data[i].network_c, data[i].chipset, data[i].features, data[i].protection, data[i].gpu, data[i].nfc, data[i].price, data[i].sar,
                            data[i].single, data[i].triple, data[i].charging, data[i].models, data[i]._2g_bands, data[i]._3_5mm_jack_, data[i]._3g_bands, data[i]._4g_bands,
                            data[i].body_c, data[i].gprs, data[i].edge, data[i].display_c, data[i].camera_c, data[i].internal, data[i].build,
                            data[i].dual_, data[i]._5g, data[i].performance, data[i].display, data[i].sar_eu
                        ]

                    ];
                    db.query(sql, [values], function (err, result) {
                        if (err) {
                            devicesdublicate = devicesdublicate + 1;
                            if (err.code === 'ER_DUP_ENTRY') {
                            }
                            if (data.length === devicesinserted + devicesdublicate) {
                                res.send({ 'record inserted': devicesinserted, 'devicesdublicate': devicesdublicate })
                            }

                        } else {
                            devicesinserted = devicesinserted + 1;
                            if (data.length === devicesinserted + devicesdublicate) {
                                res.send({ 'record inserted': devicesinserted, 'devicesdublicate': devicesdublicate })
                            }
                        }
                    });
                }
                console.log('record inserted::', devicesinserted, 'devicesdublicate::', devicesdublicate)
            } else {
                res.send({ 'record inserted': devicesinserted, 'devicesdublicate': devicesdublicate })

            }

        }
    }
    async addNews(req, res) {
        var devicesinserted = 0;
        var devicesdublicate = 0;
        let data = await axios.get("http://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=" + process.env.NEWS_API_KEY);
        if (data && data.data && data.data.articles.length > 0) {
            for (var i = 0; i < data.data.articles.length; i++) {
                var sql = "INSERT INTO news_technology (source_id,source_name,author,title,description,url,urltoimage,publishedDate,content) VALUES ?";
                var values = [
                    [
                        data.data.articles[i].source.id, data.data.articles[i].source.name,
                        data.data.articles[i].author, data.data.articles[i].title, data.data.articles[i].description,
                        data.data.articles[i].url, data.data.articles[i].urlToImage, data.data.articles[i].publishedAt, data.data.articles[i].content,
                    ]
                ];
                db.query(sql, [values], function (err, result) {
                    if (err) {
                        devicesdublicate = devicesdublicate + 1;

                        if (err.code === 'ER_DUP_ENTRY') {
                        }
                        if (data.data.articles.length === devicesinserted + devicesdublicate) {
                            res.send({ 'record inserted': devicesinserted, 'devicesdublicate': devicesdublicate })
                        }
                    } else {
                        devicesinserted = devicesinserted + 1;
                        if (data.data.articles.length === devicesinserted + devicesdublicate) {
                            res.send({ 'record inserted': devicesinserted, 'devicesdublicate': devicesdublicate })
                        }
                    }
                });
            }
        }
    }
    async getNews(req, res) {
        var getnews_SQL = "select * from news_technology "
        con.query(getnews_SQL, function (err, result) {
            console.log(result);
            if (result) {
                res.send({ news: result })
            } else {
                res.send({ error: 'Some error occured please try again later ' })
            }
        })
    }
}


module.exports = FileController