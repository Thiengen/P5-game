let video ;
let classifier;

function classifyVideo() {
  classifier.classify(video, gotResults);
}

function gotResults(error, results) {
  
  if (error) {
    console.error(error);
    return;
  }
  
  label = results[0].label;
  classifyVideo();
}