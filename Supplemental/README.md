# Belly Button Biodiversity Visualization Project

![Bacteria by filterforge.com](Images/bacteria.jpg)

#### Description 
The purpose of this project is to build an interactive dashboard to explore the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels.

####  Tools used in this project:
1.  Javascript
  Libraries:
  - D3.js
  - Plotly.js
2.  HTML
3.  Visual Studio Code

#### Instructions
To run this code, ensure that all the above libraries are installed in your environment.

##### Steps
1.  Pull all the file from this Github repository.
2.  Open the index.html with a live server from Visual Studio Code. This renders the index.html file containing the visualizations.
3.  Explore the visualization using the dropdown list on the dashboard.
  a.  For example, when you select a sample using the dropdownlist, you are able to view 
      -  sample metadata, i.e., an individual's demographic information.
      -  the top 10 OTUs found in that individual on a horizontal bar
      -  a bubble chart that displays each sample
      -  a guage chart that plots the weekly washing frequency of the individual.
      - 
  b. The plots are updated any time that a new sample is selected.
 
##### Files in Folder
1.  index.html file is used to render the dashboard on a webpage.
2.  Static: This folder contains the app.js file, which drives the visualization.
3.  samples.json contains the json data used for the visualization.
4.  Supplemental: This folder contains the image files used in the README file.
5.  
 
 



  ![bar Chart](Images/hw01.png)

  

![Bubble Chart](Images/bubble_chart.png)


![hw](Images/hw03.png)

6. The plots are updated any time that a new sample is selected.

## Advanced Challenge Assignment (Optional)

* I adapted the Gauge Chart from <https://plot.ly/javascript/gauge-charts/> to plot the weekly washing frequency of the individual.

* I modified the example gauge code to account for values ranging from 0 through 9.

* The chart updates whenever a new sample is selected.

![Weekly Washing Frequency Gauge](Images/gauge.png)

## Deployment

* I deployed my dashboard on GitHub Pages. URL: https://bunmiolakanmi.github.io/plotly-challenge/ 
