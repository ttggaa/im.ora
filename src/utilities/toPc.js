// load index of PC while screen's width over 375px
const toPc = () => {
  const screen = window.screen;

  if (screen.width > 768) {
    window.location.href = 'http://www.jvziqinggan.com/';
  }
};

export default toPc;
