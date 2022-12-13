function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}
if (isMobile()) {
  window.alert(
    "≪Finding Me You and Us≫\n✷ It's better to access this website on your computer. It works perfectly fine on mobile, but there are many easter eggs that are activated by mouseover effects.\nThank you for being here.\n- Suebin Park, 2022"
  );
} else {
  window.alert(
    "≪Finding Me You and Us≫\nThank you for being here.\n- Suebin Park, 2022"
  );
}
