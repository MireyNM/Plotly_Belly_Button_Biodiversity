// Create the buildChart function.
function buildCharts(sample) {
  // Use d3.json to load the samples.json file 
  d3.json("data/samples.json").then((data) => {
    console.log(data);

    // Create a variable that holds the samples array. 
    var samples = data.samples;

    // Create a variable that filters the samples for the object with the desired sample number.
    var sampleArray = samples.filter(sampleObj => sampleObj.id == sample);

    // 1. Create a variable that filters the metadata array for the object with the desired sample number.
    var metadata = data.metadata;
    var metadataArray = metadata.filter(sampleObj => sampleObj.id == sample);

    // Create a variable that holds the first sample in the array.
    var firstSample = sampleArray[0];


    // 2. Create a variable that holds the first sample in the metadata array.
    var result = metadataArray[0];
    

    // Create variables that hold the otu_ids, otu_labels, and sample_values.
    var otuIDs = firstSample.otu_ids;
    var otuLabels = firstSample.otu_labels; 
    var otuSampleValues = firstSample.sample_values;

    // 3. Create a variable that holds the washing frequency.
     var wFreq = result.wfreq; 

     function intToFloat(num, decPlaces) { 
        return num + '.' + Array(decPlaces + 1).join('0');
       }
     var floatWashingFreq = intToFloat(wFreq,1);
     
    // Create the yticks for the bar chart.
    var charts = Array();

    for(var i=0; i<firstSample.otu_ids.length; i++) {
      charts.push({ 
        id:firstSample.otu_ids[i], 
        label: firstSample.otu_labels[i], 
        value: firstSample.sample_values[i] 
      });
    }

    //Sorting by values 
    var sortedCharts = charts.sort((p1,p2)=> { 
      return p1.value - p2.value;
      });
    
    //Slicing top 10 values 
    var x = (sortedCharts.map(c => c.value)).slice(-10);
    var yID = (sortedCharts.map(c => c.id)).slice(-10);
    var hoverText = (sortedCharts.map(c => c.label)).slice(-10);

    //yticks values 
    var yticks = yID.map(a=> 'OTU '+ a);

    // Use Plotly to plot the bar data and layout.
    var barData = [{
      x: x,
      y: yticks,
      text: hoverText,
      type: 'bar',
      orientation: 'h' 
     }];

     var barLayout = {
      title: 'Top 10 Bacteria Cultures Found'
     };

    Plotly.newPlot('bar', barData, barLayout);
    
    // Use Plotly to plot the bubble data and layout.
    console.log(otuIDs.filter((item,
      index) => otuIDs.indexOf(item) === index));
    var bubbleData = [{
      x: otuIDs,
      y: otuSampleValues,
      text: otuLabels,
      mode:'markers',
      marker: {
        color: otuIDs.map(id => numberToColour(id*1000)),
        size: otuSampleValues
      }
   }];
   console.log(otuIDs);

   var bubbleLayout = {
    title:'Bacteria Cultures Per Sample',
    xaxis: {title:'OTU ID'},
    showlegend: false
   };
   Plotly.newPlot('bubble', bubbleData, bubbleLayout ); 
   
    
    // 4. Create the trace for the gauge chart.
    var gaugeData = [{ 
      domain: { x: [0, 1], y: [0, 1] },
      value: floatWashingFreq,
      title: { text: {"Belly Button Washing Frequency", font: { size: 24 }},
      type: "indicator",
      mode: "gauge+number",
      delta: { reference: 380 },
      gauge: {
        axis: { range: [null, 10] },
        bar: { color: "black" },
        borderwidth: 2,
        bordercolor: "black",
        steps: [
          {range: [0, 2], color: "red"},
          {range: [2, 4], color: "orange"},
          {range: [4, 6], color: "yellow"},
          {range: [6, 8], color: "light green"},
          {range: [8, 10], color: "green"}
        ]
    
  }];
    
    // 5. Create the layout for the gauge chart.
    var gaugeLayout = [
      
    ];
     
    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot('gauge',gaugeData, gaugeLayout);
  });
}

function numberToColour(number) {
  const r = (number & 0xff0000) >> 16;
  const g = (number & 0x00ff00) >> 8;
  const b = (number & 0x0000ff);
  
  return 'rgb('+r+', '+g+', '+b+')';
}