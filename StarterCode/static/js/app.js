var data = d3.json("samples.json");
console.log(data);
  

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

      // function addMetaData(sampleMetaData) {
        var panel = d3.select("#sample-metadata");
          panel.html("");
          panel.append("p").text(age);
          panel.append("p").text(bbtype);
          panel.append("p").text(ethnicity);
          panel.append("p").text(gender);
          panel.append("p").text(location);
          panel.append("p").text(wfreq);
      // };

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

      var guageData =[
        {
          domain: {x: [0, 1], y:[0 ,1]},
          value: 270,
          title: {
            text: "Scrubs per Week"
          },
          //type: "indicator",
          mode: "guage+number" 
        }
      ];

      var barLayout = {
        title: "Top 10 Bacteria Cultures Found",
        margin: { t: 30, l: 150 }
      };

      var bubbleLayout = {
        title: "Top 10 Bacteria Cultures Found",
        //xaxis: "OTU IDs"
      }

      var guageLayout = {
        width: 600, 
        height: 500, 
        margin: { t: 0, b: 0 } 
      }

      Plotly.newPlot("bar", barData, barLayout);
      Plotly.newPlot("bubble", bubbleData, bubbleLayout);
      Plotly.newPlot("gauge", guageData, guageLayout);
  });
};

function optionChanged(selectedId){
  buildCharts(selectedId);
}


function init() {
  d3.json("samples.json").then((data) => {
      var samples = data.samples;
      var firstSampleId  = samples[0].id;
      buildCharts(firstSampleId);
      
      var metaData = data.metadata;
      console.log(metaData);
      var firstmetaData = metaData[0].id;
      console.log(metaData[0]);
     

        var dropdownMenu = d3.select("#selDataset");
        // Assign the value of the dropdown menu option to a variable
      
        
        // Initialize an empty array for the sample data
        var ids = [];
       
        ids = data.names;
        console.log(ids);
        for(i = 0; i<=ids.length; i++){
           var sampleName = dropdownMenu.append("option").text(ids[i]);
        // Call function to update the chart
         
        }
        
      

  });

};

init();