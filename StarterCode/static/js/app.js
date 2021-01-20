var data = d3.json("samples.json");
console.log(data);

// function getData() {
//   var dropdownMenu = d3.select("#selDataset");
//   // Assign the value of the dropdown menu option to a variable
//   var sampleName = dropdownMenu.property("value");
//   // Initialize an empty array for the country's data
//   var name = [];
//   var otu_ids =[];
//   var otu_labels = [];
//   var sample_values=[];
//   var names = data.names;
//   console.log(names);
//   for(i = 0; i<=names.length; i++){
//   //   if (dataset == 'us') {
//   //     data = us;
//   // }
//   // else if (dataset == 'uk') {
//   //     data = uk;
//   // }
//   // else if (dataset == 'canada') {
//   //     data = canada;
//   }
//   // Call function to update the chart
//   updatePlotly(data);


// }
  

function buildCharts(sampleId) {
  d3.json("samples.json").then((data) => {
      var samples = data.samples;
      var resultArray = samples.filter(sampleObj => sampleObj.id == sampleId);
      var result = resultArray[0];
      console.log(result);
      var otu_ids = result.otu_ids;
      var otu_labels = result.otu_labels;
      var sample_values = result.sample_values;

      var metaData = data.metadata;
      console.log(metaData);

      var age = metaData.age;
      var bbtype = metaData.bbtype;
      var ethnicity = metaData.ethnicity;
      var gender = metaData.gender;
      var location = metaData.location;
      var wfreq = metaData.wfreq;

      function addMetaData(sampleMetaData) {
        var panel = d3.select("#sample-metadata");
          panel.append("div").text(age);
          panel.append("div").text(bbtype);
          panel.append("div").text(ethnicity);
          panel.append("div").text(gender);
          panel.append("div").text(location);
          panel.append("div").text(wfreq);
      };

      var yticks = otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse();
      var barData = [
        {
          y: yticks,
          x: sample_values.slice(0, 10).reverse(),
          text: otu_labels.slice(0, 10).reverse(),
          type: "bar",
          orientation: "h",
        }
      ];

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

      var barLayout = {
        title: "Top 10 Bacteria Cultures Found",
        margin: { t: 30, l: 150 }
      };

      var bubbleLayout = {
        title: "Top 10 Bacteria Cultures Found"
      }

      Plotly.newPlot("bar", barData, barLayout);
      Plotly.newPlot("bubble", bubbleData, bubbleLayout);
  });
};


function init() {
  d3.json("samples.json").then((data) => {
      var samples = data.samples;
      var firstSampleId  = samples[0].id;
      buildCharts(firstSampleId);
      
      var metaData = data.metadata;
      console.log(metaData);
      var firstmetaData = metaData[0].id;
      console.log(metaData[0]);
      addMetaData(firstmetaData);
  });

};

init();