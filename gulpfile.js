var site = '#';

var gulp = require('gulp');
var gutil = require('gulp-util');
var Crawler = require('simplecrawler');
var htmlreplace = require('gulp-html-replace');
var extender = require('gulp-html-extend')
var psi = require('psi');
var key = '';

 gulp.task('mega-build', function() {
  gulp.src('index.html')
    .pipe(htmlreplace({
        favicon: {
          src: '/core/images/universal/favicon/bs-favicon.ico',
          tpl: '<link rel="icon" href="%s">'
        },
        umbrella: {
          src: 'umbrella.png',
          tpl: '<img src="%s" class="umbrella-hero">'
        },
        logo: {
          src: 'logo.png',
          tpl: '<img src="%s" alt="[company]">'
        },
        toptext: 
          '<h1>H1 content goes here please and thank you</h1><h2>H2 content goes here thanks again for your cooperation</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget molestie magna, vel varius metus. Sed pretium tellus at lacinia efficitur. Vestibulum laoreet metus in felis aliquam ornare.</p><p>Nam volutpat arcu vitae sagittis posuere. Maecenas ultricies massa vel Fultricies sollicitudin. Cras eu est orci. Praesent rutrum sodales sem in porta. Duis a lacus ut diam iaculis varius. Mauris lacinia, neque fringilla placerat tempus, magna magna ornare erat, nec viverra mi erat ut odio. Donec ac porta turpis. Aliquam eu ipsum ut nulla placerat porta et dignissim lorem.</p>'
        ,
        satisy: 
          '<h2>H2 content goes here thanks again for your cooperation</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget molestie magna, vel varius metus. Sed pretium tellus at lacinia efficitur. Vestibulum laoreet metus in felis aliquam ornare.</p><p>Nam volutpat arcu vitae sagittis posuere. Maecenas ultricies massa vel ultricies sollicitudin. Cras eu est orci. Praesent rutrum sodales sem in porta. Duis a lacus ut diam iaculis varius. Mauris lacinia, neque fringilla placerat tempus, magna magna ornare erat, nec viverra mi erat ut odio. Donec ac porta turpis. Aliquam eu ipsum ut nulla placerat porta et dignissim lorem.</p>'
        ,
        video: {
          src: 'https://www.youtube.com/embed/ZCHOn59QYbw',
          tpl: '<iframe width="560" height="315" src="%s" frameborder="0" allowfullscreen></iframe>'
        }
      })).pipe(extender({annotations:false,verbose:false})) // default options 
        .pipe(gulp.dest('build/'))
 
});



//PageSpeed

gulp.task('mobile', function () {
    return psi(site, {
        // key: key
        nokey: 'true',
        strategy: 'mobile',
    }).then(function (data) {
        console.log('Speed score: ' + data.ruleGroups.SPEED.score);
        console.log('Usability score: ' + data.ruleGroups.USABILITY.score);
    });
});

gulp.task('desktop', function () {
    return psi(site, {
        nokey: 'true',
        // key: key,
        strategy: 'desktop',
    }).then(function (data) {
        console.log('Speed score: ' + data.ruleGroups.SPEED.score);
    });
});


//broken links 
gulp.task('checklinks', function(cb) {
  Crawler.crawl(site)
    .on('fetch404', function(queueItem, response) {
      gutil.log('Resource not found linked from ' +
                      queueItem.referrer + ' to', queueItem.url);
      gutil.log('Status code: ' + response.statusCode);
    })
    .on('complete', function(queueItem) {
      cb();
    });
});

gulp.task('default', ['mega-build', 'images']);


