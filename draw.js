function watch(){
    alert(1);
    var date=new Date();
    var h=date.getHours();
    var m=date.getMinutes();
    var s=date.getSeconds();
    h=h>12?h-12:h;
    h=h+m/60;
    //表盘圆圈
    var d = $( "#draw" ) [0];c=d.getContext('2d');
    c.clearRect(0,0,400,400);
    c.beginPath();
    c.lineWidth=10;
    c.strokeStyle='#9E3535';
    c.arc(200,200,180,0,2*Math.PI,true);
    c.stroke();
    c.closePath();
    //时针刻度
    for (var i = 0; i < 12; i++) {
            c.save();
            c.lineWidth=7;
            c.strokeStyle='black';
            c.translate(200,200);
            c.rotate(i*30*Math.PI/180);
            c.beginPath();
            c.moveTo(0,-165);
            c.lineTo(0,-175);
            c.closePath();
            c.stroke();
            c.restore();
        };
        //分针刻度
        for (var i = 0; i < 60; i++) {
            c.save();
            c.lineWidth=3;
            c.strokeStyle='black';
            c.translate(200,200);
            c.rotate(i*6*Math.PI/180);
            c.beginPath();
            c.moveTo(0,-170);
            c.lineTo(0,-175);
            c.closePath();
            c.stroke();
            c.restore();
        };
            //时针
            c.save();
            c.lineWidth=7;
            c.strokeStyle='black';
            c.translate(200,200);
            c.rotate(h*30*Math.PI/180);
            c.beginPath();
            c.moveTo(0,-130);
            c.lineTo(0,15);
            c.closePath();
            c.stroke();
            c.restore();
            //分针
            c.save();
            c.lineWidth=5;
            c.strokeStyle='black';
            c.translate(200,200);
            c.rotate(m*6*Math.PI/180);
            c.beginPath();
            c.moveTo(0,-150);
            c.lineTo(0,20);
            c.closePath();
            c.stroke();
            c.restore();
            //秒针
            c.save();
            c.lineWidth=3;
            c.strokeStyle='RED';
            c.translate(200,200);
            c.rotate(s*6*Math.PI/180);
            c.beginPath();
            c.arc(0,-143,4,0,2*Math.PI,true);
            c.fillStyle='red';
            c.fill();
            c.moveTo(0,-160);
            c.lineTo(0,30);
            c.closePath();
            c.stroke();
            c.beginPath();
            c.arc(0,0,6,0,2*Math.PI,true);
            c.fillStyle='red';
            c.fill();
            c.closePath();
            c.restore();
            c.font= '40px 黑体';
            c.fillStyle='#9E3535';   
            c.fillText('Ω', 180, 80);
    };                 
setInterval(watch,1000);
