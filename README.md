# Presentation Builder

Presentation builder is a serverless web-application that allow you to create presentation quickly.

It's written using React, so for running it locally you need `node.js` and `npm`.

Deployed here: https://going-to-the-river.github.io/presentation-builder/

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Interface

### Generate button
Adds main info into mandatory slides(Title slide, Team list, Final Slide) from forms.

### Add participant button
Adds participant to Team list.

### Delete participant button
Deletes participant from Team list.

### Get PDF button
Generates pdf file from slides.

### Add Slide button
Adds new slide. To edit it you can just click on a area of editing object and enter some text. 
After clicking on another area, object will be displayed using a special style.

### Delete Slide button
Deletes last non-mandatory slide.