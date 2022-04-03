function work(){
    var data = [{
        values: [ 50, 50],
        labels: ['JavaScript', 'HTML/CSS'],
        type: 'pie'
      }];
      
      var layout = {
        height: 450,
        width: 450,
        showlegend: false
        
      };
      
      Plotly.newPlot('myDiv', data, layout,{staticPlot: true});
}

document.addEventListener('DOMContentLoaded', function(){ 
    work();
    var elements = document.getElementsByClassName("main-svg");
   
    elements[0].style['background']= 'rgba(255, 255, 255, 0)';


    var elements = dociment.getElementsByClassName("user-select-none svg-container");

    element
    
});