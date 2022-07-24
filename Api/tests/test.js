const { assert } = require('chai');
const compareDates = require('../helpers');
const testeJson = require('../mock/teste')

describe("Helpers", () => {
  it("Se a função compareDates ordena as datas corretamente com o método sort", () => {
    const expectedResponse = [
      '2013-10-25T13:04:51Z', '2013-10-25T15:18:07Z', '2014-01-13T11:38:38Z', '2014-01-28T10:31:10Z', '2014-03-28T20:24:31Z', '2015-01-23T19:19:17Z', '2015-03-14T13:56:32Z', '2015-12-10T14:58:48Z', '2015-12-28T11:30:55Z', '2016-01-06T15:06:25Z', '2016-03-23T22:13:37Z', '2017-06-15T12:32:37Z', '2017-06-30T12:20:58Z', '2017-09-25T20:23:09Z', '2017-10-05T17:54:54Z', '2017-11-29T19:19:18Z', '2018-03-30T18:38:55Z', '2018-04-24T01:05:21Z'];
    const actualArray = testeJson.sort(compareDates).map((data) => data.created_at);
    assert.deepEqual(actualArray, expectedResponse)
  });
});
