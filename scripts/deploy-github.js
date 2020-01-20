const ghpages = require('gh-pages');

ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'git@github.com:luciopalmieri/luciopalmieri.github.io.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)
