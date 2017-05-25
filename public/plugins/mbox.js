function mbox(texto, tipo) {
 noty({
  text: texto,
  type: tipo,
  theme: 'theme',
  closeWith: ['backdrop'],
  modal: true/*,
                animation: {
                    open: 'bounceIn',
                    close: 'bounceOut',
                    easing: 'swing',
                    speed: 500
                }*/
 });
}