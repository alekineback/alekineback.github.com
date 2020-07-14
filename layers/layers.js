var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_INFO_CENSO_1 = new ol.format.GeoJSON();
var features_INFO_CENSO_1 = format_INFO_CENSO_1.readFeatures(json_INFO_CENSO_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INFO_CENSO_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INFO_CENSO_1.addFeatures(features_INFO_CENSO_1);
var lyr_INFO_CENSO_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_INFO_CENSO_1, 
                style: style_INFO_CENSO_1,
                interactive: true,
                title: '<img src="styles/legend/INFO_CENSO_1.png" /> INFO_CENSO'
            });
var format_del_lima_callao_fondo_2 = new ol.format.GeoJSON();
var features_del_lima_callao_fondo_2 = format_del_lima_callao_fondo_2.readFeatures(json_del_lima_callao_fondo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_del_lima_callao_fondo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_del_lima_callao_fondo_2.addFeatures(features_del_lima_callao_fondo_2);
var lyr_del_lima_callao_fondo_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_del_lima_callao_fondo_2, 
                style: style_del_lima_callao_fondo_2,
                interactive: true,
                title: '<img src="styles/legend/del_lima_callao_fondo_2.png" /> del_lima_callao_fondo'
            });
var format_del_lima_callao_3 = new ol.format.GeoJSON();
var features_del_lima_callao_3 = format_del_lima_callao_3.readFeatures(json_del_lima_callao_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_del_lima_callao_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_del_lima_callao_3.addFeatures(features_del_lima_callao_3);
var lyr_del_lima_callao_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_del_lima_callao_3, 
                style: style_del_lima_callao_3,
                interactive: true,
                title: '<img src="styles/legend/del_lima_callao_3.png" /> del_lima_callao'
            });
var format_del_lima_centro_fondo_4 = new ol.format.GeoJSON();
var features_del_lima_centro_fondo_4 = format_del_lima_centro_fondo_4.readFeatures(json_del_lima_centro_fondo_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_del_lima_centro_fondo_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_del_lima_centro_fondo_4.addFeatures(features_del_lima_centro_fondo_4);
var lyr_del_lima_centro_fondo_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_del_lima_centro_fondo_4, 
                style: style_del_lima_centro_fondo_4,
                interactive: true,
                title: '<img src="styles/legend/del_lima_centro_fondo_4.png" /> del_lima_centro_fondo'
            });
var format_del_lima_centro_5 = new ol.format.GeoJSON();
var features_del_lima_centro_5 = format_del_lima_centro_5.readFeatures(json_del_lima_centro_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_del_lima_centro_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_del_lima_centro_5.addFeatures(features_del_lima_centro_5);
var lyr_del_lima_centro_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_del_lima_centro_5, 
                style: style_del_lima_centro_5,
                interactive: true,
                title: '<img src="styles/legend/del_lima_centro_5.png" /> del_lima_centro'
            });
var format_del_villa_el_salvador_fondo_6 = new ol.format.GeoJSON();
var features_del_villa_el_salvador_fondo_6 = format_del_villa_el_salvador_fondo_6.readFeatures(json_del_villa_el_salvador_fondo_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_del_villa_el_salvador_fondo_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_del_villa_el_salvador_fondo_6.addFeatures(features_del_villa_el_salvador_fondo_6);
var lyr_del_villa_el_salvador_fondo_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_del_villa_el_salvador_fondo_6, 
                style: style_del_villa_el_salvador_fondo_6,
                interactive: true,
                title: '<img src="styles/legend/del_villa_el_salvador_fondo_6.png" /> del_villa_el_salvador_fondo'
            });
