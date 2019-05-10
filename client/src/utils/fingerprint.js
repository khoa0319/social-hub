import Fingerprint2 from'fingerprintjs2';

const calFingerprint = (cb) => {
  Fingerprint2.get(components => {
    let murmur = Fingerprint2.x64hash128(components.map(function (pair) {
      return pair.value}).join(), 31)
      cb(murmur);
  })
}

export default calFingerprint;