var wms_layers = [];


        var lyr_CitraSatelite_0 = new ol.layer.Tile({
            'title': 'Citra Satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_Jalan_line_1 = new ol.format.GeoJSON();
var features_Jalan_line_1 = format_Jalan_line_1.readFeatures(json_Jalan_line_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_line_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_line_1.addFeatures(features_Jalan_line_1);
var lyr_Jalan_line_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_line_1, 
                style: style_Jalan_line_1,
                popuplayertitle: 'Jalan_line',
                interactive: true,
                title: '<img src="styles/legend/Jalan_line_1.png" /> Jalan_line'
            });
var format_BatasWilayah_2 = new ol.format.GeoJSON();
var features_BatasWilayah_2 = format_BatasWilayah_2.readFeatures(json_BatasWilayah_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasWilayah_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasWilayah_2.addFeatures(features_BatasWilayah_2);
var lyr_BatasWilayah_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasWilayah_2, 
                style: style_BatasWilayah_2,
                popuplayertitle: 'BatasWilayah',
                interactive: true,
                title: '<img src="styles/legend/BatasWilayah_2.png" /> BatasWilayah'
            });
var format_Jogoyasan_3 = new ol.format.GeoJSON();
var features_Jogoyasan_3 = format_Jogoyasan_3.readFeatures(json_Jogoyasan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jogoyasan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jogoyasan_3.addFeatures(features_Jogoyasan_3);
var lyr_Jogoyasan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jogoyasan_3, 
                style: style_Jogoyasan_3,
                popuplayertitle: 'Jogoyasan',
                interactive: true,
                title: '<img src="styles/legend/Jogoyasan_3.png" /> Jogoyasan'
            });
var format_BC_Andong_4 = new ol.format.GeoJSON();
var features_BC_Andong_4 = format_BC_Andong_4.readFeatures(json_BC_Andong_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BC_Andong_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BC_Andong_4.addFeatures(features_BC_Andong_4);
var lyr_BC_Andong_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BC_Andong_4, 
                style: style_BC_Andong_4,
                popuplayertitle: 'BC_Andong',
                interactive: true,
                title: '<img src="styles/legend/BC_Andong_4.png" /> BC_Andong'
            });

lyr_CitraSatelite_0.setVisible(true);lyr_Jalan_line_1.setVisible(true);lyr_BatasWilayah_2.setVisible(true);lyr_Jogoyasan_3.setVisible(true);lyr_BC_Andong_4.setVisible(true);
var layersList = [lyr_CitraSatelite_0,lyr_Jalan_line_1,lyr_BatasWilayah_2,lyr_Jogoyasan_3,lyr_BC_Andong_4];
lyr_Jalan_line_1.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'surface': 'surface', 'tunnel': 'tunnel', 'railway': 'railway', 'width': 'width', 'oneway': 'oneway', 'building': 'building', 'amenity': 'amenity', 'capacity': 'capacity', 'highway': 'highway', 'smoothness': 'smoothness', 'name': 'name', 'public_tra': 'public_tra', 'layer': 'layer', 'operator': 'operator', 'barrier': 'barrier', 'bridge': 'bridge', 'aeroway': 'aeroway', 'parking': 'parking', });
lyr_BatasWilayah_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Jogoyasan_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_BC_Andong_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Alamat': 'Alamat', 'Nama_UMKM': 'Nama_UMKM', 'Nama_Pemil': 'Nama_Pemil', });
lyr_Jalan_line_1.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'surface': 'TextEdit', 'tunnel': 'TextEdit', 'railway': 'TextEdit', 'width': 'TextEdit', 'oneway': 'TextEdit', 'building': 'TextEdit', 'amenity': 'TextEdit', 'capacity': 'TextEdit', 'highway': 'TextEdit', 'smoothness': 'TextEdit', 'name': 'TextEdit', 'public_tra': 'TextEdit', 'layer': 'TextEdit', 'operator': 'TextEdit', 'barrier': 'TextEdit', 'bridge': 'TextEdit', 'aeroway': 'TextEdit', 'parking': 'TextEdit', });
lyr_BatasWilayah_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Jogoyasan_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_BC_Andong_4.set('fieldImages', {'OBJECTID': '', 'Alamat': '', 'Nama_UMKM': '', 'Nama_Pemil': '', });
lyr_Jalan_line_1.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'surface': 'no label', 'tunnel': 'no label', 'railway': 'no label', 'width': 'no label', 'oneway': 'no label', 'building': 'no label', 'amenity': 'no label', 'capacity': 'no label', 'highway': 'no label', 'smoothness': 'no label', 'name': 'no label', 'public_tra': 'no label', 'layer': 'no label', 'operator': 'no label', 'barrier': 'no label', 'bridge': 'no label', 'aeroway': 'no label', 'parking': 'no label', });
lyr_BatasWilayah_2.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Jogoyasan_3.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'inline label - visible with data', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_BC_Andong_4.set('fieldLabels', {'OBJECTID': 'no label', 'Alamat': 'inline label - visible with data', 'Nama_UMKM': 'inline label - visible with data', 'Nama_Pemil': 'inline label - visible with data', });
lyr_BC_Andong_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});