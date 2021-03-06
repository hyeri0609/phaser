var MathSmoothStep = require('../math/SmoothStep');

/**
 * [description]
 *
 * @function Phaser.Actions.SmoothStep
 * @since 3.0.0
 * 
 * @param {array} items - An array of Game Objects. The contents of this array are updated by this Action.
 * @param {string} property - [description]
 * @param {number} min - [description]
 * @param {number} max - [description]
 * @param {number} inc - [description]
 * @return {array} The array of Game Objects that was passed to this Action.
 */
var SmoothStep = function (items, property, min, max, inc)
{
    if (inc === undefined) { inc = false; }

    var step = Math.abs(max - min) / items.length;
    var i;

    if (inc)
    {
        for (i = 0; i < items.length; i++)
        {
            items[i][property] += MathSmoothStep(i * step, min, max);
        }
    }
    else
    {
        for (i = 0; i < items.length; i++)
        {
            items[i][property] = MathSmoothStep(i * step, min, max);
        }
    }

    return items;
};

module.exports = SmoothStep;
