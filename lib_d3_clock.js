const d3_clock_copyright=`
Copyright (c) 2020 Michael Neill Hartman. All rights reserved.
mnh_license@proton.me
https://github.com/hartmanm
`

let rawData = [
{minute: '1',value: 60},
{minute: '2',value: 60},
{minute: '3',value: 60},
{minute: '4',value: 60},
{minute: '5',value: 60},
{minute: '6',value: 60},
{minute: '7',value: 60},
{minute: '8',value: 60},
{minute: '9',value: 60},
{minute: '10',value: 60},

{minute: '11',value: 60},
{minute: '12',value: 60},
{minute: '13',value: 60},
{minute: '14',value: 60},
{minute: '15',value: 60},
{minute: '16',value: 60},
{minute: '17',value: 60},
{minute: '18',value: 60},
{minute: '19',value: 60},
{minute: '20',value: 60},

{minute: '21',value: 60},
{minute: '22',value: 60},
{minute: '23',value: 60},
{minute: '24',value: 60},
{minute: '25',value: 60},
{minute: '26',value: 60},
{minute: '27',value: 60},
{minute: '28',value: 60},
{minute: '29',value: 60},
{minute: '30',value: 60},

{minute: '31',value: 60},
{minute: '32',value: 60},
{minute: '33',value: 60},
{minute: '34',value: 60},
{minute: '35',value: 60},
{minute: '36',value: 60},
{minute: '37',value: 60},
{minute: '38',value: 60},
{minute: '39',value: 60},
{minute: '40',value: 60},

{minute: '41',value: 60},
{minute: '42',value: 60},
{minute: '43',value: 60},
{minute: '44',value: 60},
{minute: '45',value: 60},
{minute: '46',value: 60},
{minute: '47',value: 60},
{minute: '48',value: 60},
{minute: '49',value: 60},
{minute: '50',value: 60},

{minute: '51',value: 60},
{minute: '52',value: 60},
{minute: '53',value: 60},
{minute: '54',value: 60},
{minute: '55',value: 60},
{minute: '56',value: 60},
{minute: '57',value: 60},
{minute: '58',value: 60},
{minute: '59',value: 60},
{minute: '60',value: 60}
]
let hourData = [
{minute: '1',value: 60},
{minute: '2',value: 60},
{minute: '3',value: 60},
{minute: '4',value: 60},
{minute: '5',value: 60},
{minute: '6',value: 60},
{minute: '7',value: 60},
{minute: '8',value: 60},
{minute: '9',value: 60},
{minute: '10',value: 60},

{minute: '11',value: 60},
{minute: '12',value: 60},
{minute: '13',value: 60},
{minute: '14',value: 60},
{minute: '15',value: 60},
{minute: '16',value: 60},
{minute: '17',value: 60},
{minute: '18',value: 60},
{minute: '19',value: 60},
{minute: '20',value: 60},

{minute: '21',value: 60},
{minute: '22',value: 60},
{minute: '23',value: 60},
{minute: '24',value: 60}
]
let dayData = [
{minute: '1',value: 365},
{minute: '2',value: 365},
{minute: '3',value: 365},
{minute: '4',value: 365},
{minute: '5',value: 365},
{minute: '6',value: 365},
{minute: '7',value: 365},
{minute: '8',value: 365},
{minute: '9',value: 365},
{minute: '10',value: 365},

{minute: '11',value: 365},
{minute: '12',value: 365},
{minute: '13',value: 365},
{minute: '14',value: 365},
{minute: '15',value: 365},
{minute: '16',value: 365},
{minute: '17',value: 365},
{minute: '18',value: 365},
{minute: '19',value: 365},
{minute: '20',value: 365},

{minute: '21',value: 365},
{minute: '22',value: 365},
{minute: '23',value: 365},
{minute: '24',value: 365},
{minute: '25',value: 365},
{minute: '26',value: 365},
{minute: '27',value: 365},
{minute: '28',value: 365},
{minute: '29',value: 365},
{minute: '30',value: 365}
]
let input_life_expectancy_in_years=77;

//function append_dh1(parent,innerhtml){
//let one = document.createElement("dh1");
//one.innerHTML = innerhtml;
//parent.appendChild(one);
//}