var format_del_villa_el_salvador_7 = new ol.format.GeoJSON();
var features_del_villa_el_salvador_7 = format_del_villa_el_salvador_7.readFeatures(json_del_villa_el_salvador_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_del_villa_el_salvador_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_del_villa_el_salvador_7.addFeatures(features_del_villa_el_salvador_7);
var lyr_del_villa_el_salvador_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_del_villa_el_salvador_7, 
                style: style_del_villa_el_salvador_7,
                interactive: true,
                title: '<img src="styles/legend/del_villa_el_salvador_7.png" /> del_villa_el_salvador'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_INFO_CENSO_1.setVisible(true);lyr_del_lima_callao_fondo_2.setVisible(true);lyr_del_lima_callao_3.setVisible(true);lyr_del_lima_centro_fondo_4.setVisible(true);lyr_del_lima_centro_5.setVisible(true);lyr_del_villa_el_salvador_fondo_6.setVisible(true);lyr_del_villa_el_salvador_7.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_INFO_CENSO_1,lyr_del_lima_callao_fondo_2,lyr_del_lima_callao_3,lyr_del_lima_centro_fondo_4,lyr_del_lima_centro_5,lyr_del_villa_el_salvador_fondo_6,lyr_del_villa_el_salvador_7];
lyr_INFO_CENSO_1.set('fieldAliases', {'CLIENTE': 'CLIENTE', 'NOMBCOMP1': 'NOMBCOMP1', 'TELEFONO': 'TELEFONO', 'DOMICILIO': 'DOMICILIO', 'DESCRIP': 'DESCRIP', 'COORDX': 'COORDX', 'COORDY': 'COORDY', });
lyr_del_lima_callao_fondo_2.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'descripci_': 'descripci_', 'OBJECTID': 'OBJECTID', 'MODULO': 'MODULO', 'COMPANIA': 'COMPANIA', 'DESCOMPAN': 'DESCOMPAN', 'SUCURSAL': 'SUCURSAL', 'DESUCURSAL': 'DESUCURSAL', 'ZONA': 'ZONA', 'RUTA': 'RUTA', 'VD': 'VD', 'NOMBRE_VD': 'NOMBRE_VD', 'DV': 'DV', 'CLIENTES': 'CLIENTES', });
lyr_del_lima_callao_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'descripci_': 'descripci_', 'OBJECTID': 'OBJECTID', 'MODULO': 'MODULO', 'COMPANIA': 'COMPANIA', 'DESCOMPAN': 'DESCOMPAN', 'SUCURSAL': 'SUCURSAL', 'DESUCURSAL': 'DESUCURSAL', 'ZONA': 'ZONA', 'RUTA': 'RUTA', 'VD': 'VD', 'NOMBRE_VD': 'NOMBRE_VD', 'DV': 'DV', 'CLIENTES': 'CLIENTES', });
lyr_del_lima_centro_fondo_4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'descripci_': 'descripci_', 'OBJECTID': 'OBJECTID', 'MODULO': 'MODULO', 'COMPANIA': 'COMPANIA', 'DESCOMPAN': 'DESCOMPAN', 'SUCURSAL': 'SUCURSAL', 'DESUCURSAL': 'DESUCURSAL', 'ZONA': 'ZONA', 'RUTA': 'RUTA', 'VD': 'VD', 'NOMBRE_VD': 'NOMBRE_VD', 'DV': 'DV', 'CLIENTES': 'CLIENTES', });
lyr_del_lima_centro_5.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'descripci_': 'descripci_', 'OBJECTID': 'OBJECTID', 'MODULO': 'MODULO', 'COMPANIA': 'COMPANIA', 'DESCOMPAN': 'DESCOMPAN', 'SUCURSAL': 'SUCURSAL', 'DESUCURSAL': 'DESUCURSAL', 'ZONA': 'ZONA', 'RUTA': 'RUTA', 'VD': 'VD', 'NOMBRE_VD': 'NOMBRE_VD', 'DV': 'DV', 'CLIENTES': 'CLIENTES', });
lyr_del_villa_el_salvador_fondo_6.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'descripci_': 'descripci_', 'OBJECTID': 'OBJECTID', 'MODULO': 'MODULO', 'COMPANIA': 'COMPANIA', 'DESCOMPAN': 'DESCOMPAN', 'SUCURSAL': 'SUCURSAL', 'DESUCURSAL': 'DESUCURSAL', 'ZONA': 'ZONA', 'RUTA': 'RUTA', 'VD': 'VD', 'NOMBRE_VD': 'NOMBRE_VD', 'DV': 'DV', 'CLIENTES': 'CLIENTES', });
lyr_del_villa_el_salvador_7.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'descripci_': 'descripci_', 'OBJECTID': 'OBJECTID', 'MODULO': 'MODULO', 'COMPANIA': 'COMPANIA', 'DESCOMPAN': 'DESCOMPAN', 'SUCURSAL': 'SUCURSAL', 'DESUCURSAL': 'DESUCURSAL', 'ZONA': 'ZONA', 'RUTA': 'RUTA', 'VD': 'VD', 'NOMBRE_VD': 'NOMBRE_VD', 'DV': 'DV', 'CLIENTES': 'CLIENTES', });
lyr_INFO_CENSO_1.set('fieldImages', {'CLIENTE': 'TextEdit', 'NOMBCOMP1': 'TextEdit', 'TELEFONO': 'TextEdit', 'DOMICILIO': 'TextEdit', 'DESCRIP': 'TextEdit', 'COORDX': 'TextEdit', 'COORDY': 'TextEdit', });
lyr_del_lima_callao_fondo_2.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'descripci_': 'TextEdit', 'OBJECTID': 'TextEdit', 'MODULO': 'TextEdit', 'COMPANIA': 'TextEdit', 'DESCOMPAN': 'TextEdit', 'SUCURSAL': 'TextEdit', 'DESUCURSAL': 'TextEdit', 'ZONA': 'TextEdit', 'RUTA': 'TextEdit', 'VD': 'TextEdit', 'NOMBRE_VD': 'TextEdit', 'DV': 'TextEdit', 'CLIENTES': 'TextEdit', });
lyr_del_lima_callao_3.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'descripci_': 'TextEdit', 'OBJECTID': 'TextEdit', 'MODULO': 'TextEdit', 'COMPANIA': 'TextEdit', 'DESCOMPAN': 'TextEdit', 'SUCURSAL': 'TextEdit', 'DESUCURSAL': 'TextEdit', 'ZONA': 'TextEdit', 'RUTA': 'TextEdit', 'VD': 'TextEdit', 'NOMBRE_VD': 'TextEdit', 'DV': 'TextEdit', 'CLIENTES': 'TextEdit', });
lyr_del_lima_centro_fondo_4.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'descripci_': 'TextEdit', 'OBJECTID': 'TextEdit', 'MODULO': 'TextEdit', 'COMPANIA': 'TextEdit', 'DESCOMPAN': 'TextEdit', 'SUCURSAL': 'TextEdit', 'DESUCURSAL': 'TextEdit', 'ZONA': 'TextEdit', 'RUTA': 'TextEdit', 'VD': 'TextEdit', 'NOMBRE_VD': 'TextEdit', 'DV': 'TextEdit', 'CLIENTES': 'TextEdit', });
lyr_del_lima_centro_5.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'descripci_': 'TextEdit', 'OBJECTID': 'TextEdit', 'MODULO': 'TextEdit', 'COMPANIA': 'TextEdit', 'DESCOMPAN': 'TextEdit', 'SUCURSAL': 'TextEdit', 'DESUCURSAL': 'TextEdit', 'ZONA': 'TextEdit', 'RUTA': 'TextEdit', 'VD': 'TextEdit', 'NOMBRE_VD': 'TextEdit', 'DV': 'TextEdit', 'CLIENTES': 'TextEdit', });
lyr_del_villa_el_salvador_fondo_6.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'descripci_': 'TextEdit', 'OBJECTID': 'TextEdit', 'MODULO': 'TextEdit', 'COMPANIA': 'TextEdit', 'DESCOMPAN': 'TextEdit', 'SUCURSAL': 'TextEdit', 'DESUCURSAL': 'TextEdit', 'ZONA': 'TextEdit', 'RUTA': 'TextEdit', 'VD': 'TextEdit', 'NOMBRE_VD': 'TextEdit', 'DV': 'TextEdit', 'CLIENTES': 'TextEdit', });
lyr_del_villa_el_salvador_7.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'descripci_': 'TextEdit', 'OBJECTID': 'TextEdit', 'MODULO': 'TextEdit', 'COMPANIA': 'TextEdit', 'DESCOMPAN': 'TextEdit', 'SUCURSAL': 'TextEdit', 'DESUCURSAL': 'TextEdit', 'ZONA': 'TextEdit', 'RUTA': 'TextEdit', 'VD': 'TextEdit', 'NOMBRE_VD': 'TextEdit', 'DV': 'TextEdit', 'CLIENTES': 'TextEdit', });
lyr_INFO_CENSO_1.set('fieldLabels', {'CLIENTE': 'no label', 'NOMBCOMP1': 'no label', 'TELEFONO': 'no label', 'DOMICILIO': 'no label', 'DESCRIP': 'no label', 'COORDX': 'no label', 'COORDY': 'no label', });
lyr_del_lima_callao_fondo_2.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'descripci_': 'no label', 'OBJECTID': 'no label', 'MODULO': 'no label', 'COMPANIA': 'no label', 'DESCOMPAN': 'no label', 'SUCURSAL': 'no label', 'DESUCURSAL': 'no label', 'ZONA': 'no label', 'RUTA': 'no label', 'VD': 'no label', 'NOMBRE_VD': 'no label', 'DV': 'no label', 'CLIENTES': 'no label', });
lyr_del_lima_callao_3.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'descripci_': 'no label', 'OBJECTID': 'no label', 'MODULO': 'no label', 'COMPANIA': 'no label', 'DESCOMPAN': 'no label', 'SUCURSAL': 'no label', 'DESUCURSAL': 'no label', 'ZONA': 'no label', 'RUTA': 'no label', 'VD': 'no label', 'NOMBRE_VD': 'no label', 'DV': 'no label', 'CLIENTES': 'no label', });
lyr_del_lima_centro_fondo_4.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'descripci_': 'no label', 'OBJECTID': 'no label', 'MODULO': 'no label', 'COMPANIA': 'no label', 'DESCOMPAN': 'no label', 'SUCURSAL': 'no label', 'DESUCURSAL': 'no label', 'ZONA': 'no label', 'RUTA': 'no label', 'VD': 'no label', 'NOMBRE_VD': 'no label', 'DV': 'no label', 'CLIENTES': 'no label', });
lyr_del_lima_centro_5.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'descripci_': 'no label', 'OBJECTID': 'no label', 'MODULO': 'no label', 'COMPANIA': 'no label', 'DESCOMPAN': 'no label', 'SUCURSAL': 'no label', 'DESUCURSAL': 'no label', 'ZONA': 'no label', 'RUTA': 'no label', 'VD': 'no label', 'NOMBRE_VD': 'no label', 'DV': 'no label', 'CLIENTES': 'no label', });
lyr_del_villa_el_salvador_fondo_6.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'descripci_': 'no label', 'OBJECTID': 'no label', 'MODULO': 'no label', 'COMPANIA': 'no label', 'DESCOMPAN': 'no label', 'SUCURSAL': 'no label', 'DESUCURSAL': 'no label', 'ZONA': 'no label', 'RUTA': 'no label', 'VD': 'no label', 'NOMBRE_VD': 'no label', 'DV': 'no label', 'CLIENTES': 'no label', });
lyr_del_villa_el_salvador_7.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'descripci_': 'no label', 'OBJECTID': 'no label', 'MODULO': 'no label', 'COMPANIA': 'no label', 'DESCOMPAN': 'no label', 'SUCURSAL': 'no label', 'DESUCURSAL': 'no label', 'ZONA': 'no label', 'RUTA': 'no label', 'VD': 'no label', 'NOMBRE_VD': 'no label', 'DV': 'no label', 'CLIENTES': 'no label', });
lyr_del_villa_el_salvador_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});