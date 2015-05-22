var fs = require('fs');
var request = require('superagent');
var keys = '变身';

keys = encodeURI(encodeURI(keys));


request
  .get('http://s.weibo.com/weibo/' + keys)
  .set('Accept','text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8')
  .set('Accept-Encoding','gzip, deflate, sdch')
  .set('Accept-Language','zh-CN,zh;q=0.8')
  .set('Cache-Control','no-cache')
  .set('Connection','keep-alive')
  .set('Cookie','UOR=weibo.com,vote.weibo.com,; SINAGLOBAL=9503894278313.965.1430930445880; ULV=1430930446555:1:1:1:9503894278313.965.1430930445880:; NSC_wjq_txfjcp_mjotij=ffffffff094113d845525d5f4f58455e445a4a423660; myuid=2141194637; WBtopGlobal_register_version=3191969a95db288a; SUS=SID-2141194637-1432219678-XD-coqib-7e2050200336d0071970380519230a22; SUE=es%3D153e8b9a335c655cf921da019f045af2%26ev%3Dv1%26es2%3Dfdc1768b0d73380bd27295c0edbcd8f6%26rs0%3DF02Rf6gWEdsEN5Ru%252BgwA6YJ3IhEVWv%252BMCyMCeUKnHXyuUioYR2A%252FyrTCugGtnkDzR5ssuDIQMEq4Ybl6rmKwJJx41w1yT2CZvFeitGYL%252FMTc%252BaArd5eTxfS5qAlMiJQTppA6TyQEGweDfvFXhrCqLuhsFW7Y4yU3DRwsd9F4%252BEA%253D%26rv%3D0; SUP=cv%3D1%26bt%3D1432219677%26et%3D1432306077%26d%3Dc909%26i%3D0a22%26us%3D1%26vf%3D0%26vt%3D0%26ac%3D0%26st%3D0%26uid%3D2141194637%26name%3D372903575%2540qq.com%26nick%3D%25E7%2594%25A8%25E6%2588%25B72141194637%26fmp%3D%26lcp%3D2013-05-24%252018%253A16%253A24; SUB=_2A254WYBNDeTxGeRP71MQ-SrKyDuIHXVbLvaFrDV8PUNbuNAPLVelkW97mk9IcKa6vFIY5Uqe0-UrkS8Lgg..; SUBP=0033WrSXqPxfM725Ws9jqgMF55529P9D9Whi1k36REojC0YuFJb1I6rx5JpX5K2t; SUHB=02MumppF7FPxde; ALF=1432824478; SSOLoginState=1432219677; un=372903575@qq.com; WBStore=bf5c852d78c6d23c|undefined')
  .end(function(err, res){
    fs.writeFile('message.txt', res.text, function (err) {
      if (err) throw err;
      console.log('It\'s saved!');
    });
  });
