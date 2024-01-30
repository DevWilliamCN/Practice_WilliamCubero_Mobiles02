import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {style_01} from '../styles/style_01';

const data = [
    {
     name: 'Aries',
     dateRange: '21 marzo - 19 abril',
     elemen: 'Fuego',
     celestialBody: 'Marte',
     gemstone: 'Diamante',
      imagen: require('../imgs/logos/03_Aries.png'),
    },
    {
        name: 'Tauro',
        dateRange: '20 abril - 20 mayo',
        elemen: 'Tierra',
        celestialBody: 'Venus',
        gemstone: 'Esmeralda',
        imagen: require('../imgs/logos/04_Tauro.png'),
    },
    {
        name: 'Géminis',
        dateRange: '21 mayo - 20 junio',
        elemen: 'Aire',
        celestialBody: 'Mercurio',
        gemstone: 'Ágata',
      imagen: require('../imgs/logos/05_Geminis.png'),
    },
    {
        name:'Cáncer',
        dateRange: '21 junio - 22 julio',
        elemen: 'Agua',
        celestialBody: 'Luna',
        gemstone: 'Perla',
      imagen: require('../imgs/logos/06_Cancer.png'),
    },
    {
        name: 'Leo',
        dateRange: '23 julio - 22 agosto',
        elemen: 'Fuego',
        celestialBody: 'Sol',
        gemstone: 'Rubí',
      imagen: require('../imgs/logos/07_Leo.png'),
    },
    {
        name: 'Virgo',
        dateRange: '23 agosto - 22 septiembre',
        elemen: 'Tierra',
        celestialBody: 'Mercurio',
        gemstone: 'Jaspe',
      imagen: require('../imgs/logos/08_Virgo.png'),
    },
    {
        name: 'Libra',
        dateRange: '23 septiembre - 22 octubre',
        elemen: 'Aire',
        celestialBody: 'Venus',
        gemstone: 'Zafiro',
      imagen: require('../imgs/logos/09_Libra.png'),
    },
    {
        name: 'Escorpio',
        dateRange: '23 octubre - 21 noviembre',
        elemen: 'Agua',
        celestialBody: 'Plutón',
        gemstone: 'Ópalo',
      imagen: require('../imgs/logos/10_Escorpio.png'),
    },
    {
        name: 'Sagitario',
        dateRange: '22 noviembre - 21 diciembre',
        elemen: 'Fuego',
        celestialBody: 'Júpiter',
        gemstone: 'Topacio',
      imagen: require('../imgs/logos/11_Sagitario.png'),
    },
    {
        name: 'Capricornio',
        dateRange: '22 diciembre - 19 enero',
        elemen: 'Tierra',
        celestialBody: 'Saturno',
        gemstone: 'Ónice',
      imagen: require('../imgs/logos/12_Capricornio.png'),
    },
    {
        name: 'Acuario',
        dateRange: '20 enero - 18 febrero',
        elemen: 'Aire',
        celestialBody: 'Urano',
        gemstone: 'Amatista',
      imagen: require('../imgs/logos/01_Acuario.png'),
    },
    {
        name: 'Piscis',
        dateRange: '19 febrero - 20 marzo',
        elemen: 'Agua',
        celestialBody: 'Neptuno',
        gemstone: 'Aguamarina',
      imagen: require('../imgs/logos/02_Pisis.png'),
    },
  ];
const Index = () => {
  return (
    <View>
      <View style={style_01.divHeader}>
      <Image source={require('../imgs/logos/logo_universidad.png')} />
      </View>

      <View style={style_01.divMain}>
        <Text style={style_01.h1}>Practice_01</Text>
        <Text style={style_01.p1}>
        Utilizando el ejemplo #2 de React Native, visto en clases, cree un nuevo proyecto que utlice las imagénes del Zodiaco visto el cuatrimestre pasado en el curso Web 3, de forma que:

        Incorpore todos los datos relacionados con cada imagen:
        El nombre signo zodiacal
        Los diás del año que abarca
        El elemento al que pertenece el signo. [ Fuego | Tierra | Aire | Agua ]
        El astro celeste al que está asociado.
        La piedra preciosa que ostenta.
        Recuerde agregar la imagen a la izquierda de los datos.
        Considere además que las imágenes deben contenerse localmente hasta ver conexiones remotas con la aplicación React.
        </Text>

        <ScrollView style={{marginTop: 8}}>{data.map(item => (
            <View style={style_01.tarjeta} key={item.signo}>
              <View style={style_01.imageContainer}>
              <Image source={item.imagen} style={style_01.zodiacImage}/>
              </View>

              <View style={style_01.textContainer}>
                <Text style={style_01.zodiacText}>Signo: {item.name}</Text>
                <Text style={style_01.zodiacText}>Días: {item.dateRange}</Text>
                <Text style={style_01.zodiacText}>
                  Elemento: {item.element}
                </Text>
                <Text style={style_01.zodiacText}>Astro: {item.celestialBody}</Text>
                <Text style={style_01.zodiacText}>Piedra: {item.gemstone}</Text>
              </View>
            </View>
          ))}
        </ScrollView>





      
      </View>

      <View style={style_01.divFooter}>
        <Text style={style_01.textFooter}>
          Carrera de Tecnologías de Información
        </Text>
        <Text style={style_01.textFooter}>Sede del Pacífico</Text>
      </View>
    </View>
  );
};

export default Index;
