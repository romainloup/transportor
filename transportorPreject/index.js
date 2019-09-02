/*projet transportor*/

// Map parameters
var mymap = new L.Map('map', {
	center: [46.532221, 6.629156],
	maxBounds: [[45.8, 5.0], [48.0, 10.5]],
	zoom: 13,
	minZoom: 10,
	maxZoom: 16,
});

// Current location
navigator.geolocation.getCurrentPosition(function(location) {
  var latlng = new L.LatLng(location.coords.latitude, location.coords.longitude);
  mapboxLayer.addTo(mymap);
  var marker = L.marker(latlng, {icon: hereIcon}).addTo(mymap);
  marker.bindPopup("<b>Position actuelle</b>");
});

// 3 different layers
var osmLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
});

var mapboxLayer = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoicm9tYWlubG91cCIsImEiOiJjamFiMHZ1bG4weGh3MnFvNm9mbnBzejU4In0.SlftowyF8U9Aimx9LVtCSw', {
    attribution: '&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a> &copy; <a href="http://www.openstreetmap.org">OpenStreetMap</a> contributors'
});

var satellite = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: '&copy; <a href="https://www.esri.com/fr-fr/home">Esri</a>, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

// Mapbox by default
mapboxLayer.addTo(mymap);

// Layers button
var baseLayers = {
	"OSM": osmLayer,
  "Mapbox": mapboxLayer,
  "Satellite": satellite,
};
var overlays = {};
L.control.layers(baseLayers, overlays).addTo(mymap)

// Scale
L.control.scale({imperial: false}).addTo(mymap);

// Markers design
var busIcon = L.icon({
    iconUrl: 'icones/bus.svg',
    iconSize: [10, 10],
    iconAnchor: [0, 0],
    popupAnchor: [5, 0]
 });

var greenBusIcon = L.icon({
    iconUrl: 'icones/greenBus.svg',
    iconSize: [10, 10],
    iconAnchor: [0, 0],
    popupAnchor: [5, 0]
 });

var hereIcon = L.icon({
    iconUrl: 'icones/here.svg',
    iconSize: [28, 41],
    iconAnchor: [14, 40],
    popupAnchor: [0, -40]
 });

 var aAdressIcon = L.icon({
     iconUrl: 'icones/adressA.svg',
     iconSize: [28, 41],
     iconAnchor: [14, 40],
     popupAnchor: [0, -40]
  });

var bAdressIcon = L.icon({
    iconUrl: 'icones/adressB.svg',
    iconSize: [28, 41],
    iconAnchor: [14, 40],
    popupAnchor: [0, -40]
 });

// Layer stops
var layerGroup = L.geoJSON(stops_tp_tl, {
  pointToLayer: function(feat, latlng) {
    return L.marker(latlng, {icon:busIcon});
  },
  onEachFeature: function (feature, layer) {
    layer.bindPopup('<h5>'+feature.properties.stop_name+'</h5>'+'<h6>Ligne(s) : '+feature.properties.line_name+'</h6>');
  }
}).addTo(mymap);

