export const formatTime = (s, m, h) => {

  var hDisplay = h > 0 ? (h < 10 ? "0" + h : h) : "00";
var mDisplay = m > 0 ? (m < 10 ? "0" + m : m ) : "00";
var sDisplay = s > 0 ? (s < 10 ? "0" + s : s) : "00";
  
 
   return `${hDisplay} : ${mDisplay} : ${sDisplay}`
 }