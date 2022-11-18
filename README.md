# Plotly_Belly_Button_Biodiversity
Use Plotly.js, a JavaScript data visualization library, to create an interactive data visualization for a web.

## Overview
In this project, we used Plotly.js and JavaScript data visualization library, to create an interactive data visualization for a web, where we can visualize the the types of bacteria that colonize the belly of each volunteer.


### Aim
The aim of this project is to create an interactive webpage that allows readers to parse Belly Button Biodiversity data.

## Resources 
- Data Source: <a href="https://github.com/MireyNM/Plotly_Belly_Button_Biodiversity/blob/main/BellyButtonBiodiversity%20/data/samples.json" target="_blank">samples.json</a>
- Software: Visual Studio 1.69.1 
- HTML code: <a href="https://github.com/MireyNM/Plotly_Belly_Button_Biodiversity/blob/main/BellyButtonBiodiversity%20/index.html" target="_blank">index.html</a>
- JavaScript code:  <a href="https://github.com/MireyNM/Plotly_Belly_Button_Biodiversity/blob/main/BellyButtonBiodiversity%20/static/js/charts.js" target="_blank">charts.js</a>
- Style .css code: <a href="https://github.com/MireyNM/Plotly_Belly_Button_Biodiversity/blob/main/BellyButtonBiodiversity%20/static/css/style.css" target="_blank">style.css</a>


## Results

Using JavaScript and HTML, we have retrieved data from an external JSON file. We have iterated through objects and arrays to retrieve necessary data from them, with methods such as map() and filter(). We have created an interactive webpage that allows the reader to parse the data by selecting an individual’s ID from the dropdown menu on the webpage.

For each ID we have created: 
- A panel that shows demographic information such as ID, ethnicity, gender, age, location, bbtype and wfreq.
- A horizontal bar chart to display the top 10 bacterial species (OTUs).
- A bubble chart that to display Bacteria cultures per sample. 
- A gauge chart to display the weekly washing frequency's value (wfreq). 

Finally, we have used HTML and Bootstrap to customize the webpage by:
-  Adding an image to jumbotron.
- Add background color to the webpage.
- Using a custom font with contrast for the colors.
- Adding  user instruction on the top of the page.


We must note that when the dashboard is first opened in a browser, ID 940’s data is displayed in the dashboard, and the three charts displays data related to ID 940 (See Fig.1) 

<p align = "center">
<img width="499" alt="Outcomes_vs_Goals" src="https://user-images.githubusercontent.com/109363759/202779736-f0ca9404-50b3-4639-801e-ef526c5b81f7.png">
</p>
<p align = "center">
Figue 1 - Figure showing the webpage when opening the browser.
</p>


### Summary
We've built an interactive dashboard to explore the Belly Button Biodiversity data which catalogs the microbes that colonize human navel, in a visually appealing and dynamic way. However, it would be interesting to make the web-page mobile responsive.  


