var routes = require('./BusStopsAsOfMarch2.json');
var fs = require('file-system');

function filterJson(item) { 
    if (item.properties.box_id === "300692" || item.properties.box_id === "300693" || item.properties.box_id === "300765" || item.properties.box_id === "300766" || item.properties.box_id === "300790" || item.properties.box_id === "300791" || item.properties.box_id === "300792" || item.properties.box_id === "300794" || item.properties.box_id === "300795" || item.properties.box_id === "300796" || item.properties.box_id === "300797" || item.properties.box_id === "300798" || item.properties.box_id === "300799" || item.properties.box_id === "300800" || item.properties.box_id === "300801" || item.properties.box_id === "300802" || item.properties.box_id === "300803" || item.properties.box_id === "300804" || item.properties.box_id === "300805" || item.properties.box_id === "300806" || item.properties.box_id === "300807" || item.properties.box_id === "300808" || item.properties.box_id === "300809" || item.properties.box_id === "300811" || item.properties.box_id === "300812" || item.properties.box_id === "300814" || item.properties.box_id === "300815" || item.properties.box_id === "300816" || item.properties.box_id === "300817" || item.properties.box_id === "300818" || item.properties.box_id === "300819" || item.properties.box_id === "300820" || item.properties.box_id === "300821" || item.properties.box_id === "300822" || item.properties.box_id === "300823" || item.properties.box_id === "300824" || item.properties.box_id === "300825" || item.properties.box_id === "300826" || item.properties.box_id === "300827" || item.properties.box_id === "300828" || item.properties.box_id === "300830" || item.properties.box_id === "300831" || item.properties.box_id === "300832" || item.properties.box_id === "300833" || item.properties.box_id === "300834" || item.properties.box_id === "300835" || item.properties.box_id === "300836" || item.properties.box_id === "300837" || item.properties.box_id === "300838" || item.properties.box_id === "300839" || item.properties.box_id === "300841" || item.properties.box_id === "300842" || item.properties.box_id === "300843" || item.properties.box_id === "300844" || item.properties.box_id === "300847" || item.properties.box_id === "300848" || item.properties.box_id === "300858" || item.properties.box_id === "300859" || item.properties.box_id === "300862" || item.properties.box_id === "300863" || item.properties.box_id === "300864" || item.properties.box_id === "300865" || item.properties.box_id === "300866" || item.properties.box_id === "300867" || item.properties.box_id === "300868" || item.properties.box_id === "300869" || item.properties.box_id === "300873" || item.properties.box_id === "300874" || item.properties.box_id === "300875" || item.properties.box_id === "300876" || item.properties.box_id === "300877" || item.properties.box_id === "300878" || item.properties.box_id === "300879" || item.properties.box_id === "300880" || item.properties.box_id === "300881" || item.properties.box_id === "300882" || item.properties.box_id === "300883" || item.properties.box_id === "300884" || item.properties.box_id === "300885" || item.properties.box_id === "300886" || item.properties.box_id === "300887" || item.properties.box_id === "300888" || item.properties.box_id === "300889" || item.properties.box_id === "300890" || item.properties.box_id === "300891" || item.properties.box_id === "300892" || item.properties.box_id === "300893" || item.properties.box_id === "300894" || item.properties.box_id === "300895" || item.properties.box_id === "300896" || item.properties.box_id === "300898" || item.properties.box_id === "300899" || item.properties.box_id === "300900" || item.properties.box_id === "300901" || item.properties.box_id === "300902" || item.properties.box_id === "300903" || item.properties.box_id === "300904" || item.properties.box_id === "300905" || item.properties.box_id === "300906" || item.properties.box_id === "300908" || item.properties.box_id === "300909" || item.properties.box_id === "300910" || item.properties.box_id === "300911" || item.properties.box_id === "300912" || item.properties.box_id === "300913" || item.properties.box_id === "300914" || item.properties.box_id === "300915" || item.properties.box_id === "300916" || item.properties.box_id === "301746" || item.properties.box_id === "301783" || item.properties.box_id === "302721" || item.properties.box_id === "302722" || item.properties.box_id === "302723" || item.properties.box_id === "302724" || item.properties.box_id === "303477" || item.properties.box_id === "305872" || item.properties.box_id === "305873" || item.properties.box_id === "305951" || item.properties.box_id === "305952" || item.properties.box_id === "306344" || item.properties.box_id === "306345" || item.properties.box_id === "306454" || item.properties.box_id === "306470" || item.properties.box_id === "306838" || item.properties.box_id === "306843" || item.properties.box_id === "306845" || item.properties.box_id === "306846" || item.properties.box_id === "306869" || item.properties.box_id === "306870" || item.properties.box_id === "306945" || item.properties.box_id === "306959" || item.properties.box_id === "307099" || item.properties.box_id === "307115" || item.properties.box_id === "307128" || item.properties.box_id === "307203" || item.properties.box_id === "307313" || item.properties.box_id === "307475" || item.properties.box_id === "307582" || item.properties.box_id === "307593" || item.properties.box_id === "307666" || item.properties.box_id === "307914" || item.properties.box_id === "307951" || item.properties.box_id === "307954" || item.properties.box_id === "307994" || item.properties.box_id === "308038" || item.properties.box_id === "308039" || item.properties.box_id === "308040" || item.properties.box_id === "308176" || item.properties.box_id === "308270" || item.properties.box_id === "308313" || item.properties.box_id === "308314" || item.properties.box_id === "308357" || item.properties.box_id === "308358" || item.properties.box_id === "308359" || item.properties.box_id === "308537" || item.properties.box_id === "901029" || item.properties.box_id === "901082") {
      return true;
    }
    return false;
  }

  var b8 = routes.features.filter(filterJson);
  b8 = JSON.stringify(b8);
  fs.writeFile('./filtered-b8-stops.json', b8)