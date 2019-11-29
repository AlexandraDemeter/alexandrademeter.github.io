document.getElementById('id_logic').innerHTML = "2019.11.29.4";

window.addEventListener("touchstart", touch_start_uab);
window.addEventListener("touchmove", touch_move_uab);

var canvas = document.getElementById("id_canvas");
var context = canvas.getContext("2d");

var client_rect = canvas.getBoundingClientRect();

var last_touch = [];

function get_random_color()
{
    var tmp = "0123456789ABCDEF";
    var culoare = "#";
    for(var i = 0; i < 6; i++)
        culoare += tmp[Math.floor(Math.random() * 16)];
    return culoare;
}

function touch_start_uab(e)
{
    var t = e.changedTouches;
    for(var i = 0; i<t.length; i++)
        {
            context.beginPath();
            context.arc(t[i].pageX - client_rect.left, t[i].pageY - client_rect.top, 10, 0, 2 * Math.PI);
            context.fillStyle = get_random_color();
            context.strokeStyle = context.fillStyle();
            context.fill();
            context.stroke();
            
            var touch_info = {};
            touch_info.x = t[i].pageX;
            touch_info.y = t[i].page.Y;
            touch_info.color = context.fillStyle;
            touch_info.id = t[i].identifier;
            
            last_touch.push(touch_info);
        }
}

function touch_move_uab(e)
{
    var t = e.changedTouches;
    for(var i = 0; i<t.length; i++)
        {
            var touch_index = -1;
            for(var j = 0; j<last_touch.length; j++)
                if(t[i].identifier == last_touch[j].identifier)
                    {
                        touch_index = j;
                        break;
                    }
            context.beginPath();
            context.moveTo(last_touch[touch_index].x - client_rect.left, last_touch[touch_index].y - client_rect.top);
            context.lineTo(t[i].pageX - client_rect.left, t[i].pageY - client_rect.top);
            context.lineWidth = 20;
            context.strokeStyle = last_touch[touch_index].color;
            context.fillStyle = last_touch[touch_index].color;
            context.stroke();
        }
}