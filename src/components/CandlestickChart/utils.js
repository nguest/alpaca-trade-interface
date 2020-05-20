import * as d3 from 'd3';
import d3Config from './config';
import colors from '../../styles/colors';
import spacing from '../../styles/spacing';

const d3Utils = {
  initializeChart: ({ timeSeriesData, dimensions }) => {

    const formatDate = d3.utcFormat('%B %-d, %Y');
    const formatValue = d3.format('.2f');
    const formatChange = (y0, y1) => {
      const f = d3.format('+.2%');
      return (y0, y1) => f((y1 - y0) / y0);
    };
    const parseDate = d3.utcParse("%s");

    const data = timeSeriesData.map((datum) => ({
      ...datum,
      //t: new Date(datum.t * 1000),
      t: parseDate(datum.t),

    }));
    console.log({ data });

  // build chart with margins


    const svg = d3.select('.line-chart');


  //   const x = d3
  // .scaleBand()
  // .domain(data.map(d => d.t))
  // .range(d3Config.margin.left, dimensions.width - d3Config.margin.right)
  // .padding(0.3)

    // const x = d3.scaleBand()
    //   .domain(d3.utcDay
    //     .range(new Date(data[0].t), new Date(+data[data.length - 1].t + 1))
    //     .filter((d) => d.getUTCDay() !== 0 && d.getUTCDay() !== 6))
    //   .range([d3Config.margin.left, dimensions.width - d3Config.margin.right])
    //   .padding(0.2);
    const x = d3.scaleBand()
      .domain(data.map((d) => d.t))
      .range([d3Config.margin.left, dimensions.width - d3Config.margin.right])
      .paddingInner(0.2);

    const y = d3.scaleLog()
      .domain([d3.min(data, (d) => d.l), d3.max(data, (d) => d.h)])
      .rangeRound([dimensions.height - d3Config.margin.bottom, d3Config.margin.top]);

    const xAxis = (g) => g
      .attr('transform', `translate(0,${dimensions.height - d3Config.margin.bottom})`)
      .call(d3.axisBottom(x)
        .tickValues(data.map(d => d.t).filter((t, i) => i % 5 === 0))
        .tickFormat(d3.utcFormat('%-m/%-d')))
     //.call((g) => g.select('.domain').remove());

    const yAxis = (g) => g
      .attr('transform', `translate(${d3Config.margin.left},0)`)
      .call(d3.axisLeft(y)
        .tickFormat(d3.format('$~f'))
        .tickValues(d3.scaleLinear().domain(y.domain()).ticks()))
      .call((g) => g.selectAll('.tick line').clone()
        .attr('stroke-opacity', 0.2)
        .attr('x2', dimensions.width - d3Config.margin.left - d3Config.margin.right))
      .call((g) => g.select('.domain').remove());

    svg
      .attr('width', dimensions.width)
      .attr('height', dimensions.height)
      .append('g')
      .attr('class', 'line-chart-inner')
      .attr('transform', `translate(${d3Config.margin.left},${d3Config.margin.top})`);

    svg.append('g')
      .call(xAxis);

    svg.append('g')
      .call(yAxis);

    const g = svg.append('g')
      //.attr('stroke-linecap', 'round')
      .attr('stroke', 'black')
      .selectAll('g')
      .data(data)
      .join('g')
      .attr('transform', (d) => {
       // console.log(d.t, x(d.t))
        return `translate(${x(d.t)},0)`}
      );

    g.append('line')
      .attr('y1', (d) => y(d.l))
      .attr('y2', (d) => y(d.h));

    g.append('line')
      .attr('y1', (d) => y(d.o))
      .attr('y2', (d) => y(d.c))
      .attr('stroke-width', x.bandwidth())
      .attr('stroke', (d) => (
        d.o > d.c ? d3.schemeSet1[0]
        : d.c > d.o ? d3.schemeSet1[2]
          : d3.schemeSet1[8]));

    g.append('title')
      .text((d) => `${formatDate(d.t)}
        Open: ${formatValue(d.o)}
        Close: ${formatValue(d.c)} (${formatChange(d.o, d.c)})
        Low: ${formatValue(d.l)}
        High: ${formatValue(d.h)}`);


    // /////
  },

  empty: () => {
    console.log('empty');
    
    d3.selectAll('.line-chart *').remove();
  },
};

export default d3Utils;

/*
const svg = d3.create("svg")
      .attr("viewBox", [0, 0, width, height]);

  svg.append("g")
      .call(xAxis);

  svg.append("g")
      .call(yAxis);

  const g = svg.append("g")
      .attr("stroke-linecap", "round")
      .attr("stroke", "black")
    .selectAll("g")
    .data(data)
    .join("g")
      .attr("transform", d => `translate(${x(d.date)},0)`);

  g.append("line")
      .attr("y1", d => y(d.low))
      .attr("y2", d => y(d.high));

  g.append("line")
      .attr("y1", d => y(d.open))
      .attr("y2", d => y(d.close))
      .attr("stroke-width", x.bandwidth())
      .attr("stroke", d => d.open > d.close ? d3.schemeSet1[0]
          : d.close > d.open ? d3.schemeSet1[2]
          : d3.schemeSet1[8]);

  g.append("title")
      .text(d => `${formatDate(d.date)}
Open: ${formatValue(d.open)}
Close: ${formatValue(d.close)} (${formatChange(d.open, d.close)})
Low: ${formatValue(d.low)}
High: ${formatValue(d.high)}`);

  return svg.node();

*/
