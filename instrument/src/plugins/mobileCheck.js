// 모바일 감지 이벤트
var UserAgent = navigator.userAgent;
var mobileCheck = false;

if (UserAgent.match(/iPhone|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null || UserAgent.match(/LG|SAMSUNG|Samsung/) != null) {
    mobileCheck = true;
}else{
    mobileCheck = false;
}

export default mobileCheck;