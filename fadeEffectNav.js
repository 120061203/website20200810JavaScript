function openCity(evt, cityName) {
    var i, _tabcontent, _tablinks;
    _tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < _tabcontent.length; i++) {
        _tabcontent[i].style.display = "none"; //讓tabcontent中所有內容消失
    }
    _tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < _tablinks.length; i++) {
        _tablinks[i].classList.remove("active"); //去除active這個class
        // _tabcontent[i].className= _tablinks[i].className.replace(" active", "");//第二種寫法
    }
    document.getElementById(cityName).style.display = "block"; //讓id=cityName的元素顯示
    evt.currentTarget.className += " active";

}