ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-11908350.053654, 3647481.291579, -11817605.088081, 3736045.129801]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_MapaSatellite_1 = new ol.layer.Tile({
            'title': 'Mapa Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_seccionesconganadorayunganador_por_seccion_2 = new ol.format.GeoJSON();
var features_seccionesconganadorayunganador_por_seccion_2 = format_seccionesconganadorayunganador_por_seccion_2.readFeatures(json_seccionesconganadorayunganador_por_seccion_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_seccionesconganadorayunganador_por_seccion_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_seccionesconganadorayunganador_por_seccion_2.addFeatures(features_seccionesconganadorayunganador_por_seccion_2);
var lyr_seccionesconganadorayunganador_por_seccion_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_seccionesconganadorayunganador_por_seccion_2, 
                style: style_seccionesconganadorayunganador_por_seccion_2,
                popuplayertitle: 'secciones con ganador ayun — ganador_por_seccion',
                interactive: true,
    title: 'secciones con ganador ayun — ganador_por_seccion<br />\
    <img src="styles/legend/seccionesconganadorayunganador_por_seccion_2_0.png" /> EMPATE<br />\
    <img src="styles/legend/seccionesconganadorayunganador_por_seccion_2_1.png" /> FRENTE ALTO<br />\
    <img src="styles/legend/seccionesconganadorayunganador_por_seccion_2_2.png" /> FRENTE BAJO<br />\
    <img src="styles/legend/seccionesconganadorayunganador_por_seccion_2_3.png" /> FRENTE MEDIO<br />\
    <img src="styles/legend/seccionesconganadorayunganador_por_seccion_2_4.png" /> MORENA ALTO<br />\
    <img src="styles/legend/seccionesconganadorayunganador_por_seccion_2_5.png" /> MORENA BAJO<br />\
    <img src="styles/legend/seccionesconganadorayunganador_por_seccion_2_6.png" /> MORENA MEDIO<br />' });
var format_PrimariasPublicas_3 = new ol.format.GeoJSON();
var features_PrimariasPublicas_3 = format_PrimariasPublicas_3.readFeatures(json_PrimariasPublicas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrimariasPublicas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrimariasPublicas_3.addFeatures(features_PrimariasPublicas_3);
cluster_PrimariasPublicas_3 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_PrimariasPublicas_3
});
var lyr_PrimariasPublicas_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_PrimariasPublicas_3, 
                style: style_PrimariasPublicas_3,
                popuplayertitle: 'Primarias Publicas',
                interactive: true,
                title: '<img src="styles/legend/PrimariasPublicas_3.png" /> Primarias Publicas'
            });

