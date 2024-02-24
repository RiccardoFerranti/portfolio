const Theme = {
  buttons: {
  },
  colors: {
    black: '#000',
    aquaLight1: '#45eaef',
    aquaLight2: '#2ee7e5',
    aqua: '#24c6c3',
    aquaDark: '#107674',
    white: '#fdfdfd',
    greyLight: '#9fb0c4',
    grey: '#c5c5c5',
    greyDark1: '#323b45',
    greyDark2: '#242c39',
    greyDark3: '#191919',
    greyDark4: '#525f7b',
    greyDark5: '#38424e',
    greyDark6: '#445161',
    red: '#FF0000',
    body: `radial-gradient(
      100% 225% at 100% 0%, 
      #FF0000 0%, #000000 100%
    ),
    linear-gradient(
      236deg, #00C2FF 0%, 
      #000000 100%
    ), 
    linear-gradient(
      135deg, 
      #CDFFEB 0%, 
      #CDFFEB 36%, 
      #009F9D 36%, 
      #009F9D 60%, 
      #07456F 60%, 
      #07456F 67%, 
      #0F0A3C 67%, 
      #0F0A3C 100%
    )`,
    text: '#383736',
  },
};

export type TTheme = typeof Theme;

export default Theme;
