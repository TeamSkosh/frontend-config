# New Project

## Front-End Configuration

- Requires Sass 3.4.9 (Ruby Implementation)
- Requires nodejs
- Uses Foundation 5.5.0

Install the correct version of Sass via bundler

```
$ bundle install
```

Install npm (node package manager) modules globally for use on the commandline (Grunt)

```
$ npm install -g  bower grunt grunt-cli
```

Install npm modules locally, be sure to be in the project root.

```
$ npm install
```

Install Foundation via Bower, be sure to be in the project root.

```
$ bower install
```

Build the assets with Grunt

```
$ grunt build
```

### Configured Grunt Tasks

To compile and minify styles, and copy over js dependencies (if necessary)

```
$ grunt build
```

To run the `build` task above, but conitnue to watch for changes

```
$ grunt
```

## Version

Version: 0.0.1