lyr_OSMStandard_0.setVisible(true);lyr_MapaSatellite_1.setVisible(true);lyr_seccionesconganadorayunganador_por_seccion_2.setVisible(true);lyr_PrimariasPublicas_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_MapaSatellite_1,lyr_seccionesconganadorayunganador_por_seccion_2,lyr_PrimariasPublicas_3];
lyr_seccionesconganadorayunganador_por_seccion_2.set('fieldAliases', {'fid': 'fid', 'LN': 'LN', 'DISTRITO_F': 'DISTRITO_F', 'DISTRITO_L': 'DISTRITO_L', 'SECCION': 'SECCION', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_Distrito': 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_Distrito', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_NoMpio': 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_NoMpio', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_Municipio': 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_Municipio', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_PAN': 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_PAN', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_PRI': 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_PRI', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_PRD': 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_PRD', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_PVEM': 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_PVEM', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_PT': 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_PT', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_MC': 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_MC', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_MORENA': 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_MORENA', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_NACH': 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_NACH', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_PES': 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_PES', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_RSP': 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_RSP', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_FxM': 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_FxM', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_PAN-PRD': 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_PAN-PRD', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_PT-MORENA-NACH': 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_PT-MORENA-NACH', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_PT-MORENA': 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_PT-MORENA', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_PT-NACH': 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_PT-NACH', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_MORENA-NACH': 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_MORENA-NACH', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_CAND. NO REG': 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_CAND. NO REG', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_NULOS': 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_NULOS', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_TOTAL': 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_TOTAL', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_CRUZ': 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_CRUZ', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_FRENTE': 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_FRENTE', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_MORENA_1': 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_MORENA_1', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_FRENTE_1': 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_FRENTE_1', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_DIFF': 'Ganador de la seccion', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_GANADOR POR SECCION': 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_GANADOR POR SECCION', });
lyr_PrimariasPublicas_3.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'GlobalID': 'GlobalID', 'MODALIDAD': 'MODALIDAD', 'ID': 'ID', 'NOMBRE': 'Nombre', 'DIRECCION': 'DIRECCION', 'CLAVE': 'CLAVE', 'Turno': 'Turno', 'TAMUJERES': 'TAMUJERES', 'TAHOMBRES': 'TAHOMBRES', 'TALUMNOS': 'Total de alumnos', });
lyr_seccionesconganadorayunganador_por_seccion_2.set('fieldImages', {'fid': 'TextEdit', 'LN': 'TextEdit', 'DISTRITO_F': 'TextEdit', 'DISTRITO_L': 'TextEdit', 'SECCION': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_Distrito': 'TextEdit', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_NoMpio': 'TextEdit', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_Municipio': 'TextEdit', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_PAN': 'TextEdit', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_PRI': 'TextEdit', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_PRD': 'TextEdit', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_PVEM': 'TextEdit', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_PT': 'TextEdit', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_MC': 'TextEdit', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_MORENA': 'TextEdit', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_NACH': 'TextEdit', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_PES': 'TextEdit', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_RSP': 'TextEdit', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_FxM': 'TextEdit', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_PAN-PRD': 'TextEdit', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_PT-MORENA-NACH': 'TextEdit', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_PT-MORENA': 'TextEdit', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_PT-NACH': 'TextEdit', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_MORENA-NACH': 'TextEdit', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_CAND. NO REG': 'TextEdit', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_NULOS': 'TextEdit', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_TOTAL': 'TextEdit', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_CRUZ': 'TextEdit', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_FRENTE': 'TextEdit', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_MORENA_1': 'TextEdit', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_FRENTE_1': 'TextEdit', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_DIFF': 'TextEdit', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_GANADOR POR SECCION': 'TextEdit', });
lyr_PrimariasPublicas_3.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'GlobalID': 'TextEdit', 'MODALIDAD': 'TextEdit', 'ID': 'TextEdit', 'NOMBRE': 'TextEdit', 'DIRECCION': 'TextEdit', 'CLAVE': 'TextEdit', 'Turno': 'TextEdit', 'TAMUJERES': 'TextEdit', 'TAHOMBRES': 'TextEdit', 'TALUMNOS': 'TextEdit', });
lyr_seccionesconganadorayunganador_por_seccion_2.set('fieldLabels', {'fid': 'no label', 'LN': 'header label - visible with data', 'DISTRITO_F': 'no label', 'DISTRITO_L': 'no label', 'SECCION': 'hidden field', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_Distrito': 'no label', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_NoMpio': 'no label', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_Municipio': 'no label', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_PAN': 'no label', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_PRI': 'no label', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_PRD': 'no label', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_PVEM': 'no label', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_PT': 'no label', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_MC': 'no label', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_MORENA': 'no label', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_NACH': 'no label', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_PES': 'no label', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_RSP': 'no label', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_FxM': 'no label', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_PAN-PRD': 'no label', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_PT-MORENA-NACH': 'no label', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_PT-MORENA': 'no label', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_PT-NACH': 'no label', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_MORENA-NACH': 'no label', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_CAND. NO REG': 'no label', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_NULOS': 'no label', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_TOTAL': 'no label', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_CRUZ': 'no label', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_FRENTE': 'no label', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_MORENA_1': 'no label', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_FRENTE_1': 'no label', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_DIFF': 'no label', 'ELECCION JUAREZ AYUNTAMIENTO CON GANADOR 2021_GANADOR POR SECCION': 'header label - visible with data', });
lyr_PrimariasPublicas_3.set('fieldLabels', {'OBJECTID_1': 'hidden field', 'OBJECTID': 'hidden field', 'GlobalID': 'hidden field', 'MODALIDAD': 'hidden field', 'ID': 'hidden field', 'NOMBRE': 'header label - visible with data', 'DIRECCION': 'header label - visible with data', 'CLAVE': 'header label - visible with data', 'Turno': 'hidden field', 'TAMUJERES': 'header label - visible with data', 'TAHOMBRES': 'header label - visible with data', 'TALUMNOS': 'header label - visible with data', });
lyr_PrimariasPublicas_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});