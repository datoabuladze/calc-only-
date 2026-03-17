function bechdva(ricx) {
  let pasx = document.getElementById("jami");

  pasx.value += ricx.innerHTML;
}
function toloba() {
  let pasx = document.getElementById("jami");
  let txt = pasx.value;
  let nms;
  if (txt.includes("+")) {
    nms = txt.split("+");
    let shedeg = Number(nms[0]) + Number(nms[1]);
    pasx.value = shedeg;
  } else if (txt.includes("-")) {
    nms = txt.split("-");
    let shedeg = Number(nms[0]) - Number(nms[1]);
    pasx.value = shedeg;
  } else if (txt.includes("*")) {
    nms = txt.split("*");
    let shedeg = Number(nms[0]) * Number(nms[1]);
    pasx.value = shedeg;
  } else if (txt.includes("/")) {
    nms = txt.split("/");
    let shedeg = Number(nms[0]) / Number(nms[1]);
    pasx.value = shedeg;
  }
}
function washla() {
  let pasx = document.getElementById("jami");
  pasx.value = "";
}