// Lines
var varLine1 = L.geoJSON(line1, {"color": "#ff0000"}).bindPopup("Ligne 1");
var varLine2 = L.geoJSON(line2, {"color": "#0000ff"}).bindPopup("Ligne 2");
var varLine3 = L.geoJSON(line3, {"color": "#00ff00"}).bindPopup("Ligne 3");
var varLine4 = L.geoJSON(line4, {"color": "#00ffff"}).bindPopup("Ligne 4");
var varLine6 = L.geoJSON(line6, {"color": "#ffff00"}).bindPopup("Ligne 6");
var varLine7 = L.geoJSON(line7, {"color": "#8700ff"}).bindPopup("Ligne 7");
var varLine8 = L.geoJSON(line8, {"color": "#ffbb00"}).bindPopup("Ligne 8");
var varLine9 = L.geoJSON(line9, {"color": "#ff00fa"}).bindPopup("Ligne 9");
var varLine12 = L.geoJSON(line12, {"color": "#00bbff"}).bindPopup("Ligne 12");
var varLine13 = L.geoJSON(line13, {"color": "#6b1393"}).bindPopup("Ligne 13");
var varLine16 = L.geoJSON(line16, {"color": "#131592"}).bindPopup("Ligne 16");
var varLine17 = L.geoJSON(line17, {"color": "#660b0b"}).bindPopup("Ligne 17");
var varLine18 = L.geoJSON(line18, {"color": "#364d0a"}).bindPopup("Ligne 18");
var varLine21 = L.geoJSON(line21, {"color": "#096616"}).bindPopup("Ligne 21");
var varLine22 = L.geoJSON(line22, {"color": "#09665c"}).bindPopup("Ligne 22");
var varLine23 = L.geoJSON(line23, {"color": "#706039"}).bindPopup("Ligne 23");
var varLine25 = L.geoJSON(line25, {"color": "#555b7a"}).bindPopup("Ligne 25");
var varLine29 = L.geoJSON(line29, {"color": "#d383bb"}).bindPopup("Ligne 29");
var varLine31 = L.geoJSON(line31, {"color": "#a0e5a1"}).bindPopup("Ligne 31");
var varLine32 = L.geoJSON(line32, {"color": "#a0d8e5"}).bindPopup("Ligne 32");
var varLine33 = L.geoJSON(line33, {"color": "#baba18"}).bindPopup("Ligne 33");
var varLine36 = L.geoJSON(line36, {"color": "#baffee"}).bindPopup("Ligne 36");
var varLine38 = L.geoJSON(line38, {"color": "#febaff"}).bindPopup("Ligne 38");
var varLine41 = L.geoJSON(line41, {"color": "#123321"}).bindPopup("Ligne 41");
var varLine42 = L.geoJSON(line42, {"color": "#ab384b"}).bindPopup("Ligne 42");
var varLine45 = L.geoJSON(line45, {"color": "#ffd416"}).bindPopup("Ligne 45");
var varLine46 = L.geoJSON(line46, {"color": "#ff1616"}).bindPopup("Ligne 46");
var varLine47 = L.geoJSON(line47, {"color": "#ff9616"}).bindPopup("Ligne 47");
var varLine48 = L.geoJSON(line48, {"color": "#5e61ff"}).bindPopup("Ligne 48");
var varLine49 = L.geoJSON(line49, {"color": "#005e5c"}).bindPopup("Ligne 49");
var varLine54 = L.geoJSON(line54, {"color": "#3e005e"}).bindPopup("Ligne 54");
var varLine60 = L.geoJSON(line60, {"color": "#a400ad"}).bindPopup("Ligne 60");
var varLine62 = L.geoJSON(line62, {"color": "#632727"}).bindPopup("Ligne 62");
var varLine64 = L.geoJSON(line64, {"color": "#273b63"}).bindPopup("Ligne 64");
var varLine65 = L.geoJSON(line65, {"color": "#caca00"}).bindPopup("Ligne 65");
var varLine67 = L.geoJSON(line67, {"color": "#80caca"}).bindPopup("Ligne 67");
var varLine68 = L.geoJSON(line68, {"color": "#bafbaf"}).bindPopup("Ligne 68");
var varLine69 = L.geoJSON(line69, {"color": "#cc3e22"}).bindPopup("Ligne 69");
var varLineBus_LEB = L.geoJSON(lineBus_LEB, {"color": "#087e91"}).bindPopup("Bus LEB");
var varM1 = L.geoJSON(m1, {"color": "#0a40c9"}).bindPopup("Métro m1");
var varM2 = L.geoJSON(m2, {"color": "#e20f0f"}).bindPopup("Métro m2");
var varLEB = L.geoJSON(LEB, {"color": "#08910f"}).bindPopup("LEB");

// lines list
var arrayLines = [varLine1, varLine2, varLine3, varLine4, varLine6, varLine7, varLine8,
varLine9, varLine12, varLine13, varLine16, varLine17, varLine18, varLine21, varLine22,
varLine23, varLine25, varLine29, varLine31, varLine32, varLine33, varLine36, varLine38,
varLine41, varLine42, varLine45, varLine46, varLine47, varLine48, varLine49, varLine54,
varLine60, varLine62, varLine64, varLine65, varLine67, varLine68, varLine69, varLineBus_LEB,
varM1, varM2, varLEB];

