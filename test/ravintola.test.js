import { describe, expect, it } from 'vitest';
import ravintola from '../teht/ravintolateht/ravintola';

/*describe('LaskeLasku', function () {
  it('palauttaa summan', () => {
    const ottiAlkuruoan = true;
    const ottiJalkiruoan = true;
    const ottiJuoman = true;

    const tulos = ravintola.laskeLasku(
      ottiAlkuruoan,
      ottiJalkiruoan,
      ottiJuoman,
    );

    expect(tulos).toBe(17);
  });
});*/

describe('tarkistetaan löytyykö palautusarvo valitsemasta taulukosta', function () {
  it('palauttaa palautusarvon', function () {
    const valittuTaulukko = ravintola.alkuruoat;

    const tulos = ravintola.palautaTaulukonSatunnainenArvo(valittuTaulukko);

    expect(valittuTaulukko.includes(tulos)).toBe(true);
  });
});

describe('tarkistetaan että syoRavintolassa funktio palauttaa oikean tyyppisen arvon', function () {
  it('toimii kun asiakkaiden määrä on pienempi kuin paikkojen määrä', function () {
    const tulos = ravintola.syoRavintolassa(3);

    expect(Array.isArray(tulos)).toBe(true);
  });
});

it('ei päästä asiakkaita sisään jos paikat loppuvat', function () {
  const tulos = ravintola.syoRavintolassa(10);
  expect(Array.isArray(tulos)).toBe(true);
});
it('ei päästä asiakkaita sisään jos paikat loppuvat', function () {
  ravintola.syoRavintolassa(6);
  expect(() => {
    ravintola.syoRavintolassa();
  }).toThrow('Ei tarpeeksi vapaita paikkoja');
});

describe('laskeLasku palauttaa oikean summan', function () {
  (it('palauttaa summan 12'),
    function () {
      const tilaus = [
        {
          ruoka: 'Leipä',
          hinta: 3,
        },
        { ruoka: 'Kalakeitto', hinta: 7 },
        { ruoka: 'Pulla', hinta: 2 },
      ];

      const tulos = ravintola.laskeLasku(tilaus);

      expect(tulos).toBe(12);
    });
});
