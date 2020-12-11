const canvas = d3.select("#canvas");

 const dataseries = [];
    d3.json("https://gist.githubusercontent.com/josejbocanegra/5dc69cb7feb7945ef58b9c3d84be2635/raw/64146e99e4416da3a8be2e2da4156cb87b3f6fd0/series-en.json").then(data => {
        //  return data;
         data.forEach(element => {
             dataseries.push(element);
         });
    
        const width = 700;
        const height = 500;
        const margin = { top:10, left:50, bottom: 40, right: 10};
    
     // región útil para la gráfica después de incluir los ejes
        const iwidth = width - margin.left - margin.right;
        const iheight = height - margin.top -margin.bottom;
    
     const svg = canvas.append("svg");
     svg.attr("width", width);
     svg.attr("height", height);
    
     //g es un elemento entre svg que hace agrupación de elementos
     //lo que está haciendo abajo es que todo se translade con esos márgenes como parámetros
     //unos pixeles a la derecha y hacia abajo.
     let g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);
    
     //.range([0,iheight]); no es así ya que en computación la co0rdenada "y" comienza en la esquina superior izquierda
     // entonces lo que se hace es un descuento cuando se pinta (por ejemplo el valor 0 va a comenzar en 
     // el punto iheight) 
     const y = d3.scaleLinear() 
         .domain([0, 973306])
         .range([iheight, 0]);
    
     const x = d3.scaleBand()
     .domain(dataseries.map(d => d.name) ) 
     .range([0, iwidth])
     .padding(0.1); 
    
     const bars = g.selectAll("rect").data(dataseries);
    
     //recordemos que se resta el y ya que las coordenadas están invertidas
     // entonces ahí se está incrementando el alto de la barra
     bars.enter().append("rect")
     .attr("class", "bar")
     .style("fill", "steelblue")
     .attr("x", d => x(d.name))
     .attr("y", d => y(d.seasons))
     .attr("height", d => iheight - y(d.seasons))
     .attr("width", x.bandwidth())  
    
      g.append("g")
      .classed("x--axis", true)
      .call(d3.axisBottom(x))
      .attr("transform", `translate(0, ${iheight})`);  
    
      g.append("g")
      .classed("y--axis", true)
      .call(d3.axisLeft(y));
    
    });


 