// Shows/hides the stops markers
function mStopsOnOff() {
  var checkBoxM = document.getElementById("stopMarkers");
  if (checkBoxM.checked == true){
    mymap.addLayer(layerGroup);
  } else {
     mymap.removeLayer(layerGroup);
  }
}

// Shows/hides the lines
function linesOnOff() {
  x = 0;
  while (x < arrayLines.length){
    var checkBox = document.getElementById("line"+x);
  if (checkBox.checked == true){
    mymap.addLayer(arrayLines[x]);
  } else {
    mymap.removeLayer(arrayLines[x]);
  }
  x++;
  }
}

// Route calculation-------------------------------------------------------------

// Geocoding, show the adress
var geocodeService = L.esri.Geocoding.geocodeService();

// Departure and arrival
var currentPointField = 'fromPoint'; //for the buses
var fromStopName = 'fromStopNames';
var counter = 0;
var markerA;
var markerB;

// Click on the map
mymap.on('click', function(e){
	counter++;
  var pt = e.latlng;
	if (counter == 1) {
		$('#fromPoint').val(pt.lat + ',' + pt.lng);
		var markerA = L.marker(
      pt, {
				icon: aAdressIcon,
        draggable: true
      }
    );
		markerA.on('drag', function(e) {
			var pt = e.latlng;
			$('#fromPoint').val(pt.lat + ',' + pt.lng);
    });
		markerA.addTo(mymap);
	} else if (counter == 2) {
		$('#toPoint').val(pt.lat + ',' + pt.lng);
		var markerB = L.marker(
			pt, {
				icon: bAdressIcon,
				draggable: true
			}
		);
		markerB.on('drag', function(e) {
			var pt = e.latlng;
			$('#toPoint').val(pt.lat + ',' + pt.lng);
		});
		markerB.addTo(mymap);
	};
});

// Click on the bus marker
layerGroup.on('click', function(e){
	counter++;
  var pt = e.latlng;
  $('#'+currentPointField).val(pt.lat + ',' + pt.lng);
  currentPointField = currentPointField == 'fromPoint' ? 'toPoint' : 'fromPoint';
  L.marker(pt, {icon:greenBusIcon}).addTo(mymap);
});

// Stop List
stopsList = [];
stops_tp_tl.features.forEach(function(x) {
	stopsList.push(x.properties.stop_name)
});

// Bind the list of the names of the stops for the selectors
let optSelectStop = d3.select('#fromStopNames')
  .selectAll("option")
  .data(stopsList)
  .enter()
  .append("option")
  .text(function(d){ return d; });

let optSelectStop2 = d3.select('#toStopNames')
  .selectAll("option")
  .data(stopsList)
  .enter()
  .append("option")
  .text(function(d){ return d; });

// Time request from html
var currentTimeField = 'appt';

// Get the point from a stop
function getPointFromArret(arret){
	for (var i=0; i < stops_tp_tl.features.length; i++){
		var stop = stops_tp_tl.features[i];
		if (stop.properties.stop_name == arret) return stop.properties.stop_lat + ',' + stop.properties.stop_lon;
	}
}


//Interactive calculation-----------------------------------------------------------------------------

// Choose the type of transport (car or PT)
function chooseT(){
    var radios = document.getElementsByName('chooseTransportMode');
    for(var i = 0; i < radios.length; i++){
        radios[i].onclick = function(){
				transportChoice = this.value;
			}
    }
		return transportChoice
};
var transportChoice = 'TRANSIT,WALK'
var transportChoice = chooseT();

//Calculate the route (public transportation)
function calculateRoute(){
	var fromArret = $('#fromStopNameInput').val();
	var fromPoint = getPointFromArret(fromArret);
	var toArret = $('#toStopNameInput').val();
	var toPoint = getPointFromArret(toArret);
  var appt = $('#appt').val();
	var dayDate = $('#dayDate').val();
  $.ajax({
		url: 'http://localhost:8080/otp/routers/default/plan',
    type: 'GET',
    dataType: 'json',
    data: {
      fromPlace: fromPoint,
      toPlace: toPoint,
			date: dayDate,
      time: appt,
      mode: 'TRANSIT,WALK'
    },
    success: function(data) {
        drawRoute(data);
        showTime();
        showTrans();
        showWalkDist();
        showMode();
        showTimeTransit();
				showTravelTime();
				singleBar();
    },
    error: calculateRouteError,
    beforeSend: setHeader
  });
}

