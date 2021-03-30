# Belly Button Biodiversity Visualization Project

![Bacteria by filterforge.com](Images/bacteria.jpg)

### Description 
The purpose of this project is to build an interactive dashboard to explore the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels.

### Tools used in this project:
1.  Javascript
   Libraries:
      - D3.js
      - Plotly.js
2.  HTML
3.  Visual Studio Code

### Instructions


#### Steps
There are two ways to run this project.

#### Using GitHub url
*  I deployed my dashboard on GitHub Pages. Click the URL: https://bunmiolakanmi.github.io/plotly-challenge/  to open the dashboard on your default web browser.

#### Through index.html in Visual Studio Code

To run this code, ensure that all the above libraries are installed in your environment.
1.  Pull all the file from this Github repository.
2.  Open the index.html with a live server from Visual Studio Code. This renders the index.html file containing the visualizations.
3.  Explore the visualization using the dropdown list on the dashboard.
  
  a.  For example, when you select a sample using the dropdownlist, you are able to view 
      -  sample metadata, i.e., an individual's demographic information. 
       ![hw](Images/hw03.png) 
      -  the top 10 OTUs found in that individual on a horizontal bar  
        * ![bar Chart](Images/hw01.png)
      -  a bubble chart that displays each sample 
        * ![Bubble Chart](Images/bubble_chart.png)
      -  a guage chart that plots the weekly washing frequency of the individual. 
        * ![Weekly Washing Frequency Gauge](Images/gauge.png)
  
  b. The plots are updated any time that a new sample is selected.
  
<img width="634" alt="BellyButton_Dashboard" src="https://user-images.githubusercontent.com/71471355/113067785-3ec3f780-917a-11eb-99c9-a160f487385c.png">
  
 
### Files in Folder
1.  index.html file is used to render the dashboard on a webpage.
2.  Static: This folder contains the app.js file, which drives the visualization.
3.  samples.json contains the json data used for the visualization.
4.  Supplemental: This folder contains the image files used in the README file.
