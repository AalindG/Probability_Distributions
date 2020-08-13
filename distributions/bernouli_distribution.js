/**
 * Bernouli Distribution strictly works on events with two possibilities
 * highest one is assigned the probability `p`
 * @param {Integer} p - probability of one of the two events
 * @param {string} event1 - probability of one of the two events
 * @param {string} event2 - probability of one of the two events
 */
const bernouliDistributionExpectation = (p, event1, event2) => {
  return {
    event1: p - 1,
    event2: p,
  };
};

const varianceFormula = (mean, probability1, probability2, event1Variable, event2Variable) => {
  // Variance(sqr) = (event1Var - p)(sqr).(Prob(event1)) + (event2Var - p)(sqr).(Prob(event2))
  const variance = Math.pow((event1Variable - mean), 2) * (probability1) +
    Math.pow((event2Variable - mean), 2) * (probability2);
  return variance;
};

const standardVariation = _variance => Math.sqrt(_variance);

const mean = 0.6,
  probability1 = 0.6,
  probability2 = 0.4,
  event1 = 1,
  event2 = 0;

console.log((varianceFormula(mean, probability1, probability2, event1, event2)));
console.log(standardVariation(varianceFormula(mean, probability1, probability2, event1, event2)));