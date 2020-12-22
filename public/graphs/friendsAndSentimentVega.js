//Plots the sentiments of tweets in comparison with friend group sizes
function plotSentiments(sentiments, container){
	var graph = {
  		"$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  		"description": "A scatterplot showing the relative sentiments of tweets in comparison to the persons friend group",
		"width": 400,
  		"height": 250,
  		"data": {
			"name": "table",
			"values": sentiments
		},
  		"mark": "bar",
		"transform":[
			{
			"filter": {"field": "friendsCount", "range": [0, 30000]}
			}
		],
  		"encoding": {
    			"y": {"field": "friendsCount", "type": "quantitative", "title": "Average number of friends", "aggregate": "average"},
			"x": {"field": "sentimentScore", "type": "ordinal", "title": "Sentiment"},
  		}
	}
  	vegaEmbed('#' + container, graph);
}