const a = document.querySelector('#social-link');
const morphTimeline = new TimelineMax({ 
  repeat:-1,
  repeatDelay:1
}); 

morphTimeline
  .to('#facebook', 2, {morphSVG: {shape: '#twitter'}})
  .call(link, ['twitter'])
  .to('#facebook', 2, {morphSVG: {shape: '#instagram'}}, '+=1')
  .call(link, ['instagram'])
  .to('#facebook', 2, {morphSVG: {shape: '#linkedin'}}, '+=1')
  .call(link, ['linkedin'])
  .to('#facebook', 2, {morphSVG: {shape: '#soundcloud'}}, '+=1')
  .call(link, ['soundcloud'])
  .to('#facebook', 2, {morphSVG: {shape: '#facebook'}}, '+=1')
  .call(link, ['facebook']);

function link(social) {
  switch (social) {
    case 'twitter':
      a.href = 'https://twitter.com/_samrose3_'
      break;
    case 'instagram':
      a.href = 'https://instagram.com/_samrose3_/'
      break;
      case 'soundcloud':
      a.href = 'https://soundcloud.com/samrose14'
      break;
    default:
      a.href = 'https://facebook.com/samrose.me';
  }
}