// Route on click
function calculateRouteClick(){
  var fromPoint2 = $('#fromPoint').val();
 	var toPoint2 = $('#toPoint').val();
 	var appt = $('#appt').val();
	var dayDate = $('#dayDate').val();
  $.ajax({
		url: 'http://localhost:8080/otp/routers/default/plan',
    type: 'GET',
    dataType: 'json',
    data: {
      fromPlace: fromPoint2,
      toPlace: toPoint2,
      time: appt,
			date: dayDate,
			mode: transportChoice
    },
    success: function(data) {
        drawRoute(data);
        showTime();
        showTrans();
        showWalkDist();
        showMode();
        showTimeTransit();
				showTravelTime();
				singleBar();
    },
    error: calculateRouteError,
    beforeSend: setHeader
  });
}

// Route on address

// Set the point A and B from an address
function calLatLngA(){
	geocodeService.geocode().text($('#markgeocodeA').val()).run(function (err, results, response) {
		if (err) {
			console.log(err);
			return;
		}
		latLngA = results.results[0].latlng.lat + "," + results.results[0].latlng.lng;
		return latLngA;
	});
};
var latLngA = calLatLngA();

// B point
function calLatLngB(){
	geocodeService.geocode().text($('#markgeocodeB').val()).run(function (err, results, response) {
		if (err) {
			console.log(err);
			return;
		}
		latLngB = results.results[0].latlng.lat + "," + results.results[0].latlng.lng;
		return latLngB;
	});
};
var latLngB = calLatLngB();

function calculateRouteAdress(){
 	var appt = $('#appt').val();
	var dayDate = $('#dayDate').val();
  $.ajax({
		url: 'http://localhost:8080/otp/routers/default/plan',
    type: 'GET',
    dataType: 'json',
    data: {
      fromPlace: latLngA,
      toPlace: latLngB,
      time: appt,
			date: dayDate,
			mode: transportChoice
    },
    success: function(data) {
        drawRoute(data);
        showTime();
        showTrans();
        showWalkDist();
        showMode();
        showTimeTransit();
				showTravelTime();
				singleBar();
    },
    error: calculateRouteError,
    beforeSend: setHeader
  });
}


// Isochrones
var fromPlace = $('#fromPoint').val();
function calculateIsochrone(){
	var appt = $('#appt').val();
	var dayDate = $('#dayDate').val();
	var cutoff1 = $('#cutoff1').val()*60;
	var cutoff2 = $('#cutoff2').val()*60;
	var cutoffSetting = '&cutoffSec='+cutoff1+'&cutoffSec='+cutoff2;
	$.ajax({
		url: 'http://localhost:8080/otp/routers/default/isochrone?' + cutoffSetting,
		type: 'GET',
		dataType: 'json',
		data: {
			fromPlace: $('#fromPoint').val(),
			mode: transportChoice,
			maxWalkDistance: 1500, //in metres
		},
	 success: drawIsochrone,
	 error: isochroneError
 });
}

var gIso = {}; // geometry of isochrones

function cleanGIso(){
  if (gIso.isochrones) {mymap.removeLayer(gIso.isochrones);}
  if (gIso.origin) {mymap.removeLayer(gIso.origin);}
}

function drawIsochrone(data){
  if (data.features.length == 0) {
    alert("Pas d'isochrone");
    return;
  }
  cleanGIso();

  gIso.isochrones = L.geoJSON(data, {
      style: function(feature){
        return {
					fillColor: '#4f79f7',
          color: '#ffffff',
          weight: 0.5,
          fillOpacity: 0.5
        };
      }
    }).addTo(mymap);

  gIso.isochrones.bindTooltip(
    function(e) {
      var t = e.feature.properties.time;
      return (t/60) + ' minutes';
    },
    {
      sticky: true,
      opacity: 0.5
    }
  ).addTo(mymap);
}

