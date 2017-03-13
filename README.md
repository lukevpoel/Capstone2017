# capstone2017

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

## Build & development

After cloning project, run 'npm install' and 'bower install'. With bower and npm installed
grunt serve will work correctly

Run `grunt build` for building and `grunt serve` for preview.
Run 'grunt buildcontrol' for deploying to gh-pages. Requires valid ssh Key

## Testing

Running `grunt test` will run the unit tests with karma.

## Analytics
Analytics for this site are run using angulartics. This is linked to my Google
Analytics page. There are events set for almost all links and button clicks
throughout the site. Also, pageviews are monitored.

## API notes
Two APIs are used at this time for this website
Eventful
and
Google

Eventful is providing all event data on this site.
Eventful descriptions, and images are a bit finicky, hence a lot of ng-if statements
to filter potentially bad data.

Google maps are using the data to provide location information for users,
along with links to Google maps directions.

## Bower notes
There are some issues with bower and grunt currently. When building the site, after
certain modifications or module installs, 'Grunt build' will build bad files. And When
deployed with 'Grunt buildcontrol' the site will essentially go down. If this happens the
only known solution is to remove the repository from local storage. Clone the files again,
run 'bower install' and 'npm install' again. And fresh build and buildcontrol commands will
build and deploy the files correctly.