function display_seconds(){
let screen_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
let screen_height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
let staticColor = 'rgb(119, 0, 255)';
let hoverColor = '#eec42d';
let tooltip = d3
.select('body')
.append('rect')
.attr('class', 'd3-tooltip')
.style('position', 'absolute')
.style('z-index', '10')
.style('visibility', 'hidden')
.style('padding', '10px')
.style('background', 'rgba(0,0,0,0.6)')
.style('border-radius', '4px')
.style('color', '#fff')

let data = rawData;
let width = screen_width 
let height = screen_height / 4
let x = d3
.scaleBand()
.range([0, width])
.domain(data.map(d => d.minute))
.padding(0.2);
let y = d3
.scaleLinear()
.domain([0, d3.max(data, d => d.value)])
.range([height, 0]);
let svg = d3.select("#seconds_view")
.attr("viewBox", [0, 0, width, height]);
let start = new Date;
start =start.getSeconds()
rect = svg
.selectAll('g')
.data(data)
.enter()
.append('rect')
.attr('fill', staticColor)
.attr('x', (d, i) => x(d.minute))
.attr('width', x.bandwidth()*0.75)
.attr('y', d => y(0))
.attr('height', d => height )
.on('mouseover', function (d, i) {
let now = new Date;
now =Math.abs(now.getSeconds()-start)
let inner;
if(d.minute ==1){inner=`<d3_clock_div>${d.minute} second</d3_clock_div>`}
if(d.minute !=1){inner=`<d3_clock_div>${d.minute} seconds</d3_clock_div>`}
tooltip
.html(
// `<div>${d.minute}:${now}</div>`
//  `<div>${d.minute}</div>`
inner
)
.style('visibility', 'visible');
//   d3.select(this).transition().attr('fill', hoverColor);
})
.on('mousemove', function () {
tooltip
.style('top', d3.event.pageY - 10 + 'px')
.style('left', d3.event.pageX + 10 + 'px');
})
.on('mouseout', function () {
tooltip.html(``).style('visibility', 'hidden');
})
// for interaction
/*
.on('mouseover', function (d, i) {
let now = new Date;
now =Math.abs(now.getSeconds()-start)
tooltip
.html(
`<div>${d.minute}:${now}</div>`
)
.style('visibility', 'visible');
d3.select(this).transition().attr('fill', hoverColor);
})
.on('mousemove', function () {
tooltip
.style('top', d3.event.pageY - 10 + 'px')
.style('left', d3.event.pageX + 10 + 'px');
})
.on('mouseout', function () {
tooltip.html(``).style('visibility', 'hidden');
d3.select(this).transition().attr('fill', staticColor);
//console.log(x(d.minute))
// wipe rect d3.select(this).attr('height', y.height );
// set to max height:
//   d3.select(this).attr('x', (d, i) => x(d.minute))
//    d3.select(this).attr('width', x.bandwidth()*0.75)
//    d3.select(this).attr('y', 0)

})
.on('click', function () {
tooltip.html(``).style('visibility', 'hidden');
d3.select(this).transition().attr('fill', staticColor);
//console.log(x(d.minute))
d3.select(this).attr('height', y.height );
//d3.select(this).attr('x', (d, i) => x(d.minute))
//d3.select(this).attr('width', x.bandwidth()*0.75)
//d3.select(this).attr('y',  y(0))
//d3.select(this).attr('height', d => height )//- y(0))'
})
*/
rect.transition()
.delay(function(d, i) { return i * 1000; })
.on("start", function repeat() {
let select = d3.active(this)
//  console.log(select.data.i)
// if(select.data.i == 60){display_seconds}
select
.transition()
.ease(d3.easeLinear)
.duration(1000)
.attr('y', d => y(d.value))
.attr('height', d => height )

.transition()
.duration(60000)
//.duration(function(d, i) {let cur=60000 - (d.minutes * 1000);console.log(cur); return cur  })
.attr('y', d => y(d.value))
.attr('height', d => height )

.transition()
.attr('height', y.height )
//d3.select('#seconds_view').html = ""
// .on("start", display_seconds);
.on("start", repeat);
});
}

function display_minutes(){
let screen_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
//let screen_width = window.availWidth;
let screen_height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
let staticColor = 'rgb(119, 0, 255)';
let hoverColor = '#eec42d';
let tooltip = d3
.select('body')
.append('rect')
.attr('class', 'd3-tooltip')
.style('position', 'absolute')
.style('z-index', '10')
.style('visibility', 'hidden')
.style('padding', '10px')
.style('background', 'rgba(0,0,0,0.6)')
.style('border-radius', '4px')
.style('color', '#fff')
let data = rawData;
let width = screen_width
let height = screen_height / 6
let x = d3
.scaleBand()
.range([0, width])
.domain(data.map(d => d.minute))
.padding(0.2);
let y = d3
.scaleLinear()
.domain([0, d3.max(data, d => d.value)])
.range([height, 0]);
let svg = d3.select("#minutes_view")
.attr("viewBox", [0, 0, width, height]);
let start = new Date;
start =start.getSeconds()
let minutes = 0;
let rect = svg
.selectAll('g')
.data(data)
.enter()
.append('rect')
.attr('fill', staticColor)
.attr('x', (d, i) => x(d.minute))
.attr('width', x.bandwidth()*0.75)
.attr('y', d => y(0))
.attr('height', d => height )//- y(0))
.on('mouseover', function (d, i) {
let now = new Date;
now =Math.abs(now.getSeconds()-start)
let inner;
if(d.minute ==1){inner=`<d3_clock_div>${d.minute} minute</d3_clock_div>`}
if(d.minute !=1){inner=`<d3_clock_div>${d.minute} minutes</d3_clock_div>`}
tooltip
.html(
// `<d3_clock_div>${d.minute}:${now}</d3_clock_div>`
//  `<d3_clock_div>${d.minute}</d3_clock_div>`
inner
)
.style('visibility', 'visible');
})
.on('mousemove', function () {
tooltip
.style('top', d3.event.pageY - 10 + 'px')
.style('left', d3.event.pageX + 10 + 'px');
})
.on('mouseout', function () {
tooltip.html(``).style('visibility', 'hidden');
//  d3.active(this).append('rect').attr('height', y.height )
})
rect.transition()
.delay(function(d, i) { return i * 60000; })
.on("start", function repeat() {
d3.active(this)
.transition()
.ease(d3.easeLinear)
.duration(60000)
.attr('y', d => y(d.value))
.attr('height', d => height )
.transition()
.duration(60000*60)
.attr('y', d => y(d.value))
.attr('height', d => height )

.transition()
.attr('height', y.height )
.on("start", repeat);
});
}

