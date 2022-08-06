
// 모바일 감지 이벤트
const mobileCheck = function mobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

export default mobileCheck;