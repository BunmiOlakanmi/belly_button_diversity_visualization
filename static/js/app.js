// Function to build the three charts: bar, bubble and guage
function buildCharts(sampleId) {
  d3.json("samples.json").then((data) => {
      var samples = data.samples;
      var resultArray = samples.filter(sampleObj => sampleObj.id == sampleId);
      var result = resultArray[0];
      console.log(result);
      var otu_ids = result.otu_ids;
      var otu_labels = result.otu_labels;
      var sample_values = result.sample_values;
      console.log(otu_ids, sample_values);
      var metaData = data.metadata.filter(filterObj => filterObj.id == sampleId)[0];
      console.log(metaData);
      var age = metaData.age;
      var bbtype = metaData.bbtype;
      var ethnicity = metaData.ethnicity;
      var gender = metaData.gender;
      var location = metaData.location;
      var wfreq = metaData.wfreq;
      
      // Get the metadata to the populate the dempgraphic info
      var panel = d3.select("#sample-metadata");
        panel.html("");
        panel.append("p").text(`age: ${age}`);
        panel.append("p").text(`bbtype: ${bbtype}`);
        panel.append("p").text(`ethnicity: ${ethnicity}`);
        panel.append("p").text(`gender: ${gender}`);
        panel.append("p").text(`location: ${location}`);
        panel.append("p").text(`wfreq: ${wfreq}`);

      var yticks = otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse();
      
      // Data for the bar chart
      var barData = [
        {
          y: yticks,
          x: sample_values.slice(0, 10).reverse(),
          text: otu_labels.slice(0, 10).reverse(),
          type: "bar",
          orientation: "h",
        }
      ];

      // Data for the bubble chart
      var bubbleData = [
        {
          x: otu_ids,
          y: sample_values,
          text: otu_labels,
          mode: 'markers',
          marker: {
            size: sample_values,
            color: otu_ids
          }

        }
      ];

      // Data for the guage chart
      var guageData = [
        {
          domain: { x: [0, 1], y: [0, 1] },
          value: wfreq,
          title: { text: "Belly Button Washing Frequency: Scrubs per Week"},
          bgcolor: "light green",
          steps: [
            { range: [0, 4,], color: "lightgray" },
            { range: [5, 8], color: "gray" }
          ],
          //bar: { color: "darkblue" },
          type: "indicator",
          mode: "gauge+number+delta",
          delta: {reference: 0},
          gauge: {axis: {range: [null, 9]}},
          threshold: {
            line: {color: "red", width: 4},
            thickness: 0.75,
            value: 9,
          },
          
        }
      ];

      // Layout for the bar chart
      var barLayout = {
        title: "Top 10 Bacteria Cultures Found",
        margin: { t: 30, l: 150 }
      };

      // Layout for the bubble chart
      var bubbleLayout = {
        title: "Top 10 Bacteria Cultures Found",
        //xaxis: "OTU IDs"
      }

      // Layout for the guage chart
      var guageLayout = {
        width: 600, 
        height: 500, 
        margin: { t: 0, b: 0 },
        paper_bgcolor: "white"
      }

      // Plot the three charts: bar, bubble and guage
      Plotly.newPlot("bar", barData, barLayout);
      Plotly.newPlot("bubble", bubbleData, bubbleLayout);
      Plotly.newPlot("gauge", guageData, guageLayout);
  });
};

// Function to select subject id that the bar, bubble and guage charts will be built
function optionChanged(selectedId){
  buildCharts(selectedId);
}

// Function to initiate the program. 
function init() {
  //Read the json file and retrieve the data from samples 
  d3.json("samples.json").then((data) => {
    var samples = data.samples;
    var firstSampleId  = samples[0].id;
    buildCharts(firstSampleId);  
    var metaData = data.metadata;
    console.log(metaData);
    var firstmetaData = metaData[0].id;
    console.log(metaData[0]);
    // Assign the value of the dropdown menu option to a variable
    var dropdownMenu = d3.select("#selDataset");
    // Initialize an empty array for the sample data
    var ids = [];
    ids = data.names;
    console.log(ids);
    for(i = 0; i<=ids.length; i++){
      var sampleName = dropdownMenu.append("option").text(ids[i]);
    }
  });
};
init();