function display_hours(){
let screen_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
//let screen_width = window.availWidth;
let screen_height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
let staticColor = 'rgb(119, 0, 255)';
let hoverColor = '#eec42d';
let tooltip = d3
.select('body')
.append('rect')
.attr('class', 'd3-tooltip')
.style('position', 'absolute')
.style('z-index', '10')
.style('visibility', 'hidden')
.style('padding', '10px')
.style('background', 'rgba(0,0,0,0.6)')
.style('border-radius', '4px')
.style('color', '#fff')
let data = hourData;
let width = screen_width
let height = screen_height / 8
let x = d3
.scaleBand()
.range([0, width])
.domain(data.map(d => d.minute))
.padding(0.2);
let y = d3
.scaleLinear()
.domain([0, d3.max(data, d => d.value)])
.range([height, 0]);
let svg = d3.select("#hours_view")
.attr("viewBox", [0, 0, width, height]);
let start = new Date;
start =start.getSeconds()
let minutes = 0;
let rect = svg
.selectAll('g')
.data(data)
.enter()
.append('rect')
.attr('fill', staticColor)
.attr('x', (d, i) => x(d.minute))
.attr('width', x.bandwidth()*0.75)
.attr('y', d => y(0))
.attr('height', d => height )//- y(0))
.on('mouseover', function (d, i) {
let now = new Date;
now =Math.abs(now.getSeconds()-start)
let inner;
if(d.minute ==1){inner=`<d3_clock_div>${d.minute} hour</d3_clock_div>`}
if(d.minute !=1){inner=`<d3_clock_div>${d.minute} hours</d3_clock_div>`}
tooltip
.html(
// `<d3_clock_div>${d.minute}:${now}</d3_clock_div>`
//  `<d3_clock_div>${d.minute}</d3_clock_div>`
inner
)
.style('visibility', 'visible');
//  d3.select(this).transition().attr('fill', hoverColor);
})
.on('mousemove', function () {
tooltip
.style('top', d3.event.pageY - 10 + 'px')
.style('left', d3.event.pageX + 10 + 'px');
})
.on('mouseout', function () {
tooltip.html(``).style('visibility', 'hidden');
})

rect.transition()
.delay(function(d, i) { return i * 60000*60; })
.on("start", function repeat() {
d3.active(this)
.transition()
.ease(d3.easeLinear)
.duration(60000*60)
.attr('y', d => y(d.value))
.attr('height', d => height )

.transition()
.duration(60000*60*24)
.attr('y', d => y(d.value))
.attr('height', d => height )

.transition()
.attr('height', y.height )
.on("start", repeat);
});
}

/*
function display_title(){
let screen_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
//let screen_width = window.availWidth;
let screen_height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
let staticColor = 'rgb(119, 0, 255)';
let hoverColor = '#eec42d';
let tooltip = d3
.select('body')
.append('rect')
.attr('class', 'd3-tooltip')
.style('position', 'absolute')
.style('z-index', '10')
.style('visibility', 'hidden')
.style('padding', '10px')
.style('background', 'rgba(0,0,0,0.6)')
.style('border-radius', '4px')
.style('color', '#fff')
let data = rawData;
let width = screen_width
let height = screen_height / 8
let x = d3
.scaleBand()
.range([0, width])
.domain(data.map(d => d.minute))
.padding(0.2);
let y = d3
.scaleLinear()
.domain([0, d3.max(data, d => d.value)])
.range([height, 0]);
let inner=`<h3>This is your life.  Time is flying by.</h3>`
let svg = d3.select("#title_view")
.attr("viewBox", [0, 0, width, height])
.innerHtml(inner)
.selectAll('g')
.data(data)
.enter()
.text("This is your life.  Time is flying by.")
.html(inner)

// 
// let rect = svg
///     .selectAll('g')
//     .data(data)
//     .enter()
///     .append('rect')
//    .html(inner)
}
*/
display_seconds();
display_minutes();
display_hours();
//display_title();
