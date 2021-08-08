$(function(){
    var tips_list = [
        '使人成熟的是经历，而不是岁月',
        '爱，就大声说出来，因为你永远都不会知道，明天和意外，哪个会先来！',
    ];
    // 定时更改提示信息
    var obj_tips = $("#dwm_tips .tips_content,#dwm_terminal .content_tips .content_text");
    obj_tips.text(tips_list[0]);
    var index = 1;
    setInterval(function () {
        obj_tips.text(tips_list[index]);
        index ++;
        if (index > tips_list.length-1) {
            index = 0;
        }
    }, 5000);
});