function isochroneError(error){
  alert('Error during isochrone calculation.');
  console.log('Isochrone error', error);
}

// Draw routes
function setHeader(xhr){
  xhr.setRequestHeader('Accept', 'application/json');
}

function drawRoute(data){
  console.log('drawRoute', data);

  if (data.error){
    alert(data.error.msg);
    return;
  }

  // Show the first itinerary (OTP returns several alternatives), blue for TRANSIT, yellow for CAR and red for WALK
  var itin = data.plan.itineraries[0];
  window.ITIN = itin;
  for (var i=0; i < itin.legs.length; i++){
    if (window.ITIN.legs[i].mode === 'WALK') {
      var leg = itin.legs[i].legGeometry.points;
      var geomLegRed = polyline.toGeoJSON(leg);
      L.geoJSON(geomLegRed, {
        style: function(feature){
          return {
            color: '#ff0000',
            opacity: 0.7
          };
        }
      }).addTo(mymap);
    }
		else if (window.ITIN.legs[i].mode === 'CAR') {
      var leg = itin.legs[i].legGeometry.points;
      var geomLegYellow = polyline.toGeoJSON(leg);
      L.geoJSON(geomLegYellow, {
        style: function(feature){
          return {
            color: '#ffc621',
            opacity: 0.7
          };
        }
      }).addTo(mymap);
    }
		else if (window.ITIN.legs[i].mode === 'BICYCLE') {
      var leg = itin.legs[i].legGeometry.points;
      var geomLegYellow = polyline.toGeoJSON(leg);
      L.geoJSON(geomLegYellow, {
        style: function(feature){
          return {
            color: '#2aad3d',
            opacity: 0.7
          };
        }
      }).addTo(mymap);
    }
    else {
      var leg = itin.legs[i].legGeometry.points;
      var geomLegBlue = polyline.toGeoJSON(leg);
      L.geoJSON(geomLegBlue, {
        style: function(feature){
          return {
            color: '#0000ff',
            opacity: 0.7
          };
        }
      }).addTo(mymap);
    }
  }

  // Show origin and destination
  var origin = L.circleMarker(
    [data.plan.from.lat, data.plan.from.lon],
    {
      color: '#000000',
      fillOpacity: 0.5,
      fillColor: '#ff0000'
    }
  ).addTo(mymap);

  var destination = L.circleMarker(
    [data.plan.to.lat, data.plan.to.lon],
    {
      color: '#000000',
      fillOpacity: 0.5,
      fillColor: '#0000ff'
    }
  ).addTo(mymap);
}


function calculateRouteError(error){
  alert('Error during route calculation.');
  console.log('Routing error', error);
}

// actual time
function actualTime(){
  var now = new Date();
  var timeNow = now.toLocaleTimeString().slice(0,5);
	var dateNow = new Date().toISOString().substr(0, 10)
  document.getElementById("appt").value = timeNow;
	document.getElementById("dayDate").value = dateNow;
}
actualTime();

// Departure and arrival times
function showTime(){
  var sdt = new Date(ITIN.endTime);
  var arrivalTime = sdt.toLocaleTimeString().slice(0,5);
  document.getElementById("arTime").innerHTML = arrivalTime;
}

// Time of the fist TRANSIT
function showTimeTransit(){
  var startTrans = new Date(ITIN.startTime);
  var startTransTime = startTrans.toLocaleTimeString().slice(0,5);
  document.getElementById("depTime").innerHTML = startTransTime;
}

// Time of travel
function showTravelTime(){
  var duration = ITIN.duration;
	durHour = new Date(duration * 1000).toISOString().substr(11, 8).slice(0,2);
	durMin = new Date(duration * 1000).toISOString().substr(11, 8).slice(3,5);
	document.getElementById("travTime").innerHTML = durHour + " heure(s) " + durMin + " minute(s)";
}

// Number of transfers
function showTrans(){
  var trans = ITIN.transfers;
  document.getElementById("nbTrans").innerHTML = trans + " changement(s)";
}

// Walking distance
function showWalkDist(){
  var walk = Math.round(ITIN.walkDistance);
  document.getElementById("walkDist").innerHTML = walk + " mètres";
}

