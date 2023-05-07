import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'https://github.com/simonblund/simonblund.com.git',
  user: {
   name: 'Simon Blomsterlund',
   email: 'simon@simonblund.com'
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);