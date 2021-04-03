<h4>Julia Ulsh - Cesium Front End Project - Smart Construction Dashboard</h4>
<h6>Description:</h6> <br>
<p>I attacked this project by starting with what I knew best, HTML and Bootstrap. I was able to set up the layout and buttons realtively quickly. For functionality, I weighed out a few different options, but ultimately decided to leverage my strength in JavaScript to make the site work. It took a decent amount of time to nail down the best approach, as I am someone who likes to try many different ways of reaching a solution and who learns as they go. I spent some time combing through W3School's content on Javascript and HTML and resulted with a functional dashboard. Users can add and delete materials and the current list of materials along with the price is displayed. I added an extra button for the calulation of the total price because that made sense to me. I had never implemented Unit Tests in JavaScript before, so I just took some extra time to learn the basics of Jasmine and implemented a simple test which is what I had time for in the 2-3 hour range. I used this site as reference: https://www.testim.io/blog/jasmine-js-a-from-scratch-tutorial-to-start-testing/ One functionality I did not implement was the color picker, I opted instead for a user entered text there. I knew that would take a lot of my time to research and implement and figured it would be a better use of time to focus on other functionalities.</p> <br>
<h6>How to Run:</h6> <br>
<p>This repository contains the index.html file that runs the dashboard, the projectScript.js file that contains the functions, and the jasmine files necessary to run the unit test I implemented in the browser. Download all files and then: <br> 
	To run the dashboard, open the index.html file in your browser and it should work as expected. **Note**: for the file structure to connext the projectScript.js to the index.html, I have used the syntax: 	
	
	<script src="projectScript.js"></script>
	
	
This is the file structure necessary on my mac, however if you have any trouble loading it on PC, please try to update this line to: 


	<script src="/projectScript.js"></script>
To run the jasmine unit test: navigate to jasmine/jasmine-standalone-3.7.1/SpecRunner.html and run this file in your browser. This will show the status of running this simple unit test.</p>
<p>If you have any questions at all about my implementation, please feel free to reach out to me at julsh1@villanova.edu.</p>