//Step of the mode
var steps = [];
function showMode(){
  var m = 0;
  var z = 1;
  while (m < ITIN.legs.length) {
    var stopMode = ITIN.legs[m].mode;
    var nameStopsR = ITIN.legs[m].to.name;
    var lineStopR = ITIN.legs[m].routeShortName;
    if (lineStopR == undefined) {
      var lineStopR = "";
    }
    if (stopMode == "WALK") {
      var stopMode = "à pied";
    }
    else if (stopMode == "SUBWAY") {
      var stopMode = "métro";
    }
		else if (stopMode == "RAIL") {
      var stopMode = "train";
    }
		else if (stopMode == "BICYCLE") {
      var stopMode = "vélo";
    }
		else if (stopMode == "CAR") {
      var stopMode = "voiture";
    }
    if (nameStopsR == "Chavannes-p.-R., UNIL-Mouline") {
      swal("N'entrez pas au Géopolis, vous y serez bloqué pour des années !")
      .then((value) => {
        swal(`Vous êtes fou !!! Bon... c'est votre problème après tout...`);
      });
    }
		steps.push("<b>Etape </b><b>" + z + " : </b>" + nameStopsR + "; " + stopMode + ". " + lineStopR + "</br>");
    m++;
    z++;
  }
	// steps.join("") to get rid of the comma
	var stepsString = steps.join("").toString();
	document.getElementById("StopsMode").innerHTML = stepsString;
	steps = [];
}

// sidebar
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

function openNav2() {
  document.getElementById("mySidenav2").style.width = "300px";
  document.getElementById("main").style.marginRight = "300px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav2() {
  document.getElementById("mySidenav2").style.width = "0";
  document.getElementById("main").style.marginRight = "0";
}

// Info button
var counter2 = 0;
function clicker(){
	L.easyButton('<span title="Informations sur le trajet"><h5>&#9776;</h5></span>', function(btn, map){
		id: 'buttonId',
		counter2++;
		if (counter2 % 2 == 0) {
			closeNav2()
		}
		else {
			openNav2()
		}
	}).addTo(mymap);
	return counter2
}
var counter2 = clicker();
let toolTip = d3.select('body')
  .append('div')
  .attr("class", "tooltip")
  .style("opacity", 0)

function singleBar(){
	var dataC = [];
	var legLength = ITIN.legs.length;
	for (var i = 0; i < ITIN.legs.length; i++) {
		dataC.push(ITIN.legs[i].duration);
	}

	var width = "100%",
	    height = 30,
		goal = 600,
		percSoFar = 0;
	var totalTime = d3.sum(dataC);
	var chart = d3.select("#chart")
		.attr("width", "100%")
		.attr("height", height);
	var chartWidth = parseInt(d3.select("#chart").style("width"));
	var color = d3.scale.category20b();
	var bar = chart.selectAll("g")
		.data(dataC)
		.enter().append("g");
	bar.append("rect")
		.attr("width", function(d) { return ((d/totalTime)*100) + "%"; } )
		.attr("x", function(d) {
			var prevPerc = percSoFar;
			var thisPerc = 100*(d/totalTime);
			percSoFar = percSoFar + thisPerc;
			return prevPerc + "%";
		})
		.attr("height", height)
		.attr("fill",  function(d) { return (color(d)) } )
		.on("mouseover", function(d) {
			d3.select(this).transition()
               .duration('50')
               .attr('opacity', '.85');
				toolTip.transition()
						.duration(200)
						.style("opacity", .9);
				toolTip	.html(Math.floor(d/60) + " min " + Math.round((d/60-Math.floor(d/60))*60) + " s")
				.style("left", `${d3.event.pageX-60}px`)
        .style("top", `${d3.event.pageY-20}px`);
				})
			.on('mouseout', function (d) {
        d3.select(this).transition()
             .duration('50')
             .attr('opacity', '1')
				toolTip.transition()
				  .duration(500)
				  .style("opacity", 0);
			});

// Size
	function resize () {
		var width = parseInt(d3.select("#chart").style("width"));
	}
}

// Refresh the page
function refresh(){
	document.location.reload()
}
