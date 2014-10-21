Weather Change
=============

The framework for a Angular App/Site that will change styles depending on the weather.

Using the HTML Navigator this sends an API request to wunderground to get the weather based on your geographical location. Then the app will load one of a number of CSS stylesheets depending on what weather comes back from Wunderground.

There might be a more efficient API request out there. Wunderground, strangely, sends back your City and State based on your Latitude and Longitude. Then you have to send back the City and State to actually get the weather. Unfortunately this doubles the amount of requests to Wunderground who tracks these things. Their free developer application plan limits you to 500 per day so that's something to consider.

Made using Angular, Node, and Express.
