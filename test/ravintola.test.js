import { describe, expect, it } from 'vitest';
import ravintola from '../teht/ravintolateht/ravintola';

describe('LaskeLasku', function () {
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
});

describe('tarkistetaan löytyykö palautusarvo valitsemasta taulukosta', function () {
  it('palauttaa palautusarvon', function () {
    const valittuTaulukko = ravintola.alkuruoat;

    const tulos = ravintola.palautaTaulukonSatunnainenArvo(valittuTaulukko);

    expect(valittuTaulukko.includes(tulos)).toBe(true);
  });
});

describe('tarkistetaan että syoRavintolassa funktio palauttaa oikean tyyppisen arvon', function () {
  it('palauttaa taulukon', function () {
    const tulos = ravintola.syoRavintolassa(3);

    expect(Array.isArray(tulos)).toBe(true);
  });
});
