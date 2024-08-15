const kdMath = {
  slope: function(x1, y1, x2, y2) {
    if (x1 === x2) {
      throw new Error("The x-values must be different to calculate the slope.");
    }
    return (y2 - y1) / (x2 - x1);
  }
};

module.exports = kdMath;
